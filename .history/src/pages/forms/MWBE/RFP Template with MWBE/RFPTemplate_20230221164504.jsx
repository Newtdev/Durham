import "react-datepicker/dist/react-datepicker.css";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { RFPTemplateWithMWBESlug } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./Forms/FormsOne";
import FormTwo from "./Forms/FormsTwo";
import FormThree from "./Forms/FormsThree";
import { nextStep, page } from "./reducer";
import Preview from "./Preview";

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

    console.log("values: ", values);

    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: [
        { field_name: param[0], field_value: val[0] },
        { field_name: param[1], field_value: val[1] },
        { field_name: param[2], field_value: val[2] },
        { field_name: param[3], field_value: val[3] },
        { field_name: param[4], field_value: val[4] },
        { field_name: param[5], field_value: val[5] },
        { field_name: param[6], field_value: val[6] },
        { field_name: param[7], field_value: val[7] },
        { field_name: param[8], field_value: val[8] },
        { field_name: param[9], field_value: val[9] },
        { field_name: param[10], field_value: val[10] },
        { field_name: param[11], field_value: val[11] },
        { field_name: param[12], field_value: val[12] },
        { field_name: param[13], field_value: val[13] },
        { field_name: param[14], field_value: val[14] },
        { field_name: param[15], field_value: val[15] },
        { field_name: param[16], field_value: val[16] },
        { field_name: param[17], field_value: val[17] },
        { field_name: param[18], field_value: val[18] },
        { field_name: param[19], field_value: val[19] },
        { field_name: param[20], field_value: val[20] },
        { field_name: param[21], field_value: val[21] },
        { field_name: param[22], field_value: val[22] },
        { field_name: param[23], field_value: val[23] },
        { field_name: param[24], field_value: val[24] },
        { field_name: param[25], field_value: val[25] },
        { field_name: param[26], field_value: val[26] },
        { field_name: param[27], field_value: val[27] },
      ],
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
      prototypeNotUtilized:       "Digital submissions through the Interactive Purchasing System (IPS) is preferred. Submission type, online or hard copy, will not affect proposal scoring. If submitting a hard copy, please submit 1 copy.",
      ,
      // Modify the information below if the prototype is not utilized: "",
      validityPeriod: "",
      items: "",
      attachment: "false",
      // Enter the Proposal Scope: "",
    },
    // validationSchema: OwnerContractManageMent,
    onSubmit: (values) => {
      if (pages === 1) {
        console.log("pages: ", pages);
        dispatch(saveFormField(values));
        dispatch(nextStep(2));
      } else if (pages === 2) {
        console.log(values);
        dispatch(saveFormField(values));
        dispatch(nextStep(3));
      } else if (pages === 3) {
        console.log(values);
        dispatch(saveFormField(values));
        dispatch(nextStep(4));
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
