import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--bgtheme-color);       
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    :root{
        --primary-color:#033ca5;     
        --theme-color:${(props) => props.theme.color};
        --bgtheme-color:${(props) => props.theme.background};
    }
`
export default GlobalStyle;