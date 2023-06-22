import React from 'react';

import sprite from "../../../assets/icons/sprite.svg";

import {PATH} from "../../../utils/routes/routes";

import {SkillItem} from "./skill/SkillItem";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";

import {SkillsBlock} from './Skills.styled';
import {TitlePage, Wrapper} from "../../../common/styles/Wrapper.styled";
import {EffectAnimation} from "../../../common/components/effectAnimation/EffectAnimation";


export const Skills = () => {
    return (
        <Wrapper id={PATH.skills}>
            <NamePage nameBlock={"SKILLS"} svgImg={`${sprite}#skills`}/>

            <EffectAnimation>
                <TitlePage>
                    My <span>Advantages</span>
                </TitlePage>
            </EffectAnimation>

            <EffectAnimation>
                <SkillsBlock>
                    <EffectAnimation direction={"right"}>
                        <SkillItem idImgSkill={"java-script"} nameSkill={"JavaScript"}/>
                    </EffectAnimation>
                    <SkillItem idImgSkill={"react"} nameSkill={"React"}/>
                    <SkillItem idImgSkill={"typescript"} nameSkill={"TypeScript"}/>
                    <SkillItem idImgSkill={"redux"} nameSkill={"Redux / Toolkit"}/>
                    <SkillItem idImgSkill={"html"} nameSkill={"HTML / CSS / SCSS"}/>
                    <SkillItem idImgSkill={"server"} nameSkill={"Rest API / Axios"}/>
                    <SkillItem idImgSkill={"material-ui"} nameSkill={"Material UI / Styled component"}/>
                    <EffectAnimation>
                        <SkillItem idImgSkill={"test"} nameSkill={"Unit tests"}/>
                    </EffectAnimation>
                    <SkillItem idImgSkill={"postman"} nameSkill={"Postman"}/>
                    <EffectAnimation>
                        <SkillItem idImgSkill={"git"} nameSkill={"Git / GitHub"}/>
                    </EffectAnimation>
                </SkillsBlock>
            </EffectAnimation>
        </Wrapper>
    );
};
