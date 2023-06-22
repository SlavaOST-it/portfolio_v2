import styled from "styled-components";
import {hiddenDescription, showDescription} from "../../../../common/styles/animations/Animation";


export const ImageProject = styled.img`
  min-width: 150px;
  max-width: 450px;
  padding: 10px;
  
  border-radius: 30px;
`

// =======================================//
export const LinkProject = styled.a<{theme: string}>`
  display: block;
  font-size: 24px;
  font-weight: 300;

  border-bottom: 1px ${props => props.theme.colors.background} solid;
  transition: .3s;

  &:hover {
    border-color: ${props => props.theme.colors.baseColor};
    transition: .3s;
  }
`

// =======================================//
export const DescriptionTitle = styled.div<{theme: string}>`
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
  border-bottom: 1px ${props => props.theme.colors.background} solid;
  cursor: pointer;
  transition: .3s;

  &:hover {
    border-color: ${props => props.theme.colors.baseColor};
    transition: .3s;
  }
`

// =======================================//
type DescriptionType = {
    $show_styles_description: boolean
}
export const Description = styled.p<DescriptionType>`
  margin-top: 8px;

  
  ${props => (props.$show_styles_description ? 0 : 1)};
  animation-name: ${(props) => (props.$show_styles_description ? showDescription : hiddenDescription)};
  animation-duration: 2s;
  animation-fill-mode: both;

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
  max-width: 100%;
  margin-bottom: 50px;

  position: relative;
  z-index: 2;
`