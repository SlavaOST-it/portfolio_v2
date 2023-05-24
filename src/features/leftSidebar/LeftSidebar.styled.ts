import styled from "styled-components";
import {theme} from "../../common/styles/Theme.styled";



export const Header = styled.header`
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

  width: 100%;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 46px;
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


export const SocialLinksStyled = styled.section`  
  margin-bottom: 30px;
  
  ul{
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
    line-height: 46px;
    text-align: center;

    border: 2px solid ${theme.colors.secondary};
    border-radius: 50%;

    transition: .3s;
  }

  li:hover a {
    border: 2px solid ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  li:hover svg {
    fill: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: ${theme.colors.secondary};
    transition: .3s;
  }
  
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 350px;
  padding: 30px;

  border-radius: 30px;
  border: 1px solid #565656;

  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);

  z-index: 10;
`