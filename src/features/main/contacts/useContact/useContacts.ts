import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import emailJs from "@emailjs/browser";

export const useContacts = () => {

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
                })
                .catch((error: any) => {
                    console.log(error.text);
                });
            formik.resetForm()
            openModalHandler("text")
        }
    })

    const openModalHandler = (value: "text" | "map") => {
        value === "text" ? setOpenModal(true) : setOpenMapModal(true)
        setShowStyleModal(true)
    }

    let timerId: NodeJS.Timeout

    const closeInfoModal = (value: "text" | "map") => {
        clearTimeout(timerId)

        timerId = setTimeout(() => {
            if (value === "text") {
                setOpenModal(false)
            } else {
                setOpenMapModal(false)
            }
        }, 2000)

        setShowStyleModal(false)
    }

    return {
        formik,
        openModal,
        showStyleModal,
        openMapModal,
        openModalHandler,
        closeInfoModal
    }
}