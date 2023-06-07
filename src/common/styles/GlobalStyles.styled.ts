import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled";


export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 10px;
    background-color: #565656;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.activeColor.primary_color};
    border-radius: 6px;
  }

  a, a:visited, a:hover {
    text-decoration: none;
    color: ${theme.colors.baseColor};
  }

  ul li {
    list-style: none;
  }

  button {
    font-size: 16px;
    line-height: 1.7;
    font-weight: 400;
    border: none;
  }

  p {
    color: ${theme.colors.secondary};
  }

  body {
    background-color: ${theme.colors.background};

    color: ${theme.colors.baseColor};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }
`