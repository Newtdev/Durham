import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { modal, saveFormField } from "../reducer";
import { choiceStep, getStates, nextChoiceStep } from "./reducer";
import { Vendor3Bid } from "../../../yup";
import { useEffect } from "react";
import { precise_checkList } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import PrecisFolder from "./forms/PrecisFolderFP";
import { ModalOverlay } from "../../../ui";

const PFForProjects = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(choiceStep);
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
        // { field_name: param[14], field_value: val[14] },
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
      precis: "",
      bidTab: "",
      contract: "",
      participation: "",
      affidavits: "",
      plan: "",
      presentation: "",
    },
    // validationSchema: Vendor3Bid[pages],

    onSubmit: (values) => {
      if (pages === 0) {
        dispatch(nextChoiceStep(1));
      } else if (pages === 1) {
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
  return (
    <ModalOverlay show={id === precise_checkList && show}>
      {pages === 0 && <PrecisFolder {...Formik} />}
      {/* {pages === 1 && <VendorsInfo {...Formik} />} */}
    </ModalOverlay>
  );
};

export default PFForProjects;
