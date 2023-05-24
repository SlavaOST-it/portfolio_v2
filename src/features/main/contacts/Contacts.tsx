import React from 'react';
import {Wrapper} from "../../../common/styles/Wrapper.styled";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import sprite from "../../../assets/icons/sprite.svg";

export const Contacts = () => {
    return (
        <Wrapper>
            <NamePage nameBlock={"CONTACTS"} svgImg={`${sprite}#portfolio`}/>
            <h2>
                Let's Work <span>Together!</span>
            </h2>

            <span>slavaost-it@mail.ru</span>

            <form>

            </form>
        </Wrapper>
    );
};
