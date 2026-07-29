import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const whatsappUrl = "https://wa.me/5583986366658";

export default function SiteHeader() {
  const [pathname, navigate] = useLocation();
  const [open, setOpen] = useState(false);

  const goTo = (target: string) => {
    setOpen(false);
    if (target.startsWith("/#") && pathname === "/") {
      document.getElementById(target.slice(2))?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.location.href = target;
  };

  const links = [
    { label: "O escritório", href: "/sobre" },
    { label: "Atuação", href: "/#areas" },
    { label: "Profissionais", href: "/equipe" },
    { label: "Publicações", href: "/artigos" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <button className="brand-lockup" onClick={() => navigate("/")} aria-label="Ir para a página inicial">
          <span className="brand-lockup__name">Eufrauzino</span>
          <span className="brand-lockup__rule" />
          <span className="brand-lockup__descriptor">Advogados</span>
        </button>

        <nav className="site-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <button key={link.label} onClick={() => goTo(link.href)} className="site-nav__link">
              {link.label}
            </button>
          ))}
          <a className="site-nav__phone" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com o escritório pelo WhatsApp">
            <Phone size={19} strokeWidth={1.5} />
          </a>
        </nav>

        <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <div className="container mobile-nav__inner">
            {links.map((link) => (
              <button key={link.label} onClick={() => goTo(link.href)} className="mobile-nav__link">
                {link.label}
              </button>
            ))}
            <a className="mobile-nav__cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Fale com o escritório
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
