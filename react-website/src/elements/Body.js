import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        transition: all 0.3s ease;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.color};
    }
`;
