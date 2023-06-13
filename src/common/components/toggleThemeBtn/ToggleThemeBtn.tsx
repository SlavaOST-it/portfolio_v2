import React from 'react';

import sprite from "../../../assets/icons/sprite.svg"
import {Icon, ToggleBtnWrapper} from "./ToggleThemeBtn.styled";


type ToggleThemeBtnType = {
    themeValue: string
    setTheme: () => void
}
export const ToggleThemeBtn = ({themeValue, setTheme}: ToggleThemeBtnType) => {
    return (
        <ToggleBtnWrapper>
            <button onClick={setTheme}>
                <Icon themeValue={themeValue === "light"}>
                    <use xlinkHref={`${sprite}#sun`}/>
                </Icon>
            </button>

            <button onClick={setTheme}>
                <Icon themeValue={themeValue === "dark"}>
                    <use xlinkHref={`${sprite}#moon`}/>
                </Icon>
            </button>
        </ToggleBtnWrapper>
    );
};
