import  adviceApp  from "../../assets/images/advice-app.png";
import  github  from "../../assets/images/github.png";
import  movieflix  from "../../assets/images/movieflix.png";
import  pokedex  from "../../assets/images/pokedex.png";
import { ProjectsMain, SectionProjects, CardProjects } from "./style";


const Projects = () => {
  return (
    <ProjectsMain>
      <h2>Projetos</h2>
      <p>
        Em todos os meus projetos do mais básico aos mais complexos busco
        aplicar e consolidar o meu conhecimento adquirido até aqui. Procuro me
        desafiar sempre em projetos pessoais, e também busco feedbacks de outros
        desenvolvedores para aprimorar cada vez mais meu conhecimento. Cada
        projeto é uma nova oportunidade de aprendizado. Hoje com experiências
        mais sólidas no FrontEnd, com HTML,CSS, JavaScript sendo a base, aprendi
        frameworks como o React, e também o TypeScript uma extensão do JS.
        Admito que me apaixonei pelo React e Typescript e pretendo evoluir cada
        vez mais. Já com o BackEnd, tive experiências com o Node.js, Express,
        PostgreeSQL, DBeaver e MongoDB. Achei incrível a criação de API's, e
        tuda estrutura que fica por de trás do servidor. E o que eu posso dizer
        é que acredito ser essencial para um Desenvolvedor FrontEnd saber ao
        menos o básico do Backend e vice-versa.{" "}
      </p>

      <SectionProjects>
        <CardProjects>
          <a target="_blank" href="https://github.com/LucasEMourao/desafio-fetch-github-api">
            <div>
              <img src={github} alt="Projeto busca pelo API do GitHub" />
              <h3>Projeto Busca pelo API do Github</h3>
              <p>Projeto feito com HTML, CSS e Javascript </p>
              <p>🔗 Ver repositório no GitHub</p>
            </div>
          </a>
        </CardProjects>
        <CardProjects>
          <a target="_blank" href="https://github.com/LucasEMourao/projeto-app-gerador-conselhos">
            <div>
              <img src={adviceApp} alt="Projeto app gerador de conselohs" />
              <h3>Gerador de conselhos</h3>
              <p>Projeto feito com HTML, CSS e Javascript </p>
              <p>🔗 Ver repositório no GitHub</p>
            </div>
          </a>
        </CardProjects>
        <CardProjects>
          <a target="_blank" href="https://github.com/LucasEMourao/quest-pokedex">
            <div>
              <img src={pokedex} alt="Projeto pokedex" />
              <h3>Projeto Pokedex</h3>
              <p>Projeto feito usando HTML, CSS, JavaScript e React</p>
              <p>🔗 Ver repositório no GitHub</p>
            </div>
          </a>
        </CardProjects>
        <CardProjects>
          <a target="_blank" href="https://github.com/LucasEMourao/movieflix-api">
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
