import styled from "styled-components";
import {theme} from "../../common/styles/Theme.styled";


export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 30px;

  .name {
    font-size: 24px;
    font-weight: 600;
  }

  .prof {
    line-height: 1.4;
    font-size: 14px;
    font-weight: 400;
  }
`

export const Avatar = styled.img`
  border-radius: 30px;

  max-width: 220px;
  max-height: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`

export const Description = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: 200;
  }

  .email {
    margin-bottom: 0.5rem;
  }

  .address {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 25px;
    font-size: 14px;
    color: ${theme.colors.secondary};
  }
`


export const SocialLinksStyled = styled.div<{ sizeSVG: string, border: boolean }>`
  margin-bottom: 30px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    border: ${({border}) => (border ? `2px solid ${theme.colors.secondary}` : "none")};
    border-radius: 50%;

    transition: .3s;
  }

  li:hover a {
    border-color: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  li:hover svg {
    fill: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  svg {
    width: ${({sizeSVG}) => (sizeSVG || "20px")};
    height: ${({sizeSVG}) => (sizeSVG || "20px")};
    fill: ${theme.colors.secondary};
    transition: .3s;
  }
`

export const LeftSideBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 350px;
  padding: 30px;

  text-align: center;

  border-radius: 30px;
  border: 1px solid #565656;

  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);

  z-index: 10;

  @media screen and (min-width: 1700px) {
    left: calc(100vw - 50% - 850px);
  }

  @media screen and ${theme.media.desktop} {
    position: relative;
    max-width: 767px;
    left: 0;
    margin: 20px auto 0;
    top: 0;
    transform: translateY(0);
  }

  @media screen and ${theme.media.tablet} {
    max-width: 576px;
    z-index: 1;
  }

  @media screen and ${theme.media.mobile} {
    max-width: 300px;
    width: 100%;
  }
`