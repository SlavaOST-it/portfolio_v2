import React from 'react';

import sprite from "../../../assets/icons/sprite.svg"

import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {Wrapper} from "../../../common/styles/Wrapper.styled";

import {PATH} from "../../../utils/routes/routes";
import {Name, Prof} from "./Home.styled";


export const Home = () => {
    return (
        <Wrapper id={PATH.home}>
            <header>
                <NamePage nameBlock={"INTRODUCE"} svgImg={`${sprite}#home`}/>

                <Name>Hi, I'm <span>Slava</span>,
                    <br/> <Prof>Front-end Developer</Prof>
                </Name>

                <p>I'm a front-end developer and create beautiful and functional interfaces for web applications. I love
                    what I do. It's that simple!</p>
            </header>

        </Wrapper>
    );
};

