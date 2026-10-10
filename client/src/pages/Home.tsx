import LocationMap from "@/components/LocationMap";
import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { useEffect, useState } from "react";
import { team } from "@/data/team";
import { contact } from "@/data/site";

const practices = [
  {
    title: "Direito Tributário",
    description: "Atuamos no contencioso administrativo e judicial tributário em todos os níveis federativos, com especialidade em contra auditoria fiscal. Oferecemos planejamento tributário estratégico, gestão otimizada de tributos, assessoramento em benefícios fiscais, gerenciamento de passivos tributários e gestão de crises fiscais. Nossa expertise transforma desafios tributários em oportunidades de crescimento para sua empresa.",
  },
  {
    title: "Direito Penal",
    description: "Especialistas em crimes contra a ordem tributária e lavagem de capitais. Atuamos em investigações criminais e processos penais tributários, conectando profunda expertise tributária com estratégia criminal robusta. Defendemos nossos clientes com a mesma dedicação que aplicamos à advocacia tributária.",
  },
  {
    title: "Direito Empresarial",
    description: "Consultoria completa em estrutura jurídica empresarial, desde a elaboração de contratos sociais até processos complexos de dissolução, recuperação judicial, falência e recuperação extrajudicial. Planejamos e estruturamos sua empresa para crescimento sustentável e segurança jurídica.",
  },
  {
    title: "Direito de Família e Sucessório",
    description: "Planejamento sucessório estratégico com foco em holdings familiares, inventários judiciais e extrajudiciais, gestão patrimonial e prevenção de conflitos. Protegemos o patrimônio da sua família e garantimos uma transição geracional tranquila e segura.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [ready, setReady] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => setReady(true), []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setFormError("Preencha seu nome e sua mensagem antes de continuar.");
      return;
    }
    setFormError("");
    const message = `Olá, sou ${formData.name.trim()}. Meu e-mail é ${formData.email.trim()}. ${formData.message.trim()}`;
    window.location.assign(`${contact.whatsapp}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta />
      <SiteHeader />

      <main id="conteudo" tabIndex={-1}>
        <section className="hero-premium">
          <div className="container hero-premium__inner">
            <div className="hero-premium__copy">
              <span className="eyebrow">Eufrauzino Advogados</span>
              <h1>Advocacia tributária com atuação técnica e estratégica</h1>
              <p className="hero-premium__lead">
                Soluções jurídicas estruturadas para empresas, famílias e contribuintes em temas tributários, empresariais e patrimoniais.
              </p>
              <div className="hero-premium__actions">
                <a className="button-gold" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Fale com o escritório <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button-outline-light" href="#areas">
                  Conheça nossa atuação <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-premium__art" aria-hidden="true">
              <img className="hero-monogram" src="/assets/eufrauzino-monograma.svg" alt="" />
            </div>
          </div>
        </section>

        <section id="areas" className="section section--paper">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Experiência jurídica integrada</h2>
                <div className="section-rule" />
              </div>
              <p>
                Atuação técnica orientada à prevenção de riscos, à defesa de direitos e à construção de soluções juridicamente seguras para pessoas e empresas.
              </p>
            </div>

            <div className="practice-list">
              {practices.map((practice, index) => (
                <article className="practice-item" key={practice.title}>
                  <span className="practice-item__number">0{index + 1}</span>
                  <h3>{practice.title}</h3>
                  <p>{practice.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--ivory">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Profissionais</span>
                <h2>Nossa equipe</h2>
                <div className="section-rule" />
              </div>
              <p>
                Cinco sócios fundadores com experiência consolidada em Direito Tributário e atuação complementar em áreas estratégicas para empresas e famílias.
              </p>
            </div>

            <div className="team-preview">
              {team.map((member) => (
                <a
                  className="team-preview__member"
                  key={member.name}
                  href={`/equipe/#${member.id}`}
                  aria-label={`Ver perfil de ${member.name}`}
                >
                  <div className="team-preview__image">
                    <img src={member.image} srcSet={member.srcSet} sizes="(max-width: 420px) calc(50vw - 24px), (max-width: 720px) calc(50vw - 28px), (max-width: 1100px) calc((100vw - 96px) / 3), 224px" alt={member.name} width={member.width} height={member.height} loading="lazy" decoding="async" />
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.oab}</p>
                </a>
              ))}
            </div>

            <div className="section-action">
              <a className="button-outline-burgundy" href="/equipe/">
                Ver Perfis Completos <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="contato" className="section section--paper">
          <div className="container contact-editorial">
            <div className="contact-editorial__intro">
              <span className="eyebrow">Contato</span>
              <h2>Converse com o escritório</h2>
              <div className="section-rule" />
              <p>
                Apresente brevemente sua demanda. Ao continuar, o WhatsApp será aberto com a mensagem preenchida para você revisar e enviar ao escritório.
              </p>

              <div className="contact-lines">
                <a className="contact-line" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Phone size={18} aria-hidden="true" /> <span>{contact.phone}</span>
                </a>
                <a className="contact-line" href={`mailto:${contact.email}`}>
                  <Mail size={18} aria-hidden="true" /> <span>{contact.email}</span>
                </a>
                <span className="contact-line">
                  <MapPin size={18} aria-hidden="true" /> <span>{contact.address}</span>
                </span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-form-note">
              <div>
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" type="text" autoComplete="name" maxLength={120} required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
              </div>
              <div>
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows={6} maxLength={2000} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
              </div>
              <p className="contact-form__note" id="contact-form-note">Revise a mensagem e toque em enviar no WhatsApp para concluir o contato.</p>
              {formError && <p className="contact-form__note" role="alert">{formError}</p>}
              <button className="button-burgundy" type="submit" disabled={!ready}>
                Continuar no WhatsApp <ArrowRight size={17} aria-hidden="true" />
              </button>
              <noscript><p><a className="button-outline-burgundy" href={contact.whatsapp}>Fale diretamente pelo WhatsApp</a></p></noscript>
            </form>
          </div>
        </section>

        <section className="section section--ivory">
          <div className="container">
            <LocationMap />
          </div>
        </section>

        <section className="section section--paper">
          <div className="container instagram-editorial">
            <div>
              <span className="eyebrow">Conteúdo institucional</span>
              <h2>Acompanhe o escritório</h2>
              <p>Artigos, eventos e informações jurídicas no perfil oficial da Eufrauzino Advogados.</p>
            </div>
            <a className="button-outline-burgundy" href={contact.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={18} /> @eufrauzinoadvogados
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
