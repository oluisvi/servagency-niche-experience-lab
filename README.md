# ServAgency — laboratório de demos por nicho

Este workspace reúne estudos demonstrativos para transformar oportunidades observadas em pesquisas e conversas da ServAgency em experiências digitais concretas. O catálogo é uma vitrine de possibilidades, não uma promessa de escopo ou de resultado.

## Como abrir

Abra `index.html` num servidor estático local. A estrutura usa apenas HTML, CSS e JavaScript; não precisa de dependências de build. O site precisa ser servido na raiz para que os caminhos absolutos funcionem.

## Demos implementadas

- **Casa Miga** (`/demos/casa-miga/`): padaria fictícia; apresentação de marca, menu, microanimação de croissant girando e cardápio ilustrativo.
- **FORMA LIVRE** (`/demos/forma-livre/`): loja fictícia de sneakers; produto demonstrativo com interação de arrasto, seleção de tamanho e catálogo ilustrativo.

## Projetos e oportunidades para próximas demos

A fila inicial cobre grupos presentes nas notas do Obsidian e nos relatórios de prospecção:

1. **Alimentação e hospitalidade:** Yaki Go / Yakisoba do Cowboy, Osteria Nonna Rosa, Pão do Pedro, Café na Bike, TEG Restaurante, Calçada da Villa, gourmet artesanal; pizzaria e pastelaria como conceitos setoriais.
2. **Moda e acessórios:** sneakers, bolsas/curadoria, eyewear/ótica, relojoaria e vintage.
3. **Serviços locais:** elétrica, hidráulica, geradores, manutenção residencial e assistência técnica.
4. **Espaços e serviços presenciais:** marcenaria/interiores, imobiliário, barbearia, estética e hospedagem/experiências.
5. **Produtos digitais:** educação e SaaS, com FlowDesk e outros projetos do portfólio como referências de capacidade.

Cada item precisa de sua própria direção artística e fluxo. As marcas de leads reais só devem aparecer em protótipos direcionados com informações e ativos conferidos; a vitrine pública deste catálogo usa conceitos fictícios.

## Referências aplicadas

- Materiais do Armazém de Prompts listados em `docs/fontes-e-diretrizes.md`.
- `GUIA_SITES_COM_VIDEO_E_SCROLL`: usar vídeo apenas quando filmagem/asset licenciado ajudar a narrativa; o presente ciclo privilegia CSS/ilustração para não bloquear a experiência.
- `ENTRADA_TEMATICA_SINCRONIZADA_COM_CARREGAMENTO_3D`: aplicar entrada sincronizada apenas quando houver Canvas/WebGL real; estes estudos não simulam preload 3D.
- `UNIVERSAL_ADAPTIVE_DESIGN_SYSTEM`: manter qualidade compartilhada e expressão independente, com reduced motion, mobile e performance considerados.
- `vibe-coding-toolkit`: aplicado como inspiração para preservar contratos existentes, documentar hipóteses/limites e evitar setup global indiscriminado. Toolkit: https://github.com/soumatheusgomes/vibe-coding-toolkit

## Limites

Marcas, produtos, texto comercial, menu, preços, disponibilidade e CTAs são fictícios/ilustrativos nas duas demos públicas. Não há checkout, reservas, pedido real, tracking, API, CMS ou integração de WhatsApp. As fotos/ilustrações são de estudo. Nenhuma métrica de performance ou conversão foi estabelecida.

## GitHub e Vercel

Este diretório iniciou sem commits, remotes ou aplicação. Integração Vercel conectada permite visualizar/gerir projetos e criar deployments a partir de arquivos, mas o deploy confiável requer projeto Git vinculado ou upload completo. A integração GitHub disponível lista repositórios e cria/atualiza arquivos apenas em repositório existente; não expõe criação de repositório. Registre aqui links quando a publicação estiver conectada.
