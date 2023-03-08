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
import { setResult } from "../../../shared-component";
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
        // dispatch(saveFormField(values));
        dispatch(nextStep(2));
        // HandleSubmit(values);
      } else if (pages === 2) {
        console.log(values);
        // dispatch(saveFormField(values));
        HandleSubmit(values);
      }
    },
  });

  useEffect(() => {
    if (!a?.data?.form_fields) {
      return;
    }
    // setFieldValue('')
    formik.setValues({
      // ...a?.data?.form_fields,
      // type: a?.data?.form_fields?.type,
      // addressCopy: a?.data?.form_fields?.addressCopy,
      sexualOffenderOption: a?.data?.form_fields?.sexualOffenderOption,
    });
  }, [a]);

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
