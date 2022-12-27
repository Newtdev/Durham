import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {  notice_of_intent_consultant } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { NoticeConsultant } from "../../../yup";
import { modal } from "../reducer";
import NoticeForm from "./Forms";
import PreviewElement from "./PreviewElement";
import { saveDoc, nextStep, page } from "./reducerSlice";

const NoticeOfIntentConsultant = ({id}) => {

  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal)

  
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
    
  return <ModalOverlay show={ id === notice_of_intent_consultant && show}>
    {pages === 1 && <NoticeForm {...formik} />}
    {pages === 2 && <PreviewElement />}
            
  </ModalOverlay>
}

export default NoticeOfIntentConsultant;