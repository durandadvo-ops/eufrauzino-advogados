import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__monogram" aria-hidden="true">E</span>
          <div>
            <p className="site-footer__name">Eufrauzino Advogados</p>
            <p className="site-footer__text">Advocacia tributária com atuação técnica, estratégica e integrada.</p>
          </div>
        </div>

        <div>
          <p className="site-footer__eyebrow">Navegação</p>
          <div className="site-footer__links">
            <a href="/">Início</a>
            <a href="/#areas">Áreas de atuação</a>
            <a href="/equipe">Equipe</a>
            <a href="/artigos">Publicações</a>
          </div>
        </div>

        <div>
          <p className="site-footer__eyebrow">Contato</p>
          <div className="site-footer__contact">
            <a href="https://wa.me/5583986366658" target="_blank" rel="noopener noreferrer"><Phone size={16} /> +55 83 98636-6658</a>
            <a href="mailto:eufrauzinoadvogados@outlook.com"><Mail size={16} /> eufrauzinoadvogados@outlook.com</a>
            <span><MapPin size={16} /> Campina Grande, Paraíba</span>
            <a href="https://www.instagram.com/eufrauzinoadvogados/" target="_blank" rel="noopener noreferrer"><Instagram size={16} /> @eufrauzinoadvogados</a>
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
