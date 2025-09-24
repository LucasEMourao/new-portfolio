import styled from "styled-components";

const Abilities = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--theme-color);
  gap: 2rem; /* Ajustado o gap */

  /* Padrão de Seção */
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 2rem; /* Aumentado o padding vertical */

  p {
    padding: 0 2rem; /* Usando rem */
    text-align: justify;
    max-width: 800px; /* Limitando a largura para melhor leitura */
  }
`;

const AbilityCards = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch; /* Para que os cards tenham a mesma altura */
  flex-wrap: wrap;
  gap: 2rem; /* Adicionado gap */
  padding: 2rem 0; /* Adicionado padding vertical */
`;

const AbilityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Centralizando o texto */
  border: 1px solid var(--theme-color);
  border-radius: 10px;
  padding: 2rem; /* Adicionado padding interno */
  width: 300px; /* Ajustado a largura */
  cursor: default;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra padrão */

  &:hover {
    transform: scale(1.05);
    border-color: var(--primary-color);
    color: var(--primary-color);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra mais forte no hover */
  }

  .icon {
    font-size: 4rem; /* Aumentado o tamanho do ícone */
    margin-bottom: 1.5rem; /* Espaçamento abaixo do ícone */
  }
`;

const Info = styled.div`
  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export { Abilities, AbilityCards, AbilityCard, Info };
