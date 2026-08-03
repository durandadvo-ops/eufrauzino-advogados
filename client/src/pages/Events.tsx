import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ArrowUpRight, Play } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Evento Eufrauzino Advogados",
    description: "Conheça os principais eventos e atividades do nosso escritório",
    videoId: "-nf4-axagDA",
    date: "2025",
    category: "Eventos",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Eventos"
        description="Eventos, palestras e atividades institucionais promovidas ou integradas pelo Eufrauzino Advogados."
        path="/eventos"
      />
      <SiteHeader />
      <main>
        <section className="team-page-hero">
          <div className="container">
            <span className="eyebrow">Agenda institucional</span>
            <h1>Eventos</h1>
            <p>Acompanhe eventos, palestras e atividades promovidas ou integradas pelo Eufrauzino Advogados.</p>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container">
            {events.map((event) => (
              <article key={event.id} className="grid gap-10 border-y border-border py-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${event.videoId}/hqdefault.jpg`}
                    alt={`Capa do vídeo ${event.title}`}
                    width="480"
                    height="360"
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80"
                  />
                  <a href={`https://www.youtube.com/watch?v=${event.videoId}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 grid place-items-center bg-black/25 transition-colors hover:bg-black/45" aria-label={`Assistir ${event.title}`}>
                    <span className="grid h-20 w-20 place-items-center rounded-full border border-[#d8b77e] text-[#fffaf2]">
                      <Play size={28} fill="currentColor" aria-hidden="true" />
                    </span>
                  </a>
                </div>

                <div>
                  <span className="team-profile__oab">{event.category} · {event.date}</span>
                  <h2 className="mt-4 text-4xl text-primary">{event.title}</h2>
                  <p className="mt-4 leading-7 text-[#5f514c]">{event.description}</p>
                  <a className="button-outline-burgundy mt-8" href={`https://www.youtube.com/watch?v=${event.videoId}`} target="_blank" rel="noopener noreferrer">
                    Assistir no YouTube <ArrowUpRight size={17} aria-hidden="true" />
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
