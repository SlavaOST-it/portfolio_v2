import styled from "styled-components";
import {Link} from "react-scroll";


export const BurgerButton = styled.button<{theme: string}>`
  position: fixed;
  right: 20px;
  top: 20px;
  width: 44px;
  height: 44px;

  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 50%;

  background-color: ${props => props.theme.colors.background};

  cursor: pointer;
  transition: .3s;
  z-index: 999;

  &:hover {
    border-color: ${props => props.theme.colors.activeColor.primary_color};
    transition: .3s;
  }
;

  &:hover span {
    background-color: ${props => props.theme.colors.activeColor.primary_color};
  }

  span {
    width: 20px;
    display: block;
    height: 2px;
    background: ${props => props.theme.colors.baseColor};
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
export const SocialLinksBlock = styled.div<{theme: string}>`
  margin-top: 50px;

  span {
    display: inline-block;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.secondary};
  }
`

//===================================//
export const MenuWrapper = styled.div<{theme: string}>`
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
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
  padding: 20px 70px;

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
export const Icon = styled.svg<{theme: string}>`
  width: 18px;
  height: 18px;
  margin-right: 25px;
  fill: ${props => props.theme.colors.secondary};
`


//===================================//
export const NameLinkMobile = styled.span<{theme: string}>`
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
`;


//===================================//
export const NavLinkMobile = styled(Link)<{theme: string}>`
  display: flex;
  align-items: center;

  &:hover, &.active {
    ${Icon} {
      fill: ${props => props.theme.colors.activeColor.primary_color};
      cursor: pointer;
    }

    ${NameLinkMobile} {
      color: ${props => props.theme.colors.activeColor.primary_color};
    }
  }
`


//===================================//
export const MobileMenuStyle = styled.div<{ $is_open: boolean, theme: string}>`
  display: none;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(133, 133, 133, 0.62);
    z-index: 90;
    display: ${({$is_open}) => ($is_open ? 'block' : 'none')};
  }

  @media screen and ${props => props.theme.media.desktop} {
    display: block;
  }
`