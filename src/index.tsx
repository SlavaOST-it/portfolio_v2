import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {App} from "./app/App";
import {darkTheme, lightTheme} from './common/styles/Theme.styled';
import { GlobalStyled } from './common/styles/GlobalStyles.styled';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <App/>
    </>

);

reportWebVitals();
