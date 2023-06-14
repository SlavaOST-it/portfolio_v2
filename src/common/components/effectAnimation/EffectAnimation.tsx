import React, {FC} from 'react';


type EffectAnimationType = {
    direction?: "up" | "down" | "left" | "right"
    children: React.ReactNode
}
export const EffectAnimation:FC<EffectAnimationType> = ({direction,children}) => {
    return (
        <div
            data-aos={direction ? `fade-${direction}` : "fade-up"}
            // data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            {children}
        </div>
    );
};
