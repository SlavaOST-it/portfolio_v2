import styled from "styled-components";


export const TitlePage = styled.h2`
  font-size: 48px;
  line-height: 60px;
  font-weight: 300;
  margin-bottom: 34px;
`

// =======================================//
export const Wrapper = styled.section<{theme: string}>`
  max-height: 100%;
  padding-bottom: 100px;
  
  margin-bottom: 50px;
  
  &:last-child{
    padding-bottom: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 78px;
    letter-spacing: -0.2px;
    line-height: 90px;
    margin-bottom: 42px;
    font-weight: 300;
  }

  span {
    color: ${props => props.theme.colors.activeColor.primary_color};
  }

  p {
    max-width: 650px;

    font-size: 18px;
    opacity: 1;
    margin-bottom: 32px;
    line-height: 30px;
  }

  @media screen and ${props => props.theme.media.desktop} {
    max-width: 767px;
    margin: 50px auto;
  }

  @media screen and ${props => props.theme.media.tablet} {
    max-width: 576px;
    width: 100%;
    padding: 10px;
    margin: 50px auto;
  }

  @media screen and ${props => props.theme.media.mobile} {
    max-width: 300px;
    padding: 10px 5px;
    margin: 50px auto;
    
    h2{
      font-size: 42px;
    }
  }
`
