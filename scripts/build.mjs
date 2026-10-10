import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const project = path.resolve(import.meta.dirname, "..");
const output = path.join(project, "dist/public");
const serverOutput = path.join(project, "dist/server");

await build();
await build({
  build: {
    ssr: path.join(project, "client/src/entry-server.tsx"),
    outDir: serverOutput,
    emptyOutDir: true,
    copyPublicDir: false,
  },
});

const { paths, render } = await import(
  pathToFileURL(path.join(serverOutput, "entry-server.js")).href
);
const template = await readFile(path.join(output, "index.html"), "utf8");

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    character =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character]
  );
}

for (const route of [...paths, "/404"]) {
  const { html, metadata } = render(route);
  let document = template
    .replace("<!--app-html-->", html)
    .replace(
      /<title>.*?<\/title>/,
      `<title>${escapeHtml(metadata.title)}</title>`
    );
  const metas = {
    'name="description"': metadata.description,
    'name="robots"': metadata.robots,
    'property="og:title"': metadata.title,
    'property="og:description"': metadata.description,
    'property="og:url"': metadata.canonical,
    'property="og:image"': metadata.image,
    'name="twitter:title"': metadata.title,
    'name="twitter:description"': metadata.description,
    'name="twitter:image"': metadata.image,
  };
  for (const [selector, content] of Object.entries(metas)) {
    const pattern = new RegExp(`<meta ${selector} content="[^"]*"\\s*/?>`);
    document = document.replace(
      pattern,
      content ? `<meta ${selector} content="${escapeHtml(content)}" />` : ""
    );
  }
  document = document.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    metadata.canonical
      ? `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />`
      : ""
  );
  const filename =
    route === "/404"
      ? path.join(output, "404.html")
      : path.join(output, route, "index.html");
  await mkdir(path.dirname(filename), { recursive: true });
  await writeFile(filename, document);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(route => `  <url><loc>https://eufrauzinoadvogados.com${route}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(path.join(output, "sitemap.xml"), sitemap);
await writeFile(path.join(output, ".nojekyll"), "");
await rm(serverOutput, { recursive: true, force: true });
console.log(`Geradas ${paths.length} páginas estáticas e uma página 404.`);
