import styled from "styled-components";

export const ToggleBtnWrapper = styled.div<{ theme: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4px;

  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 30px;

  gap: 20px;

  button {
    border: none;
    background: none;
    line-height: 0;
    cursor: pointer;
  }

  @media screen and ${props => props.theme.media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 8px;
    margin-top: 40px;
  }
`

// =========================//
type IconProps = {
    theme: string;
    themeValue: boolean;
}
export const Icon = styled.svg<IconProps>`
  width: 20px;
  height: 20px;
  fill: ${props =>
    props.themeValue
        ? `${props.theme.colors.activeColor.primary_color}`
        : `${props.theme.colors.secondary}`};
`