import styled from "styled-components";

const Navigation = styled.nav`
  input {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem; /* Adicionado gap para espaçamento */

    li {
      padding: 0.5rem;
      font-size: 1.25rem; /* Ajustado o tamanho da fonte */
      font-weight: 700;
      cursor: pointer;
      color: var(--theme-color);
      transition: all 0.3s ease;

      &:hover {
        color: var(--primary-color);
        transform: scale(1.05);
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  .menu {
    display: none;
    width: 60px;
    height: 60px;
    cursor: pointer;
  }

  .hamburguer {
    background-color: var(--primary-color);
    position: relative;
    display: block;
    width: 30px;
    height: 3px; /* Aumentada a espessura */
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;

    &::before,
    &::after {
      background-color: var(--primary-color);
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.2s ease-in-out;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }
  }

  /* Estilos para o ícone de fechamento (X) */
  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer::before {
    transform: rotate(90deg);
    top: 0;
  }

  input:checked ~ label .hamburguer::after {
    transform: rotate(90deg);
    bottom: 0;
  }

  @media (max-width: 900px) {
    position: static; /* Alterado para static */

    label {
      z-index: 11;
      display: block; /* Garantir que o label seja exibido */
      position: relative; /* Garantir que o z-index funcione */
    }

    ul {
      position: fixed; /* Alterado para fixed */
      top: 0;
      right: -300px; /* Começa fora da tela */
      width: 250px; /* Aumentada a largura */
      height: 100vh;
      flex-direction: column; /* Itens em coluna */
      justify-content: center; /* Centraliza verticalmente */
      gap: 2rem; /* Espaçamento entre os itens */
      background-color: var(--bgtheme-color);
      padding: 2rem;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      transition: right 0.4s ease; /* Transição suave */
      display: flex; /* Mantém flexível */
    }

    input:checked ~ ul {
      right: 0; /* Move para dentro da tela */
    }

    .menu {
      display: block;
    }
  }
  
  /* Ajustes para telas menores que 375px */
  @media (max-width: 375px) {
    ul {
      width: 200px; /* Reduzido de 250px para 200px */
      padding: 1rem; /* Reduzido de 2rem para 1rem */
    }
    
    ul li {
      font-size: 1.1rem; /* Reduzido de 1.25rem para 1.1rem */
      padding: 0.4rem; /* Reduzido de 0.5rem para 0.4rem */
    }
  }
  
  /* Ajustes específicos para telas de 320px */
  @media (max-width: 320px) {
    ul {
      width: 180px; /* Reduzido de 200px para 180px */
    }
  }
`;

export default Navigation;
