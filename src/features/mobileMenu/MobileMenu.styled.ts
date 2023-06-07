import styled from "styled-components";
import {theme} from "../../common/styles/Theme.styled";
import {Link} from "react-scroll";

export const BurgerButton = styled.button`
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

//===================================//
export const LinkItem = styled.div`
  svg {
    width: 20px;
    height: 20px;
  }
`

//===================================//
export const SocialLinksBlock = styled.div`
  margin-top: 50px;

  span {
    display: inline-block;
    margin-bottom: 10px;
    color: ${theme.colors.secondary};
  }
`

//===================================//
export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: ${theme.colors.background};
  z-index: 999;
  transition: all 0.3s ease-in-out;

  &.open {
    right: 0;
  }
`

//===================================//
export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;

`

//===================================//
export const CrossIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
`

//===================================//
export const MenuBody = styled.nav`
  padding: 40px 70px;

`

//===================================//
export const MenuTitle = styled.p`
  margin-bottom: 50px;
`

//===================================//
export const MenuItem = styled.li`
  list-style-type: none;
  margin-bottom: 16px;

  align-items: center;
  cursor: pointer;
`

//===================================//
export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 25px;
  fill: ${theme.colors.secondary};
`


//===================================//
export const NameLinkMobile = styled.span`
  font-weight: 500;
  color: ${theme.colors.secondary};
`;


//===================================//
export const NavLinkMobile = styled(Link)`
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


//===================================//
export const MobileMenuStyle = styled.div<{ isOpen: boolean }>`
  display: none;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(133, 133, 133, 0.62);
    z-index: 90;
    display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  }

  @media screen and ${theme.media.desktop} {
    display: block;
  }

`