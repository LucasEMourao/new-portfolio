import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem 2rem;
  background-color: var(--bgtheme-color);
  border-top: 1px solid ${(props) => props.theme.borderColor || '#e0e0e0'};
  transition: border-color 0.3s ease, background-color 0.3s ease; /* Transição suave */

  h3 {
    color: var(--theme-color);
    font-size: 1.25rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;

    li {
      transition: all .3s ease;

      &:hover {
        transform: scale(1.15);
      }

      a {
        display: flex;
        font-size: 2rem;
        color: var(--theme-color);
        transition: all .3s ease;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default FooterStyle;
