import React from 'react';
import {ListItem, LogoLink, NameLink, NavLinkStyle, NavStyle, WrapperRightBar} from "./RightSidebar.styled";
import {linksMenu} from "../../common/components/linksMenu/linksMenu";


export const RightSidebar = () => {
    return (
        <NavStyle>
            <WrapperRightBar>
                {linksMenu.map((el,index) =>
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
