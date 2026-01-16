import styled from "styled-components";

const ProjectsMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--theme-color);
  gap: 4rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  /* Semantic Tokens / CSS Variables applied locally */
  --is-light: ${(props) => (props.theme.background === "#F5F5F5" ? "1" : "0")};

  /* Surfaces */
  --surface-card: ${(props) =>
    props.theme.background === "#F5F5F5"
      ? "rgba(0, 0, 0, 0.03)"
      : "rgba(255, 255, 255, 0.05)"};
      
  --surface-card-hover: ${(props) =>
    props.theme.background === "#F5F5F5"
      ? "rgba(0, 0, 0, 0.06)"
      : "rgba(255, 255, 255, 0.08)"};

  --surface-card-featured: ${(props) =>
    props.theme.background === "#F5F5F5"
      ? "rgba(0, 0, 0, 0.05)"
      : "rgba(255, 255, 255, 0.08)"};

  /* Borders */
  --border-subtle: ${(props) =>
    props.theme.background === "#F5F5F5"
      ? "rgba(0, 0, 0, 0.08)"
      : "rgba(255, 255, 255, 0.15)"};
      
  --border-strong: ${(props) =>
    props.theme.background === "#F5F5F5"
      ? "rgba(0, 0, 0, 0.15)"
      : "rgba(255, 255, 255, 0.3)"};

  /* Typography */
  --text-secondary: ${(props) =>
    props.theme.background === "#F5F5F5" ? "#555555" : "#cccccc"};

  /* Badges */
  --badge-bg: ${(props) =>
    props.theme.background === "#F5F5F5"
      ? "rgba(0, 0, 0, 0.06)"
      : "rgba(255, 255, 255, 0.1)"};
      
  --badge-border: ${(props) =>
    props.theme.background === "#F5F5F5"
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(255, 255, 255, 0.2)"};

  --badge-text: ${(props) =>
    props.theme.background === "#F5F5F5" ? "var(--theme-color)" : "inherit"};

  padding: 6rem 2rem;

  p {
    padding: 0 1rem;
    text-align: center;
    max-width: 800px;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;


const SectionFeatures = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

const FeaturedCard = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--surface-card-featured);
  border: 1px solid var(--border-strong);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: 
    transform 0.4s ease,
    box-shadow 0.4s ease,
    border-color 0.4s ease;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: stretch;
    min-height: 450px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
    border-color: var(--primary-color);
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: radial-gradient(
      circle at top left,
      rgba(0, 120, 255, 0.15),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const MediaContainer = styled.div`
  position: relative;
  flex: 1;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 300px;

  @media (min-width: 900px) {
    flex: 1.2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  @media (min-width: 900px) {
    &::after {
      top: 0;
      bottom: 0;
      right: 0;
      left: auto;
      width: 1px;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.25),
        transparent
      );
    }
  }

  /* Esconde o divisor quando o card inteiro entra em hover */
  ${FeaturedCard}:hover &::after {
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    transition: 
      transform 0.6s ease,
      filter 0.6s ease;
  }

  ${FeaturedCard}:hover & img {
    transform: scale(1.06);
    filter: brightness(1.1) contrast(1.05);
  }
`;


const ContentContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  text-align: left;

  h2 {
    font-size: 2rem;
    color: var(--primary-color);
    margin: 0;
    transition: transform 0.3s ease;    
  }

  ${FeaturedCard}:hover & h2 {
    transform: translateX(4px);
  }

  p {
    padding: 0;
    text-align: left;
    margin: 0;
    font-size: 1rem;
    color: var(--text-secondary);
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background: var(--badge-bg);
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.85rem;
    font-family: monospace;
    color: var(--badge-text);
    border: 1px solid var(--badge-border);
  }
`;

const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-color: var(--primary-color);
  }

  .image-wrapper {
    width: 100%;
    height: 220px;
    background: #000;
    overflow: hidden;
    position: relative;

    &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .image-wrapper img {
    transform: scale(1.05);
  }

  &:hover .image-wrapper::after {
    opacity: 0;
  } 

  .content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;

    h3 {
      font-size: 1.5rem;
      color: var(--primary-color);
      margin: 0;
    }

    p {
      padding: 0;
      text-align: left;
      font-size: 0.95rem;
      margin: 0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Badge = styled.span`
  background-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export {
  ProjectsMain,
  SectionFeatures,
  FeaturedCard,
  MediaContainer,
  ContentContainer,
  TechList,
  GridTwoColumns,
  ProjectCard,
  Badge
};
