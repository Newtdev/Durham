import "react-datepicker/dist/react-datepicker.css";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { RFPTemplateWithMWBESlug } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../reducer";
import FormOne from "./Forms/FormsOne";
import FormTwo from "./Forms/FormsTwo";
import FormThree from "./Forms/FormsThree";
import { nextStep, page } from "./reducer";
import Preview from "./Preview";
import { handleSavedDate, setResult } from "../../../shared-component";
// import { RFPTemplatewithMWBESchema } from "../../../yup";
import { handleResultWithArray } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const RFPTemplate = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const [a] = UseFetchFilledFormDetails(formID);

  const HandleSubmit = async (values) => {
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: setResult(values),

      // form_fields: handleResultWithArray(values).form_fields,
      // dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
    });

    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(4));
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      bidderName: "",
      rfpNumber: "",
      personName: "",
      contractType: "",
      issueDate: "",
      proposalDate: "",
      submissionDate: "",
      answerDate: "",
      bidOpeningDate: "",
      proposalSubmissionDate: "",
      proposalTime: "",
      submissionTime: "",
      answerTime: "",
      bidOpeningTime: "",
      proposalSubmissionTime: "",
      street: "",
      state: "",
      city: "",
      zipCode: "",
      date: "",
      time: "",
      prototypeNotUtilized: "",
      proposalScope: "",
      validityPeriod: "",
      attachment: "",
      // items: "",
      items: [
        {
          item: "",
        },
      ],
    },
    // validationSchema: RFPTemplatewithMWBESchema,
    onSubmit: (values) => {
      if (pages === 1) {
        dispatch(nextStep(2));
      } else if (pages === 2) {
        dispatch(nextStep(3));
      } else if (pages === 3) {
        HandleSubmit(values);
      }
    },
  });

  useEffect(() => {
    (async function () {
      const response = await (await fetch("/states.json")).json();
      dispatch(getStates(response));
    })();

    if (!a?.data) {
      return;
    }
    formik.setFieldValue("bidderName", a?.data?.form_fields.bidderName);
    formik.setFieldValue("rfpNumber", a?.data?.form_fields.rfpNumber);
    formik.setFieldValue("personName", a?.data?.form_fields.personName);
    formik.setFieldValue("contactType", a?.data?.form_fields.contactType);
    formik.setFieldValue(
      "issueDate",
      handleSavedDate(a?.data?.form_fields.issueDate)
    );
    formik.setFieldValue(
      "proposalDate",
      handleSavedDate(a?.data?.form_fields.proposalDate)
    );
    formik.setFieldValue(
      "submissionDate",
      handleSavedDate(a?.data?.form_fields.submissionDate)
    );
    formik.setFieldValue(
      "answerDate",
      handleSavedDate(a?.data?.form_fields.answerDate)
    );
    formik.setFieldValue(
      "bidOpeningDate",
      handleSavedDate(a?.data?.form_fields.bidOpeningDate)
    );
    formik.setFieldValue(
      "proposalSubmissionDate",
      handleSavedDate(a?.data?.form_fields.proposalSubmissionDate)
    );
    formik.setFieldValue(
      "proposalTime",
      handleSavedDate(a?.data?.form_fields.proposalTime)
    );
    formik.setFieldValue(
      "submissionTime",
      handleSavedDate(a?.data?.form_fields.submissionTime)
    );
    formik.setFieldValue(
      "answerTime",
      handleSavedDate(a?.data?.form_fields.answerTime)
    );
    formik.setFieldValue(
      "bidOpeningTime",
      handleSavedDate(a?.data?.form_fields.bidOpeningTime)
    );
    formik.setFieldValue(
      "proposalSubmissionTime",
      a?.data?.form_fields.proposalSubmissionTime
    );
  }, [a?.data]);

  const props = { ...formik, isLoading };

  return (
    <ModalOverlay show={id === RFPTemplateWithMWBESlug && show}>
      <FormikProvider value={formik}>
        {pages === 1 && <FormOne {...formik} />}
        {pages === 2 && <FormTwo {...formik} />}
        {pages === 3 && <FormThree {...props} />}
        {pages === 4 && <Preview />}
      </FormikProvider>
    </ModalOverlay>
  );
};

export default RFPTemplate;
