import styled from "styled-components";

const Navigation = styled.nav`
  input {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    li {
      padding: 0.25rem;
      font-size: 1.05rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--theme-color);
      transition: color 0.3s ease, transform 0.3s ease;

      a {
        text-decoration: none;
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 42px;
        padding: 0.65rem 0.95rem;
        border-radius: 999px;
        border: 1px solid transparent;
        transition:
          color 0.3s ease,
          background-color 0.3s ease,
          border-color 0.3s ease,
          transform 0.3s ease;
      }

      a.active {
        color: var(--primary-color);
        background: ${(props) =>
          props.theme.background === "#F5F5F5"
            ? "rgba(2, 45, 122, 0.08)"
            : "rgba(255, 255, 255, 0.06)"};
        border-color: ${(props) =>
          props.theme.background === "#F5F5F5"
            ? "rgba(2, 45, 122, 0.14)"
            : "rgba(255, 255, 255, 0.14)"};
      }

      &:hover {
        color: var(--primary-color);
      }

      &:hover a {
        transform: translateY(-1px);
      }

      &:active {
        transform: scale(0.98);
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
    height: 3px;
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
    position: static;

    label {
      z-index: 11;
      display: block;
      position: relative;
    }

    ul {
      position: fixed;
      top: 0;
      right: -300px;
      width: min(280px, 78vw);
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      gap: 1.25rem;
      background-color: var(--bgtheme-color);
      padding: 2rem;
      box-shadow: -12px 0 32px rgba(0, 0, 0, 0.16);
      transition: right 0.4s ease;
      display: flex;
      border-left: 1px solid ${(props) =>
        props.theme.background === "#F5F5F5"
          ? "rgba(0, 0, 0, 0.08)"
          : "rgba(255, 255, 255, 0.12)"};
    }

    input:checked ~ ul {
      right: 0;
    }

    .menu {
      display: block;
    }

    ul li {
      width: 100%;
    }

    ul li a {
      width: 100%;
    }
  }

  @media (max-width: 375px) {
    ul {
      width: min(220px, 78vw);
      padding: 1rem;
    }

    ul li {
      font-size: 1rem;
      padding: 0.2rem;
    }
  }

  @media (max-width: 320px) {
    ul {
      width: 180px;
    }
  }
`;

export default Navigation;
