import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import {NoticeIntentAward } from "../../../yup";
import Preview from "./Preview";
import Form from "./Forms";
import { modal, showModal } from "../reducer";
import { useEffect } from "react";
import { notice_of_award_contractor } from "../../../shared-component/slug";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery, useFillProjectDocumentMutation } from "../../../features/services/api";
import { toast } from "react-toastify";
import { nextStep, page } from "./reducer";


    const NoticeOfAwardContrator = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal)
  const formID = useSelector(project_document_id);
    const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const response = useFetchFilledFormQuery(formID);

  
    const HandleFormSubmit = async (values) => {
    const param = Object.keys(values)
    const val = Object.values(values)
    const response = await fillProjectDocument({
      project_document_id: formID, form_fields: [{ field_name: param[0], field_value: val[0] },
      { field_name: param[1], field_value: val[1] },
      { field_name: param[2], field_value: val[2] },
      { field_name: param[3], field_value: val[3] },
      { field_name: param[4], field_value: val[4] },
      { field_name: param[5], field_value: val[5] },
      { field_name: param[6], field_value: val[6] },
    ]
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
      });
      } else {
        dispatch(nextStep())
        // dispatch(techNextStep())
      }
    }
}

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
          HandleFormSubmit(values)

        }
       }

    });
      
    useEffect(() => {
      if (!response?.data?.data) {
        return;
      }
      formik.setFieldValue('recipientCopy',response?.data?.data?.form_fields.recipientCopy)
      formik.setFieldValue('contractorContact',response?.data?.data?.form_fields.contractorContact)
      formik.setFieldValue('email',response?.data?.data?.form_fields.email)
      formik.setFieldValue('sendersName',response?.data?.data?.form_fields.sendersName)
      formik.setFieldValue('phone',response?.data?.data?.form_fields.phone)
    }, [response?.data?.data])
      
  return <ModalOverlay show={id === notice_of_award_contractor && show}>
               {pages === 1 && <Form {...formik} /> } 
                 {pages === 2 && <Preview />}
            
</ModalOverlay>
}



export default NoticeOfAwardContrator