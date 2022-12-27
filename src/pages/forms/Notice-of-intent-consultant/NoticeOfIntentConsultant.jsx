import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notice_of_award_consultant, notice_of_intent_consultant } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { NoticeConsultant } from "../../../yup";
import NoticeForm from "./Forms";
import PreviewElement from "./PreviewElement";
import { saveDoc, nextStep, page } from "./reducerSlice";

const NoticeOfIntentConsultant = ({id}) => {

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
    
  return <ModalOverlay show={ id === notice_of_intent_consultant && showModal}>
    {pages === 1 && <NoticeForm {...formik} />}
    {pages === 2 && <PreviewElement />}
            
  </ModalOverlay>
}

export default NoticeOfIntentConsultant;