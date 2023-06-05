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

    @media screen and ${theme.media.desktop}{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 0 15px;
      
    }

  @media screen and ${theme.media.mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and ${theme.media.mobile} {
    
    max-width: 320px;
    margin: 0 auto;
  }
`