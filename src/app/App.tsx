import React from 'react';
import {ThemeProvider} from "styled-components";

import {AppWrapper} from "./App.styled";

import {Main} from '../features/main/Main';
import {MobileMenu} from "../features/mobileMenu/MobileMenu";
import {Particle} from "../common/components/particle/Particle";
import {LeftSidebar} from "../features/leftSidebar/LeftSidebar";
import {RightSidebar} from "../features/rightSidebar/RightSidebar";
import {Preloader} from "../common/components/preloader/Preloader";

import {GlobalStyled} from '../common/styles/GlobalStyles.styled';
import {darkTheme, lightTheme} from '../common/styles/Theme.styled';

import {useAppSwitchTheme} from "./useAppSwitchTheme/useAppSwitchTheme";


export const App = () => {
    const {theme, switchTheme} = useAppSwitchTheme()

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyled theme={theme === "dark" ? darkTheme : lightTheme}/>

            <AppWrapper>
                <Preloader/>
                <Particle/>
                <MobileMenu themeValue={theme} setTheme={switchTheme}/>
                <LeftSidebar/>
                <Main/>
                <RightSidebar themeValue={theme} setTheme={switchTheme}/>
            </AppWrapper>
        </ThemeProvider>
    );
}
