import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Team() {
  const [, navigate] = useLocation();

  const team = [
    {
      name: "Jurandi Eufrauzino",
      oab: "OAB/PB 26.034",
      title: "Advogado | Ex-Auditor Fiscal",
      image: "/manus-storage/jurandi_c804fd7e.jpeg",
      specialties: ["Direito Tributário", "Reauditagem", "Contra Auditoria Fiscal"],
      education: [
        "Formado pela Universidade Federal da Paraíba",
        "Pós-Graduação em Administração Tributária (ESTÁCIO)",
        "MBA em Direito Fiscal e Tributário (SEFAZ e ESTÁCIO)",
        "Ex-Auditor Fiscal do Estado da Paraíba",
        "Professor de Direito Tributário da UEPB (1994-2002)",
        "Assessor jurídico da Associação Comercial de Campina Grande (ACCG)",
        "Presidente da Comissão de Direito Tributário da OAB Subseção Campina Grande (2020-2021)"
      ]
    },
    {
      name: "Thiago Durand",
      oab: "OAB/PB 21.175",
      title: "Advogado",
      image: "/manus-storage/thiago_d4952930.jpeg",
      specialties: ["Direito Penal", "Direito Empresarial", "Direito Tributário"],
      education: [
        "Formado pela Universidade Estadual da Paraíba",
        "Pós-graduado em Direito Penal e Processo Penal (FACISA)",
        "Pós-graduado em Direito Empresarial (EBRADI)",
        "LLM em Direito Tributário Empresarial (BSSP)"
      ]
    },
    {
      name: "Victória Eufrauzino",
      oab: "OAB/PB 25.066",
      title: "Advogada",
      image: "/manus-storage/victoria_2ff9d290.jpeg",
      specialties: ["Direito Tributário", "Reauditagem", "Contra Auditoria Fiscal"],
      education: [
        "Formada pela Universidade Estadual da Paraíba",
        "Pós-Graduada em Direito Tributário (CERS)",
        "Pós-Graduação em Contabilidade Tributária e Prática Fiscal (FBC)",
        "LLM em Direito Tributário Empresarial (BSSP)",
        "Presidente da Comissão de Direito Tributário da OAB Subseção Campina Grande (2025-2026)"
      ]
    },
    {
      name: "Dalton Eufrauzino",
      oab: "OAB/PB 23.332",
      title: "Advogado",
      image: "/manus-storage/dalton_c1f9702c.jpeg",
      specialties: ["Direito Tributário", "Direito Previdenciário", "Direito do Trabalho"],
      education: [
        "Formado pela Universidade Estadual da Paraíba",
        "Pós-Graduado em Direito Tributário (IBET)",
        "Pós-Graduado em Direito Previdenciário e Direito do Trabalho (FIP)"
      ]
    },
    {
      name: "Dinara Eufrauzino",
      oab: "OAB/PB 20.651",
      title: "Advogada",
      image: "/manus-storage/dinara_5c8a199c.jpeg",
      specialties: ["Direito Tributário", "Planejamento Sucessório", "Direito de Família"],
      education: [
        "Formada pela FACISA",
        "Pós-graduação em Direito Tributário (Unipe)",
        "Pós-graduanda em Planejamento Sucessório Patrimônio Família-Empresa"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/manus-storage/logo_bcc5d4e0.webp" alt="Eufrauzino Advogados" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h1 className="text-lg font-serif font-bold text-primary">Eufrauzino</h1>
              <p className="text-xs text-muted-foreground">Advogados</p>
            </div>
          </button>
          
          <nav className="hidden md:flex gap-8">
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <button onClick={() => navigate("/equipe")} className="text-foreground hover:text-primary transition-colors cursor-pointer font-semibold text-primary">Equipe</button>
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
            Nossa Equipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Cinco sócios fundadores com expertise consolidada em Direito Tributário e áreas complementares
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-16">
            {team.map((member, idx) => (
              <div key={idx} className="grid md:grid-cols-3 gap-12 items-start">
                <div className={idx % 2 === 1 ? "md:order-3" : ""}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                  </div>
                </div>
                
                <div className={`md:col-span-2 ${idx % 2 === 1 ? "md:order-1 md:col-span-2" : ""}`}>
                  <div className="mb-6">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-2">
                      {member.name}
                    </h2>
                    <p className="text-lg text-accent font-semibold mb-1">{member.oab}</p>
                    <p className="text-lg text-muted-foreground">{member.title}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-3 text-lg">Especialidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec, specIdx) => (
                        <span key={specIdx} className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4 text-lg">Formação Acadêmica</h3>
                    <ul className="space-y-3">
                      {member.education.map((edu, eduIdx) => (
                        <li key={eduIdx} className="flex gap-3 text-foreground">
                          <span className="text-accent flex-shrink-0 mt-1 font-bold">✓</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Sobre o Escritório
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              O Eufrauzino Advogados é um escritório familiar fundado em 2017, especializado em Direito Tributário com atuação complementar em Direito Penal, Empresarial e Sucessório. Nossos cinco sócios fundadores trabalham em conjunto para oferecer soluções jurídicas de excelência.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Somos uma empresa que abraça de forma individual os problemas de cada empresário e empresária, tratando nossos clientes como familiares. Nossa expertise tributária é reconhecida, e nossa atuação em investigações criminais, processos penais tributários, estruturação empresarial e planejamento sucessório complementa nosso portfólio de serviços.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Com sede em Campina Grande, Paraíba, atendemos clientes em todo o Brasil, oferecendo consultoria de alto nível e dedicação personalizada a cada caso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Converse com nossos especialistas
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl">
            Agende uma consulta com um de nossos advogados e descubra como podemos ajudar seu negócio
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm text-primary-foreground/80">Telefone</p>
                <p className="text-lg font-semibold">(83) 986366658</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm text-primary-foreground/80">Email</p>
                <p className="text-lg font-semibold">eufrauzinoadvogados@outlook.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
              <MapPin className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm text-primary-foreground/80">Localização</p>
                <p className="text-lg font-semibold">Campina Grande, PB</p>
              </div>
            </div>
          </div>
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
