import React, {FC, useState} from "react";
import {
    BodyProject, Description,
    DescriptionTitle,
    ImageProject,
    LinkProject,
    ProjectWrapper,
    TitleProject
} from "./ProjectItem.styled";


type ProjectItemType = {
    title: string
    img: string
    href: string
    description: string
    gradient1: string,
    gradient2: string,
}

export const ProjectItem: FC<ProjectItemType> = ({title, img, href, description, gradient1, gradient2}) => {
    const [showDescription, setShowDescription] = useState(false)
    const [showStyleDescription, setShowStyleDescription] = useState(false)

    const onClickDescriptionHandler = (showDescription: boolean) => {
        if (!showDescription) {
            setShowDescription(true)
            setShowStyleDescription(true)
        }
        if (showDescription) {
            setShowStyleDescription(false)
            setTimeout(() => setShowDescription(false), 2000)
        }
    }

    return (
        <ProjectWrapper>
            <BodyProject
                href={href}
                gradient1={gradient1}
                gradient2={gradient2}
                target={"_blank"}
                rel="noreferrer"
            >
                <ImageProject src={img} alt={"project"}/>
            </BodyProject>

            <div>
                <TitleProject>
                    <LinkProject href={href} target={"_blank"} rel="noreferrer">
                        {title}
                    </LinkProject>

                    <DescriptionTitle onClick={() => onClickDescriptionHandler(showDescription)}>
                        {showDescription ? "hide" : "show more"}
                    </DescriptionTitle>
                </TitleProject>

                <Description $show_styles_description={showStyleDescription}>
                    {showDescription && <p>{description}</p>}
                </Description>
            </div>

        </ProjectWrapper>
    )
}
