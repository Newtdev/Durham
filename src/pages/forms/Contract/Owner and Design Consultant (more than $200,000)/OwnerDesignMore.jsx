import React from "react";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import {
  handleResultWithArray,
  handleSavedDate,
  parseDynamicInput,
} from "../../../../shared-component";
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
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";

const OwnerDesignMore = ({ id, filled }) => {
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

    // console.log([...b, ...dynamic]);
    return [...b, ...dynamic];
  };

  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const [a] = UseFetchFilledFormDetails(formID);

  const HandleSubmit = async (values) => {
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: handleResult(values),
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
      signDate: "",
      approveDate: "",
      notarySealDate: "",
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
      services: [
        {
          service: "",
        },
      ],
      consultants: [],
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
        HandleSubmit(values);
      }
    },
  });

  useEffect(() => {
    if (!a?.data) {
      return;
    }
    console.log(a?.data);
    formik.setFieldValue(
      "agreementDate",
      handleSavedDate(a?.data?.form_fields?.agreementDate)
    );
    formik.setFieldValue(
      "schematicCompletionDate",
      handleSavedDate(a?.data?.form_fields?.schematicCompletionDate)
    );
    formik.setFieldValue(
      "constructionCompletionDate",
      handleSavedDate(a?.data?.form_fields?.constructionCompletionDate)
    );

    formik.setFieldValue(
      "signDate",
      handleSavedDate(a?.data?.form_fields?.signDate)
    );
    formik.setFieldValue(
      "approveDate",
      handleSavedDate(a?.data?.form_fields?.approveDate)
    );
    formik.setFieldValue(
      "notarySealDate",
      handleSavedDate(a?.data?.form_fields?.notarySealDate)
    );
    formik.setFieldValue(
      "substantialCompletionDate",
      handleSavedDate(a?.data?.form_fields?.substantialCompletionDate)
    );
    formik.setFieldValue(
      "noticeDate",
      handleSavedDate(a?.data?.form_fields?.noticeDate)
    );
    formik.setFieldValue(
      "projectObjective",
      a?.data?.form_fields?.projectObjective
    );
    formik.setFieldValue("newSchool", a?.data?.form_fields?.newSchool);
    formik.setFieldValue("schoolName", a?.data?.form_fields?.schoolName);
    formik.setFieldValue("studentNumber", a?.data?.form_fields?.studentNumber);
    formik.setFieldValue(
      "accomodateNumber",
      a?.data?.form_fields?.accomodateNumber
    );
    formik.setFieldValue("squareFootage", a?.data?.form_fields?.squareFootage);
    formik.setFieldValue("street", a?.data?.form_fields?.street);
    formik.setFieldValue("city", a?.data?.form_fields?.city);
    formik.setFieldValue("state", a?.data?.form_fields?.state);
    formik.setFieldValue("zipCode", a?.data?.form_fields?.zipCode);

    formik.setFieldValue("maxCost", a?.data?.form_fields?.maxCost);
    formik.setFieldValue(
      "services",
      parseDynamicInput(a?.data?.form_fields?.services)
    );
    formik.setFieldValue(
      "consultants",
      parseDynamicInput(a?.data?.form_fields?.consultants)
    );
  }, [a?.data]);

  useEffect(() => {
    (async function () {
      const response = await (await fetch("/states.json")).json();
      dispatch(getStates(response));
    })();
  }, [dispatch]);

  const props = { ...formik, isLoading };

  if (!filled) {
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
  }

  return (
    <div>
      <ModalOverlay show={id === OwnerDesignConsultantMoreSlug && show}>
        <FormikProvider value={formik}>
          {/* <form onSubmit={formik.handleSubmit}> */}

          <Preview />
          {/* </form> */}
        </FormikProvider>
      </ModalOverlay>
    </div>
  );
};

export default OwnerDesignMore;
