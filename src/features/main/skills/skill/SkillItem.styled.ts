import styled from "styled-components";
import {darkTheme} from "../../../../common/styles/Theme.styled";


export const CircleSkill = styled.div<{theme: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 120px;
  height: 150px;
  
  border: 3px solid ${props => props.theme.colors.activeColor.primary_color};
  border-radius: 85px;
  padding: 54px 0 48px 0;
  margin-bottom: 20px;  
  
  svg{
    display: block;
    width: 60px;
    height: 60px;    
    fill: ${props => props.theme.colors.baseColor};
  }
`

// =============================//
export const SkillBlock =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-basis: 15%;
  
  max-width: 300px;

  h4 {
    font-weight: 300;
    text-align: center;
  }
`