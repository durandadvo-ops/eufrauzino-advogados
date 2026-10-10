import { contact } from "@/data/site";
import { team } from "@/data/team";
import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta path="/equipe" />
      <SiteHeader />

      <main id="conteudo" tabIndex={-1}>
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
              <article className="team-profile" id={member.id} key={member.name}>
                <div className="team-profile__photo">
                  <img src={member.image} alt={member.name} srcSet={member.srcSet} sizes="(max-width: 580px) calc(100vw - 58px), (max-width: 720px) 520px, (max-width: 1100px) 36vw, 420px" width={member.width} height={member.height} decoding="async" loading={index === 0 ? "eager" : "lazy"} />
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
              <a className="button-gold mt-8" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
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
