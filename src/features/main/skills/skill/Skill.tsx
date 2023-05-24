import React, {FC} from "react";
import styled from "styled-components";

import sprite from "../../../../assets/icons/sprite.svg"

import {theme} from "../../../../common/styles/Theme.styled";


type SkillType = {
    idImgSkill: string
    nameSkill: string
}
export const Skill: FC<SkillType> = ({idImgSkill, nameSkill}) => {

    return (
        <SkillBlock>
            <CircleSkill>
                <svg>
                    <use xlinkHref={`${sprite}#${idImgSkill}`}/>
                </svg>
            </CircleSkill>

            <h4>{nameSkill}</h4>
        </SkillBlock>
    )
}


const CircleSkill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  max-width: 190px;
  border: 3px solid ${theme.colors.secondary};
  border-radius: 85px;
  padding: 54px 0 48px 0;
  margin-bottom: 20px;
  transition: .3s;
  
  &:hover{
    border-color:  ${theme.colors.activeColor.primary_color};
  }
  
  svg{
    display: block;
    
    fill: ${theme.colors.baseColor};
  }
`

const SkillBlock =styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`