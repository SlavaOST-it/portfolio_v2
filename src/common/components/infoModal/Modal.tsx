import React, {FC} from 'react';
import ReactDOM from "react-dom";

import {CloseButton, Content, ModalOverlay, ModalWrapper} from './Modal.styled';


const modalRoot = document.getElementById('modal')

type InfoModalProps = {
    isOpen: boolean,
    showStyleModal: boolean,
    onClose: () => void,
    children: React.ReactNode
};

export const Modal: FC<InfoModalProps> = ({isOpen, onClose, children, showStyleModal}) => {
    return modalRoot
        ? ReactDOM.createPortal(
            <ModalOverlay $is_open={isOpen} $show_styles_modal={showStyleModal}>
                <div className="overlay" onClick={onClose}/>
                <ModalWrapper>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                    <Content>{children}</Content>
                </ModalWrapper>
            </ModalOverlay>,

            modalRoot
        ) : null
};
