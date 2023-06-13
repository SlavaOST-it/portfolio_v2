import styled from "styled-components";

// ===========================//
export const Logo = styled.svg<{theme: string}>`
  fill: ${props => props.theme.colors.secondary};
  width: 40px;
  height: 40px;
  transition: .3s;
`

// ===========================//
export const ContactItemStyle = styled.a<{theme: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;

  gap: 10px;
  
  border: 3px solid ${props => props.theme.colors.secondary};
  border-radius: 85px;
  
  min-width: 200px;
  max-width: 250px;
  width: 100%;
  min-height: 100px;
  
  margin-bottom: 20px;
  cursor: pointer;
  transition: .3s;

  &:hover{
    border-color:  ${props => props.theme.colors.activeColor.primary_color};
    transition: .3s;
  }
  
  &:hover svg{
    fill: ${props => props.theme.colors.activeColor.primary_color};
    transition: .3s;
  }
  
  p{
    margin: 0;
    color: ${props => props.theme.colors.baseColor};
    font-size: 18px;
  }

  @media screen and ${props => props.theme.media.tablet} {
    max-width: 100%;
  }
`