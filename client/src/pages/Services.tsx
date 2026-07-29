import { ArrowRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    title: "Direito Tributário",
    fullDescription: "Nossa atuação está voltada para o contencioso administrativo tributário e no contencioso judicial tributário nos três níveis federativos, e com atuação em contra auditoria fiscal. Oferecemos planejamento tributário estratégico, gestão otimizada de tributos, assessoramento em benefícios fiscais, gerenciamento de passivos tributários e gestão de crises fiscais. Nossa expertise transforma desafios tributários em oportunidades de crescimento para sua empresa.",
    details: ["Planejamento tributário estratégico", "Gestão otimizada de tributos", "Assessoramento em benefícios fiscais", "Gerenciamento de passivos tributários", "Gestão de crises fiscais", "Recuperação de créditos tributários", "Contencioso administrativo tributário", "Contencioso judicial tributário", "Contra auditoria fiscal"],
  },
  {
    title: "Direito Penal",
    fullDescription: "Atuação focada nos crimes contra a ordem tributária e lavagem de capitais, atuando em investigações criminais e em processos penais tributários, conectando a expertise tributária e na atuação criminal. Especialistas em crimes contra a ordem tributária e lavagem de capitais. Atuamos em investigações criminais e processos penais tributários, conectando profunda expertise tributária com estratégia criminal robusta. Defendemos nossos clientes com a mesma dedicação que aplicamos à advocacia tributária.",
    details: ["Investigações criminais", "Processos penais tributários", "Crimes contra ordem tributária", "Lavagem de capitais", "Defesa criminal especializada", "Conexão tributária-penal", "Assessoria em procedimentos investigatórios", "Representação em processos criminais"],
  },
  {
    title: "Direito Empresarial",
    fullDescription: "Planejamento e consultoria da estrutura jurídica da empresa, elaboração de contrato social e dissolução da sociedade, recuperação judicial, falência e recuperação extrajudicial. Consultoria completa em estrutura jurídica empresarial, desde a elaboração de contratos sociais até processos complexos de dissolução, recuperação judicial, falência e recuperação extrajudicial. Planejamos e estruturamos sua empresa para crescimento sustentável e segurança jurídica.",
    details: ["Planejamento de estrutura jurídica", "Elaboração de contratos sociais", "Dissolução de sociedades", "Recuperação judicial", "Processos de falência", "Recuperação extrajudicial", "Consultoria empresarial", "Estruturação de negócios"],
  },
  {
    title: "Direito de Família e Sucessório",
    fullDescription: "Atuação na elaboração de planejamento sucessório (holding) inventário judicial e extrajudicial, gestão patrimonial e prevenção de conflitos. Planejamento sucessório estratégico com foco em holdings familiares, inventários judiciais e extrajudiciais, gestão patrimonial e prevenção de conflitos. Protegemos o patrimônio da sua família e garantimos uma transição geracional tranquila e segura.",
    details: ["Planejamento sucessório estratégico", "Estruturação de holdings familiares", "Inventário judicial", "Inventário extrajudicial", "Gestão patrimonial", "Prevenção de conflitos familiares", "Assessoria em transição geracional", "Proteção do patrimônio familiar"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="team-page-hero">
          <div className="container">
            <span className="eyebrow">Atuação</span>
            <h1>Áreas de atuação</h1>
            <p>Expertise especializada em Direito Tributário com atuação complementar em Direito Penal, Empresarial e Sucessório.</p>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container practice-list">
            {services.map((service, index) => (
              <article className="practice-item" key={service.title}>
                <span className="practice-item__number">0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <div className="section-rule" />
                </div>
                <div>
                  <p>{service.fullDescription}</p>
                  <ul className="team-profile__education mt-6">
                    {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  <a className="button-outline-burgundy mt-8" href="https://wa.me/5583986366658" target="_blank" rel="noopener noreferrer">
                    Fale com o escritório <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
