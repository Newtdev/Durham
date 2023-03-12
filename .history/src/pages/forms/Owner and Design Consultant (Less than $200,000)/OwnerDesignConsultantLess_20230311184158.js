import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { OwnerDesignConsultantLessSlug } from "../../../shared-component/slug";
// import { OwnerDesignConsultantLessSchema } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import { nextStep, page } from "./reducer";
import Preview from "./Preview";
import { setResult, handleSavedDate } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const OwnerDesignConsultantLessForm = ({ id, filled }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const [a] = UseFetchFilledFormDetails(formID);

  const HandleSubmit = async (values) => {
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: setResult(values),
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
    // validationSchema: OwnerDesignConsultantLessSchema,
    onSubmit: (values) => {
      if (pages === 1) {
        dispatch(nextStep(2));
      } else if (pages === 2) {
        console.log(values);
        HandleSubmit(values);
      }
    },
  });

  useEffect(() => {
    if (!a?.data) {
      return;
    }
    formik.setFieldValue(
      "agreementDate",
      handleSavedDate(a?.data?.form_fields.agreementDate)
    );
    formik.setFieldValue(
      "sustainaibilityDate",
      handleSavedDate(a?.data?.form_fields.sustainaibilityDate)
    );
    formik.setFieldValue(
      "financialOfficerSignDate",
      handleSavedDate(a?.data?.form_fields.financialOfficerSignDate)
    );
    formik.setFieldValue(
      "notarizedDate",
      handleSavedDate(a?.data?.form_fields.notarizedDate)
    );
    formik.setFieldValue(
      "sexualOffenderOption",
      a?.data?.form_fields.sexualOffenderOption
    );
  }, [a?.data]);

  //return <ModalOverlay show={show} />
  const props = { ...formik, isLoading };

  return (
    <ModalOverlay show={id === OwnerDesignConsultantLessSlug && show}>
      {filled ? <Preview {...formik} /> : null}
      {pages === 1 && !filled ? <FormOne {...formik} /> : null}
      {pages === 2 && !filled ? <FormTwo {...props} /> : null}
      {pages === 3 && <Preview {...formik} />}
    </ModalOverlay>
  );
};

export default OwnerDesignConsultantLessForm;