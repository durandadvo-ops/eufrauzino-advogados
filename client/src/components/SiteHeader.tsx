import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { contact, normalizePath } from "@/data/site";

const links = [
  { label: "Início", href: "/" },
  { label: "O escritório", href: "/sobre/" },
  { label: "Atuação", href: "/servicos/" },
  { label: "Profissionais", href: "/equipe/" },
  { label: "Publicações", href: "/artigos/" },
  { label: "Eventos", href: "/eventos/" },
  { label: "Contato", href: "/#contato" },
];

export default function SiteHeader() {
  const [pathname] = useLocation();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobileNavigation = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };

    mobileNavigation.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="container site-header__inner">
        <a className="brand-lockup" href="/" aria-label="Ir para a página inicial">
          <span className="brand-lockup__name">Eufrauzino</span>
          <span className="brand-lockup__rule" />
          <span className="brand-lockup__descriptor">Advogados</span>
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="site-nav__link"
              aria-current={!link.href.includes("#") && normalizePath(pathname) === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a className="site-nav__phone" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com o escritório pelo WhatsApp">
            <Phone size={19} strokeWidth={1.5} />
          </a>
        </nav>

        <button
          ref={menuButton}
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
        <nav ref={mobileNavigation} className="mobile-nav" id="mobile-navigation" aria-label="Navegação móvel">
          <div className="container mobile-nav__inner">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="mobile-nav__link" aria-current={!link.href.includes("#") && normalizePath(pathname) === link.href ? "page" : undefined}>
                {link.label}
              </a>
            ))}
            <a className="mobile-nav__cta" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              Fale com o escritório
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
