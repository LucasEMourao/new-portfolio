import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: var(--bgtheme-color);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, background-color 0.3s ease; /* Transição suave */

    @media (max-width: 900px){
        justify-content: space-between;
        padding: 1rem;
    }
`
export default Container;
