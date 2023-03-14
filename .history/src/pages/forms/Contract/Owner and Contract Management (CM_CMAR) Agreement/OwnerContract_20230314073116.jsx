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
import { modal } from "../../reducer";
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
  setResult,
} from "../../../../shared-component";

const OwnerContractorManagementForm = ({ id, filled }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);
  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const [a] = UseFetchFilledFormDetails(formID);
  const handleResult = (res) => {
    let dynamic = [];
    let b = [];

    if (!res) return null;

    Object.entries(res).forEach((d, i) => {
      if (Array.isArray(d[1])) {
        dynamic = [
          ...dynamic,
          { field_name: d[0], field_value: JSON.stringify(d[1]) },
        ];
      } else {
        b = [...b, { field_name: d[0], field_value: d[1] }];
      }
    });
    return [...b, ...dynamic];
  };

  const HandleSubmit = async (values) => {
    // console.log(values);
    const response = await fillProjectDocument({
      project_document_id: formID,
      // form_fields: handleResultWithArray(values),
      // form_fields: setResult(values),
      form_fields: handleResult(values),
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
      ownerContingencyocm: "",
      procurementAmount: "",
      constructionAmount: "",
      ocmcostOfWork: "",
      flankSize: "rr",
      ocmCMContingency: "",
      ocmgeneralConditions: "",
      ocmfees: "",
      ocmpreConstruction: "",
      projectName: "",
      cmContigency: "",
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
        HandleSubmit(values);
      }
    },
  });

  console.log(formik.values);

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
      CMContigency: a?.data?.form_fields?.CMContigency,
    });
    formik.setFieldValue(
      "substantialCompletionDate",
      handleSavedDate(a?.data?.form_fields.substantialCompletionDate)
    );
    formik.setFieldValue(
      "agreementDate",
      handleSavedDate(a?.data?.form_fields.agreementDate)
    );
    // formik.setFieldValue(
    //   "location",
    //   parseDynamicInput(a?.data?.form_fields?.location)
    // );
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
};
export default OwnerContractorManagementForm;
