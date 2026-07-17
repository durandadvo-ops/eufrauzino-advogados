import { ExternalLink, MapPin } from "lucide-react";

export default function LocationMap() {
  const url = "https://www.google.com/maps/search/?api=1&query=Rua+Getulio+Cavalcante+136+Liberdade+Campina+Grande+PB";

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
      <div className="relative">
        <img
          src="/assets/escritorio-localizacao.webp"
          alt="Fachada do escritório Eufrauzino Advogados"
          className="block h-[420px] w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur-sm">
            <MapPin className="h-4 w-4" />
            Escritório físico
          </div>

          <h4 className="mb-2 text-2xl font-serif font-bold">Eufrauzino Advogados</h4>
          <p className="mb-4 max-w-xl text-sm text-white/90 md:text-base">
            Rua Getúlio Cavalcante, 136, Liberdade, Campina Grande/PB
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Abrir no Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
