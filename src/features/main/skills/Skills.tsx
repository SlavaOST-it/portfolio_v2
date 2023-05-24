import React, {FC} from 'react';
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import sprite from "../../../assets/icons/sprite.svg";
import {Wrapper} from "../../../common/styles/Wrapper.styled";
import {Skill} from "./skill/Skill";
import styled from "styled-components";

export const Skills = () => {
    return (
        <Wrapper>
            <NamePage nameBlock={"MY SKILLS"} svgImg={`${sprite}#skills`}/>
            <h2>
                My <span>Advantages</span>
            </h2>

            <SkillsBlock>
                <Skill idImgSkill={"react"} nameSkill={"React"}/>
                <Skill idImgSkill={"js"} nameSkill={"JavaScript"}/>
                <Skill idImgSkill={"ts"} nameSkill={"TypeScript"}/>
                <Skill idImgSkill={"redux"} nameSkill={"Redux / Toolkit"}/>
                <Skill idImgSkill={"html"} nameSkill={"HTML / CSS / SCSS"}/>
                <Skill idImgSkill={"restAPI"} nameSkill={"Rest API / Axios"}/>
                <Skill idImgSkill={"materialUI"} nameSkill={"Material UI / Styled component"}/>
                <Skill idImgSkill={"unitTest"} nameSkill={"Unit tests / Postman"}/>
            </SkillsBlock>

        </Wrapper>
    );
};


const SkillsBlock = styled.div`

  display: flex;
  flex-wrap: wrap;
  
  gap: 30px;
  //flex: 0 0 auto;
  //width: 25%;
`