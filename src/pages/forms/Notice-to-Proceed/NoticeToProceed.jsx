import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../../../lib/data";
import { ModalOverlay } from "../../../ui";
import { NoticeConsultant, NoticeProceed } from "../../../yup";
import NoticeForm from "./Forms";
import Preview from "./Preview";
// import PreviewElement from "./PreviewElement";
import { saveDoc, nextStep, page } from "./reducerSlice";
import { closeModal, showModal, modal } from "../reducer";

const NoticeToProceed = () => {
// console.log(modal)
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const showModal = useSelector(modal)

  
    const formik = useFormik({
        initialValues: {
            creationDate: '',
        startDate: '',
          startTime:'',
            deliveryDate: '',
      },
      validationSchema: NoticeProceed,
      onSubmit: (values) => {
        
        if (pages === 1) {
          dispatch(saveDoc(values))
          
          dispatch(nextStep())
        }
       }

    });
    
  return <ModalOverlay show={showModal}>
               {pages === 1 && <NoticeForm {...formik} /> } 
                 {pages === 2 && <Preview />}
            
          </ModalOverlay>
}

export default NoticeToProceed;