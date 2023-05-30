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