import React from 'react';
import {animateScroll as scroll} from "react-scroll";

import avatar from "../../assets/images/me.jpg"
import sprite from "../../assets/icons/sprite.svg"

import {SocialLinks} from "./socialLinks/SocialLinks";

import {ButtonStyle} from "../../common/components/button/Button.styled";
import {linksLeftSideBarSVG} from "../../common/components/links/links";
import {Avatar, Description, Header, LeftSideBarWrapper} from './LeftSidebar.styled';


export const LeftSidebar = () => {
    return (
        <LeftSideBarWrapper>
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

            <SocialLinks linksSVG={linksLeftSideBarSVG} border={true}/>

            <ButtonStyle
                onClick={() => {
                    scroll.scrollToBottom()
                }}
            >
                <svg style={{width: "20px", height: "20px", marginRight: "15px"}}>
                    <use xlinkHref={`${sprite}#message2`}/>
                </svg>
                HIRE ME!</ButtonStyle>
        </LeftSideBarWrapper>
    );
};


