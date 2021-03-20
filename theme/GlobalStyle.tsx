import { createGlobalStyle } from "styled-components";
import theme from "./GlobalTheme";

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
    font: ${({ theme }) => `400 ${theme.rootFont.sm} ${theme.font}`};
    color: ${({ theme }) => theme.colors.light.main};
    background: ${({ theme }) => theme.colors.dark.main}

  }

textarea, input {
  font-family: ${({ theme }) => theme.font};
  outline: none;
}



`;
