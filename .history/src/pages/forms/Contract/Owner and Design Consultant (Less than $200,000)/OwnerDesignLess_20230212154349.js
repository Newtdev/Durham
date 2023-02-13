import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { OwnerDesignConsultantLess } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { ShortSmallFormDesignSchema } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./FormOne";

const OwnerDesignConsultantLess = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const param = Object.keys(values);
    const val = Object.values(values);

    console.log("values: ", values);

    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: [
        { field_name: param[0], field_value: val[0] },
        { field_name: param[1], field_value: val[1] },
        { field_name: param[2], field_value: val[2] },
        { field_name: param[3], field_value: val[3] },
      ],
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(2));
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
    },
    // validationSchema: ShortSmallFormDesignSchema,
    onSubmit: (values) => {
      if (pages === 1) {
        console.log("pages: ", pages);
        dispatch(saveFormField(values));
        HandleSubmit(values);
      }
    },
  });

  //return <ModalOverlay show={show} />

  return (
    <ModalOverlay show={id === OwnerDesignConsultantLess && show}>
      {pages === 1 && <FormOne {...formik} />}
    </ModalOverlay>
  );
};

export default OwnerDesignConsultantLess;
