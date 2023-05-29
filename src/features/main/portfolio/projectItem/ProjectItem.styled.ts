import styled from "styled-components";
import {theme} from "../../../../common/styles/Theme.styled";
import {showDescription} from "../../../../common/styles/animations/Animation";


export const ImageProject = styled.img`
  height: 250px;
  border-radius: 30px;
`

// =======================================//
export const LinkProject = styled.a`
  display: block;
  font-size: 24px;
  font-weight: 300;

  border-bottom: 1px ${theme.colors.background} solid;
  transition: .3s;

  &:hover {
    border-color: ${theme.colors.baseColor};
    transition: .3s;
  }
`

// =======================================//
export const DescriptionTitle = styled.div`
  font-size: 16px;
  color: ${theme.colors.secondary};
  border-bottom: 1px ${theme.colors.background} solid;
  cursor: pointer;
  transition: .3s;

  &:hover {
    border-color: ${theme.colors.baseColor};
    transition: .3s;
  }
`

// =======================================//
type DescriptionType = {
    condition: boolean
}
export const Description = styled.p<DescriptionType>`
  color: ${theme.colors.secondary};
  margin-top: 8px;

  p {
    opacity: 0;
    animation-name: ${showDescription};
    animation-duration: 3s;
    animation-fill-mode: both;
  }
`

// =======================================//
export const TitleProject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// =======================================//
type BodyProjectType = {
    gradient1: string,
    gradient2: string,
}
export const BodyProject = styled.a<BodyProjectType>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 320px;
  min-width: 100%;
  background-image: linear-gradient(to bottom right, ${props => props.gradient1}, ${props => props.gradient2});
  border-radius: 30px;
  opacity: 0.8;
  transition: all 0.3s ease-in;
  
  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in;
  }

  margin-bottom: 8px;
`

// =======================================//
export const ProjectWrapper = styled.div`
  max-width: 80%;

  margin-bottom: 50px;
`