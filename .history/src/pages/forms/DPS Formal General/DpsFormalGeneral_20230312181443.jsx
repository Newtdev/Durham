import { useDispatch, useSelector } from "react-redux";
import { DPSFormalGeneralSlug } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal } from "../reducer";
import DownLoadFillabeForm from "./DownLoadFillabeForm";

const DpsFormalGeneral = ({ id }) => {
  const show = useSelector(modal);
  const formID = useSelector(project_document_id);

  return (
    <ModalOverlay show={id === DPSFormalGeneralSlug && show}>
      <DownLoadFillabeForm />
    </ModalOverlay>
  );
};

export default DpsFormalGeneral;
