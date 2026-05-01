import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Scale, Briefcase, Home as HomeIcon, Users, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import LocationMap from "@/components/LocationMap";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const services = [
    {
      icon: Scale,
      title: "Direito Tributário",
      description: "Atuamos no contencioso administrativo e judicial tributário em todos os níveis federativos, com especialidade em contra auditoria fiscal. Oferecemos planejamento tributário estratégico, gestão otimizada de tributos, assessoramento em benefícios fiscais, gerenciamento de passivos tributários e gestão de crises fiscais. Nossa expertise transforma desafios tributários em oportunidades de crescimento para sua empresa.",
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Direito Penal",
      description: "Especialistas em crimes contra a ordem tributária e lavagem de capitais. Atuamos em investigações criminais e processos penais tributários, conectando profunda expertise tributária com estratégia criminal robusta. Defendemos nossos clientes com a mesma dedicação que aplicamos à advocacia tributária.",
      color: "text-primary"
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Consultoria completa em estrutura jurídica empresarial, desde a elaboração de contratos sociais até processos complexos de dissolução, recuperação judicial, falência e recuperação extrajudicial. Planejamos e estruturamos sua empresa para crescimento sustentável e segurança jurídica.",
      color: "text-primary"
    },
    {
      icon: HomeIcon,
      title: "Direito de Família e Sucessório",
      description: "Planejamento sucessório estratégico com foco em holdings familiares, inventários judiciais e extrajudiciais, gestão patrimonial e prevenção de conflitos. Protegemos o patrimônio da sua família e garantimos uma transição geracional tranquila e segura.",
      color: "text-primary"
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
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <button onClick={() => navigate("/equipe")} className="text-foreground hover:text-primary transition-colors cursor-pointer">Equipe</button>
            <button onClick={() => navigate("/eventos")} className="text-foreground hover:text-primary transition-colors cursor-pointer">Eventos</button>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Consultar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028514422/Xzf9P38Xn33iCo76CY2Lsf/hero-with-e-letter-nMz7UMSLSVzW6Q5qMFzkkA.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-96">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img src="/manus-storage/logo_bcc5d4e0.webp" alt="Eufrauzino Advogados" className="w-24 h-24 rounded-full object-cover shadow-lg" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-2 leading-tight">
              EUFRAUZINO
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-semibold mb-8">
              ADVOGADOS
            </p>
            
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Seu Escritório de Confiança em Direito Tributário
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Agende uma Consulta <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg" onClick={() => navigate("/equipe")}>
                Conheça Nossa Equipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Nossas Áreas de Atuação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise especializada em Direito Tributário com atuação em Direito Penal, Empresarial e Sucessório
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="group p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:border-accent"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-foreground leading-relaxed text-sm">{service.description}</p>
                  <div className="mt-4 h-1 w-12 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cinco sócios fundadores com expertise em Direito Tributário e áreas complementares
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: "Jurandi Eufrauzino", oab: "OAB/PB 26.034", image: "/manus-storage/jurandi_c804fd7e.jpeg" },
              { name: "Thiago Durand", oab: "OAB/PB 21.175", image: "/manus-storage/thiago_d4952930.jpeg" },
              { name: "Victória Eufrauzino", oab: "OAB/PB 25.066", image: "/manus-storage/victoria_2ff9d290.jpeg" },
              { name: "Dalton Eufrauzino", oab: "OAB/PB 23.332", image: "/manus-storage/dalton_c1f9702c.jpeg" },
              { name: "Dinara Eufrauzino", oab: "OAB/PB 20.651", image: "/manus-storage/dinara_5c8a199c.jpeg" }
            ].map((member, idx) => (
              <button 
                key={idx} 
                onClick={() => navigate("/equipe")}
                className="text-center group cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-serif font-bold text-primary text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.oab}</p>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => navigate("/equipe")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Ver Perfis Completos <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
                Entre em Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(83) 986366658</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">eufrauzinoadvogados@outlook.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground">
                      Rua Getúlio Cavalcante, 136<br />
                      Liberdade, Campina Grande, PB
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">Segunda a Sexta: 8:30 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Localização</h3>
              <LocationMap />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

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
