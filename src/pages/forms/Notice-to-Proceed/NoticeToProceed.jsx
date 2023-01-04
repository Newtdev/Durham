import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { NoticeProceed } from "../../../yup";
import NoticeForm from "./Forms";
import Preview from "./Preview";
import { nextStep, page } from "./reducerSlice";
import {  modal } from "../reducer";
import { notice_to_proceed } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";

const NoticeToProceed = ({id}) => {
// console.log(modal)
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const showModal = useSelector(modal);


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
            creationDate: '',
        startDate: '',
          startTime:'',
            deliveryDate: '',
      },
      validationSchema: NoticeProceed,
      onSubmit: (values) => {
        
        if (pages === 1) {
          HandleSubmit(values)
        }
       }

    });
    
  const props = {
    ...formik,
    isLoading
  }
  return <ModalOverlay show={id === notice_to_proceed && showModal}>
               {pages === 1 && <NoticeForm {...props} /> } 
                 {pages === 2 && <Preview />}
            
          </ModalOverlay>
}

export default NoticeToProceed;