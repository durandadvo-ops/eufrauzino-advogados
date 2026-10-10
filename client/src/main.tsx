import { createRoot, hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import { normalizePath } from "./data/site";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Elemento raiz da aplicação não encontrado.");
}

const pageLoaders = {
  "/": () => import("./pages/Home"),
  "/servicos/": () => import("./pages/Services"),
  "/equipe/": () => import("./pages/Team"),
  "/artigos/": () => import("./pages/Articles"),
  "/sobre/": () => import("./pages/About"),
  "/eventos/": () => import("./pages/Events"),
};

async function start() {
  const path = normalizePath(window.location.pathname);
  const loadPage =
    pageLoaders[path as keyof typeof pageLoaders] ??
    (() => import("./pages/NotFound"));
  const { default: Page } = await loadPage();
  const app = (
    <Router>
      <App Page={Page} />
    </Router>
  );
  if (root!.hasChildNodes() && !import.meta.env.DEV) {
    hydrateRoot(root!, app);
  } else {
    createRoot(root!).render(app);
  }
}

start().catch((error: unknown) => {
  console.error(
    "Não foi possível iniciar os recursos interativos do site",
    error
  );
});
