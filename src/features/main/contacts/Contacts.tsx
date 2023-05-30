import React, {useState} from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import emailjs from '@emailjs/browser';

import sprite from "../../../assets/icons/sprite.svg";

import {PATH} from "../../../utils/routes/routes";

import {InfoModal} from "./infoModal/InfoModal";
import {ContactItem} from "./contactItem/ContactItem";
import {ButtonStyle} from "../../../common/components/button/Button";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {TitlePage, Wrapper} from "../../../common/styles/Wrapper.styled";
import {ButtonBlock, ContactItemBlock, FormItem, FormStyle} from './Contacts.styled';


export const Contacts = () => {
    const [openModal, setOpenModal] = useState(false)
    const [showStyleModal, setShowStyleModal] = useState(false)

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
            openModalHandler()
            setTimeout(closeInfoModal, 7000)
        }
    })

    const openModalHandler = () => {
        setOpenModal(true)
        setShowStyleModal(true)
    }

    const closeInfoModal = () => {
        setShowStyleModal(false)
        setTimeout(() => setOpenModal(false), 4000)
    }

    return (
        <Wrapper id={PATH.contacts}>
            <NamePage nameBlock={"CONTACTS"} svgImg={`${sprite}#mail`}/>
            <TitlePage>
                Let's Work <span>Together!</span>
            </TitlePage>

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

            <InfoModal
                isOpen={openModal}
                showStyleModal={showStyleModal}
                onClose={closeInfoModal}
            >
                Your message has been sent <br/>
                <span>Thanks</span> for the feedback
            </InfoModal>
        </Wrapper>
    );
};
