import styled from "styled-components";

const Navigation = styled.nav`
  input {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: 19px;
      padding: 8px;
      font-size: 1.5rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--theme-color);

      &:hover {
        color: var(--primary-color);
        border-radius: 48px;
        transform: scale(1.05);
        transition: all 0.3s ease;
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
  }

  .hamburguer {
    background-color: var(--primary-color);
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;

    &::before {
      background-color: var(--primary-color);
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.2s ease-in-out;
      top: -10px;
    }

    &::after {
      background-color: var(--primary-color);
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.2s ease-in-out;
      bottom: -10px;
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    input {
      &:checked ~ label .hamburguer {
        transform: rotate(45deg);
      }
      &:checked ~ label .hamburguer::before {
        transform: rotate(90deg);
        top: 0;
      }
      &:checked ~ label .hamburguer::after {
        transform: rotate(90deg);
        bottom: 0;
      }
    }

    label {
      position: absolute;
      right: 0;
      top: 13px;
      z-index: 1;
    }

    ul {
      height: 100vh;
      display: none;
      width: 200px;
      background-color: var(--bgtheme-color);
      padding: 70px 20px 20px 20px;

      li {
        margin-bottom: 30px;
        text-align: center;
      }
    }

    .menu {
      display: block;
      align-self: flex-end;
    }
    input {
      &:checked ~ ul {
        display: block;
      }
    }
  }
`;

export default Navigation;
