import React from 'react';
import styled from "styled-components";

import sprite from "../../../assets/icons/sprite.svg"
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {Wrapper} from "../../../common/styles/Wrapper.styled";


export const Home = () => {
    return (
        <Wrapper>
            <NamePage nameBlock={"INTRODUCE"} svgImg={`${sprite}#home`}/>

            <h1>Hi, I'm <span>Slava</span>, <br/>Front-end Developer</h1>

            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
        </Wrapper>
    );
};


