import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { OwnerContractManagement } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { OwnerContractManageMent } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormFour from "./forms/FormFour";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
  handleSavedDate,
  handleResultWithArray,
  parseDynamicInput,
} from "../../../../shared-component";

const OwnerContractorManagementForm = ({ id, filled }) => {
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
      form_fields: handleResultWithArray(values),
      // dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(5));
      }
    }
  };

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      agreementDate: "",
      projectIntent: "",
      substantialCompletionDate: "",
      amount: "",
      percentage: "",
      substantialAmount: "",
      finalAmount: "",
      Name: "",
      conferenceAddress: "",
      conferenceState: "",
      conferenceCity: "",
      conferenceZipCode: "",
      flankSize: "",
      // contigency: 900,
      ownerContingencyocm: "",
      procurementAmount: "",
      constructionAmount: "",
      ocmcostOfWork: "",
      ocmCMContingency: "",
      ocmgeneralConditions: "",
      ocmfees: "",
      ocmpreConstruction: "",
      projectName: "",
      location: [
        {
          projectState: "",
          projectCity: "",
          projectZipCode: "",
        },
      ],
    },
    // validationSchema: OwnerContractManageMent,
    onSubmit: (values) => {
      if (pages === 1) {
        dispatch(nextStep(2));
      } else if (pages === 2) {
        dispatch(nextStep(3));
      } else if (pages === 3) {
        dispatch(nextStep(4));
      } else if (pages === 4) {
        // console.log(values);
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
      // ocmCMContingency2: a?.data?.form_fields?.ocmCMContingency2,
      ocmgeneralConditions: a?.data?.form_fields?.ocmgeneralConditions,
      ocmfees: a?.data?.form_fields?.ocmfees,
      ocmpreConstruction: a?.data?.form_fields?.ocmpreConstruction,
      projectName: a?.data?.form_fields?.projectName,
    });
    formik.setFieldValue(
      "substantialCompletionDate",
      handleSavedDate(a?.data?.form_fields.substantialCompletionDate)
    );
    formik.setFieldValue(
      "agreementDate",
      handleSavedDate(a?.data?.form_fields.agreementDate)
    );
    formik.setFieldValue(
      "location",
      parseDynamicInput(a?.data?.form_fields?.location)
    );
  }, [dispatch, a]);

  const props = { ...formik, isLoading };

  if (!filled) {
    return (
      <ModalOverlay show={id === OwnerContractManagement && show}>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            {pages === 1 ? <FormOne {...formik} /> : null}
            {pages === 2 ? <FormTwo {...formik} /> : null}
            {pages === 3 ? <FormThree {...formik} /> : null}
            {pages === 4 ? <FormFour {...props} /> : null}
            {pages === 5 ? <Preview /> : null}
          </form>
        </FormikProvider>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay show={id === OwnerContractManagement && show}>
      <Preview />
    </ModalOverlay>
  );

  // return (
  //   <ModalOverlay show={id === OwnerContractManagement && show}>
  //     <FormikProvider value={formik}>
  //       <form onSubmit={formik.handleSubmit}>
  //         {pages === 1 && <FormOne {...formik} />}
  //         {pages === 2 && <FormTwo {...formik} />}
  //         {pages === 3 && <FormThree {...formik} />}
  //         {pages === 4 && <FormFour {...props} />}
  //         {pages === 5 && <Preview />}
  //       </form>
  //     </FormikProvider>
  //   </ModalOverlay>
  // );
};
export default OwnerContractorManagementForm;
