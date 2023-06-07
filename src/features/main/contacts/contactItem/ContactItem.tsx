import React, {FC} from 'react';

import sprite from "../../../../assets/icons/sprite.svg"
import {ContactItemStyle, Logo} from "./ContactItem.styled";


type ContactItemType = {
    direction: string,
    icon: string,
    href?: string,
    callBack?: () => void
}
export const ContactItem: FC<ContactItemType> = ({icon, direction, href, callBack}) => {
    return (
        <ContactItemStyle href={href} onClick={callBack}>
            <Logo>
                <use xlinkHref={`${sprite}#${icon}`}/>
            </Logo>

            <p>{direction}</p>
        </ContactItemStyle>
    );
};
