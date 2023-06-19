import React from 'react';
import sprite from "../../../assets/icons/sprite.svg"

import {PATH} from "../../../utils/routes/routes";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {TitlePage, Wrapper} from "../../../common/styles/Wrapper.styled";
import {EffectAnimation} from "../../../common/components/effectAnimation/EffectAnimation";


export const AboutMe = () => {
    return (
        <Wrapper id={PATH.aboutMe}>
            <NamePage nameBlock={"ABOUT ME"} svgImg={`${sprite}#man`}/>

            <EffectAnimation>
                <TitlePage>
                    Frontend developer is a <br/>
                    <span>creative engineer</span> who combines knowledge of design and programming
                </TitlePage>
            </EffectAnimation>

            <EffectAnimation>
                <p>
                    Hi, I am a front-end developer with
                    experience in building SPA applications using
                    React / Redux / TypeScript in the team. My main
                    interest is programming and I'm
                    constantly expanding my skills,
                    To become a professional in this
                    field. I have a good understanding of UX/UI
                    design and can work in a team with
                    designers to create
                    better visual solutions for
                    users.
                </p>

                <p>
                    I am constantly learning
                    new technologies and tools,
                    to stay abreast of the latest
                    trends in my field and
                    improve my skills. I'm ready to
                    to join your team and
                    contribute to the achievement of
                    common goals.
                </p>
            </EffectAnimation>
        </Wrapper>
    );
};
