import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { OwnerAndContractor } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { OwnerAndContractorSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../reducer";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const OwnerAndContractorForm = ({ id }) => {
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

      ]
    })
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(3))
      }
    }
  }

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      agreementDate: "",
      construction: "",
      substantialCompletionDate: "",
      finalCompletionDate: "",
      project: "",
      projectDate: "",
      projectAgenda: "",
      projectAlternates: "",
      modification: "",
      modificationAmount: "",
      contractAmount: "",
      allowances: "",
      units: [{
        unit: ""
      }]
    },
    validationSchema: OwnerAndContractorSchema[pages - 1],
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
        dispatch(saveFormField(values))
        HandleSubmit(values)

      } else if (pages === 4) {
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
  return <ModalOverlay show={id === OwnerAndContractor && show}>
    <FormikProvider value={formik}>
      {pages === 1 && <FormOne {...formik} />}
      {pages === 2 && <FormTwo {...formik} />}
      {pages === 3 && <FormThree {...formik} />}
      {pages === 4 && <Preview />}
      {/* <FormThree {...formik} /> */}
    </FormikProvider>
  </ModalOverlay>

}
export default OwnerAndContractorForm;
