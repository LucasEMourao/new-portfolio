import styled from "styled-components";

const Abilities = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--theme-color);
  padding: 32px;

  h2 {
    font-size: 4rem;
  }
  p {
    margin-top: 16px;
    font-size: 1.5rem;
    text-align: justify;
  }
`;

const AbilityCards = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;  
`;

const AbilityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--theme-color);
  border-radius: 10px;
  margin: 8px;
  width: 400px;
  height: 350px;
  cursor: default;
  transition: ease 0.3s;
  &:hover {
    transform: scale(1.05);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .icon {
    min-height: 80px;
    min-width: 80px;
  }
`;

const Info = styled.div`
  width: 380px;

  p {
    margin: 20px 10px;
  }
`;

export { Abilities, AbilityCards, AbilityCard, Info };
