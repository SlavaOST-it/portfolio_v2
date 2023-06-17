import React, {FC} from "react";
import {SocialLinksStyled} from "./SocialLinks.styled";


type SocialLinksType = {
    linksSVG: Array<
        {
            title: string,
            logoLink: string,
            href: string
        }>,
    sizeSVG?: string,
    border?: boolean
}
export const SocialLinks: FC<SocialLinksType> = ({linksSVG,sizeSVG,border}) => {
    return (
        <SocialLinksStyled size_svg={sizeSVG ?? ""} $border={!!border}>
            <ul>
                {linksSVG.map(el =>
                    <li key={el.logoLink}>
                        <a href={el.href} target={"_blank"} rel="noreferrer">
                            <svg>
                                <use xlinkHref={el.logoLink}/>
                            </svg>
                        </a>
                    </li>
                )}
            </ul>
        </SocialLinksStyled>
    )
}
