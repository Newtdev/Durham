import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { CCPRequisition } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { CCPRequisitionSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../reducer";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const CCPRequisitionForm = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal)

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
      ]
    })
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextStep(5))
      }
    }
  }

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      creationDate: "",
      budgetCode: "",
      commodityCode: "",
      requisitionOrder: "",
      po: "",
      attached: "",
      signDate: "",
      vendor: "",
      vendorId: "",
      companyName: "",
      addressCity: "",
      addressStreet: "",
      addressState: "",
      addressZipCode: "",
      name: "",
      city: "",
      street: "",
      state: "",
      zipCode: "",
      location: "",
      items: [{
        stockNumber: "",
        description: "",
        quantity: "",
        unit: "",
        unitPrice: "",
      }],
      shippingCost: "",
      salesTax: ""
    },
    validationSchema: CCPRequisitionSchema[pages - 1],
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
  return <ModalOverlay show={id === CCPRequisition && show}>
    {/* <form onSubmit={formik.handleSubmit}> */}
      {pages === 1 && <FormOne {...formik} />}
      {pages === 2 && <FormTwo {...formik} />}
      {pages === 3 && <FormThree {...formik} />}
      {pages === 4 && <Preview />}
      {/* <FormThree {...formik} /> */}
    {/* </form> */}
  </ModalOverlay>

}
export default CCPRequisitionForm;