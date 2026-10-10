import { contact } from "@/data/site";
import { Mail, MapPin, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img className="site-footer__monogram" src="/assets/eufrauzino-monograma.svg" alt="" aria-hidden="true" />
          <div>
            <p className="site-footer__name">Eufrauzino Advogados</p>
            <p className="site-footer__text">Advocacia tributária com atuação técnica, estratégica e integrada.</p>
          </div>
        </div>

        <div>
          <p className="site-footer__eyebrow">Navegação</p>
          <div className="site-footer__links">
            <a href="/">Início</a>
            <a href="/sobre/">O escritório</a>
            <a href="/servicos/">Áreas de atuação</a>
            <a href="/equipe/">Equipe</a>
            <a href="/artigos/">Publicações</a>
            <a href="/eventos/">Eventos</a>
          </div>
        </div>

        <div>
          <p className="site-footer__eyebrow">Contato</p>
          <div className="site-footer__contact">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><Phone size={16} /> {contact.phone}</a>
            <a href={`mailto:${contact.email}`}><Mail size={16} /> {contact.email}</a>
            <span><MapPin size={16} /> {contact.address}</span>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon size={16} /> @eufrauzinoadvogados</a>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Eufrauzino Advogados. Todos os direitos reservados.</p>
        <p>OAB/PB — comunicação institucional.</p>
      </div>
    </footer>
  );
}
