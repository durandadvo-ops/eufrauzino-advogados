import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Jurandi Eufrauzino",
    oab: "OAB/PB 26.034",
    title: "Advogado | Ex-Auditor Fiscal",
    image: "/assets/jurandi.webp",
    specialties: ["Direito Tributário", "Reauditagem", "Contra Auditoria Fiscal"],
    education: [
      "Formado pela Universidade Federal da Paraíba",
      "Pós-Graduação em Administração Tributária (ESTÁCIO)",
      "MBA em Direito Fiscal e Tributário (SEFAZ e ESTÁCIO)",
      "Ex-Auditor Fiscal do Estado da Paraíba",
      "Professor de Direito Tributário da UEPB (1994-2002)",
      "Diretor Jurídico da Associação Comercial de Campina Grande (ACCG)",
      "Presidente da Comissão de Direito Tributário da OAB Subseção Campina Grande (2020-2021)",
    ],
  },
  {
    name: "Thiago Durand",
    oab: "OAB/PB 21.175",
    title: "Advogado",
    image: "/assets/thiago.webp",
    specialties: ["Direito Penal", "Direito Empresarial", "Direito Tributário"],
    education: [
      "Formado pela Universidade Estadual da Paraíba",
      "Pós-graduado em Direito Penal e Processo Penal (FACISA)",
      "Pós-graduado em Direito Empresarial (EBRADI)",
      "LLM em Direito Tributário Empresarial (BSSP)",
    ],
  },
  {
    name: "Victória Eufrauzino",
    oab: "OAB/PB 25.066",
    title: "Advogada",
    image: "/assets/victoria.webp",
    specialties: ["Direito Tributário", "Reauditagem", "Contra Auditoria Fiscal"],
    education: [
      "Formada pela Universidade Estadual da Paraíba",
      "Pós-Graduada em Direito Tributário (CERS)",
      "Pós-Graduação em Contabilidade Tributária e Prática Fiscal (FBC)",
      "LLM em Direito Tributário Empresarial (BSSP)",
      "Presidente da Comissão de Direito Tributário da OAB Subseção Campina Grande (2025-2026)",
    ],
  },
  {
    name: "Dalton Eufrauzino",
    oab: "OAB/PB 23.332",
    title: "Advogado",
    image: "/assets/dalton.webp",
    specialties: ["Direito Tributário", "Direito Previdenciário", "Direito do Trabalho"],
    education: [
      "Formado pela Universidade Estadual da Paraíba",
      "Pós-Graduado em Direito Tributário (IBET)",
      "Pós-Graduado em Direito Previdenciário e Direito do Trabalho (FIP)",
      "Pós-Graduação em Contabilidade Tributária (BBSP)",
    ],
  },
  {
    name: "Dinara Eufrauzino",
    oab: "OAB/PB 20.651",
    title: "Advogada",
    image: "/assets/dinara.webp",
    specialties: ["Direito Tributário", "Planejamento Sucessório", "Direito de Família"],
    education: [
      "Formada em Administração pela Universidade Estadual da Paraíba",
      "Formada pela FACISA",
      "Pós-graduação em Direito Tributário (Unipe)",
      "Pós-graduanda em Planejamento Sucessório Patrimônio Família-Empresa",
    ],
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Nossa equipe"
        description="Conheça os advogados do Eufrauzino Advogados, suas áreas de atuação, formações e registros profissionais."
        path="/equipe"
      />
      <SiteHeader />

      <main>
        <section className="team-page-hero">
          <div className="container">
            <span className="eyebrow">Profissionais</span>
            <h1>Nossa equipe</h1>
            <p>
              Cinco sócios fundadores com experiência consolidada em Direito Tributário e atuação complementar em áreas estratégicas para empresas e famílias.
            </p>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container">
            {team.map((member, index) => (
              <article className="team-profile" key={member.name}>
                <div className="team-profile__photo">
                  <img src={member.image} alt={member.name} width="520" height="650" loading={index === 0 ? "eager" : "lazy"} />
                </div>

                <div className="team-profile__content">
                  <span className="team-profile__index">Profissional 0{index + 1}</span>
                  <h2>{member.name}</h2>
                  <p className="team-profile__oab">{member.oab}</p>
                  <p className="team-profile__title">{member.title}</p>

                  <div className="team-profile__specialties">
                    {member.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
                  </div>

                  <ul className="team-profile__education">
                    {member.education.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--ivory">
          <div className="container section-heading">
            <div>
              <span className="eyebrow">Institucional</span>
              <h2>Conheça quem somos</h2>
              <div className="section-rule" />
            </div>
            <p>
              O Eufrauzino Advogados é um escritório familiar fundado em 2017, especializado em Direito Tributário com atuação complementar em Direito Penal, Empresarial e Sucessório. Nossos cinco sócios fundadores trabalham em conjunto para oferecer soluções jurídicas de excelência.
            </p>
          </div>

          <div className="container">
            <div className="aspect-video overflow-hidden border border-border bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/GPI7UOI8iyc?si=ZpWVh5IucD5fZHAw"
                title="Vídeo Institucional Eufrauzino Advogados"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </section>

        <section className="section section--burgundy">
          <div className="container section-heading">
            <div>
              <span className="eyebrow">Atendimento</span>
              <h2 className="!text-white">Converse com nossos profissionais</h2>
            </div>
            <div>
              <p className="!text-white/75">
                Apresente sua demanda ao escritório para que ela seja encaminhada à equipe responsável pela área correspondente.
              </p>
              <a className="button-gold mt-8" href="https://wa.me/5583986366658" target="_blank" rel="noopener noreferrer">
                Fale com o escritório <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
