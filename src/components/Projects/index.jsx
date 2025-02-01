import adviceApp from "../../assets/images/advice-app.png";
import github from "../../assets/images/github.png";
import movieflix from "../../assets/images/movieflix.png";
import pokedex from "../../assets/images/pokedex.png";
import { ProjectsMain, SectionProjects, CardProjects } from "./style";

const Projects = () => {
  return (
    <ProjectsMain>
      <h2>Projetos</h2>
      <p>
        Em todos os meus projetos, do mais básico aos mais complexos, busco
        aplicar e consolidar o meu conhecimento adquirido até aqui. Procuro me
        desafiar sempre em projetos pessoais e também busco feedback de outros
        desenvolvedores para aprimorar cada vez mais meu conhecimento. Cada
        projeto é uma nova oportunidade de aprendizado. Hoje, com experiências
        mais sólidas no Front End, tendo HTML, CSS e JavaScript como base,
        aprendi frameworks como o React e também o TypeScript, que é uma
        extensão do JavaScript. Admito que me apaixonei pelo React e pelo
        TypeScript e pretendo evoluir cada vez mais. Já no Back End, tive
        experiências com Node.js, Express, PostgreSQL, DBeaver e MongoDB. Achei
        incrível a criação de APIs e toda a estrutura que fica por trás do
        servidor. O que posso dizer é que acredito ser essencial para um
        desenvolvedor Front End saber ao menos o básico do Back End e
        vice-versa.
      </p>

      <SectionProjects>
        <CardProjects>
          <a
            target="_blank"
            href="https://github.com/LucasEMourao/desafio-fetch-github-api"
          >
            <div>
              <img src={github} alt="Projeto busca pelo API do GitHub" />
              <h3>Projeto Busca pelo API do Github</h3>
              <p>Projeto feito com HTML, CSS e Javascript </p>
              <p>🔗 Ver repositório no GitHub</p>
            </div>
          </a>
        </CardProjects>
        <CardProjects>
          <a
            target="_blank"
            href="https://github.com/LucasEMourao/projeto-app-gerador-conselhos"
          >
            <div>
              <img src={adviceApp} alt="Projeto app gerador de conselohs" />
              <h3>Gerador de conselhos</h3>
              <p>Projeto feito com HTML, CSS e Javascript </p>
              <p>🔗 Ver repositório no GitHub</p>
            </div>
          </a>
        </CardProjects>
        <CardProjects>
          <a
            target="_blank"
            href="https://github.com/LucasEMourao/quest-pokedex"
          >
            <div>
              <img src={pokedex} alt="Projeto pokedex" />
              <h3>Projeto Pokedex</h3>
              <p>Projeto feito usando HTML, CSS, JavaScript e React</p>
              <p>🔗 Ver repositório no GitHub</p>
            </div>
          </a>
        </CardProjects>
        <CardProjects>
          <a
            target="_blank"
            href="https://github.com/LucasEMourao/movieflix-api"
          >
            <div>
              <img src={movieflix} alt="Projeto Movieflix" />
              <h3>Projeto Movieflix API</h3>
              <p>Projeto feito com Typescript, Node.js e outras ferramentas</p>
              <p>🔗 Ver repositório no GitHub</p>
            </div>
          </a>
        </CardProjects>
      </SectionProjects>
    </ProjectsMain>
  );
};

export default Projects;
