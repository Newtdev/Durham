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
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";

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

    if (!a?.data?.form_fields) {
      return;
    }
    formik.setValues({
      projectIntent: a?.data?.form_fields?.projectIntent,
      amount: a?.data?.form_fields?.amount,
      percentage: a?.data?.form_fields?.percentage,
      substantialAmount: a?.data?.form_fields?.substantialAmount,
      finalAmount: a?.data?.form_fields?.finalAmount,
      Name: a?.data?.form_fields?.Name,
      conferenceAddress: a?.data?.form_fields?.conferenceAddress,
      conferenceState: a?.data?.form_fields?.conferenceState,
      conferenceCity: a?.data?.form_fields?.conferenceCity,
      conferenceZipCode: a?.data?.form_fields?.conferenceZipCode,
      procurementAmount: a?.data?.form_fields?.procurementAmount,
      constructionAmount: a?.data?.form_fields?.constructionAmount,
      ocmcostOfWork: a?.data?.form_fields?.ocmcostOfWork,
      ocmCMContingency: a?.data?.form_fields?.ocmCMContingency,
      ocmgeneralConditions: a?.data?.form_fields?.ocmgeneralConditions,
      ocmfees: a?.data?.form_fields?.ocmfees,
      ocmpreConstruction: a?.data?.form_fields?.ocmpreConstruction,
      projectName: a?.data?.form_fields?.projectName,
      location: [
        {
          projectState: a?.data?.form_fields?.projectState,
          projectCity: a?.data?.form_fields?.projectCity,
          projectZipCode: a?.data?.form_fields?.projectZipCode,
        },
      ],
    });
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
