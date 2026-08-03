import { useEffect } from "react";

const SITE_URL = "https://eufrauzinoadvogados.com";
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.webp`;

type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

function setMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`${selector}[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
}

export default function PageMeta({ title, description, path = "/", noIndex = false }: PageMetaProps) {
  useEffect(() => {
    const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const fullTitle = title.includes("Eufrauzino") ? title : `${title} | Eufrauzino Advogados`;

    document.title = fullTitle;
    document.documentElement.lang = "pt-BR";

    setMeta("meta", "name", "description", description);
    setMeta("meta", "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("meta", "property", "og:title", fullTitle);
    setMeta("meta", "property", "og:description", description);
    setMeta("meta", "property", "og:url", canonicalUrl);
    setMeta("meta", "property", "og:image", DEFAULT_IMAGE);
    setMeta("meta", "name", "twitter:title", fullTitle);
    setMeta("meta", "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, noIndex, path, title]);

  return null;
}
