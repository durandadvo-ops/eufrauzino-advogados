import { ExternalLink, MapPin } from "lucide-react";

export default function LocationMap() {
  const url = "https://www.google.com/maps/search/?api=1&query=Rua+Getulio+Cavalcante+136+Liberdade+Campina+Grande+PB";
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-8 text-center min-h-64 flex flex-col items-center justify-center">
      <MapPin className="h-10 w-10 text-primary mb-4" />
      <h4 className="font-serif text-xl font-bold text-primary">Eufrauzino Advogados</h4>
      <p className="mt-2 text-muted-foreground">Rua Getúlio Cavalcante, 136, Liberdade, Campina Grande/PB</p>
      <a href={url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
        Abrir no Google Maps <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
