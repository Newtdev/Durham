import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import {  notice_of_intent_consultant } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { NoticeConsultant } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import NoticeForm from "./Forms";
import PreviewElement from "./PreviewElement";
import { saveDoc, nextStep, page } from "./reducerSlice";

const NoticeOfIntentConsultant = ({id}) => {

  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal)

  const formID = useSelector(project_document_id);
  
  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();



  const HandleSubmit = async (values) => {
    const param = Object.keys(values)
    const val = Object.values(values)
    
    const response = await fillProjectDocument({
      project_document_id: formID, form_fields: [{ field_name: param[0], field_value: val[0] },
      { field_name: param[1], field_value: val[1] },
      { field_name: param[2], field_value: val[2] },
      { field_name: param[3], field_value: val[3] },
      { field_name: param[4], field_value: val[4] },
    ]
    })
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
      });
      } else {
        dispatch(nextStep())
      }
    }
}


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
        dispatch(saveFormField(values))

        HandleSubmit(values)
      }
    }

  });
  const props = {
    ...formik,
    isLoading
  }
    
  return <ModalOverlay show={ id === notice_of_intent_consultant && show}>
    {pages === 1 && <NoticeForm {...props} />}
    {pages === 2 && <PreviewElement />}
            
  </ModalOverlay>
}

export default NoticeOfIntentConsultant;