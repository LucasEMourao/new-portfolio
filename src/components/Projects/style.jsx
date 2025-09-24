import styled from "styled-components";

const ProjectsMain = styled.main`
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

const SectionProjects = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem; /* Adicionado gap */
  padding: 2rem 0; /* Adicionado padding vertical */
`;

const CardProjects = styled.div`
  text-align: center;
  width: 280px; /* Aumentado a largura */
  height: 360px; /* Aumentado a altura */
  border-radius: 10px;
  border: 1px solid var(--theme-color);
  opacity: 0.8;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra padrão */

  &:hover {
    transform: scale(1.05);
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra mais forte no hover */
  }

  a {
    color: var(--theme-color);
    text-decoration: none;
    padding: 1.5rem; /* Aumentado o padding interno */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Ajustado para espaçar melhor */

    img {
      max-width: 150px;
      height: 150px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.4;
    }

    p:last-child {
      font-weight: 700; /* Destaque para o link */
    }
  }
`;

export { ProjectsMain, SectionProjects, CardProjects };
