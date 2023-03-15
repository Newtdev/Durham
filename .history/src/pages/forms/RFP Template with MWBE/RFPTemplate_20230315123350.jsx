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
import { parseDynamicInput } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const RFPTemplate = ({ id, filled }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const [a] = UseFetchFilledFormDetails(formID);

  const handleResultWithArray = (res) => {
    let dynamic = [];
    let sum = [];

    if (!res) return null;

    const a = Object.entries(res).findIndex((a) => Array.isArray(a[1]));

    Object.entries(res).forEach((d, i) => {
      if (Array.isArray(d[1])) {
        dynamic = [{ field_name: d[0], field_value: JSON.stringify(d[1]) }];
      }
      sum = [...sum, { field_name: d[0], field_value: d[1] }];

      sum.splice(a, 1);
    });

    return [...sum, ...dynamic];
  };

  const HandleSubmit = async (values) => {
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: handleResultWithArray(values),
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
      //   prototypeNotUtilized: "",
      proposalScope: "",
      validityPeriod: "",
      attachment: "",
      text: "",
      items: [
        {
          item: "",
        },
      ],
      location: [
        {
          projectAddress: "",
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
      handleSavedDate(a?.data?.form_fields.proposalSubmissionTime)
    );
    formik.setFieldValue("date", handleSavedDate(a?.data?.form_fields.date));
    formik.setFieldValue("time", handleSavedDate(a?.data?.form_fields.time));
    formik.setFieldValue("street", a?.data?.form_fields.street);
    formik.setFieldValue("state", a?.data?.form_fields.state);
    formik.setFieldValue("city", a?.data?.form_fields.city);
    formik.setFieldValue("zipCode", a?.data?.form_fields.zipCode);

    formik.setFieldValue(
      "prototypeNotUtilized",
      a?.data?.form_fields.prototypeNotUtilized
    );
    formik.setFieldValue("proposalScope", a?.data?.form_fields.proposalScope);
    formik.setFieldValue("validityPeriod", a?.data?.form_fields.validityPeriod);
    formik.setFieldValue("attachment", a?.data?.form_fields.attachment);
    formik.setFieldValue(
      "items",
      parseDynamicInput(a?.data?.form_fields?.items)
    );
    formik.setFieldValue("contractType", a?.data?.form_fields.contractType);
  }, [a?.data]);

  const props = { ...formik, isLoading };

  if (!filled) {
    return (
      <ModalOverlay show={id === RFPTemplateWithMWBESlug && show}>
        <FormikProvider value={formik}>
          {pages === 1 ? <FormOne {...formik} /> : null}
          {pages === 2 ? <FormTwo {...formik} /> : null}
          {pages === 3 ? <FormThree {...props} /> : null}
          {pages === 4 ? <Preview /> : null}
        </FormikProvider>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay show={id === RFPTemplateWithMWBESlug && show}>
      <Preview />
    </ModalOverlay>
  );

  // return (
  //   <ModalOverlay show={id === RFPTemplateWithMWBESlug && show}>
  //     <FormikProvider value={formik}>
  //       {pages === 1 && <FormOne {...formik} />}
  //       {pages === 2 && <FormTwo {...formik} />}
  //       {pages === 3 && <FormThree {...props} />}
  //       {pages === 4 && <Preview />}
  //     </FormikProvider>
  //   </ModalOverlay>
  // );
};

export default RFPTemplate;
