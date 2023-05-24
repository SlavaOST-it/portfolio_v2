import React from 'react';
import {LeftSidebar} from "../features/leftSidebar/LeftSidebar";
import {Main} from '../features/main/Main';
import {RightSidebar} from "../features/rightSidebar/RightSidebar";
import styled from "styled-components";


export const App = () => {
    return (
        <Wrapper>
            <LeftSidebar/>
            <RightSidebar/>
            <Main/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  
  position: relative;
  

`