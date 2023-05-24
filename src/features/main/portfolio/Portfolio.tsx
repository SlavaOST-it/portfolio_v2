import React from 'react';
import {Wrapper} from "../../../common/styles/Wrapper.styled";
import sprite from "../../../assets/icons/sprite.svg";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";

export const Portfolio = () => {
    return (
        <Wrapper>
            <NamePage nameBlock={"PORTFOLIO"} svgImg={`${sprite}#portfolio`}/>
            <h2>
                Featured <span>Projects</span>
            </h2>
        </Wrapper>
    );
};
