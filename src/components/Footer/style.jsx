import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 69px;
  margin: auto;
  h3 {
    color: var(--theme-color);
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      &:hover {
        transform: scale(1.15);
        transition: all .3s ease;
      }

      a {
        display: flex;
        font-size: 2rem;
        padding: 4px 4px;
        margin-right: 8px;
        border-radius: 100%;
        color: var(--theme-color);
        &:hover {
          color: var(--primary-color);
          transition: all .3s ease;
        }
      }
    }
  }
`;

export default FooterStyle;
