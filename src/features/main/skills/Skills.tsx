import React from 'react';

import sprite from "../../../assets/icons/sprite.svg";

import {SkillItem} from "./skill/SkillItem";
import { SkillsBlock } from './Skills.styled';
import {PATH} from "../../../utils/routes/routes";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {TitlePage, Wrapper} from "../../../common/styles/Wrapper.styled";


export const Skills = () => {
    return (
        <Wrapper id={PATH.skills}>
            <NamePage nameBlock={"SKILLS"} svgImg={`${sprite}#skills`}/>
            <TitlePage>
                My <span>Advantages</span>
            </TitlePage>

            <SkillsBlock>
                <SkillItem idImgSkill={"java-script"} nameSkill={"JavaScript"}/>
                <SkillItem idImgSkill={"react"} nameSkill={"React"}/>
                <SkillItem idImgSkill={"typescript"} nameSkill={"TypeScript"}/>
                <SkillItem idImgSkill={"redux"} nameSkill={"Redux / Toolkit"}/>
                <SkillItem idImgSkill={"html"} nameSkill={"HTML / CSS / SCSS"}/>
                <SkillItem idImgSkill={"server"} nameSkill={"Rest API / Axios"}/>
                <SkillItem idImgSkill={"material-ui"} nameSkill={"Material UI / Styled component"}/>
                <SkillItem idImgSkill={"test"} nameSkill={"Unit tests"}/>
                <SkillItem idImgSkill={"postman"} nameSkill={"Postman"}/>
                <SkillItem idImgSkill={"git"} nameSkill={"Git / GitHub"}/>
            </SkillsBlock>
        </Wrapper>
    );
};
