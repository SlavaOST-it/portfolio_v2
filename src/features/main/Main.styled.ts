import styled from "styled-components";


export const WrapperMain = styled.main<{theme: string}>`
  margin-top: 50px;
  margin-left: 450px;
  margin-right: 150px;

  gap: 150px;
  
  @media screen and ${props => props.theme.media.desktop} {
    margin: 50px auto;
  }

  @media screen and ${props => props.theme.media.tablet} {
    margin: 0 auto;
  }

  @media screen and ${props => props.theme.media.mobile} {
    margin: 0 auto;
  }
`