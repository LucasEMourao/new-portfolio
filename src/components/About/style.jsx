import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 16px;
  gap: 140px;
  

  figure {
    box-shadow: inset 3px 3px 3px #4096cf, inset -3px -3px 3px #4096cf;
    border-radius: 100%;
    max-width: 390px;
    max-height: 390px;
    position: relative;

    img {
      width: 400px;
      border-radius: 80%;
    }
  }

  article {    
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
    text-align: justify;
    padding: 0 16px;
    color: var(--theme-color);
    h2 {
      margin-bottom: 20px;
    }
    p {
      margin: 10px 0;
    }
    .cvbutton {
      margin-top: 18px;
      border-radius: 20px;
      padding: 6px;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        background-color: var(--primary-color);
        transform: scale(1.05);
        transition: all 0.3s ease;
      }
      a {
        font-size: 1.5rem;
        color: var(--theme-color);
      }
    }
  }

  @media (max-width: 1084px) {
    align-items: center;
    height: 100%;
    gap: 40px;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    article {
      width: auto;
    }
  }
`;

export default Info;
