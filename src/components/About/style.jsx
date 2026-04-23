import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 2rem;

  figure {
    box-shadow:
      inset 3px 3px 3px var(--sys-color-shadow-brand),
      inset -3px -3px 3px var(--sys-color-shadow-brand);
    border-radius: 100%;
    max-width: 390px;
    max-height: 390px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: auto;
      max-width: 400px;
      border-radius: 80%;
      display: block;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    letter-spacing: 0.02rem;
    text-align: left;
    padding: 0 1rem;
    color: var(--theme-color);
    max-width: 720px;

    h1,
    h2,
    p {
      margin: 0;
    }

    h1 {
      font-size: clamp(2.8rem, 4vw, 4rem);
      line-height: 1.02;
      letter-spacing: -0.04em;
      margin-bottom: -0.2rem;
    }

    h2 {
      max-width: 30ch;
      font-size: clamp(1.45rem, 2.1vw, 2.15rem);
      line-height: 1.18;
      font-weight: 700;
      color: ${(props) =>
        props.theme.background === "#F5F5F5" ? "#232323" : "#f0f0f0"};
    }
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
  }

  .lead {
    font-size: 1.08rem;
    line-height: 1.75;
    color: var(--theme-color);
    max-width: 62ch;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .highlights span {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.7rem 1rem;
    border-radius: 14px;
    background: ${(props) =>
      props.theme.background === "#F5F5F5"
        ? "rgba(0, 0, 0, 0.04)"
        : "rgba(255, 255, 255, 0.05)"};
    border: 1px solid ${(props) =>
      props.theme.background === "#F5F5F5"
        ? "rgba(0, 0, 0, 0.08)"
        : "rgba(255, 255, 255, 0.12)"};
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: 0.5rem;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0.8rem 1.3rem;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border-color 0.3s ease,
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .actions a:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
  }

  .actions .primary {
    background-color: var(--primary-color);
    color: #fff;
    border: 1px solid var(--primary-color);
  }

  .actions .secondary,
  .actions .ghost {
    background-color: transparent;
    color: var(--theme-color);
    border: 1px solid ${(props) =>
      props.theme.background === "#F5F5F5"
        ? "rgba(0, 0, 0, 0.12)"
        : "rgba(255, 255, 255, 0.18)"};
  }

  .actions .secondary:hover,
  .actions .ghost:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  @media (min-width: 801px) {
    figure {
      max-width: 390px;
      max-height: 390px;

      img {
        width: 400px;
        max-width: none;
      }
    }
  }

  @media (max-width: 1084px) {
    gap: 40px;
    align-items: center;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    article {
      align-items: center;
      text-align: center;
      padding: 0;

      h1,
      h2,
      .lead {
        max-width: 100%;
      }
    }

    .highlights,
    .actions {
      justify-content: center;
    }

    figure {
      max-width: 350px;
      max-height: 350px;

      img {
        max-width: 350px;
      }
    }
  }

  @media (max-width: 375px) {
    padding: 6rem 1rem;
    gap: 30px;

    figure {
      max-width: 280px;
      max-height: 280px;

      img {
        max-width: 280px;
      }
    }

    article {
      gap: 1rem;

      h1 {
        font-size: 2.15rem;
      }

      h2 {
        font-size: 1.3rem;
      }

      p,
      .lead {
        font-size: 0.95rem;
      }
    }

    .eyebrow {
      font-size: 0.75rem;
      padding: 0.4rem 0.75rem;
    }

    .highlights span {
      width: 100%;
      justify-content: center;
    }

    .actions {
      width: 100%;
    }

    .actions a {
      width: 100%;
    }
  }
`;

export default Info;
