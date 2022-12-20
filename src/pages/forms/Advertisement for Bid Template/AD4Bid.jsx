import { useFormik } from "formik";
import { useState } from "react";
import { ModalOverlay } from "../../../ui";
import SelectDate  from "../components";
import Bids from "./Bids";

const AdvertisementBid = () => {
  const Formik = useFormik({});
  const [showModal, setShowModal] = useState(true);
  
  return <ModalOverlay show={showModal}>
    <Bids/>
    {/* <SelectDate/> */}
</ModalOverlay>
}

export default AdvertisementBid;