import React, {useState} from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import emailJs from '@emailjs/browser';

import sprite from "../../../assets/icons/sprite.svg";

import {PATH} from "../../../utils/routes/routes";

import {ContactItem} from "./contactItem/ContactItem";
import {Modal} from "../../../common/components/infoModal/Modal";
import {NamePage} from "../../../common/components/nameBlock/NameBlock";

import {TitlePage, Wrapper} from "../../../common/styles/Wrapper.styled";
import {ButtonStyle} from "../../../common/components/button/Button.styled";
import {ButtonsBlock, ContactItemsBlock, ErrorMessage, FormItem, FormStyle} from './Contacts.styled';
import {EffectAnimation} from "../../../common/components/effectAnimation/EffectAnimation";


export const Contacts = () => {
    const [openModal, setOpenModal] = useState(false)
    const [showStyleModal, setShowStyleModal] = useState(false)

    const [openMapModal, setOpenMapModal] = useState(false)

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
            emailJs.send(process.env.REACT_APP_FORMIK_SERVICE_ID!, process.env.REACT_APP_FORMIK_TEMPLATE_ID!, values, process.env.REACT_APP_FORMIK_USER_ID)
                .then((result: any) => {
                    console.log(result.text);
                }, (error: any) => {
                    console.log(error.text);
                });
            formik.resetForm()
            openModalHandler("text")
            setTimeout(closeInfoModal, 7000)

        }
    })

    const openModalHandler = (value: "text" | "map") => {
        value === "text" ? setOpenModal(true) : setOpenMapModal(true)
        setShowStyleModal(true)
    }

    const closeInfoModal = (value: "text" | "map") => {
        value === "text"
            ? setTimeout(() => setOpenModal(false), 2000)
            : setTimeout(() => setOpenMapModal(false), 2000)
        setShowStyleModal(false)
    }

    return (
        <Wrapper id={PATH.contacts}>
            <NamePage nameBlock={"CONTACTS"} svgImg={`${sprite}#mail`}/>

            <EffectAnimation>
                <TitlePage>
                    Let's Work <span>Together!</span>
                </TitlePage>
            </EffectAnimation>

            <EffectAnimation>
                <ContactItemsBlock>
                    <ContactItem icon={"location"} direction={"Minsk, Belarus"}
                                 callBack={() => openModalHandler("map")}/>
                    <ContactItem icon={"message"} direction={"slavaost-it@mail.ru"}
                                 href={"mailto: slavaost-it@mail.ru"}/>
                    <ContactItem icon={"phone"} direction={"+375 (29) 667-10-53"} href={"tel: +375296671053"}/>
                </ContactItemsBlock>
            </EffectAnimation>


            <FormStyle onSubmit={formik.handleSubmit}>
                <EffectAnimation>
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
                </EffectAnimation>

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

            <Modal
                isOpen={openModal}
                showStyleModal={showStyleModal}
                onClose={() => closeInfoModal("text")}
            >
                <p>Your message has been sent <br/>
                    <span>Thanks</span> for the feedback
                </p>
            </Modal>

            <Modal
                isOpen={openMapModal}
                showStyleModal={showStyleModal}
                onClose={() => closeInfoModal("map")}
            >
                <iframe
                    title={"map"}
                    src="https://yandex.by/map-widget/v1/?ll=31.400540%2C53.545690&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDExNxIc0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiIKDQ5y3EEVZpxXQg%2C%2C&z=5.69"
                    width="100%" height="100%" frameBorder="1" allowFullScreen={true}
                    style={{position: "relative", borderRadius: "50px"}}>

                </iframe>
            </Modal>
        </Wrapper>
    );
};
