import React from 'react';

import {Main} from '../features/main/Main';
import {LeftSidebar} from "../features/leftSidebar/LeftSidebar";
import {RightSidebar} from "../features/rightSidebar/RightSidebar";


export const App = () => {
    return (
        <>
            <LeftSidebar/>
            <RightSidebar/>
            <Main/>
        </>
    );
}
