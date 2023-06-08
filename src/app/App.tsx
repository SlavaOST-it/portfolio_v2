import React from 'react';

import {AppWrapper} from "./App.styled";

import {Main} from '../features/main/Main';
import {MobileMenu} from "../features/mobileMenu/MobileMenu";
import {Particle} from "../common/components/particle/Particle";
import {LeftSidebar} from "../features/leftSidebar/LeftSidebar";
import {RightSidebar} from "../features/rightSidebar/RightSidebar";
import {Preloader} from "../common/components/preloader/Preloader";


export const App = () => {
    return (
        <AppWrapper>
            <Preloader/>
            <Particle/>
            <MobileMenu/>
            <LeftSidebar/>
            <Main/>
            <RightSidebar/>
        </AppWrapper>
    );
}
