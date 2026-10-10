import { ArrowUpRight, MapPin } from "lucide-react";
import { contact } from "@/data/site";

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
            <p>{contact.address}</p>
          </div>

          <a className="button-outline-burgundy" href={contact.maps} target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="location-card__photo">
          <img
            src="/assets/fachada-escritorio.webp"
            srcSet="/assets/fachada-escritorio-480.webp 480w, /assets/fachada-escritorio-960.webp 960w, /assets/fachada-escritorio.webp 1672w"
            sizes="(min-width: 1280px) 1184px, (min-width: 1024px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            alt="Fachada do escritório Eufrauzino Advogados"
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
