import React from 'react';

import sprite from "../../assets/icons/sprite.svg";

import {PATH} from "../../utils/routes/routes";
import {ListItem, LogoLink, NameLink, NavLinkStyle, NavStyle, WrapperRightBar} from "./RightSidebar.styled";


export const RightSidebar = () => {
    const linksSVG = [
        {title: 'Home', logoLink: `${sprite}#home`, href: PATH.home},
        {title: 'About', logoLink: `${sprite}#man`, href: PATH.aboutMe},
        {title: 'Skills', logoLink: `${sprite}#skills`, href: PATH.skills},
        {title: 'Portfolio', logoLink: `${sprite}#portfolio`, href: PATH.portfolio},
        {title: 'Contacts', logoLink: `${sprite}#mail`, href: PATH.contacts},
    ]

    return (
        <NavStyle>
            <WrapperRightBar>
                {linksSVG.map((el,index) =>
                    <ListItem key={index}>
                        <NavLinkStyle to={el.href}
                                      spy={true}
                                      offset={-40}
                                      duration={1200}
                                      activeClass="active"
                                      smooth={"easeInOutQuart"}
                        >
                            <NameLink>
                                {el.title}
                            </NameLink>

                            <LogoLink>
                                <use xlinkHref={el.logoLink}/>
                            </LogoLink>
                        </NavLinkStyle>
                    </ListItem>
                )}
            </WrapperRightBar>
        </NavStyle>
    );
};
