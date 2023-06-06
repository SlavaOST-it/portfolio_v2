import React from 'react';
import styled from "styled-components";

import {theme} from "../common/styles/Theme.styled";

import {Main} from '../features/main/Main';
import {LeftSidebar} from "../features/leftSidebar/LeftSidebar";
import {RightSidebar} from "../features/rightSidebar/RightSidebar";
import {MobileMenu} from "../features/mobileMenu/MobileMenu";


export const App = () => {
    return (
        <AppWrapper>
            <MobileMenu/>
            <LeftSidebar/>
            <Main/>
            <RightSidebar/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`

  
  @media screen and ${theme.media.mobile} {
    padding: 0 5px;
  }
`