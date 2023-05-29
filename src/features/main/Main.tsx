import React from 'react';

import { WrapperMain } from './Main.styled';

import {Home} from "./home/Home";
import {Skills} from "./skills/Skills";
import {AboutMe} from "./about/AboutMe";
import {Contacts} from "./contacts/Contacts";
import {Portfolio} from "./portfolio/Portfolio";


export const Main = () => {
    return (
        <WrapperMain>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
        </WrapperMain>
    );
};
