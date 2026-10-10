export const SITE_URL = "https://eufrauzinoadvogados.com";
export const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.webp`;

export const contact = {
  whatsapp: "https://wa.me/5583986366658",
  phone: "+55 83 98636-6658",
  email: "eufrauzinoadvogados@outlook.com",
  address: "Rua Getúlio Cavalcante, 136, Liberdade, Campina Grande/PB",
  instagram: "https://www.instagram.com/eufrauzinoadvogados/",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua+Get%C3%BAlio+Cavalcante%2C+136%2C+Liberdade%2C+Campina+Grande%2C+PB",
};

export const pages = [
  {
    path: "/",
    title: "Eufrauzino Advogados - Advocacia Tributária",
    description:
      "Advocacia tributária com atuação técnica e estratégica em Campina Grande, com atuação complementar em Direito Penal, Empresarial e Sucessório.",
  },
  {
    path: "/servicos/",
    title: "Áreas de atuação",
    description:
      "Conheça a atuação do Eufrauzino Advogados em Direito Tributário, Penal, Empresarial e Direito de Família e Sucessório.",
  },
  {
    path: "/equipe/",
    title: "Nossa equipe",
    description:
      "Conheça os advogados do Eufrauzino Advogados, suas áreas de atuação, formações e registros profissionais.",
  },
  {
    path: "/artigos/",
    title: "Publicações",
    description:
      "Artigos jurídicos de autoria dos profissionais do Eufrauzino Advogados publicados em veículos especializados.",
  },
  {
    path: "/sobre/",
    title: "O escritório",
    description:
      "Conheça a história, a estrutura e os princípios institucionais do Eufrauzino Advogados.",
  },
  {
    path: "/eventos/",
    title: "Eventos",
    description:
      "Eventos, palestras e atividades institucionais promovidas ou integradas pelo Eufrauzino Advogados.",
  },
] as const;

export function normalizePath(path: string) {
  const pathname = path.split(/[?#]/)[0].replace(/^\/+|\/+$/g, "");
  return pathname ? `/${pathname}/` : "/";
}

export function getPageMetadata(path: string) {
  const page = pages.find(item => item.path === normalizePath(path));
  const title = page?.title ?? "Página não encontrada";
  return {
    title: title.includes("Eufrauzino")
      ? title
      : `${title} | Eufrauzino Advogados`,
    description:
      page?.description ??
      "A página solicitada não foi encontrada no site do Eufrauzino Advogados.",
    canonical: page ? `${SITE_URL}${page.path}` : undefined,
    robots: page ? "index, follow" : "noindex, follow",
    image: DEFAULT_IMAGE,
  };
}
