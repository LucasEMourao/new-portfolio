import { Link } from "react-router-dom";
import perfil from "../../assets/images/perfil.jpg";
import Info from "./style";
import cv from "../../assets/files/CV.pdf";

const About = () => {
  return (
    <Info>
      <figure>
        <img src={perfil} alt="Retrato de Lucas E. Mourao" />
      </figure>

      <article>
        <span className="eyebrow">Full Stack, IA aplicada e automacao</span>
        <h1>Lucas E. Mourao</h1>
        <h2>Desenvolvedor Full Stack focado em sistemas, IA aplicada e automacao.</h2>

        <p className="lead">
          Atuo no cruzamento entre <strong>frontend moderno</strong>,{" "}
          <strong>backend tipado</strong> e <strong>automacoes com IA</strong>.
          Gosto de transformar processos manuais, fluxos confusos e interfaces
          sem direcao em produtos mais claros, robustos e faceis de evoluir.
        </p>

        <div className="highlights" aria-label="Principais competencias">
          <span>React, Next.js e TypeScript para UX de alto nivel</span>
          <span>Fastify, Prisma, PostgreSQL e JWT no backend</span>
          <span>Automacao, integracoes e IA aplicada a processos reais</span>
        </div>

        <p>
          Meus projetos mais fortes hoje passam por e-commerce full stack,
          pipelines com IA, automacao de processos e arquitetura de software.
          Tambem trago experiencia de comunicacao e colaboracao de outras areas,
          o que me ajuda a construir bem em time e pensar alem do codigo.
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
            aria-label="Abrir curriculo em PDF"
          >
            Ver CV
          </a>
        </div>
      </article>
    </Info>
  );
};

export default About;
