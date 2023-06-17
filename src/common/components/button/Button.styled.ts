import styled from "styled-components";


export const ButtonStyle = styled.button<{theme: string}>`
  background-color: ${props => props.theme.colors.activeColor.primary_color};
  text-align: center;
  padding: 11px 58px 10px 58px;
  display: inline-flex;
  
  
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  text-transform: uppercase;
  border: 2px solid ${props => props.theme.colors.activeColor.primary_color};
  
  cursor: pointer;  
  transition: .3s;

  position: relative;
  z-index: 2;
  
  &:hover{
    border: 2px solid ${props => props.theme.colors.activeColor.primary_color};
    background-color: ${props => props.theme.colors.activeColor.dark_color};
    color: ${props => props.theme.colors.activeColor.primary_color};
  }

  &:hover a{
    color: ${props => props.theme.colors.activeColor.primary_color};
  }
  
  a{
    color: #000;
    text-align: center;
  }

  svg{
    transition: .3s;
  }
  
  &:hover svg{
    fill: ${props => props.theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  @media screen and ${props => props.theme.media.mobile}{
    padding: 5px 25px;
  }
`