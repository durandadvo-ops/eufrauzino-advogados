import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Award, Users, Target, Heart } from "lucide-react";

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg font-bold">E</span>
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold text-primary">Eufrauzino</h1>
              <p className="text-xs text-muted-foreground">Advogados</p>
            </div>
          </button>
          
          <nav className="hidden md:flex gap-8">
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="/#team" className="text-foreground hover:text-primary transition-colors">Equipe</a>
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
            Sobre Nós
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Conheça a história, missão e valores do Eufrauzino Advogados
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Fundado em 2017, o Eufrauzino Advogados nasceu da visão de cinco sócios que compartilham uma paixão comum: oferecer soluções jurídicas de excelência com um toque familiar.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Começamos com foco em Direito Tributário, reconhecendo a complexidade e importância desta área para o sucesso dos negócios. Ao longo dos anos, expandimos nossa expertise para Direito Penal, Empresarial e Sucessório, sempre mantendo nosso compromisso com a qualidade e a dedicação personalizada.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Hoje, somos referência em Direito Tributário em Campina Grande e região, atendendo empresas de diversos portes e segmentos em todo o Brasil.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-12 flex items-center justify-center min-h-96">
              <Award className="w-32 h-32 text-primary/30" />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-primary text-lg mb-2">Familiaridade</h3>
              <p className="text-muted-foreground">Tratamos cada cliente como parte da nossa família, com dedicação e cuidado pessoal.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-primary text-lg mb-2">Excelência</h3>
              <p className="text-muted-foreground">Buscamos a excelência em cada parecer, consultoria e representação que realizamos.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-primary text-lg mb-2">Expertise</h3>
              <p className="text-muted-foreground">Nossa equipe possui formação sólida e experiência consolidada em suas especialidades.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-primary text-lg mb-2">Confiança</h3>
              <p className="text-muted-foreground">Construímos relacionamentos baseados em transparência, ética e profissionalismo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Missão</h3>
              <p className="text-foreground leading-relaxed">
                Oferecer soluções jurídicas de excelência em Direito Tributário e áreas complementares, tratando cada cliente com dedicação familiar e contribuindo para o sucesso e segurança de seus negócios.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Visão</h3>
              <p className="text-foreground leading-relaxed">
                Ser reconhecido como o escritório de referência em Direito Tributário e especialidades correlatas, conhecido pela excelência, inovação e pela abordagem familiar que nos diferencia no mercado.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Valores</h3>
              <p className="text-foreground leading-relaxed">
                Ética profissional, transparência, dedicação, excelência técnica, inovação, respeito, responsabilidade social e compromisso com o desenvolvimento contínuo de nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">
            Por que escolher o Eufrauzino Advogados?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-serif font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Especialização Tributária</h3>
                <p className="text-muted-foreground">Foco principal em Direito Tributário com expertise consolidada em ICMS, PIS, COFINS e contencioso tributário.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-serif font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Equipe Qualificada</h3>
                <p className="text-muted-foreground">Cinco sócios com formação sólida, pós-graduações especializadas e experiência em suas áreas.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-serif font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Abordagem Familiar</h3>
                <p className="text-muted-foreground">Tratamos cada cliente como parte da nossa família, com dedicação pessoal e atenção aos detalhes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-serif font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Atuação Ampla</h3>
                <p className="text-muted-foreground">Além de Tributário, atuamos em Penal, Empresarial e Sucessório para soluções completas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Pronto para trabalhar conosco?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar seu negócio a crescer com segurança jurídica
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-lg font-semibold">
            Agende uma Consulta
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
