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
import { RFPTemplatewithMWBESchema } from "../../../yup";
import { handleResultWithArray } from "../../../shared-component";

const RFPTemplate = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const param = Object.keys(values);
    const val = Object.values(values);

    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: handleResultWithArray(values).form_fields,
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
      items: "",
      attachment: "",
    },
    // validationSchema: RFPTemplatewithMWBESchema,
    onSubmit: (values) => {
      if (pages === 1) {
        dispatch(saveFormField(values));
        dispatch(nextStep(2));
      } else if (pages === 2) {
        dispatch(saveFormField(values));
        dispatch(nextStep(3));
      } else if (pages === 3) {
        dispatch(saveFormField(values));
        HandleSubmit(values);
      }
    },
  });

  useEffect(() => {
    (async function () {
      const response = await (await fetch("/states.json")).json();
      dispatch(getStates(response));
    })();
  }, [dispatch]);

  return (
    <ModalOverlay show={id === RFPTemplateWithMWBESlug && show}>
      <FormikProvider value={formik}>
        {pages === 1 && <FormOne {...formik} />}
        {pages === 2 && <FormTwo {...formik} />}
        {pages === 3 && <FormThree {...formik} />}
        {pages === 4 && <Preview />}
      </FormikProvider>
    </ModalOverlay>
  );
};

export default RFPTemplate;
