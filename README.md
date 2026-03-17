# MKWorks

One-page institucional site preparado para deploy estatico no Cloudflare Pages.

## Estrutura

- `index.html`: pagina principal
- `style.css`: estilos da landing page
- `script.js`: formulario que abre o WhatsApp com a mensagem preenchida
- `_headers`: headers de cache e seguranca para Cloudflare Pages
- `wrangler.jsonc`: configuracao basica de deploy para Cloudflare Pages

## Publicacao no Cloudflare Pages

### Opcao 1: Direct Upload

1. Abra o painel do Cloudflare Pages.
2. Crie um novo projeto.
3. Escolha `Direct Upload`.
4. Envie o conteudo da pasta `MKWorks`.
5. Defina `/` como raiz do site.

### Opcao 2: Git

1. Suba a pasta `MKWorks` para um repositorio Git.
2. No Cloudflare Pages, conecte o repositorio.
3. Configure:
   - Build command: vazio
   - Build output directory: `.`
4. Publique o projeto.

## Dominio

Se o dominio ja estiver no Cloudflare:

1. Abra o projeto no Pages.
2. Va em `Custom domains`.
3. Adicione o dominio principal e, se quiser, o `www`.
4. Confirme os registros DNS sugeridos pelo Cloudflare.

## Observacoes

- O site e estatico e nao depende de build.
- O formulario de contato abre uma conversa no WhatsApp com a mensagem montada no navegador do visitante.
- Se depois quisermos adicionar analytics, imagens otimizadas ou formularios mais avancados, podemos evoluir sem trocar de host.
