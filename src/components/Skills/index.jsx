import {
  FaGitAlt,
  FaGithub,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
} from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { Abilities, AbilityCards, AbilityCard, Info } from "./style";

const Skills = () => {
  return (
    <Abilities>
      <h2>Habilidades</h2>
      <p>
        Sou um <strong>Desenvolvedor Full Stack Júnior</strong>, tenho
        experiência em HTML, CSS, JavaScript, TypeScript e React. Confesso que
        amei conhecer o React; é uma biblioteca muito interessante e legal de
        trabalhar. Uso o Git como sistema de versionamento de código e mantenho
        meus repositórios no GitHub. Também tenho conhecimentos em Node.js,
        PostgreSQL, DBeaver e outras ferramentas/frameworks do backend, como
        Express e Prisma, entre outros. Desenvolvo projetos individuais para
        amigos e familiares próximos, sempre aplicando práticas de clean code e
        responsividade, entregando o meu melhor.
      </p>
      <AbilityCards>
        <AbilityCard>
          <FaHtml5 className="icon" />
          <Info>
            <p>
              HTML, é a linguagem fundamental da web que estrutura e organiza o
              conteúdo das páginas, permitindo a inclusão de textos, imagens e
              links para uma navegação interativa.
            </p>
          </Info>
        </AbilityCard>
        <AbilityCard>
          <FaCss3Alt className="icon" />
          <Info>
            <p>
              CSS é uma linguagem de estilo que permite definir a apresentação
              visual de documentos HTML, controlando aspectos como layout, cores
              e fontes.
            </p>
          </Info>
        </AbilityCard>
        <AbilityCard>
          <FaJs className="icon" />
          <Info>
            <p>
              JavaScript é uma linguagem de programação de tipagem fraca, que
              permite a criação de páginas web interativas e dinâmicas, sendo
              uma das principais tecnologias da web junto com HTML e CSS.
            </p>
          </Info>
        </AbilityCard>
        <AbilityCard>
          <FaReact className="icon" />
          <Info>
            <p>
              React é uma biblioteca JS desenvolvida para construir interfaces
              de usuário eficientes, permitindo a criação de componentes
              reutilizáveis e alta performance.
            </p>
          </Info>
        </AbilityCard>
        <AbilityCard>
          <BiLogoTypescript className="icon" />
          <Info>
            <p>
              TypeScript é uma linguagem de programação de código que atua como
              em conjunto do JavaScript, adicionando tipagem forte e recursos
              avançados para facilitar o desenvolvimento de aplicações robustas
              e escaláveis.
            </p>
          </Info>
        </AbilityCard>
        <AbilityCard>
          <FaGitAlt className="icon" />
          <Info>
            <p>
              Git é um sistema de controle de versões distribuído, criado em
              2005, e permite o gerenciamento eficiente de alterações em
              arquivos e colaboração entre desenvolvedores.
            </p>
          </Info>
        </AbilityCard>
        <AbilityCard>
          <FaGithub className="icon" />
          <Info>
            <p>
              GitHub é uma plataforma de hospedagem de código-fonte que utiliza
              o sistema de controle de versão Git, permitindo a colaboração
              entre desenvolvedores em projetos de software.
            </p>
          </Info>
        </AbilityCard>
        <AbilityCard>
          <FaNode className="icon" />
          <Info>
            <p>
              Node.js é um ambiente de execução JavaScript de código aberto e
              multiplataforma que permite a criação de aplicações escaláveis e
              rápidas no lado do servidor.
            </p>
          </Info>
        </AbilityCard>
      </AbilityCards>
    </Abilities>
  );
};

export default Skills;
