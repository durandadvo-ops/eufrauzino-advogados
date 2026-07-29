import { ArrowRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const values = [
  { title: "Familiaridade", text: "Tratamos cada cliente como parte da nossa família, com dedicação e cuidado pessoal." },
  { title: "Excelência", text: "Buscamos a excelência em cada parecer, consultoria e representação que realizamos." },
  { title: "Expertise", text: "Nossa equipe possui formação sólida e experiência consolidada em suas especialidades." },
  { title: "Confiança", text: "Construímos relacionamentos baseados em transparência, ética e profissionalismo." },
];

const principles = [
  { title: "Missão", text: "Oferecer soluções jurídicas de excelência em Direito Tributário e áreas complementares, tratando cada cliente com dedicação familiar e contribuindo para o sucesso e segurança de seus negócios." },
  { title: "Visão", text: "Ser reconhecido como o escritório de referência em Direito Tributário e especialidades correlatas, conhecido pela excelência, inovação e pela abordagem familiar que nos diferencia no mercado." },
  { title: "Valores", text: "Ética profissional, transparência, dedicação, excelência técnica, inovação, respeito, responsabilidade social e compromisso com o desenvolvimento contínuo de nossa equipe." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="team-page-hero">
          <div className="container">
            <span className="eyebrow">O escritório</span>
            <h1>Sobre nós</h1>
            <p>Conheça a história, a missão e os valores do Eufrauzino Advogados.</p>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container section-heading">
            <div>
              <span className="eyebrow">Nossa história</span>
              <h2>Tradição familiar e especialização técnica</h2>
              <div className="section-rule" />
            </div>
            <div className="space-y-5 text-[1.05rem] leading-8 text-[#5f514c]">
              <p>Fundado em 2017, o Eufrauzino Advogados nasceu da visão de cinco sócios que compartilham uma paixão comum: oferecer soluções jurídicas de excelência com um toque familiar.</p>
              <p>Começamos com foco em Direito Tributário, reconhecendo a complexidade e importância desta área para o sucesso dos negócios. Ao longo dos anos, expandimos nossa expertise para Direito Penal, Empresarial e Sucessório, sempre mantendo nosso compromisso com a qualidade e a dedicação personalizada.</p>
              <p>Hoje, somos referência em Direito Tributário em Campina Grande e região, atendendo empresas de diversos portes e segmentos em todo o Brasil.</p>
            </div>
          </div>
        </section>

        <section className="section section--ivory">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Princípios</span>
                <h2>O que orienta nossa atuação</h2>
                <div className="section-rule" />
              </div>
              <p>Uma atuação jurídica construída sobre relações de confiança, rigor técnico e compromisso com cada demanda recebida pelo escritório.</p>
            </div>

            <div className="practice-list">
              {values.map((value, index) => (
                <article className="practice-item" key={value.title}>
                  <span className="practice-item__number">0{index + 1}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container grid gap-12 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="border-t border-[#b78a49] pt-6">
                <h3 className="mb-4 text-3xl text-primary">{principle.title}</h3>
                <p className="leading-7 text-[#5f514c]">{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--ivory">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Diferenciais</span>
                <h2>Por que escolher o Eufrauzino Advogados</h2>
                <div className="section-rule" />
              </div>
              <p>Estrutura multidisciplinar, experiência tributária e atendimento próximo para a compreensão integral das necessidades de cada cliente.</p>
            </div>

            <div className="differentials-text">
              <p>
                O Eufrauzino Advogados tem foco principal em Direito Tributário e reúne cinco sócios com formação sólida, pós-graduações especializadas e experiência em suas áreas. A estrutura familiar favorece um atendimento próximo, dedicado e atento às particularidades de cada demanda, enquanto a atuação complementar em Direito Penal, Empresarial e Sucessório permite compreender de forma integrada as necessidades jurídicas de empresas, famílias e contribuintes.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--burgundy">
          <div className="container section-heading">
            <div>
              <span className="eyebrow">Contato</span>
              <h2 className="!text-white">Converse com o escritório</h2>
            </div>
            <div>
              <p className="!text-white/75">Entre em contato para apresentar sua demanda e conhecer a forma de atuação da equipe.</p>
              <a className="button-gold mt-8" href="https://wa.me/5583986366658" target="_blank" rel="noopener noreferrer">
                Fale com o escritório <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
