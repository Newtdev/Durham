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

    if (!a?.data?.form_fields) {
      return;
    }
    if (!a?.data) {
      return;
    }
    formik.setFieldValue(
      "contractStartDate",
      handleSavedDate(a?.data?.form_fields.contractStartDate)
    );
    formik.setFieldValue(
      "fromDuration",
      handleSavedDate(a?.data?.form_fields.fromDuration)
    );
    formik.setFieldValue(
      "signedDocument",
      handleSavedDate(a?.data?.form_fields.signedDocument)
    );
    formik.setFieldValue(
      "startDuration",
      handleSavedDate(a?.data?.form_fields.startDuration)
    );
    formik.setFieldValue(
      "calculatePayment",
      a?.data?.form_fields.calculatePayment
    );
    formik.setFieldValue(
      "allowablePayment",
      a?.data?.form_fields.allowablePayment
    );

    formik.setFieldValue("bidderName", a?.data?.form_fields.bidderName);
    formik.setFieldValue("rfpNumber", a?.data?.form_fields.rfpNumber);
  }, [dispatch, a]);

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
