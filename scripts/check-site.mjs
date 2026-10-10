import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve(import.meta.dirname, "../dist/public");
const origin = "https://eufrauzinoadvogados.com";
const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  match => new URL(match[1])
);
assert.equal(urls.length, 6, "O sitemap deve conter as seis páginas públicas.");

function tags(html) {
  return [...html.matchAll(/<([a-z][a-z0-9-]*)\b([^>]*?)>/gi)].map(match => ({
    name: match[1].toLowerCase(),
    attributes: Object.fromEntries(
      [...match[2].matchAll(/([\w:-]+)(?:="([^"]*)")?/g)].map(attribute => [
        attribute[1].toLowerCase(),
        attribute[2] ?? "",
      ])
    ),
  }));
}

const documents = new Map();
for (const url of urls) {
  assert.equal(url.origin, origin);
  assert.ok(url.pathname.endsWith("/"), `URL canônica sem barra final: ${url}`);
  const html = await readFile(
    path.join(output, url.pathname, "index.html"),
    "utf8"
  );
  const elements = tags(html);
  documents.set(url.pathname, { html, elements });
  assert.equal(
    elements.filter(tag => tag.name === "h1").length,
    1,
    `Título principal ausente ou duplicado: ${url}`
  );
  assert.ok(
    !html.includes("<!--app-html-->"),
    `Conteúdo não renderizado: ${url}`
  );
  assert.ok(
    !html.includes("O endereço informado não existe"),
    `Página válida renderizada como 404: ${url}`
  );
  assert.equal(
    elements.find(
      tag => tag.name === "link" && tag.attributes.rel === "canonical"
    )?.attributes.href,
    url.href
  );
  assert.equal(
    elements.find(tag => tag.attributes.property === "og:url")?.attributes
      .content,
    url.href
  );
  assert.equal(
    elements.find(tag => tag.attributes.name === "robots")?.attributes.content,
    "index, follow"
  );
  const description = elements.find(
    tag => tag.attributes.name === "description"
  )?.attributes.content;
  assert.ok(
    description && description.length > 40,
    `Descrição ausente: ${url}`
  );
  assert.equal(
    elements.find(tag => tag.attributes.property === "og:description")
      ?.attributes.content,
    description
  );
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
  ))
    JSON.parse(match[1]);
}

const titles = [...documents.values()].map(
  ({ html }) => /<title>(.*?)<\/title>/.exec(html)?.[1]
);
assert.equal(
  new Set(titles).size,
  urls.length,
  "As páginas precisam de títulos próprios."
);

for (const [route, { elements }] of documents) {
  const ids = elements
    .filter(tag => tag.attributes.id)
    .map(tag => tag.attributes.id);
  assert.equal(ids.length, new Set(ids).size, `IDs duplicados: ${route}`);
  for (const tag of elements) {
    for (const attribute of ["src", "href"]) {
      const value = tag.attributes[attribute];
      if (!value || !["a", "img", "script", "link"].includes(tag.name))
        continue;
      const url = new URL(value.replaceAll("&amp;", "&"), `${origin}${route}`);
      if (url.origin !== origin) continue;
      if (tag.name === "a") {
        const destination = documents.get(url.pathname);
        assert.ok(
          destination,
          `Link para página inexistente: ${route} -> ${url.pathname}`
        );
        if (url.hash)
          assert.ok(
            destination.elements.some(
              element =>
                element.attributes.id === decodeURIComponent(url.hash.slice(1))
            ),
            `Âncora inexistente: ${url}`
          );
      } else {
        await access(path.join(output, url.pathname));
      }
    }
    for (const candidate of (
      tag.attributes.srcset ??
      tag.attributes.imagesrcset ??
      ""
    )
      .split(",")
      .filter(Boolean)) {
      const value = candidate.trim().split(/\s+/)[0];
      const url = new URL(value, origin);
      if (url.origin === origin) await access(path.join(output, url.pathname));
    }
  }
}

const notFound = await readFile(path.join(output, "404.html"), "utf8");
assert.ok(
  notFound.includes("O endereço informado não existe"),
  "A página 404 deve ter conteúdo próprio."
);
assert.ok(
  /name="robots" content="noindex, follow"/.test(notFound),
  "A página 404 não deve ser indexada."
);
assert.ok(
  !/rel="canonical"/.test(notFound),
  "A página 404 não deve apontar para uma página válida."
);
const home = documents.get("/").html;
assert.ok(
  home.includes("Continuar no WhatsApp") && home.includes("revisar e enviar")
);
for (const name of ["jurandi", "thiago", "victoria", "dalton", "dinara"]) {
  const file = await readFile(path.join(output, `assets/${name}.webp`));
  assert.equal(
    file.toString("ascii", 0, 4),
    "RIFF",
    `Imagem com formato errado: ${name}`
  );
  assert.equal(
    file.toString("ascii", 8, 12),
    "WEBP",
    `Imagem com formato errado: ${name}`
  );
}
const facade = await readFile(
  path.join(output, "assets/fachada-escritorio.webp")
);
assert.ok(
  facade.length < 200_000,
  "A imagem da fachada ficou acima do tamanho esperado."
);
const font = tags(home).find(tag =>
  tag.attributes.href?.startsWith("https://fonts.googleapis.com/css2")
);
assert.ok(
  font && !font.attributes.href.includes("0,0,600"),
  "URL das fontes inválida."
);
await access(path.join(output, ".nojekyll"));
console.log(
  "Verificadas seis páginas, metadados, links, âncoras, imagens e a página 404."
);
