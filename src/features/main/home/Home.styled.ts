import styled from "styled-components";
import {trackingInExpand} from "../../../common/styles/animations/Animation";


export const Prof = styled.h1`
  -webkit-animation: ${trackingInExpand} 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: ${trackingInExpand} 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation-delay: 3500ms;
`

//=========================//
export const Name = styled.div<{theme: string}>`
  font-size: 78px;
  
  @media screen and ${props => props.theme.media.mobile} {
    max-width: 300px;
    padding: 10px 5px;
    font-size: 60px;
    line-height: 60px;

    ${Prof} {
      font-size: 52px;
      line-height: 60px;
    }
  }
`