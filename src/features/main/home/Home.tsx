import React from 'react';

import sprite from "../../../assets/icons/sprite.svg"

import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {Wrapper} from "../../../common/styles/Wrapper.styled";

import {PATH} from "../../../utils/routes/routes";


export const Home = () => {
    return (
        <Wrapper id={PATH.home}>
            <NamePage nameBlock={"INTRODUCE"} svgImg={`${sprite}#home`}/>

            <h1>Hi, I'm <span>Slava</span>,
                <br/> Front-end Developer
            </h1>

            <p>I'm a front-end developer and create beautiful and functional interfaces for web applications. I love
                what I do. It's that simple!</p>

        </Wrapper>
    );
};

