import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ExternalLink, Calendar, User } from "lucide-react";

export default function Articles() {
  const [, navigate] = useLocation();

  const articles = [
    {
      title: "Planejamento Tributário: Estratégias Legais para Redução de Impostos",
      author: "Thiago Sávio Almeida Durand Gomes",
      date: "2024-04-15",
      category: "Direito Tributário",
      excerpt: "Conheça as principais estratégias legais de planejamento tributário que podem reduzir significativamente a carga fiscal de sua empresa...",
      link: "https://www.migalhas.com.br/autor/thiago-durand"
    },
    {
      title: "Crimes Contra a Ordem Tributária: Entenda os Riscos",
      author: "Thiago Sávio Almeida Durand Gomes",
      date: "2024-03-28",
      category: "Direito Penal",
      excerpt: "Análise dos principais crimes tributários e as consequências legais para empresas e empresários que não cumprem suas obrigações...",
      link: "https://www.migalhas.com.br/autor/thiago-durand"
    },
    {
      title: "ICMS: Guia Completo para Empresas",
      author: "Victória de Figueiredo Eufrauzino Durand",
      date: "2024-03-10",
      category: "Direito Tributário",
      excerpt: "Entenda como funciona o ICMS, as obrigações acessórias e as principais estratégias para otimizar este tributo em sua operação...",
      link: "https://www.migalhas.com.br/autor/thiago-durand"
    },
    {
      title: "Estruturação Societária: Holding Familiar",
      author: "Dinara Priscila Bidô Eufrauzino",
      date: "2024-02-20",
      category: "Direito Sucessório",
      excerpt: "Descubra como estruturar uma holding familiar para proteger seu patrimônio e facilitar a sucessão geracional...",
      link: "https://www.migalhas.com.br/autor/thiago-durand"
    }
  ];

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
            Artigos e Publicações
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Acompanhe análises e insights sobre Direito Tributário, Penal, Empresarial e Sucessório
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {articles.map((article, idx) => (
              <article key={idx} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-col gap-3 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                  </div>

                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
                  >
                    Ler no Migalhas
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Veja mais artigos e publicações de nossos especialistas
            </p>
            <a 
              href="https://www.migalhas.com.br/autor/thiago-durand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Acessar Migalhas
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Fique atualizado
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Receba notificações sobre novos artigos e insights jurídicos publicados por nossos especialistas
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              Inscrever
            </Button>
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
