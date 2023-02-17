import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { OwnerAndDesignMore } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { OwnerAndDesignMoreSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../reducer";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import FormFour from "./forms/FormFour";
import FormFive from "./forms/FormFive";
import FormSix from "./forms/FormSix";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const OwnerAndDesignMoreForm = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  // const response = useFetchFilledFormQuery(formID);

  const HandleSubmit = async (values) => {
    const param = Object.keys(values)
    const val = Object.values(values)

    console.log("values: ", values)

    const response = await fillProjectDocument({
      project_document_id: formID, form_fields: [{ field_name: param[0], field_value: val[0] },
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
      { field_name: param[28], field_value: val[28] },
      { field_name: param[29], field_value: val[29] },
      { field_name: param[30], field_value: val[30] },
      { field_name: param[31], field_value: val[31] },

      ]
    })
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(7))
      }
    }
  }

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
      schematicCompletionDate: "",
      constructionCompletionDate: "",
      noticeDate: "",
      substantialCompletionDate: "",
      consultants: [{
        consultantHired: "",
        selectedField: ""
      }],
      ccap: "",
      ownerDeadline: "",
      percentage: "",
      serviceCompensation: "",
      narrativePhase: "",
      schematicPhase: "",
      developmentPhase: "",
      constructionContractPhase: "",
      negotiationPhase: "",
      constructionPhase: "",
      constructionServicesPhase: "",
      maxCost: "",
      services: [],
      signDate: "",
      approveDate: "",
      notarySealDate: ""
    },
    validationSchema: OwnerAndDesignMoreSchema[pages - 1],
    onSubmit: (values) => {
      if (pages === 1) {
        console.log("pages: ", pages)
        dispatch(nextStep(2))
      } else if (pages === 2) {
        console.log("pages: ", pages)
        dispatch(nextStep(3))
      } else if (pages === 3) {
        console.log("pages: ", pages)
        dispatch(nextStep(4))
      } else if (pages === 4) {
        console.log("pages: ", pages);
        dispatch(nextStep(5));
      } else if (pages === 5) {
        console.log("pages: ", pages);
        dispatch(nextStep(6));
      } else if (pages === 6) {
        console.log("pages: ", pages);
        dispatch(nextStep(7));
        dispatch(saveFormField(values))
        HandleSubmit(values)
      } else if (pages === 7) {
        console.log("pages: ", pages)
        dispatch(saveFormField(values))
        HandleSubmit(values)
      }
    }

  });

  useEffect(() => {
    (async function () {
      const response = await (await fetch('/states.json')).json();
      dispatch(getStates(response))

    }())
  }, [dispatch]);

  // return <ModalOverlay show={true}>
  return <ModalOverlay show={id === OwnerAndDesignMore && show}>
    <FormikProvider value={formik}>
      {pages === 1 && <FormOne {...formik} />}
      {pages === 2 && <FormTwo {...formik} />}
      {pages === 3 && <FormThree {...formik} />}
      {pages === 4 && <FormFour {...formik} />}
      {pages === 5 && <FormFive {...formik} />}
      {pages === 6 && <FormSix {...formik} />}
      {pages === 7 && <Preview />}
      {/* <FormSix {...formik} /> */}
    </FormikProvider>
  </ModalOverlay>

}
export default OwnerAndDesignMoreForm;
