import perfil from "../../assets/images/perfil.jpg";
import Info from "./style";
import cv from "../../assets/files/CV.pdf"

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
          <strong>
            Olá! Me chamo Lucas E. Mourão e sou um Desenvolvedor FullStack
            Júnior!
          </strong>
          Sou apaixonado com a área de tecnologia desde novo, e tenho certeza
          que posso contribuir em qualquer time com as minhas habilidades
          tecnicas e pessoais, além de aprender muito com eles também. Gosto de
          aprender coisas novas e estou sempre buscar me aprimorar.
        </p>

        <p>
          Estou sempre me desafiando com novos projetos e participando de
          comunidades de programação para buscar feedback de outros
          desenvolvedores e desenvolvedoras, além de tentar ajudar essas pessoas
          com o que eu já aprendi. E curto muito jogos, filmes, séries, animes,
          atividades físicas e a natureza.
        </p>

        <div className="cvbutton">
          <a href={cv} target="_blank" ><strong>Veja meu CV</strong></a>
        </div>
      </article>
    </Info>
  );
};

export default About;
