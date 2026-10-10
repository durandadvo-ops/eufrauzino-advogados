# Eufrauzino Advogados

Site institucional em React e TypeScript, publicado no GitHub Pages em
https://eufrauzinoadvogados.com/.

## Desenvolvimento

Use Node.js 24 e a versão de pnpm declarada em `package.json`.

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

## Validação e publicação

```sh
pnpm check
pnpm audit --audit-level=moderate
VITE_BASE_PATH=/ pnpm build
pnpm check:site
```

O build renderiza as seis páginas em HTML e gera `404.html`, `sitemap.xml` e
`.nojekyll` dentro de `dist/public`. Cada página contém seu próprio título,
descrição e URL canônica antes de carregar JavaScript. As URLs internas usam
barra final para corresponder às pastas publicadas pelo GitHub Pages.

Os links internos carregam as páginas diretamente. O JavaScript é dividido por
página e hidrata o HTML existente. O formulário abre o WhatsApp com a mensagem
preenchida; o visitante precisa revisar e enviar a mensagem no aplicativo.

O workflow de publicação executa as verificações antes do deploy ao receber
alterações em `main`. Não copie `index.html` para `404.html` e não edite os
arquivos gerados em `dist`.

## Conteúdo e imagens

- Contatos e metadados: `client/src/data/site.ts`.
- Perfis, formações e imagens da equipe: `client/src/data/team.ts`.
- Conteúdo das páginas: `client/src/pages`.
- Imagens publicadas: `client/public/assets`, em WebP com variantes responsivas.
- Fotos originais preservadas: `source-assets`, fora da pasta publicada.

Os retratos têm variantes de 160, 320 e 640 pixels de largura, além da versão
integral. A fachada tem variantes de 480 e 960 pixels e uma versão integral.
Mantenha o enquadramento original ao gerar novas versões e atualize `srcSet`,
largura e altura quando substituir uma imagem.
