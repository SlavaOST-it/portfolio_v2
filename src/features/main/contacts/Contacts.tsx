import React, {useState} from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import emailjs from '@emailjs/browser';

import sprite from "../../../assets/icons/sprite.svg";

import {PATH} from "../../../utils/routes/routes";

import {InfoModal} from "../../../common/components/infoModal/InfoModal";
import {ContactItem} from "./contactItem/ContactItem";
import {ButtonStyle} from "../../../common/components/button/Button";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";
import {TitlePage, Wrapper} from "../../../common/styles/Wrapper.styled";
import {ButtonsBlock, ContactItemsBlock, ErrorMessage, FormItem, FormStyle} from './Contacts.styled';


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
            reply_to: Yup.string().email('Invalid email address').matches(/^[^@]+@[^@]+\.[^@]+$/, 'Invalid email address')
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
        setTimeout(() => setOpenModal(false), 2000)
    }

    return (
        <Wrapper id={PATH.contacts}>
            <NamePage nameBlock={"CONTACTS"} svgImg={`${sprite}#mail`}/>
            <TitlePage>
                Let's Work <span>Together!</span>
            </TitlePage>

            <ContactItemsBlock>
                <ContactItem icon={"location"} direction={"Minsk, Belarus"} callBack={openModalHandler}/>
                <ContactItem icon={"message"} direction={"slavaost-it@mail.ru"} href={"mailto: slavaost-it@mail.ru"}/>
                <ContactItem icon={"phone"} direction={"+375 (29) 667-10-53"} href={"tel: +375296671053"}/>
            </ContactItemsBlock>


            <FormStyle onSubmit={formik.handleSubmit}>
                <FormItem>
                    <label htmlFor={"from_name"}>FULL NAME <span>*</span></label>
                    <input
                        type={"text"}
                        id={"from_name"}
                        placeholder={"Your Full Name"}
                        {...formik.getFieldProps("from_name")}
                    />

                    {formik.touched.from_name && formik.errors.from_name &&
                        <ErrorMessage>{formik.errors.from_name}</ErrorMessage>}
                </FormItem>

                <FormItem>
                    <label> Email <span>*</span> </label>
                    <input
                        type={"text"}
                        id={"reply_to"}
                        placeholder={"Your email address"}
                        {...formik.getFieldProps("reply_to")}
                    />

                    {formik.touched.reply_to && formik.errors.reply_to &&
                        <ErrorMessage>{formik.errors.reply_to}</ErrorMessage>}
                </FormItem>


                <FormItem>
                    <label> Message <span>*</span> </label>
                    <textarea id={"message"}
                              placeholder={"Write your message here"}
                              autoComplete="off"
                              {...formik.getFieldProps("message")}
                    />

                    {formik.touched.message && formik.errors.message &&
                        <ErrorMessage>{formik.errors.message}</ErrorMessage>}
                </FormItem>

                <ButtonsBlock>
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
                </ButtonsBlock>
            </FormStyle>

            <InfoModal
                isOpen={openModal}
                showStyleModal={showStyleModal}
                onClose={closeInfoModal}
            >
                {/*Your message has been sent <br/>*/}
                {/*<span>Thanks</span> for the feedback*/}

                <iframe
                    src="https://yandex.by/map-widget/v1/?ll=27.694352%2C53.855338&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDExNxIc0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiIKDQ5y3EEVZpxXQg%2C%2C&z=10.15"
                    width="100%" height="100%" frameBorder="1" allowFullScreen={true}
                    style={{position: "relative", borderRadius: "50px"}}>
                </iframe>
            </InfoModal>
        </Wrapper>
    );
};


