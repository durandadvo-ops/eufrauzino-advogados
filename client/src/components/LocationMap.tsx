import { ArrowUpRight, MapPin } from "lucide-react";

export default function LocationMap() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Getulio+Cavalcante+136+Liberdade+Campina+Grande+PB";

  return (
    <div className="location-card">
      <img src="/assets/escritorio-localizacao.webp" alt="Fachada do escritório Eufrauzino Advogados" loading="lazy" decoding="async" />
      <div className="location-card__overlay" />
      <div className="location-card__content">
        <span className="eyebrow"><MapPin size={15} /> Escritório físico</span>
        <h3>Eufrauzino Advogados</h3>
        <p>Rua Getúlio Cavalcante, 136, Liberdade, Campina Grande/PB</p>
        <div>
          <a className="button-gold" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </div>
  );
}
