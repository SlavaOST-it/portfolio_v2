import React, {FC} from 'react';
import styled from "styled-components";

import {theme} from "../../styles/Theme.styled";


type NamePageType = {
    nameBlock: string
    svgImg: string
}

export const NamePage: FC<NamePageType> = ({nameBlock, svgImg}) => {
    return (
        <NameBlockStyle>
            <svg>
                <use xlinkHref={svgImg}/>
            </svg>

            <h4>{nameBlock}</h4>
        </NameBlockStyle>
    );
};

const NameBlockStyle = styled.div`
  font-size: 12px;
  color: ${theme.colors.baseColor};
  text-transform: uppercase;
  font-weight: 300;
  
  border: 1px solid ${theme.colors.secondary};
  padding: 9px 20px;
  border-radius: 30px;
  margin-bottom: 40px;
  display: inline-flex;
  align-items: center;


  svg {
    width: 16px;
    height: 16px;
    
    fill: ${theme.colors.baseColor};
    
    margin-right: 10px;

   
  }
`