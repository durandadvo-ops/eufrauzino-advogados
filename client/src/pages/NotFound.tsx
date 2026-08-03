import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Página não encontrada"
        description="A página solicitada não foi encontrada no site do Eufrauzino Advogados."
        path="/404"
        noIndex
      />
      <SiteHeader />
      <main className="status-page">
        <div className="status-page__panel">
          <span className="status-page__code">404</span>
          <span className="eyebrow">Página não encontrada</span>
          <h1>O endereço informado não existe</h1>
          <p>
            A página pode ter sido removida ou o endereço pode ter sido digitado incorretamente.
          </p>
          <button className="button-burgundy" type="button" onClick={() => navigate("/")}>
            Voltar ao início <ArrowLeft size={17} />
          </button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
