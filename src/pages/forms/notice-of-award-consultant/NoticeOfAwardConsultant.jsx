import {useFormik} from 'formik'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { notice_of_award_consultant } from '../../../shared-component/slug';
import { ModalOverlay } from '../../../ui';
import { NoticeofAwardSchema } from '../../../yup';
import { nextStep, page, saveDoc } from "../Notice-of-intent-consultant/reducerSlice";
import { modal, showModal } from "../reducer";
import Form from './Forms';
import Preview from './Preview';

const NoticeOfAwardConsultant = ({id}) => {
    const dispatch = useDispatch();
  const pages = useSelector(page)

    
    const show = useSelector(modal)
    const formik = useFormik({
        initialValues: {
            approval: '',
            creationDate: '',
            services:'',
            amount: '',
            email: '',
            deliveryDate:'',
            recipientCopy: '',
      },
      validationSchema: NoticeofAwardSchema,
      onSubmit: (values) => {
        
        if (pages === 1) {
          dispatch(saveDoc(values))
          
          dispatch(nextStep())
        }
       }

    });

    return <ModalOverlay show={id === notice_of_award_consultant && show}>
               {pages === 1 && <Form {...formik} /> } 
            {pages === 2 && <Preview />}
            
          </ModalOverlay>
}

export default NoticeOfAwardConsultant