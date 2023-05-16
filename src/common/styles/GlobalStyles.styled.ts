import {createGlobalStyle} from "styled-components";
import {theme} from "common/styles/Theme.styled";


export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.background};
  }
`