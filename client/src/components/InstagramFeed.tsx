import { Instagram } from "lucide-react";

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-serif font-bold text-primary">
              Acompanhe-nos no Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das novidades, artigos e eventos do Eufrauzino Advogados
          </p>
        </div>

        {/* Instagram Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">
              Visite nosso perfil no Instagram para acompanhar conteúdo exclusivo
            </p>
            <a
              href="https://www.instagram.com/eufrauzinoadvogados?igsh=eWc1YzVscGo1Zmo4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @eufrauzinoadvogados
            </a>
          </div>

          {/* Instagram Feed Widget */}
          <div className="mt-8">
            <script
              async
              src="//www.instagram.com/embed.js"
            ></script>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/eufrauzinoadvogados/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: "0",
                width: "calc(100% - 2px)"
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href="https://www.instagram.com/eufrauzinoadvogados/?utm_source=ig_embed&utm_campaign=loading"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: "0",
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%"
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
