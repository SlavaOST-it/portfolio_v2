import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-scroll';

import {theme} from "../../common/styles/Theme.styled";
import {linksMenu} from "../../common/components/linksMenu/linksMenu";


export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MobileMenuStyle>
            {!isOpen && (<BurgerButton
                // is_open={!isOpen}
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

                    <p>Social</p>
                </MenuBody>
            </MenuWrapper>
        </MobileMenuStyle>
    );
};


type BurgerButtonType={
    // is_open: boolean
}
const BurgerButton = styled.button<BurgerButtonType>`
  //display: 
  

  position: fixed;
  right: 20px;
  top: 20px;
  width: 44px;
  height: 44px;

  border: 1px solid ${theme.colors.secondary};
  border-radius: 50%;

  background-color: ${theme.colors.background};

  cursor: pointer;
  transition: .3s;
  z-index: 999;

  &:hover {
    border-color: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }
;

  &:hover span {
    background-color: ${theme.colors.activeColor.primary_color};
  }

  span {
    width: 20px;
    display: block;
    height: 2px;
    background: #fff;
    transition: .3s;

    &:first-child {
      margin-bottom: 8px;
    }

    position: absolute;
    left: 11px;
    bottom: 16px;
  }
  
`

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: ${theme.colors.background};
  z-index: 10;
  transition: all 0.3s ease-in-out;

  &.open {
    right: 0;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  
`;

const CrossIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

const MenuBody = styled.div`
  padding: 40px 60px;
  
`;

const MenuTitle = styled.p`
  margin-bottom: 50px;
`;

const MenuItem = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
  
  align-items: center;
  cursor: pointer;
`;



const Icon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  fill: ${theme.colors.secondary};
`;

const NameLinkMobile = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.secondary};
`;

const NavLinkMobile = styled(Link)`
  display: flex;
  align-items: center;

  &:hover, &.active {
    ${Icon} {
      fill: ${theme.colors.activeColor.primary_color};
      cursor: pointer;
    }

    ${NameLinkMobile} {
      color: ${theme.colors.activeColor.primary_color};
    }
  }
`


const MobileMenuStyle = styled.div`
  display: none;

  
  @media ${theme.media.tablet}{
    display: block;
  }

`