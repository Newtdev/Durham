import { useSelector } from "react-redux";
import { DPSFormalGeneralSlug } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { modal } from "../reducer";
import DownLoadFillabeForm from "./DownLoadFillabeForm";

const DpsFormalGeneral = ({ id }) => {
  const show = useSelector(modal);

  return (
    <ModalOverlay show={id === DPSFormalGeneralSlug && show}>
      <DownLoadFillabeForm />
    </ModalOverlay>
  );
};

export default DpsFormalGeneral;
