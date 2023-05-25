import React, {FC} from 'react';
import styled from "styled-components";

import {theme} from "../../../common/styles/Theme.styled";

import sprite from "../../../assets/icons/sprite.svg"


type ContactItemType = {
    direction: string,
    icon: string,
    href?: string
}
export const ContactItem:FC<ContactItemType> = ({icon, direction, href}) => {
    return (
        <ContactItemStyle>
            <a href={href}>
                <svg>
                    <use xlinkHref={`${sprite}#${icon}`}/>
                </svg>
                {direction}
            </a>
        </ContactItemStyle>
    );
};

const ContactItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
 
  
  border: 3px solid ${theme.colors.secondary};
  border-radius: 85px;
  
  min-width: 250px;
  min-height: 100px;
  
  margin-bottom: 20px;
  transition: .3s;

  &:hover{
    border-color:  ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }
  
  &:hover svg{
    fill: ${theme.colors.activeColor.primary_color};
    transition: .3s;
  }
  
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;
    
    color: ${theme.colors.baseColor};
    font-size: 18px;
  }
  
  svg{
    fill: ${theme.colors.secondary};
    width: 40px;
    height: 40px;
    transition: .3s;
  }
  
`