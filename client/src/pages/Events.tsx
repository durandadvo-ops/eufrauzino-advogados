import { ArrowLeft, Play } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Events() {
  const [, navigate] = useLocation();

  const events = [
    {
      id: 1,
      title: "Evento Eufrauzino Advogados",
      description: "Conheça os principais eventos e atividades do nosso escritório",
      videoId: "-nf4-axagDA",
      date: "2025",
      category: "Eventos"
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
            <button onClick={() => navigate("/")} className="text-foreground hover:text-primary transition-colors cursor-pointer">Home</button>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <button onClick={() => navigate("/equipe")} className="text-foreground hover:text-primary transition-colors cursor-pointer">Equipe</button>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Consultar
          </Button>
        </div>
      </header>

      {/* Back Button */}
      <div className="container pt-8 pb-4">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
      </div>

      {/* Page Title */}
      <section className="container py-12">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Eventos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Acompanhe os principais eventos, palestras e atividades do escritório Eufrauzino Advogados
        </p>
      </section>

      {/* Events Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              {/* Video Thumbnail */}
              <div className="relative bg-muted aspect-video overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${event.videoId}/maxresdefault.jpg`}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <a
                  href={`https://www.youtube.com/watch?v=${event.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
                >
                  <Play className="w-16 h-16 text-white fill-white" />
                </a>
              </div>

              {/* Event Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{event.date}</span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {event.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>

                <a
                  href={`https://www.youtube.com/watch?v=${event.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  Assistir no YouTube
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold text-primary mb-4">Eufrauzino Advogados</h3>
              <p className="text-sm text-muted-foreground">
                Especialistas em Direito Tributário desde 2017
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/")} className="hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => navigate("/equipe")} className="hover:text-primary transition-colors">Equipe</button></li>
                <li><button onClick={() => navigate("/artigos")} className="hover:text-primary transition-colors">Artigos</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <p className="text-sm text-muted-foreground mb-2">(83) 98636-6658</p>
              <p className="text-sm text-muted-foreground">eufrauzinoadvogados@outlook.com</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Eufrauzino Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
