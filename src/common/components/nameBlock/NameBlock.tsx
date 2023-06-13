import React, {FC} from 'react';
import { NameBlockStyle } from './NameBlock.styled';


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

            <h3>{nameBlock}</h3>
        </NameBlockStyle>
    );
};
