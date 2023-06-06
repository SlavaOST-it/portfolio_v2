import styled from "styled-components";
import {theme} from "../../common/styles/Theme.styled";


export const WrapperMain = styled.div`
  margin-top: 50px;
  margin-left: 450px;
  margin-right: 150px;

  height: 100vh;

  gap: 150px;

  
  @media screen and ${theme.media.desktop} {
    margin: 50px auto;
  }

  @media screen and ${theme.media.tablet} {
    margin: 0 auto;
  }

  @media screen and ${theme.media.mobile} {
    margin: 0 auto;
  }
`