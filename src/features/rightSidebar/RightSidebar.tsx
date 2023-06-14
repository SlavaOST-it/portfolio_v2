import React, {FC} from 'react';

import {linksMenu} from "../../common/components/links/links";
import {ToggleThemeBtn} from "../../common/components/toggleThemeBtn/ToggleThemeBtn";
import {ListItem, LogoLink, NameLink, NavLinkStyle, NavStyle, WrapperRightBar} from "./RightSidebar.styled";


type RightSidebarType = {
    themeValue: string
    setTheme: (theme: "light" | "dark")=>void
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
                                      duration={2500}
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
