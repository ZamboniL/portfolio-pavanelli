import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit
  }
  html, body, #__next {
    font: ${({ theme }) => `400 ${theme.rootFont.sm} ${theme.font}`};
    color: ${({ theme }) => theme.colors.light.main};
    background: ${({ theme }) => theme.colors.principal.main};
    scroll-behavior: smooth;
    height: 100%
  }


  textarea, button, input {
    font-family: ${({ theme }) => theme.font};
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {

    html, body, #__next {
      font: ${({ theme }) => `400 ${theme.rootFont.md} ${theme.font}`};
    }
}


`;
