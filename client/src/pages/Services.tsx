import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, FileText, Briefcase, Home as HomeIcon } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, navigate] = useLocation();

  const services = [
    {
      icon: Scale,
      title: "Direito Tributário",
      description: "Atuamos no contencioso administrativo e judicial tributário em todos os níveis federativos, com especialidade em contra auditoria fiscal.",
      fullDescription: "Nossa atuação está voltada para o contencioso administrativo tributário e no contencioso judicial tributário nos três níveis federativos, e com atuação em contra auditoria fiscal. Oferecemos planejamento tributário estratégico, gestão otimizada de tributos, assessoramento em benefícios fiscais, gerenciamento de passivos tributários e gestão de crises fiscais. Nossa expertise transforma desafios tributários em oportunidades de crescimento para sua empresa.",
      details: [
        "Planejamento tributário estratégico",
        "Gestão otimizada de tributos",
        "Assessoramento em benefícios fiscais",
        "Gerenciamento de passivos tributários",
        "Gestão de crises fiscais",
        "Recuperação de créditos tributários",
        "Contencioso administrativo tributário",
        "Contencioso judicial tributário",
        "Contra auditoria fiscal"
      ],
      color: "from-primary/10 to-primary/5"
    },
    {
      icon: FileText,
      title: "Direito Penal",
      description: "Especialistas em crimes contra a ordem tributária e lavagem de capitais, atuando em investigações criminais e processos penais tributários.",
      fullDescription: "Atuação focada nos crimes contra a ordem tributária e lavagem de capitais, atuando em investigações criminais e em processos penais tributários, conectando a expertise tributária e na atuação criminal. Especialistas em crimes contra a ordem tributária e lavagem de capitais. Atuamos em investigações criminais e processos penais tributários, conectando profunda expertise tributária com estratégia criminal robusta. Defendemos nossos clientes com a mesma dedicação que aplicamos à advocacia tributária.",
      details: [
        "Investigações criminais",
        "Processos penais tributários",
        "Crimes contra ordem tributária",
        "Lavagem de capitais",
        "Defesa criminal especializada",
        "Conexão tributária-penal",
        "Assessoria em procedimentos investigatórios",
        "Representação em processos criminais"
      ],
      color: "from-accent/10 to-accent/5"
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Planejamento e consultoria da estrutura jurídica da empresa, elaboração de contrato social e dissolução da sociedade.",
      fullDescription: "Planejamento e consultoria da estrutura jurídica da empresa, elaboração de contrato social e dissolução da sociedade, recuperação judicial, falência e recuperação extrajudicial. Consultoria completa em estrutura jurídica empresarial, desde a elaboração de contratos sociais até processos complexos de dissolução, recuperação judicial, falência e recuperação extrajudicial. Planejamos e estruturamos sua empresa para crescimento sustentável e segurança jurídica.",
      details: [
        "Planejamento de estrutura jurídica",
        "Elaboração de contratos sociais",
        "Dissolução de sociedades",
        "Recuperação judicial",
        "Processos de falência",
        "Recuperação extrajudicial",
        "Consultoria empresarial",
        "Estruturação de negócios"
      ],
      color: "from-secondary/10 to-secondary/5"
    },
    {
      icon: HomeIcon,
      title: "Direito de Família e Sucessório",
      description: "Atuação na elaboração de planejamento sucessório (holding) inventário judicial e extrajudicial, gestão patrimonial.",
      fullDescription: "Atuação na elaboração de planejamento sucessório (holding) inventário judicial e extrajudicial, gestão patrimonial e prevenção de conflitos. Planejamento sucessório estratégico com foco em holdings familiares, inventários judiciais e extrajudiciais, gestão patrimonial e prevenção de conflitos. Protegemos o patrimônio da sua família e garantimos uma transição geracional tranquila e segura.",
      details: [
        "Planejamento sucessório estratégico",
        "Estruturação de holdings familiares",
        "Inventário judicial",
        "Inventário extrajudicial",
        "Gestão patrimonial",
        "Prevenção de conflitos familiares",
        "Assessoria em transição geracional",
        "Proteção do patrimônio familiar"
      ],
      color: "from-muted/10 to-muted/5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/assets/logo.webp" alt="Eufrauzino Advogados" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h1 className="text-lg font-serif font-bold text-primary">Eufrauzino</h1>
              <p className="text-xs text-muted-foreground">Advogados</p>
            </div>
          </button>
          
          <nav className="hidden md:flex gap-8">
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <button onClick={() => navigate("/equipe")} className="text-foreground hover:text-primary transition-colors cursor-pointer">Equipe</button>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Consultar
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
            Nossas Áreas de Atuação
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Expertise especializada em Direito Tributário com atuação complementar em Direito Penal, Empresarial e Sucessório
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="grid md:grid-cols-2 gap-12 items-start">
                  <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                    <div className={`bg-gradient-to-br ${service.color} rounded-lg p-12 flex items-center justify-center min-h-80`}>
                      <Icon className="w-32 h-32 text-primary/30" />
                    </div>
                  </div>
                  
                  <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex gap-3 items-start">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <p className="text-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Solicitar Consultoria <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Pronto para resolver seus desafios jurídicos?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e agende uma consulta com nossos especialistas
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-lg font-semibold">
            Agende Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Eufrauzino Advogados</h3>
              <p className="text-primary-foreground/80">Seu escritório de confiança em Direito Tributário desde 2017.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Áreas de Atuação</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>Direito Tributário</li>
                <li>Direito Penal</li>
                <li>Direito Empresarial</li>
                <li>Direito de Família</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>(83) 986366658</li>
                <li>eufrauzinoadvogados@outlook.com</li>
                <li>Campina Grande, PB</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
            <p>&copy; 2024 Eufrauzino Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
