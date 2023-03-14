import React from "react";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { handleResultWithArray } from "../../../../shared-component";
import { OwnerDesignConsultantMoreSlug } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal } from "../../reducer";
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
  const [state, setState] = React.useState("");

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

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
        dispatch(nextStep(7));
      }
    }
  };

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      agreementDate: "",
      projectObjective: "",
      newSchool: "",
      schoolName: "",
      studentNumber: "",
      squareFootage: "",
      accomodateNumber: "",
      street: "",
      state: "",
      city: "",
      zipCode: "",
      serviceCompensation: "",
      schematicCompletionDate: "",
      constructionCompletionDate: "",
      noticeDate: "",
      substantialCompletionDate: "",
      schematicPhase: 10,
      narrativePhase: 5,
      developmentPhase: 20,
      constructionContractPhase: 30,
      negotiationPhase: 5,
      constructionPhase: 25,
      constructionServicesPhase: 5,
      maxCost: 0,
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
        setState(values);
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
  console.log(states);

  return (
    <div>
      <ModalOverlay show={id === OwnerDesignConsultantMoreSlug && show}>
        <FormikProvider value={formik}>
          {/* <form onSubmit={formik.handleSubmit}> */}
          {pages === 1 && <FormOne {...formik} />}
          {pages === 2 && <FormTwo {...formik} />}
          {pages === 3 && <FormThree {...formik} />}
          {pages === 4 && <FormFour {...formik} />}
          {pages === 5 && <FormFive {...formik} />}
          {pages === 6 && <FormSix {...props} />}
          {pages === 7 && <Preview />}
          {/* </form> */}
        </FormikProvider>
      </ModalOverlay>
    </div>
  );
};

export default OwnerDesignMore;
