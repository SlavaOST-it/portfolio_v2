import React, {useEffect, useRef, useState} from 'react';

import {SocialLinks} from "../leftSidebar/LeftSidebar";

import {linksMenu, linksMobileMenuSVG} from "../../common/components/links/links";

import {
    BurgerButton,
    CrossIcon,
    Icon,
    LinkItem,
    MenuBody,
    MenuHeader,
    MenuItem,
    MenuTitle,
    MenuWrapper,
    MobileMenuStyle,
    NameLinkMobile,
    NavLinkMobile,
    SocialLinksBlock
} from "./MobileMenu.styled";


export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <MobileMenuStyle isOpen={isOpen} ref={menuRef}>
            <div className="overlay" onClick={() => setIsOpen(false)}/>

            {!isOpen && (<BurgerButton
                onClick={() => setIsOpen(true)}
            >
                <span></span>
                <span></span>
            </BurgerButton>)
            }

            <MenuWrapper className={isOpen ? 'open' : ''}>
                <MenuHeader>
                    <CrossIcon onClick={() => setIsOpen(false)}>&times;</CrossIcon>
                </MenuHeader>
                <MenuBody>
                    <MenuTitle>Menu</MenuTitle>
                    <ul>
                        {linksMenu.map((el, index) => (
                            <MenuItem key={index}>
                                <NavLinkMobile
                                    to={el.href}
                                    spy={true}
                                    offset={-40}
                                    duration={1200}
                                    activeClass="active"
                                    smooth={"easeInOutQuart"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Icon>
                                        <use xlinkHref={el.logoLink}/>
                                    </Icon>

                                    <NameLinkMobile>{el.title}</NameLinkMobile>
                                </NavLinkMobile>
                            </MenuItem>
                        ))}
                    </ul>

                    <SocialLinksBlock>
                        <span>Social</span>

                        <LinkItem>
                            <SocialLinks linksSVG={linksMobileMenuSVG} sizeSVG={"15px"}/>
                        </LinkItem>
                    </SocialLinksBlock>
                </MenuBody>
            </MenuWrapper>
        </MobileMenuStyle>
    );
}