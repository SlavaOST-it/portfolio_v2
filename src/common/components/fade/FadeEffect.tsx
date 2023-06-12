import React, {FC} from 'react';
import {Fade, Reveal} from "react-awesome-reveal";
import styled, {keyframes} from "@emotion/react";
// import {effectAnimation} from "../../styles/animations/Animation";
// import {effectAnimation} from "../../styles/animations/Animation";


type FadeEffectType = {
    direction?: "down" | "left" | "right" | "up";
    children: React.ReactNode
}
export const FadeEffect: FC<FadeEffectType> = ({direction, children}) => {
    return (
        <div
            // keyframes={effectAnimation}
            // className={}
            // // direction={"up"}
            // cascade
            // // delay={500}  // до появления анимации
            // fraction={0.1}
            // duration={2500} // продолжительность
        >
            {children}
        </div >
    );
};

export const effectAnimation = keyframes`
  from {
         opacity: 0;
         transform: translateY(600px)
       }
       to {
         opacity: 1;
         transform: translateY(0)
       }
`

// const FadeTop = styled.div`
//   -webkit-animation: ${effectAnimation} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
//   animation: ${effectAnimation} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
// `

