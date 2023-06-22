import React, {FC} from "react";

import sprite from "../../../../assets/icons/sprite.svg"
import {CircleSkill, SkillBlock} from "./SkillItem.styled";


type SkillType = {
    idImgSkill: string
    nameSkill: string
}
export const SkillItem: FC<SkillType> = ({idImgSkill, nameSkill}) => {
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
