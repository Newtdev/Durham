import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { ShortSmallFormDesign } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { ShortSmallFormDesignSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../reducer";
import FormOne from "./forms/FormOne";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const ShortSmallFormDesignForm = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal)

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const param = Object.keys(values)
    const val = Object.values(values)

    console.log("values: ", values)

    const response = await fillProjectDocument({
      project_document_id: formID, form_fields: [{ field_name: param[0], field_value: val[0] },
      { field_name: param[1], field_value: val[1] },
      { field_name: param[2], field_value: val[2] },
      { field_name: param[3], field_value: val[3] },
      { field_name: param[4], field_value: val[4] },
      { field_name: param[5], field_value: val[5] },
      { field_name: param[6], field_value: val[6] },
      ]
    })
    if (response) {
      console.log("response: ", response)
      if (response?.error) {
        console.log("response?.error: ", response?.error)
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(3))
      }
    }
  }

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      agreementDate: "",
      ownerEmail: "",
      signDate: "",
    },
    validationSchema: ShortSmallFormDesignSchema,
    onSubmit: (values) => {
      if (pages === 1) {
        console.log("pages: ", pages)
        dispatch(nextStep(2))
        dispatch(saveFormField(values))
        HandleSubmit(values)
      }
    }
  });

  // return <ModalOverlay show={true}>
  return <ModalOverlay show={id === ShortSmallFormDesign && show}>
      {pages === 1 && <FormOne {...formik} />}
      {pages === 2 && <Preview />}
  </ModalOverlay>                                         
}
export default ShortSmallFormDesignForm;