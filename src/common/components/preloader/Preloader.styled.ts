import styled from "styled-components";
import {dotLoader, dotsLoader, hiddenDescription} from "../../styles/animations/Animation";


type GooeyType = {
    $hide_loader_style: boolean,
    $is_close: boolean,
    theme: string
}
export const Gooey = styled.div<GooeyType>`
  display: ${({$is_close}) => ($is_close ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  
  position: fixed;
  left: 0;
  top: 0;
  
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: ${props => props.theme.colors.background};
  
  filter: contrast(20);
  
  animation-name: ${({$hide_loader_style}) => ($hide_loader_style && hiddenDescription)};
  animation-duration: 1.5s;
  animation-fill-mode: both;
`


//==========================//
export const ContainerDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


//==========================//
export const Dots = styled.div`
  position: relative;
  transform: translateX(0);

  margin-left: 20px;
  animation: ${dotsLoader} 2.8s infinite;

  span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    filter: blur(4px);
    background: ${props => props.theme.colors.baseColor};
    border-radius: 50%;
  }
`

//==========================//
export const Dot = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  margin-right: 90px;
  filter: blur(4px);
  background: ${props => props.theme.colors.baseColor};
  border-radius: 50%;
  transform: translateX(0);
  animation: ${dotLoader} 2.8s infinite;
`