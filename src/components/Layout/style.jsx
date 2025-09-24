import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Altura mínima de 100% da tela */
`;

export const Main = styled.main`
  padding-top: 100px; /* Empurra o conteúdo para baixo do Header fixo */
  flex: 1; /* Faz o conteúdo principal crescer e ocupar o espaço disponível */
`;