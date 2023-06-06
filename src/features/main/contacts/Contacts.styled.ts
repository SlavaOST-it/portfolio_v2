import styled from "styled-components";
import {theme} from "../../../common/styles/Theme.styled";


export const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 50px;

  span {
    color: #ce0000;
  }

  label {
    margin-bottom: 6px;
    font-size: 14px;
    text-transform: uppercase;
  }

  input, textarea {
    outline: none;
    display: block;
    color: ${theme.colors.baseColor};
    max-width: 95%;
    border: none;
    background: none;
    font-size: 20px;

    transition: .2s;
    padding-bottom: 3px;
  }

  textarea {
    font-family: 'Inter', sans-serif;
    min-width: 100%;
    height: 150px;
    resize: none;
    border-bottom: 0.5px solid ${theme.colors.secondary};
  }

  input:focus, textarea:focus {
    outline: none;
  }
  
`

// ==============================//
export const FormStyle = styled.form`

`


// ==============================//
export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  
  gap: 15px;
  
`


// ==============================//
export const ContactItemBlock = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 20px;

  
  @media screen and ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`