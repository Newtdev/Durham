import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { OwnerDesignConsultantLessSlug } from "../../../shared-component/slug";
import { OwnerDesignConsultantLessSchema } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import { nextStep, page } from "./reducer";
import Preview from "./Preview";

const OwnerDesignConsultantLessForm = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const param = Object.keys(values);
    const val = Object.values(values);

    console.log("values: ", values);
    console.log("pages: ", pages);

    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: [
        { field_name: param[0], field_value: val[0] },
        { field_name: param[1], field_value: val[1] },
        { field_name: param[2], field_value: val[2] },
        { field_name: param[3], field_value: val[3] },
        { field_name: param[4], field_value: val[4] },
      ],
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(3));
      }
    }
  };

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      agreementDate: "",
      sustainaibilityDate: "",
      financialOfficerSignDate: "",
      notarizedDate: "",
      sexualOffenderOption: "",
    },
    validationSchema: OwnerDesignConsultantLessSchema,
    onSubmit: (values) => {
      if (pages === 1) {
        console.log("pages: ", pages);
        dispatch(saveFormField(values));
        dispatch(nextStep(2));
        // HandleSubmit(values);
      } else if (pages === 2) {
        console.log("pages: ", pages);
        dispatch(saveFormField(values));
        HandleSubmit(values);
      }
    },
  });

  //return <ModalOverlay show={show} />

  return (
    <ModalOverlay show={id === OwnerDesignConsultantLessSlug && show}>
      {pages === 1 && <FormOne {...formik} />}
      {pages === 2 && <FormTwo {...formik} />}
      {pages === 3 && <Preview />}
    </ModalOverlay>
  );
};

export default OwnerDesignConsultantLessForm;
