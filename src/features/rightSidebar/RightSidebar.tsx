import React from 'react';

import {linksMenu} from "../../common/components/links/links";
import {ListItem, LogoLink, NameLink, NavLinkStyle, NavStyle, WrapperRightBar} from "./RightSidebar.styled";


export const RightSidebar = () => {
    return (
        <NavStyle>
            <WrapperRightBar>
                {linksMenu.map((el,index) =>
                    <ListItem key={index}>
                        <NavLinkStyle to={el.href}
                                      spy={true}
                                      offset={-50}
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
