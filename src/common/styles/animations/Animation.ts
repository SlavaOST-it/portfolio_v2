import {keyframes} from "styled-components";


export const showDescription = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const hiddenDescription = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`


//============ For Loader ================//
export const dotLoader = keyframes`
  50% {
    transform: translateX(96px);
  }
`

export const dotsLoader = keyframes`
  50% {
    transform: translateX(-31px)
  }
`