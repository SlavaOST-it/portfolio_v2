import React from 'react';
import {animateScroll as scroll} from "react-scroll";

import avatar from "../../assets/images/me.jpg"
import sprite from "../../assets/icons/sprite.svg"

import {ButtonStyle} from "../../common/components/button/Button";
import {Avatar, Description, Header, SocialLinksStyled, LeftSideBarWrapper} from './LeftSidebar.styled';


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

            <SocialLinks/>

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


const SocialLinks = () => {
    const linksSVG = [
        {title: 'github', logoLink: `${sprite}#github`, href: "https://github.com/SlavaOST-it"},
        {
            title: 'linkedin',
            logoLink: `${sprite}#linkedin`,
            href: "https://www.linkedin.com/in/vyacheslav-ostapkevich-918112254"
        },
        {title: 'telegram', logoLink: `${sprite}#telegram`, href: "https://t.me/SlavaOST"},
        {title: 'codewars', logoLink: `${sprite}#codewars`, href: "https://www.codewars.com/users/SlavaOST-it"},
    ]

    return (
        <SocialLinksStyled>
            <ul>
                {linksSVG.map(el =>
                    <li key={el.logoLink}>
                        <a href={el.href} target={"_blank"} rel="noreferrer">
                            <svg>
                                <use xlinkHref={el.logoLink}/>
                            </svg>
                        </a>
                    </li>
                )}
            </ul>
        </SocialLinksStyled>
    )
}
