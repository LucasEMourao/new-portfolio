import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body{
        background-color: var(--bgtheme-color);
        font-family: 'Inter', sans-serif;
        line-height: 1.5;
        color: var(--theme-color);
    }

    h1, h2, h3 {
        font-weight: 700; /* Usando o peso "bold" que importamos */
        line-height: 1.2;
        margin-bottom: 1rem;
        transition: color 0.3s ease; /* Transição suave para mudança de cor */
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    p, a, li {
        font-weight: 400; /* Usando o peso "normal" que importamos */
        font-size: 1rem;
        color: var(--theme-color);
    }

    /* Adicionando transição aos links */
    a {
        text-decoration: none;
        transition: color 0.3s ease, background-color 0.3s ease; /* Transição suave para cor e fundo */
    }

    li{
        list-style: none;
    }

    :root{
        --primary-color:${(props) => props.theme.primaryColor || '#022d7a'};
        --theme-color:${(props) => props.theme.color};
        --bgtheme-color:${(props) => props.theme.background};
        
        /* New Semantic Tokens */
        --sys-color-surface-main: ${(props) => props.theme.tokens?.color.surface.main || props.theme.background};
        --sys-color-text-main: ${(props) => props.theme.tokens?.color.text.main || props.theme.color};
        --sys-color-text-secondary: ${(props) => props.theme.tokens?.color.text.secondary || '#555'};
        --sys-color-shadow-brand: ${(props) => props.theme.tokens?.color.shadow.brand || '#4096cf'};
    }
`
export default GlobalStyle;