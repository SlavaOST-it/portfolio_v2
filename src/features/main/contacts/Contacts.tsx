import React, {useState} from 'react';
import {Wrapper} from "../../../common/styles/Wrapper.styled";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import sprite from "../../../assets/icons/sprite.svg";
import {useFormik} from 'formik';

import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import {theme} from "../../../common/styles/Theme.styled";
import {ContactItem} from "./ContactItem";
import {ButtonStyle} from "../../../common/components/button/Button";


export const Contacts = () => {
    const [openModal, setOpenModal] = useState(false)

    const formik = useFormik({
        initialValues: {
            from_name: '',
            reply_to: '',
            message: ''
        },
        validationSchema: Yup.object({
            from_name: Yup.string().required('* Name field is required'),
            reply_to: Yup.string().email('Invalid email address')
                .required('* Email field is required'),
            message: Yup.string().required('* Message field is required')

        }),
        onSubmit: (values) => {
            emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID!, process.env.REACT_APP_FORMIK_TEMPLATE_ID!, values, process.env.REACT_APP_FORMIK_USER_ID)
                .then((result: any) => {
                    console.log(result.text);
                }, (error: any) => {
                    console.log(error.text);
                });
            formik.resetForm()
            setOpenModal(true)
            setTimeout(() => setOpenModal(false), 5000)
        }
    })
    return (
        <Wrapper>
            <NamePage nameBlock={"CONTACTS"} svgImg={`${sprite}#mail`}/>
            <h2>
                Let's Work <span>Together!</span>
            </h2>

            <ContactItemBlock>
                <ContactItem icon={"location"} direction={"Minsk, Belarus"}/>
                <ContactItem icon={"message"} direction={"slavaost-it@mail.ru"} href={"mailto: slavaost-it@mail.ru"}/>
                <ContactItem icon={"phone"} direction={"+375 (29) 667-10-53"} href={"tel: +375296671053"}/>
            </ContactItemBlock>


            <FormStyle onSubmit={formik.handleSubmit}>
                <FormItem>
                    <label>FULL NAME <span>*</span></label>
                    <input
                        type={"text"}
                        id={"from_name"}
                        placeholder={"Your Full Name"}
                        {...formik.getFieldProps('from_name')}
                    />

                    {formik.touched.from_name && formik.errors.from_name &&
                        <div>{formik.errors.from_name}</div>}
                </FormItem>

                <FormItem>
                    <label> Email <span>*</span> </label>

                    <input
                        type={"text"}
                        id={"reply_to"}
                        placeholder={"Your email address"}
                        {...formik.getFieldProps('reply_to')}
                    />

                    {formik.touched.reply_to && formik.errors.reply_to &&
                        <div>{formik.errors.reply_to}</div>}
                </FormItem>


                <FormItem>
                    <label> Message <span>*</span> </label>
                    <textarea id={"message"}
                              name={"message"}
                              placeholder={"Write your message here"}
                              autoComplete="off"
                              onChange={formik.handleChange}
                              value={formik.values.message}
                    />

                    {formik.touched.message && formik.errors.message &&
                        <div>{formik.errors.message}</div>}
                </FormItem>

                <ButtonBlock>
                    <ButtonStyle
                        type={"submit"}
                        value="Send"
                        disabled={formik.isSubmitting}
                    >
                        Send Message
                    </ButtonStyle>

                    <ButtonStyle>
                        <a
                            href={require('../../../common/download/Остапкевич_Вячеслав_CV.pdf')}
                            download={'Остапкевич_Вячеслав_CV.pdf'}
                        >
                            Download CV
                        </a>
                    </ButtonStyle>
                </ButtonBlock>



            </FormStyle>
        </Wrapper>
    );
};


const FormItem = styled.div`
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
    color: #fff;
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


const FormStyle = styled.form`







`

const ButtonBlock = styled.div`
  :first-child {
    margin-right: 50px;
  }
`
const ContactItemBlock = styled.section`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`