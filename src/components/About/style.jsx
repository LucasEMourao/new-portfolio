import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  /* Padrão de Seção */
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 2rem; /* Aumentado o padding vertical */

  figure {
    box-shadow: inset 3px 3px 3px var(--sys-color-shadow-brand), inset -3px -3px 3px var(--sys-color-shadow-brand);
    border-radius: 100%;
    max-width: 390px;
    max-height: 390px;

    img {
      width: 100%; /* Para telas menores */
      height: auto; /* Adicionado para manter a proporção */
      max-width: 400px; /* Mantém o tamanho máximo */
      border-radius: 80%;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0.1rem;
    text-align: justify;
    padding: 0 1rem;
    color: var(--theme-color);

    h2 {
      margin-bottom: 1.5rem; /* Aumentado */
    }

    p {
      margin-bottom: 1.5rem; /* Aumentado e usando margin-bottom */
    }

    .cvbutton {
      margin-top: 2rem; /* Aumentado */
      border-radius: 50px; /* Mais arredondado */
      padding: 0.75rem 1.5rem; /* Usando rem */
      font-size: 1.25rem; /* Ajustado */
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: transparent;
      border: 1px solid var(--primary-color);

      &:hover {
        background-color: var(--primary-color);
        transform: translateY(-5px); /* Move para cima */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

        a {
          color: #fff; /* Cor do texto no hover */
        }
      }

      &:active {
        transform: scale(0.95);
      }

      a {
        font-size: 1.25rem; /* Ajustado */
        color: var(--primary-color);
        font-weight: 700;
        transition: color 0.3s ease;
      }
    }
  }

  /* Estilos para telas maiores que 800px - Voltando ao original */
  @media (min-width: 801px) {
    figure {
      max-width: 390px;
      max-height: 390px;
      
      img {
        width: 400px; /* Valor original */
        max-width: none; /* Remover o max-width para telas grandes */
      }
    }
  }

  @media (max-width: 1084px) {
    align-items: center;
    height: 100%;
    gap: 40px;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    article {
      width: auto;
    }
    
    figure {
      max-width: 350px; /* Ajuste para telas menores */
      max-height: 350px;
      
      img {
        max-width: 350px;
      }
    }
  }
  
  /* Adicionado para telas menores que 375px */
  @media (max-width: 375px) {
    padding: 6rem 1rem; /* Reduzir padding lateral */
    gap: 30px;
    
    figure {
      max-width: 280px; /* Reduzir o tamanho máximo da figura */
      max-height: 280px;
      
      img {
        max-width: 280px; /* Reduzir o tamanho máximo da imagem */
      }
    }
    
    article {
      padding: 0 0.5rem; /* Reduzir padding lateral do artigo */
      
      h1, h2 {
        font-size: 1.5rem; /* Reduzir tamanho da fonte dos títulos */
      }
      
      p {
        font-size: 0.9rem; /* Reduzir tamanho da fonte dos parágrafos */
      }
      
      .cvbutton {
        font-size: 1rem; /* Reduzir tamanho da fonte do botão */
        padding: 0.5rem 1rem; /* Reduzir padding do botão */
        
        a {
          font-size: 1rem; /* Reduzir tamanho da fonte do link */
        }
      }
    }
  }
`;

export default Info;