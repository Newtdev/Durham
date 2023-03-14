import { useSelector } from "react-redux";
import { BidManualSlug } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { modal } from "../reducer";
import DownLoadFillabeForm from "./DownLoadFillabeForm";
const BidManual = ({ id }) => {
  const show = useSelector(modal);

  return (
    <ModalOverlay show={id === BidManualSlug && show}>
      <DownLoadFillabeForm name="Bid Manual" />
    </ModalOverlay>
  );
};

export default BidManual;
