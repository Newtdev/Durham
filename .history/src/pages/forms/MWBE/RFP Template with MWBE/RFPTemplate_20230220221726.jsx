import "react-datepicker/dist/react-datepicker.css";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { RFPTemplateWithMWBESlug } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const RFPTemplate = () => {
  // const [showModal, setShowModal] = useState(true);

  return <div></div>;
};

export default RFPTemplate;
