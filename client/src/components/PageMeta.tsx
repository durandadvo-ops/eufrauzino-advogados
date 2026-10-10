import { useEffect } from "react";
import { getPageMetadata } from "@/data/site";

function setMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`${selector}[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
}

export default function PageMeta({ path = "/" }: { path?: string }) {
  useEffect(() => {
    const meta = getPageMetadata(path);

    document.title = meta.title;
    document.documentElement.lang = "pt-BR";

    setMeta("meta", "name", "description", meta.description);
    setMeta("meta", "name", "robots", meta.robots);
    setMeta("meta", "property", "og:title", meta.title);
    setMeta("meta", "property", "og:description", meta.description);
    setMeta("meta", "property", "og:image", meta.image);
    setMeta("meta", "name", "twitter:title", meta.title);
    setMeta("meta", "name", "twitter:description", meta.description);
    setMeta("meta", "name", "twitter:image", meta.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (meta.canonical) {
      setMeta("meta", "property", "og:url", meta.canonical);
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = meta.canonical;
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [path]);

  return null;
}
