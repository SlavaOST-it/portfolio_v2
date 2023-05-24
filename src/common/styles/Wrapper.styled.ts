import styled from "styled-components";
import {theme} from "./Theme.styled";

export const Wrapper = styled.section`
  min-height: 100%;
  margin-bottom: 150px;

  h1{      
    font-size: 78px;
    letter-spacing: -0.2px;
    line-height: 90px;
    margin-bottom: 43px;
    font-weight: 300;
  }

  h2{
    font-size: 48px;
    line-height: 60px;
    font-weight: 300;
    margin-bottom: 33px;
  }

  span {
    color: ${theme.colors.activeColor.primary_color};
  }

  p {
    font-size: 18px;
    opacity: 1;
    max-width: 600px;
    margin-bottom: 31px;

  }
`