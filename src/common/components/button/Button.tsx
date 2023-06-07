import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";


export const ButtonStyle = styled.button`
  background-color: ${theme.colors.activeColor.primary_color};
  text-align: center;
  padding: 11px 58px 10px 58px;
  display: inline-flex;
  
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  text-transform: uppercase;
  border: 2px solid ${theme.colors.activeColor.primary_color};
  
  cursor: pointer;  
  transition: .3s;
  
  
  &:hover{
    border: 2px solid ${theme.colors.activeColor.primary_color};
    background-color: ${theme.colors.activeColor.dark_color};
    color: ${theme.colors.activeColor.primary_color};
  }

  &:hover a{
    color: ${theme.colors.activeColor.primary_color};
  }
  
  a{
    color: ${theme.colors.activeColor.dark_color};
    text-align: center;
  }

  svg{
    transition: .3s;
  }
  
  &:hover svg{
    fill: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  @media screen and ${theme.media.mobile}{
    padding: 5px 25px;
  }
`