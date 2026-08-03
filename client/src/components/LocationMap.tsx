import { ArrowUpRight, MapPin } from "lucide-react";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Get%C3%BAlio+Cavalcante%2C+136%2C+Liberdade%2C+Campina+Grande%2C+PB";

export default function LocationMap() {
  return (
    <section className="location-block" aria-labelledby="location-title">
      <div className="location-block__heading">
        <span className="eyebrow">Endereço</span>
        <h2 id="location-title">Localização</h2>
        <div className="section-rule" />
      </div>

      <div className="location-card">
        <div className="location-card__content">
          <div>
            <span className="location-card__label">
              <MapPin size={16} aria-hidden="true" /> Escritório físico
            </span>
            <h3>Eufrauzino Advogados</h3>
            <p>Rua Getúlio Cavalcante, 136, Liberdade, Campina Grande/PB</p>
          </div>

          <a className="button-outline-burgundy" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="location-card__photo">
          <img
            src="/assets/escritorio.jpg?v=20260803-3"
            alt="Fachada do escritório Eufrauzino Advogados"
            width="480"
            height="270"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
