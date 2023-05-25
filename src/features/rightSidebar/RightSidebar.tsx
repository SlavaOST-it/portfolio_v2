import React from 'react';
import {NavStyle, WrapperRightBar} from "./RightSidebar.styled";
import sprite from "../../assets/icons/sprite.svg";


export const RightSidebar = () => {
    const linksSVG = [
        {name: 'home', link: `${sprite}#home`},
        {name: 'user', link: `${sprite}#man`},
        {name: 'skills', link: `${sprite}#skills`},
        {name: 'portfolio', link: `${sprite}#portfolio`},
        {name: 'contacts', link: `${sprite}#mail`},
    ]

    return (
        <NavStyle>
            <WrapperRightBar>
                {linksSVG.map(el =>
                    <li>
                        <a href={"#"}>
                            <svg width="20px" height="20px">
                                <use xlinkHref={el.link}/>
                            </svg>
                        </a>
                    </li>
                )}

            </WrapperRightBar>
        </NavStyle>
    );
};
