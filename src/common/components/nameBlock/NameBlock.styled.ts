import styled from "styled-components";

export const NameBlockStyle = styled.div<{theme: string}>`
  font-size: 12px;
  color: ${props => props.theme.colors.baseColor};
  text-transform: uppercase;
  font-weight: 300;
  
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: 9px 20px;
  border-radius: 30px;
  margin-bottom: 40px;
  display: inline-flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;   
    
    fill: ${props => props.theme.colors.baseColor};
  }
  
  h3{
    font-size: 12px;;
  }
`