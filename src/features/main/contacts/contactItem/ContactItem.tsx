import React, {FC} from 'react';

import sprite from "../../../../assets/icons/sprite.svg"
import {ContactItemStyle, Logo} from "./ContactItem.styled";


type ContactItemType = {
    direction: string,
    icon: string,
    href?: string
}
export const ContactItem:FC<ContactItemType> = ({icon, direction, href}) => {
    return (
        <ContactItemStyle>
            <a href={href}>
                <Logo>
                    <use xlinkHref={`${sprite}#${icon}`}/>
                </Logo>
                {direction}
            </a>
        </ContactItemStyle>
    );
};
