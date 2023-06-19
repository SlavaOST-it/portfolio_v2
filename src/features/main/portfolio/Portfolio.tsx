import React from 'react';

import sprite from "../../../assets/icons/sprite.svg";

import {projects} from "./projects/projects";
import {ProjectItem} from "./projectItem/ProjectItem";

import {PATH} from "../../../utils/routes/routes";

import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {TitlePage, Wrapper} from "../../../common/styles/Wrapper.styled";
import {EffectAnimation} from "../../../common/components/effectAnimation/EffectAnimation";


export const Portfolio = () => {
    return (
        <Wrapper id={PATH.portfolio}>
            <NamePage nameBlock={"PORTFOLIO"} svgImg={`${sprite}#portfolio`}/>

            <EffectAnimation>
                <TitlePage>
                    Featured <span>Projects</span>
                </TitlePage>
            </EffectAnimation>

            <div>
                {projects.map((el, index) =>
                    <EffectAnimation key={index}>
                        <ProjectItem
                            key={index}
                            img={el.img}
                            href={el.href}
                            title={el.title}
                            gradient1={el.gradient1}
                            gradient2={el.gradient2}
                            description={el.description}
                        />
                    </EffectAnimation>
                )}
            </div>
        </Wrapper>
    );
};
