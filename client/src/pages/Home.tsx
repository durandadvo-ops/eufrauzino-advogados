import { ArrowRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import LocationMap from "@/components/LocationMap";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

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

const team = [
  { name: "Jurandi Eufrauzino", oab: "OAB/PB 26.034", image: "/assets/jurandi.webp" },
  { name: "Thiago Durand", oab: "OAB/PB 21.175", image: "/assets/thiago.webp" },
  { name: "Victória Eufrauzino", oab: "OAB/PB 25.066", image: "/assets/victoria.webp" },
  { name: "Dalton Eufrauzino", oab: "OAB/PB 23.332", image: "/assets/dalton.webp" },
  { name: "Dinara Eufrauzino", oab: "OAB/PB 20.651", image: "/assets/dinara.webp" },
];

export default function Home() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = `Olá, sou ${formData.name}. Meu e-mail é ${formData.email}. ${formData.message}`;
    window.open(`https://wa.me/5583986366658?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="hero-premium">
          <div className="container hero-premium__inner">
            <div className="hero-premium__copy">
              <span className="eyebrow">Eufrauzino Advogados</span>
              <h1>Advocacia tributária com atuação técnica e estratégica</h1>
              <p className="hero-premium__lead">
                Soluções jurídicas estruturadas para empresas, famílias e contribuintes em temas tributários, empresariais e patrimoniais.
              </p>
              <div className="hero-premium__actions">
                <a className="button-gold" href="https://wa.me/5583986366658" target="_blank" rel="noopener noreferrer">
                  Fale com o escritório <ArrowRight size={17} />
                </a>
                <a className="button-outline-light" href="#areas">
                  Conheça nossa atuação <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <div className="hero-premium__art" aria-hidden="true">
              <span className="hero-monogram">E</span>
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
                <button className="team-preview__member" key={member.name} onClick={() => navigate("/equipe")}>
                  <div className="team-preview__image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.oab}</p>
                </button>
              ))}
            </div>

            <div className="section-action">
              <button className="button-outline-burgundy" onClick={() => navigate("/equipe")}>
                Ver Perfis Completos <ArrowRight size={17} />
              </button>
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
                Apresente brevemente sua demanda. A mensagem será encaminhada diretamente para o WhatsApp institucional do escritório.
              </p>

              <div className="contact-lines">
                <a className="contact-line" href="https://wa.me/5583986366658" target="_blank" rel="noopener noreferrer">
                  <Phone size={18} /> <span>+55 83 98636-6658</span>
                </a>
                <a className="contact-line" href="mailto:eufrauzinoadvogados@outlook.com">
                  <Mail size={18} /> <span>eufrauzinoadvogados@outlook.com</span>
                </a>
                <span className="contact-line">
                  <MapPin size={18} /> <span>Rua Getúlio Cavalcante, 136, Liberdade, Campina Grande/PB</span>
                </span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
              </div>
              <div>
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" rows={6} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
              </div>
              <button className="button-burgundy" type="submit">
                Enviar mensagem <ArrowRight size={17} />
              </button>
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
            <a className="button-outline-burgundy" href="https://www.instagram.com/eufrauzinoadvogados/" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} /> @eufrauzinoadvogados
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
