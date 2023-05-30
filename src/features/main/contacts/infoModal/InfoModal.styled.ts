import styled from "styled-components";

import {theme} from "../../../../common/styles/Theme.styled";
import {hiddenDescription, showDescription} from "../../../../common/styles/animations/Animation";

type ModalOverlayType = {
    is_open: boolean,
    show_styles_modal: boolean
}
export const ModalOverlay = styled.div<ModalOverlayType>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: ${props => (props.is_open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  opacity: ${props => (props.show_styles_modal ? 0 : 1)};
  animation-name: ${(props) => (props.show_styles_modal ? showDescription : hiddenDescription)};
  animation-duration: 2s;
  animation-fill-mode: both;
`


// ==============================//
export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #4f4f4f;
  border-radius: 50px;
  padding: 50px;
  max-width: 600px;
  width: 100%;

  position: relative;

  div {
    font-size: 34px;
    color: ${theme.colors.baseColor};
    text-align: center;
  }
`;


// ==============================//
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
`;