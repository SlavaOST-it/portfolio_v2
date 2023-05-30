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
    width: 300px;
    border: none;
    background: none;
    font-size: 20px;

    transition: .2s;
    padding-bottom: 3px;
  }

  textarea {
    font-family: 'Inter', sans-serif;
    min-width: 90%;
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
  max-width: 90%;

`


// ==============================//
export const ContactItemBlock = styled.section`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`