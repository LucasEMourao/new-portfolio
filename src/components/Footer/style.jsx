import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: var(--bgtheme-color);
  border-top: 1px solid ${(props) => props.theme.borderColor || "#e0e0e0"};
  transition: border-color 0.3s ease, background-color 0.3s ease;
  gap: 1.5rem;

  h3 {
    color: var(--theme-color);
    font-size: 1.25rem;
    margin: 0;
  }

  ul {
    display: flex;
    gap: 1.5rem;

    li {
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.15);
      }

      a {
        display: flex;
        font-size: 2rem;
        color: var(--theme-color);
        transition: all 0.3s ease;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1.5rem 1rem 2rem;
  }
`;

export default FooterStyle;
