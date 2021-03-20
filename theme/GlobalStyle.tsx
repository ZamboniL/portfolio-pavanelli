import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  html, body, #__next {
    height: 100%
  }

  #__next {
    background: ${({ theme }) => theme.colors.dark.main}
  }

`;
