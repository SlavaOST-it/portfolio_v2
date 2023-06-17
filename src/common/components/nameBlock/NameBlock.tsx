import React, {FC} from 'react';

import {NameBlockStyle} from './NameBlock.styled';
import { EffectAnimation } from '../effectAnimation/EffectAnimation';


type NamePageType = {
    nameBlock: string
    svgImg: string
}

export const NamePage: FC<NamePageType> = ({nameBlock, svgImg}) => {
    return (
        <EffectAnimation>
            <NameBlockStyle>
                <svg>
                    <use xlinkHref={svgImg}/>
                </svg>

                <h3>{nameBlock}</h3>
            </NameBlockStyle>
        </EffectAnimation>
    );
};
