import { Link } from "react-router-dom";
import perfil from "../../assets/images/perfil.jpg";
import Info from "./style";
import cv from "../../assets/files/CV.pdf";

const About = () => {
  return (
    <Info>
      <figure>
        <img src={perfil} alt="Retrato de Lucas E. Mourão" />
      </figure>

      <article>
        <span className="eyebrow">Full Stack, IA aplicada e automação</span>
        <h1>Lucas E. Mourão</h1>
        <h2>Desenvolvedor Full Stack focado em sistemas, IA aplicada e automação.</h2>

        <p className="lead">
          Atuo no cruzamento entre <strong>frontend moderno</strong>,{" "}
          <strong>backend tipado</strong> e <strong>automações com IA</strong>.
          Gosto de transformar processos manuais, fluxos confusos e interfaces
          sem direção em produtos mais claros, robustos e fáceis de evoluir.
        </p>

        <div className="highlights" aria-label="Principais competências">
          <span>React, Next.js e TypeScript para UX de alto nível</span>
          <span>Fastify, Prisma, PostgreSQL e JWT no backend</span>
          <span>Automação, integrações e IA aplicada a processos reais</span>
        </div>

        <p>
          Meus projetos mais fortes hoje passam por e-commerce full stack,
          pipelines com IA, automação de processos e arquitetura de software.
          Também trago experiência de comunicação e colaboração de outras áreas,
          o que me ajuda a construir bem em time e pensar além do código.
        </p>

        <div className="actions">
          <Link to="/projects" className="primary">
            Ver projetos
          </Link>
          <a
            href="https://github.com/LucasEMourao"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
            aria-label="Visitar perfil do Lucas no GitHub"
          >
            GitHub
          </a>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost"
            aria-label="Abrir currículo em PDF"
          >
            Ver CV
          </a>
        </div>
      </article>
    </Info>
  );
};

export default About;
