# O Periódico - Documentação do Projeto

## Visão geral

O Periódico é uma aplicação frontend construída com Angular que simula um portal de notícias com foco em leitura limpa e navegação simples. O projeto apresenta uma listagem de artigos, página de leitura, seção de favoritos e layout editorial com cabeçalho e rodapé fixos.

## Objetivo

Entregar uma experiência de leitura digital com estética minimalista, priorizando tipografia, hierarquia visual e conteúdo textual.

## Funcionalidades

1. Página inicial com resumo de artigos.
2. Navegação por rotas com Angular Router.
3. Página de visualização de artigo.
4. Cálculo de tempo estimado de leitura por artigo.
5. Persistência de favoritos no navegador usando localStorage.
6. Página dedicada para visualizar artigos favoritos.
7. Layout global com cabeçalho e rodapé reutilizáveis.

## Tecnologias e bibliotecas

- Angular 21 (standalone components)
- TypeScript
- Angular Router
- Angular HttpClient (configurado no app)
- Tailwind CSS via CDN
- CSS global customizado (tipografia, animações e utilitários)
- Netlify (configuração de build/deploy presente no projeto)

## Estrutura principal

- Rotas da aplicação: app.routes.ts
- Configuração global da aplicação: app.config.ts
- Bootstrap e composição do layout raiz: src/main.ts
- Componentes de interface:
  - src/app/app-header
  - src/app/app-footer
  - src/app/home-page
  - src/app/post-summary
  - src/app/post-viewer
  - src/app/favorites-viewer
- Estilos globais: src/global_styles.css

## Links importantes

### Código-fonte

- Repositório no GitHub: https://github.com/andrewnationdev/site-noticias-angular

### Versão em deploy

- Edição/execução online (StackBlitz): https://stackblitz.com/~/github.com/andrewnationdev/site-noticias-angular

Observação: o projeto também possui configuração de deploy para Netlify no arquivo netlify.toml.

## Como executar localmente

1. Instalar dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm run start
```

3. Gerar build de produção:

```bash
npm run build
```

## Pontos de evolução sugeridos

1. Integrar os artigos a uma API real em vez de dados estáticos.
2. Implementar lógica completa de adicionar/remover favoritos na página de artigo.
3. Exibir contador dinâmico de favoritos no cabeçalho.
4. Criar página 404 dedicada em vez de fallback para visualizador de post.
5. Adicionar testes de integração para fluxos de navegação e favoritos.