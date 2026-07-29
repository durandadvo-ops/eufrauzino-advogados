import { ArrowUpRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const articles = [
  {
    title: "Planejamento Tributário: Estratégias Legais para Redução de Impostos",
    author: "Thiago Sávio Almeida Durand Gomes",
    date: "2024-04-15",
    category: "Direito Tributário",
    excerpt: "Conheça as principais estratégias legais de planejamento tributário que podem reduzir significativamente a carga fiscal de sua empresa...",
    link: "https://www.migalhas.com.br/autor/thiago-durand",
  },
  {
    title: "Crimes Contra a Ordem Tributária: Entenda os Riscos",
    author: "Thiago Sávio Almeida Durand Gomes",
    date: "2024-03-28",
    category: "Direito Penal",
    excerpt: "Análise dos principais crimes tributários e as consequências legais para empresas e empresários que não cumprem suas obrigações...",
    link: "https://www.migalhas.com.br/autor/thiago-durand",
  },
  {
    title: "ICMS: Guia Completo para Empresas",
    author: "Victória de Figueiredo Eufrauzino Durand",
    date: "2024-03-10",
    category: "Direito Tributário",
    excerpt: "Entenda como funciona o ICMS, as obrigações acessórias e as principais estratégias para otimizar este tributo em sua operação...",
    link: "https://www.migalhas.com.br/autor/thiago-durand",
  },
  {
    title: "Estruturação Societária: Holding Familiar",
    author: "Dinara Priscila Bidô Eufrauzino",
    date: "2024-02-20",
    category: "Direito Sucessório",
    excerpt: "Descubra como estruturar uma holding familiar para proteger seu patrimônio e facilitar a sucessão geracional...",
    link: "https://www.migalhas.com.br/autor/thiago-durand",
  },
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="team-page-hero">
          <div className="container">
            <span className="eyebrow">Publicações</span>
            <h1>Artigos e análises</h1>
            <p>Acompanhe conteúdos sobre Direito Tributário, Penal, Empresarial e Sucessório produzidos pelos profissionais do escritório.</p>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container practice-list">
            {articles.map((article, index) => (
              <article className="practice-item" key={article.title}>
                <span className="practice-item__number">0{index + 1}</span>
                <div>
                  <span className="team-profile__oab">{article.category}</span>
                  <h3 className="mt-3">{article.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{article.author} · {new Date(article.date).toLocaleDateString("pt-BR")}</p>
                </div>
                <div>
                  <p>{article.excerpt}</p>
                  <a className="button-outline-burgundy mt-7" href={article.link} target="_blank" rel="noopener noreferrer">
                    Ler no Migalhas <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--burgundy">
          <div className="container section-heading">
            <div>
              <span className="eyebrow">Acervo externo</span>
              <h2 className="!text-white">Mais publicações</h2>
            </div>
            <div>
              <p className="!text-white/75">Consulte o perfil autoral para acessar outros artigos jurídicos publicados.</p>
              <a className="button-gold mt-8" href="https://www.migalhas.com.br/autor/thiago-durand" target="_blank" rel="noopener noreferrer">
                Acessar Migalhas <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
