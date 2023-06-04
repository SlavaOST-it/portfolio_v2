import styled from "styled-components";
import {theme} from "../../../../common/styles/Theme.styled";

// ===========================//
export const Logo = styled.svg`
  fill: ${theme.colors.secondary};
  width: 40px;
  height: 40px;
  transition: .3s;
`

// ===========================//
export const ContactItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  
 
  
  border: 3px solid ${theme.colors.secondary};
  border-radius: 85px;
  
  min-width: 200px;
  max-width: 250px;
  width: 100%;
  min-height: 100px;
  
  margin-bottom: 20px;
  transition: .3s;

  &:hover{
    border-color:  ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }
  
  &:hover svg{
    fill: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }
  
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;
    
    color: ${theme.colors.baseColor};
    font-size: 18px;
  }

  @media screen and ${theme.media.tablet} {
    max-width: 100%;
  }
`