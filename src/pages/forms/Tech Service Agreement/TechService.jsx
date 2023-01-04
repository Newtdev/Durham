import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFetchFilledFormQuery, useFillProjectDocumentMutation } from "../../../features/services/api";
import { techServices } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { TechServiceSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal } from "../reducer";
import Forms from "./Forms";
import { page, techNextStep } from "./reducer";
import TechPreview from "./TechPreview";

const TechService = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal);
  const formID = useSelector(project_document_id)
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
    ]
    })
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
      });
      } else {
        dispatch(techNextStep())
      }
    }
}



  const Formik = useFormik({
     
      initialValues: {
        creationDate: '',
        amount:'',
        startDate: '',
        endDate: '',
        signedDate: '',
      },
      validationSchema: TechServiceSchema,
    onSubmit: (values) => {
       
      if (pages === 1) {
        HandleFormSubmit(values);      
        }
      }
  });

  useEffect(() => {
    if (!response?.data?.data) {
      return;
    }
    Formik.setFieldValue('amount', response?.data?.data?.form_fields.amount)
  }, [response?.data?.data]);

  const props = {
    ...Formik,
    isLoading
  }

  
  return <ModalOverlay show={id === techServices && show}>
    
    {pages === 1 && <Forms {...props} />}
    {pages === 2 && <TechPreview {...Formik} />}
  </ModalOverlay>
};

export default TechService;