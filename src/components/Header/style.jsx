import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;    

    @media (max-width: 900px){
        justify-content: center;
    }
`
export default Container;
