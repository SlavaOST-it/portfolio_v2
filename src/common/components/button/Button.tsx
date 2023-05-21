import React, {FC, ReactChildren, ReactNode} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";


type ButtonType = {

    callBack?: () => void
    children: ReactNode
}
export const Button: FC<ButtonType> = ({callBack, children}) => {
    return (
        <ButtonStyled
            onClick={callBack}
        >
            {children}
        </ButtonStyled>
    );
};


const ButtonStyled = styled.button`
  background-color: ${theme.colors.activeColor.primary_color};
  text-align: center;
  padding: 11px 58px 10px 58px;
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  text-transform: uppercase;
  border: 2px solid ${theme.colors.activeColor.primary_color};
  
  cursor: pointer;  
  transition: .3s;
  
  
  &:hover{
    border: 2px solid ${theme.colors.activeColor.primary_color};
    background-color: ${theme.colors.activeColor.dark_color};
    color: ${theme.colors.activeColor.primary_color};
  }
`