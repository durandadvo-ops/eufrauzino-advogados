import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

const whatsappUrl = "https://wa.me/5583986366658";

const links = [
  { label: "Início", href: "/" },
  { label: "O escritório", href: "/sobre" },
  { label: "Atuação", href: "/#areas" },
  { label: "Profissionais", href: "/equipe" },
  { label: "Publicações", href: "/artigos" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contato", href: "/#contato" },
];

export default function SiteHeader() {
  const [pathname, navigate] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const goTo = (target: string) => {
    setOpen(false);
    const [path, hash] = target.split("#");
    const destination = path || "/";

    if (!hash) {
      navigate(destination);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollToSection = () => {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `${destination}#${hash}`);
      }
    };

    if (pathname !== destination) {
      navigate(destination);
      window.setTimeout(scrollToSection, 80);
    } else {
      scrollToSection();
    }
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <button className="brand-lockup" type="button" onClick={() => goTo("/")} aria-label="Ir para a página inicial">
          <span className="brand-lockup__name">Eufrauzino</span>
          <span className="brand-lockup__rule" />
          <span className="brand-lockup__descriptor">Advogados</span>
        </button>

        <nav className="site-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => goTo(link.href)}
              className="site-nav__link"
              aria-current={!link.href.includes("#") && pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
          <a className="site-nav__phone" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com o escritório pelo WhatsApp">
            <Phone size={19} strokeWidth={1.5} />
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav" id="mobile-navigation">
          <div className="container mobile-nav__inner">
            {links.map((link) => (
              <button key={link.label} type="button" onClick={() => goTo(link.href)} className="mobile-nav__link">
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
