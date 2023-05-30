import styled from "styled-components";
import {theme} from "../../../../common/styles/Theme.styled";


export const CircleSkill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 120px;
  height: 150px;

  border: 3px solid ${theme.colors.secondary};
  border-radius: 85px;
  padding: 54px 0 48px 0;
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
  svg{
    display: block;
    width: 60px;
    height: 60px;    
    fill: ${theme.colors.baseColor};

    transition: .3s;
  }
`

// =============================//
export const SkillBlock =styled.section`
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