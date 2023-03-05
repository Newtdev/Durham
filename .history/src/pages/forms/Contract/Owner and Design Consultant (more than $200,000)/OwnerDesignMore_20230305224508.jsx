import React from "react";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { handleResultWithArray } from "../../../../shared-component";
import { OwnerContractManagement } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { OwnerContractManageMent } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";
import FormThree from "./forms/FormThree";
import FormFour from "./forms/FormFour";
import FormFive from "./forms/FormFive";
import FormSix from "./forms/FormSix";

import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const OwnerDesignMore = ({ id, filled }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: handleResultWithArray(values).form_fields,
      dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(7));
      }
    }
  };

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      agreementDate: "",
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
        dispatch(nextStep(5));
      } else if (pages === 5) {
        dispatch(nextStep(6));
      } else if (pages === 6) {
        console.log(values);
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

  const props = { ...formik, isLoading };

  return (
    <div>
      <ModalOverlay show={id === OwnerContractManagement && show}>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            {pages === 1 && <FormOne {...formik} />}
            {pages === 2 && <FormTwo {...formik} />}
            {pages === 3 && <FormThree {...formik} />}
            {pages === 4 && <FormFour {...formik} />}
            {pages === 5 && <FormFour {...formik} />}
            {pages === 6 && <FormFour {...props} />}
            {pages === 7 && <Preview />}
          </form>
        </FormikProvider>
      </ModalOverlay>
    </div>
  );
};

export default OwnerDesignMore;
