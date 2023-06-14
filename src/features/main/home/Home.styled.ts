import styled from "styled-components";


//=========================//
export const Name = styled.div<{theme: string}>`
  font-size: 78px;
  
  @media screen and ${props => props.theme.media.mobile} {
    max-width: 300px;
    padding: 10px 5px;
    font-size: 60px;
    line-height: 60px;

    h1 {
      font-size: 52px;
      line-height: 60px;
    }
  }
`