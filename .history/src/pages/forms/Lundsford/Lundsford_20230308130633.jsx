import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { LundsForm } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import Forms from "./Forms";
import PreviewForm from "./Preview";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, page } from "./lundsFormslice";
import { lundsford } from "../../../shared-component/slug";
import { modal, saveFormField } from "../reducer";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { toast } from "react-toastify";
import { setResult } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const Lunsford = ({ id, filled }) => {
  const Dispatch = useDispatch();
  const pages = useSelector(page);
  const showModal = useSelector(modal);
  const component = useRef();

  const formID = useSelector(project_document_id);
  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const [a] = UseFetchFilledFormDetails(formID);

  const HandleSubmit = async (values) => {
    console.log(values);
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: setResult(values),
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        Dispatch(nextStep(2));
      }
    }
  };

  const Formik = useFormik({
    initialValues: {
      type: "",
      addressCopy: "",
    },
    validationSchema: LundsForm,

    onSubmit: (values) => {
      if (pages === 1) {
        Dispatch(saveFormField(values));
        if (!values?.addressCopy) {
          HandleSubmit({ type: values?.type, addressCopy: "" });
        } else {
          HandleSubmit(values);
        }
      }
    },
  });
  const { values, touched, errors, handleChange, handleSubmit, setValues } =
    Formik;
  const typeProps = {
    addressValue: values.addressCopy,
    value: values.type,
    handleChange,
    handleSubmit,
    error: errors.type,
    touched: touched.type,
    isLoading,
  };

  const previewProps = {
    value: values.type,
    component,
  };

  useEffect(() => {
    if (!a?.data?.form_fields) {
      return;
    }
    setValues({
      type: a?.data?.form_fields?.type,
      addressCopy: a?.data?.form_fields?.addressCopy,
    });
  }, [a]);

  if (!filled) {
    return (
      <div>
        <ModalOverlay show={id === lundsford && showModal}>
          {pages === 1 ? <Forms {...typeProps} /> : null}
          {pages === 2 ? <PreviewForm {...previewProps} /> : null}
        </ModalOverlay>
      </div>
    );
  }
  return (
    <div>
      <ModalOverlay show={id === lundsford && showModal}>
        <PreviewForm {...previewProps} />
      </ModalOverlay>
    </div>
  );
};

export default Lunsford;
