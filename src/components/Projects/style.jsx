import styled from "styled-components";

const ProjectsMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--theme-color);
  gap: 40px;

  h2 {
    font-size: 2rem;
  }
  p {
    padding: 0 38px 0 38px;
    margin-top: 16px;
    font-size: 1.5rem;
    text-align: justify;
  }
`;

const SectionProjects = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
`;

const CardProjects = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 32px;
  width: 250px;
  height: 320px;
  display: flex;
  border-radius: 10px;
  border: 1px solid var(--theme-color);
  opacity: 0.8;
  transition: ease 0.3s;
  &:hover {
    transform: scale(1.05);
    background-color: var(--primary-color);
    border: var(--theme-color);
  }

  a {
    color: var(--theme-color);
    img {
      max-width: 150px;
      height: 150px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export { ProjectsMain, SectionProjects, CardProjects };
