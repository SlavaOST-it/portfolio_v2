import React from 'react';
import styled from "styled-components";

import avatar from "../../assets/images/me.jpg"
import {theme} from "../../common/styles/Theme.styled";
import sprite from "../../assets/icons/sptite.svg"


export const LeftSidebar = () => {
    return (
        <Wrapper>
            <Header>
                <span className={"name"}>SlavaOST</span>
                <span className={"prof"}>Front-end <br/>Developer</span>
            </Header>

            <Avatar src={avatar} alt={"me"}/>

            <Description>
                <span className={"email"}>slavaost-it@mail.ru</span>
                <span className={"address"}>Base in Minsk, Belarus</span>
                <p>© 2023 SlavaOST. All Rights Reserved</p>
            </Description>

            <SocialLinks>
                <ul>
                    <li>
                        <a href={"#"}>
                            <svg>
                                <use xlinkHref={`${sprite}#github`}/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </SocialLinks>
        </Wrapper>
    );
};


// ===== styled components ===== //

const Wrapper = styled.div`
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

const Header = styled.header`
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

const Avatar = styled.img`
  border-radius: 30px;

  width: 100%;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 46px;
`

const Description = styled.section`
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


const SocialLinks = styled.section`
  li {
    display: block;
  }

  li a {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.secondary};
    text-align: center;
    //display: flex;
    //justify-content: center;
    //align-items: center;
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
    width: 50px;
    height: 50px;
    fill: ${theme.colors.secondary};
    transition: .3s;
  }
  
  

`
