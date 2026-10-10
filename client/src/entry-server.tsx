import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { getPageMetadata, normalizePath, pages } from "./data/site";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

export const paths = pages.map(page => page.path);

const components = {
  "/": Home,
  "/servicos/": Services,
  "/equipe/": Team,
  "/artigos/": Articles,
  "/sobre/": About,
  "/eventos/": Events,
};

export function render(path: string) {
  const Page =
    components[normalizePath(path) as keyof typeof components] ?? NotFound;
  return {
    html: renderToString(
      <Router ssrPath={path}>
        <App Page={Page} />
      </Router>
    ),
    metadata: getPageMetadata(path),
  };
}
