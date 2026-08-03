import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Extinção da punibilidade nos crimes tributários",
    author: "Thiago Sávio Almeida Durand Gomes",
    date: "2026-05-20",
    category: "Direito Penal Tributário",
    excerpt: "A contagem da prescrição exige distinguir crimes materiais e formais, compreender os efeitos da Súmula Vinculante 24 e delimitar o papel do parcelamento e do pagamento integral do crédito tributário.",
    link: "https://www.migalhas.com.br/depeso/456120/extincao-da-punibilidade-nos-crimes-tributarios",
  },
  {
    title: "LC 225/26 e seu impacto nos crimes tributários",
    author: "Thiago Sávio Almeida Durand Gomes",
    date: "2026-02-26",
    category: "Direito Penal Tributário",
    excerpt: "O tensionamento constitucional na perpetuidade da contumácia para fins criminais e seus reflexos na suspensão e na extinção da punibilidade.",
    link: "https://www.migalhas.com.br/depeso/450557/lc-225-26-e-seu-impacto-nos-crimes-tributarios",
  },
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Publicações"
        description="Artigos jurídicos de autoria dos profissionais do Eufrauzino Advogados publicados em veículos especializados."
        path="/artigos"
      />
      <SiteHeader />
      <main>
        <section className="team-page-hero">
          <div className="container">
            <span className="eyebrow">Publicações</span>
            <h1>Artigos e análises</h1>
            <p>Conteúdos jurídicos de autoria dos profissionais do Eufrauzino Advogados publicados em veículos especializados.</p>
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
                  <p className="mt-3 text-sm text-muted-foreground">
                    {article.author} · <time dateTime={article.date}>{new Date(`${article.date}T12:00:00`).toLocaleDateString("pt-BR")}</time>
                  </p>
                </div>
                <div>
                  <p>{article.excerpt}</p>
                  <a className="button-outline-burgundy mt-7" href={article.link} target="_blank" rel="noopener noreferrer">
                    Ler no Migalhas <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--burgundy">
          <div className="container section-heading">
            <div>
              <span className="eyebrow">Perfil autoral</span>
              <h2 className="!text-white">Thiago Durand no Migalhas</h2>
            </div>
            <div>
              <p className="!text-white/75">Acesse o perfil autoral para consultar as publicações e eventuais novos artigos diretamente na plataforma.</p>
              <a className="button-gold mt-8" href="https://www.migalhas.com.br/autor/thiago-durand" target="_blank" rel="noopener noreferrer">
                Acessar perfil <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
