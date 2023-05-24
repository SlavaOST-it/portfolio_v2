import styled from "styled-components";
import {theme} from "../../common/styles/Theme.styled";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //width: 100%;
  max-width: 350px;
  padding: 24px 0;

  border-radius: 30px;
  border: 1px solid #565656;

  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);

  gap: 20px;
  z-index: 20;

  li{
    width: 55px;
  }
  
  li:hover svg {
    fill: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }
  
  
  svg{
    
    fill: ${theme.colors.secondary};
    transition: .3s;
  }
`