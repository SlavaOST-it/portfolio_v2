import styled from "styled-components";


type SocialLinksStyledType = {
    size_svg: string,
    $border: boolean,
    theme: string
}
export const SocialLinksStyled = styled.div<SocialLinksStyledType>`
  margin-bottom: 30px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    border: ${({$border}) => ($border ? "2px solid" : "none")};
    border-color: ${props => props.theme.colors.secondary};
    border-radius: 50%;

    transition: .3s;
  }

  li:hover a {
    border-color: ${props => props.theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  li:hover svg {
    fill: ${props => props.theme.colors.activeColor.primary_color};
    transition: .3s;
  }

  svg {
    width: ${({size_svg}) => (size_svg || "20px")};
    height: ${({size_svg}) => (size_svg || "20px")};
    fill: ${props => props.theme.colors.secondary};
    transition: .3s;
  }
`
