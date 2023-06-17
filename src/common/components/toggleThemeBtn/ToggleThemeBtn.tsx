import React from 'react';

import sprite from "../../../assets/icons/sprite.svg"
import {Icon, NameTheme, SelectThemeBtn, ToggleBtnWrapper} from "./ToggleThemeBtn.styled";


type ToggleThemeBtnType = {
    themeValue: string
    setTheme: (theme: "light" | "dark") => void
}
export const ToggleThemeBtn = ({themeValue, setTheme}: ToggleThemeBtnType) => {
    return (
        <ToggleBtnWrapper>
            <SelectThemeBtn onClick={() => setTheme("dark")}>
                <NameTheme>
                    Light
                </NameTheme>

                <Icon $themeValue={themeValue === "light"}>
                    <use xlinkHref={`${sprite}#sun`}/>
                </Icon>

            </SelectThemeBtn>

            <SelectThemeBtn onClick={() => setTheme("light")}>
                <NameTheme>
                    Dark
                </NameTheme>

                <Icon $themeValue={themeValue === "dark"}>
                    <use xlinkHref={`${sprite}#moon`}/>
                </Icon>
            </SelectThemeBtn>
        </ToggleBtnWrapper>
    );
};
