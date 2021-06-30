import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.app_bg};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;
  }

  typography {
    background: ${({ theme }) => theme.typography_color};
    transition: all 0.30s linear;
  }

  `;
