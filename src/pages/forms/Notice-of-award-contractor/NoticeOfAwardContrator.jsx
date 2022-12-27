import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import {NoticeIntentAward } from "../../../yup";
import Preview from "./Preview";
import Form from "./Forms";
import { modal, showModal } from "../reducer";
import { nextStep, page, saveDoc } from "../Notice-of-intent-consultant/reducerSlice";
import { useEffect } from "react";
import { notice_of_award_contractor } from "../../../shared-component/slug";


    const NoticeOfAwardContrator = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal)
  
    const formik = useFormik({
        initialValues: {
            creationDate: '',
            approvalDate: '',
            contractorContact: '',
            email: '',
            sendersName:'',
            phone:'',
            recipientCopy: '',
      },
      validationSchema: NoticeIntentAward,
      onSubmit: (values) => {
        
        if (pages === 1) {
          dispatch(saveDoc(values))
          
          dispatch(nextStep())
        }
       }

    });
    
  return <ModalOverlay show={id === notice_of_award_contractor && show}>
               {pages === 1 && <Form {...formik} /> } 
                 {pages === 2 && <Preview />}
            
          </ModalOverlay>
}



export default NoticeOfAwardContrator