import perfil from "../../assets/images/perfil.jpg";
import Info from "./style";
import cv from "../../assets/files/CV.pdf";

const About = () => {
  return (
    <Info>
      <figure>
        <img src={perfil} alt="image profile" />
      </figure>

      <article>
        <h1>Sou o Lucas E. Mourão</h1>
        <h2>Desenvolvedor FullStack</h2>
        <p>
          Olá! Me chamo Lucas Eleuthério Mourão e sou um Desenvolvedor Full
          Stack Júnior. Sou apaixonado pela área de tecnologia desde jovem e
          tenho certeza de que posso contribuir em qualquer time com minhas
          habilidades técnicas e pessoais. Além de aprender muito com eles,
          acredito que um trabalho em equipe bem feito pode gerar grandes
          resultados.
        </p>

        <p>
          Estou sempre me desafiando com novos projetos e participando de
          comunidades de programação para buscar feedback de outros
          desenvolvedores, além de tentar ajudar também. Trago experiências e
          soft skills adquiridas quando trabalhei como vendedor e gosto muito de
          jogos, filmes, séries, animes, atividades físicas e da natureza
        </p>

        <div className="cvbutton">
          <a href={cv} target="_blank" aria-label="Baixar currículo em PDF">
            <strong>Veja meu CV</strong>
          </a>
        </div>
      </article>
    </Info>
  );
};

export default About;
