import botflix from "../assets/images/botflix.png";
import n8nPipeline from "../assets/images/n8n-workflow.png";
import openCut from "../assets/images/opencut.png";
import syntaxWear from "../assets/images/syntax-wear.jpg";

export const projects = [
  {
    id: "opencut",
    variant: "featured",
    badge: "System Architecture",
    title: "OpenCut: Editor de Vídeo Nativo com IA",
    href: "https://github.com/LucasEMourao/OpenCut/tree/simplified-editor",
    image: openCut,
    imageAlt: "OpenCut AI Pipeline Diagram",
    paragraphs: [
      <>
        A edição de vídeo é 80% corte manual repetitivo. Estendi o OpenCut
        (via branch <strong>simplified-editor</strong>) criando um pipeline
        Auto-Cut AI-first que elimina esse trabalho braçal.
      </>,
      <>
        Diferente de editores web padrão, esta versão customizada utiliza{" "}
        <strong>Bun</strong> para orquestrar processos{" "}
        <strong>FFmpeg nativos</strong> diretamente no host (WSL2),
        contornando os limites de memória do navegador. O sistema integra a{" "}
        <strong>Gemini File API</strong> para &quot;assistir&quot; e
        &quot;ouvir&quot; a filmagem,
        gerando listas de corte baseadas em contexto semântico.
      </>,
    ],
    tags: [
      "Next.js 15",
      "Bun Runtime",
      "Native FFmpeg",
      "Gemini 2.5 Flash",
      "Turborepo",
    ],
    links: [
      {
        label: "Ver Arquitetura no GitHub (Branch simplified-editor)",
        href: "https://github.com/LucasEMourao/OpenCut/tree/simplified-editor",
      },
    ],
  },
  {
    id: "syntax-wear",
    variant: "standard",
    badge: "Full Stack E-commerce",
    title: "Syntax Wear",
    href: "https://syntax-wear-app-zeta.vercel.app",
    image: syntaxWear,
    imageAlt: "Campanha visual da marca Syntax Wear com tênis em destaque",
    description: (
      <>
        E-commerce full stack de calçados com catálogo paginado, detalhe de
        produto, autenticação por e-mail e Google, carrinho global e API REST
        documentada. O frontend em <strong>React 19</strong> consome uma API
        própria em <strong>Fastify + Prisma</strong>, com{" "}
        <strong>JWT</strong>, <strong>PostgreSQL</strong> e testes no backend.
      </>
    ),
    tags: [
      "React 19",
      "TypeScript",
      "TanStack Router",
      "Fastify",
      "Prisma",
      "PostgreSQL",
    ],
    links: [
      {
        label: "Live App",
        href: "https://syntax-wear-app-zeta.vercel.app",
      },
      {
        label: "Frontend Repo",
        href: "https://github.com/LucasEMourao/syntax-wear-app",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/LucasEMourao/syntax-wear-api",
      },
      {
        label: "API Docs",
        href: "https://syntax-wear-api-z8qa.onrender.com/api-docs",
      },
    ],
  },
  {
    id: "botflix-pro",
    variant: "standard",
    badge: "Product UX & AI Agent",
    title: "Botflix Pro",
    href: "https://github.com/LucasEMourao/botflix-pro",
    image: botflix,
    imageAlt: "Botflix Pro Interface",
    description: (
      <>
        Uma plataforma cinematográfica com concierge de IA conversacional.
        Desenvolvi um agente com memória de contexto que entende nuances como
        &quot;algo inspirador, mas não clichê&quot;. Foco total em UX/UI de alto
        nível com animações fluidas e layout responsivo.
      </>
    ),
    tags: ["React", "Vite", "Typescript", "n8n Workflow"],
    links: [
      {
        label: "Ver projeto",
        href: "https://github.com/LucasEMourao/botflix-pro",
      },
    ],
  },
  {
    id: "nfe-automator",
    variant: "standard",
    badge: "Business Automation Impact",
    title: "NFe Automator",
    href: "https://github.com/LucasEMourao/n8n-nfe-extractor",
    image: n8nPipeline,
    imageAlt: "n8n Invoice Extractor Workflow",
    imageStyle: {
      objectFit: "contain",
      padding: "1rem",
      background: "#111",
    },
    description: (
      <>
        Extração financeira Zero-Touch. Projetei um pipeline que ingere NFs
        desestruturadas (PDF) via e-mail. Utilizando{" "}
        <strong>Gemini Vision</strong>, o sistema &quot;enxerga&quot; o
        documento para
        categorizar impostos e totais, inserindo JSON validado diretamente no
        banco de dados. Redução estimada de 95% no tempo manual.
      </>
    ),
    tags: ["n8n Self-hosted", "Gemini Vision", "Postgres", "Gmail API"],
    links: [
      {
        label: "Ver projeto",
        href: "https://github.com/LucasEMourao/n8n-nfe-extractor",
      },
    ],
  },
];
