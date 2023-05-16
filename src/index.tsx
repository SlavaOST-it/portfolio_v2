import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import { App } from 'app/App';
import {theme} from "common/styles/Theme.styled";
import {GlobalStyled} from "common/styles/GlobalStyles.styled";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <App/>
        <GlobalStyled theme={theme}/>
    </BrowserRouter>
);

reportWebVitals();
