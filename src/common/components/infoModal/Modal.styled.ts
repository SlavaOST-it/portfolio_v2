import styled from "styled-components";
import {hiddenDescription, showDescription} from "../../styles/animations/Animation";


type ModalOverlayType = {
    $is_open: boolean,
    $show_styles_modal: boolean
}
export const ModalOverlay = styled.div<ModalOverlayType>`
  display: ${props => (props.$is_open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0;
    
  width: 100%;
  height: 100%;
  padding: 10px;

  opacity: ${props => (props.$show_styles_modal ? 0 : 1)};
  animation-name: ${(props) => (props.$show_styles_modal ? showDescription : hiddenDescription)};
  animation-duration: 2s;
  animation-fill-mode: both;

  z-index: 999;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(133, 133, 133, 0.62);
    z-index: 90;
    display: ${({$is_open}) => ($is_open ? 'block' : 'none')};
  }
`


// ==============================//
export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.activeColor.dark_color};
  border-radius: 50px;  
  
  max-width: 700px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  
  padding: 30px;
  margin: auto;
  
  position: relative;
  
  z-index: 999;
`


// ==============================//
export const Content = styled.div<{theme: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
  
  text-align: center;

  p{
    font-size: 34px;
    color: ${props => props.theme.colors.baseColor};
  }
  span {
    color: ${props => props.theme.colors.activeColor.primary_color};
  }
`


// ==============================//
export const CloseButton = styled.button<{theme: string}>`
  position: absolute;
  top: -36px;
  right: -28px;

  width: 50px;
  height: 50px;

  font-size: 30px;
  color: ${props => props.theme.colors.baseColor};
  background-color: ${props => props.theme.colors.activeColor.dark_color};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: ${props => props.theme.colors.activeColor.primary_color};
    transition: .3s;
  }


  @media screen and ${props => props.theme.media.tablet} {
    top: -56px;
    right: 3px;
  }
`