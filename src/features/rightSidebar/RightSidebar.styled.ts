import styled from "styled-components";
import {theme} from "../../common/styles/Theme.styled";
import {Link} from "react-scroll"


export const LogoLink = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${theme.colors.secondary};
  transition: .3s;
`
export const NameLink = styled.span`
  display: block;
  position: absolute;
  right: 190%;
  transition: .3s;
  
  font-size: 12px;

  padding: 3px 8px;
  border-radius: 5px;
  background-color: #404042;
  
  visibility: hidden;
  opacity: 0;
  
  &:before{
    content: '';
    width: 10px;
    height: 10px;
    background: #404042;
    position: absolute;
    right: -3px;
    top: 50%;
    transform: rotate(54deg) skew(-8deg, -39deg);
    margin-top: -5px;
    z-index: -1;
  }

`

export const NavLinkStyle = styled(Link)`
  position: relative;
  
  &:hover, &.active{
    ${LogoLink} {
      fill: ${theme.colors.activeColor.primary_color};
      cursor: pointer;
    }
  }
  
  &:hover ${NameLink}{
    visibility: visible;
    opacity: 1;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
`

export const WrapperRightBar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 350px;
  padding: 24px 0;

  border-radius: 30px;
  border: 1px solid #565656;

  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);

  gap: 20px;
  z-index: 20;
  
`

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  @media screen and ${theme.media.tablet}{
    display: none;
  }
`
