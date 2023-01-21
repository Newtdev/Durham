import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { modal, saveFormField } from "../reducer";
import { page, nextChoiceStep } from "./reducer";
import { Vendor3Bid } from "../../../yup";
import { useEffect } from "react";
import { Vendor3BidSlug } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import BidInfo from "./forms/BidInfo";
import VendorsInfo from "./forms/VendorsInfo";
import MultiVendors from "./forms/MultiVendors";
import Preview from "./Preview";
import { getStates } from "../Advertisement-for-bid-template/reducer";

const VInfo3 = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const param = Object.keys(values);
    const val = Object.values(values);

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
      ],
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextChoiceStep(2));
      }
    }
  };

  const Formik = useFormik({
    initialValues: {
      selectDate: "",
      input: "",
      selectOption: "",
      selectVendor: "",
      shippingPrice: "",
      totalPrice: "",
      unitPrice: "",
      services: "",
      addVendor: "",
      company_Name: "",
      information: [
        {
          address: "",
          projectcity: "",
          projectState: "",
          projectZipCode: "",
        },
      ],
    },
    validationSchema: Vendor3Bid[pages],

    onSubmit: (values) => {
      if (pages === 1) {
        dispatch(nextChoiceStep(2));
      } else if (pages === 2) {
        dispatch(nextChoiceStep(3));
      } else if (pages === 3) {
        dispatch(nextChoiceStep(4));
      } else if (pages === 4) {
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

  const props = {
    ...Formik,
    isLoading,
  };
  console.log(id === Vendor3BidSlug);
  return (
    <ModalOverlay show={id === Vendor3BidSlug && show}>
      <FormikProvider value={Formik}>
        {pages === 1 && <BidInfo {...Formik} />}
        {pages === 2 && <VendorsInfo {...Formik} />}
        {pages === 3 && <MultiVendors {...Formik} />}
        {pages === 4 && <Preview {...Formik} />}
      </FormikProvider>
    </ModalOverlay>
  );
};

export default VInfo3;
