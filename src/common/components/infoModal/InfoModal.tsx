import React, {FC} from 'react';
import {CloseButton, ModalOverlay, ModalWrapper} from './InfoModal.styled';


type InfoModalProps = {
    isOpen: boolean;
    showStyleModal: boolean
    onClose: () => void;
    children: React.ReactNode
};

export const InfoModal: FC<InfoModalProps> = ({isOpen, onClose, children, showStyleModal}) => {

    return (
        <ModalOverlay is_open={isOpen} show_styles_modal={showStyleModal}>
            <div className="overlay" onClick={onClose}/>
            <ModalWrapper>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <div>{children}</div>
            </ModalWrapper>
        </ModalOverlay>
    );
};
