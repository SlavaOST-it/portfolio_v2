import React from 'react';

import avatar from "../../assets/images/me.jpg"
import sprite from "../../assets/icons/sprite.svg"

import {Button} from "../../common/components/button/Button";
import {Avatar, Description, Header, SocialLinksStyled, Wrapper} from './LeftSidebar.styled';


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

            <SocialLinks/>

            <Button>HIRE ME!</Button>
        </Wrapper>
    );
};


const SocialLinks = () => {
    const linksSVG = [
        {title: 'github', link: `${sprite}#github`},
        {title: 'instagram', link: `${sprite}#instagram`},
        {title: 'linkedin', link: `${sprite}#linkedin`},
        {title: 'vk', link: `${sprite}#vk`},
    ]

    return (
        <SocialLinksStyled>
            <ul>
                {linksSVG.map(el =>
                    <li key={el.link}>
                        <a href={"#"}>
                            <svg>
                                <use xlinkHref={el.link}/>
                            </svg>
                        </a>
                    </li>
                )}

            </ul>
        </SocialLinksStyled>
    )
}