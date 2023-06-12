import styled from "styled-components";
import {darkTheme} from "../common/styles/Theme.styled";

export const AppWrapper = styled.div`
  max-width: 1700px;
  padding: 0 10px;
  margin: 0 auto;
  

  @media screen and ${darkTheme.media.mobile} {
    padding: 0 5px;
  }
`