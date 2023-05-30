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

                    <DescriptionTitle onClick={() => setShowDescription(!showDescription)}>
                        description
                    </DescriptionTitle>
                </TitleProject>

                <Description>
                    {showDescription && <p>{description}</p>}
                </Description>
            </div>

        </ProjectWrapper>
    )
}