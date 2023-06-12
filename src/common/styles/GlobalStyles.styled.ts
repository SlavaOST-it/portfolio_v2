import {createGlobalStyle} from "styled-components";


export const GlobalStyled = createGlobalStyle<{ theme: any}>`
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
    background-color: ${props => props.theme.colors.activeColor.primary_color};
    border-radius: 6px;
  }

  a, a:visited, a:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.baseColor};
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
    color: ${props => props.theme.colors.secondary};
  }

  body {
    background-color: ${props => props.theme.colors.background};

    color: ${props => props.theme.colors.baseColor};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }
`