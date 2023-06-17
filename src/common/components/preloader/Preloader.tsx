import React, {useEffect, useState} from 'react';
import {ContainerDots, Dot, Dots, Gooey} from './Preloader.styled';


export const Preloader = () => {
    const [onClose, setOnClose] = useState(true);
    const [hideLoaderStyle, setHideLoaderStyle] = useState(false)

    useEffect(() => {
        const hideLoaderStyleId = setTimeout(() => {
            setHideLoaderStyle(true);
        }, 1500);

        const onCloseId = setTimeout(() => {
            setOnClose(false);
        }, 3000);

        return () => {
            clearTimeout(onCloseId);
            clearTimeout(hideLoaderStyleId)};
    }, []);

    return (
        <Gooey $is_close={onClose} $hide_loader_style={hideLoaderStyle}>
            <ContainerDots>
                <Dot></Dot>
                <Dots>
                    <span></span>
                    <span></span>
                    <span></span>
                </Dots>
            </ContainerDots>
        </Gooey>
    );
};
