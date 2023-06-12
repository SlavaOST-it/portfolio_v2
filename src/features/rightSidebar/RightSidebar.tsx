import React, {FC} from 'react';

import {linksMenu} from "../../common/components/links/links";
import {ListItem, LogoLink, NameLink, NavLinkStyle, NavStyle, WrapperRightBar} from "./RightSidebar.styled";
import {ToggleThemeBtn} from "../../common/components/toggleThemeBtn/ToggleThemeBtn";


type RightSidebarType = {
    themeValue: string
    setTheme: ()=>void
}
export const RightSidebar: FC<RightSidebarType> = ({themeValue, setTheme}) => {
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
                <ToggleThemeBtn themeValue={themeValue} setTheme={setTheme}/>
            </WrapperRightBar>
        </NavStyle>
    );
};
