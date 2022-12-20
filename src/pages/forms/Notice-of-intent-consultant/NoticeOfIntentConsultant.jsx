import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { NoticeConsultant } from "../../../yup";
import NoticeForm from "./Forms";
import PreviewElement from "./PreviewElement";
import { saveDoc, nextStep, page } from "./reducerSlice";

const NoticeOfIntentConsultant = () => {

  const dispatch = useDispatch();
  const pages = useSelector(page)

  const [showModal, setShowModal] = useState(true);


  
  const formik = useFormik({
    initialValues: {
      approval: '',
      creationDate: '',
      projectAmount: '',
      approvalDate: '',
      deliveryDate: '',
    },
    validationSchema: NoticeConsultant,
    onSubmit: (values) => {
        
      if (pages === 1) {
        dispatch(saveDoc(values))
          
        dispatch(nextStep())
      }
    }

  });
    
  return <ModalOverlay show={showModal}>
    {pages === 1 && <NoticeForm {...formik} />}
    {pages === 2 && <PreviewElement />}
            
  </ModalOverlay>
}

export default NoticeOfIntentConsultant;