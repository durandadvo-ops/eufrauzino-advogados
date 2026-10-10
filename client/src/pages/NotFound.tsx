import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta path="/404" />
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="status-page">
        <div className="status-page__panel">
          <span className="status-page__code">404</span>
          <span className="eyebrow">Página não encontrada</span>
          <h1>O endereço informado não existe</h1>
          <p>
            A página pode ter sido removida ou o endereço pode ter sido digitado incorretamente.
          </p>
          <a className="button-burgundy" href="/">
            Voltar ao início <ArrowLeft size={17} />
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
