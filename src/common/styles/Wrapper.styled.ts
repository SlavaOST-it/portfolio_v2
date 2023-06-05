import styled from "styled-components";
import {theme} from "./Theme.styled";


export const TitlePage = styled.h2`
  font-size: 48px;
  line-height: 60px;
  font-weight: 300;
  margin-bottom: 33px;
`


// =======================================//
export const Wrapper = styled.section`
  min-height: 100%;
  padding-bottom: 100px;

  h1 {
    font-size: 78px;
    letter-spacing: -0.2px;
    line-height: 90px;
    margin-bottom: 43px;
    font-weight: 300;
  }

  span {
    color: ${theme.colors.activeColor.primary_color};
  }

  p {
    max-width: 650px;

    font-size: 18px;
    opacity: 1;
    margin-bottom: 31px;
    line-height: 30px;
  }

  @media screen and ${theme.media.desktop} {
    max-width: 767px;
    margin: 50px auto;
  }

  @media screen and ${theme.media.tablet} {
    max-width: 576px;
    width: 100%;
    padding: 10px;
    margin: 50px auto;
  }

  @media screen and ${theme.media.mobile} {
    max-width: 320px;
    padding: 5px;

    h1{
      font-size: 58px;
      letter-spacing: 0;
      line-height: 60px;
    }
  }
`
