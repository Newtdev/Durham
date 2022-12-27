import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import Bids from "./forms/Bids";
import { modal } from "../reducer";
import { choiceStep, getStates, nextChoiceStep, } from "./reducer";
import { AdvertisementBidSchema } from "../../../yup";
import ConferenceBid from '../Advertisement-for-bid-template/forms/ConferenceBid'
import CompanyInformation from "./forms/CompanyInfo";
import Preview from "./Preview";
import { useEffect } from "react";
import { saveDoc } from "../Lundsford/lundsFormslice";
import { advertisement_bid } from "../../../shared-component/slug";

const AdvertisementBid = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(choiceStep);
  const show = useSelector(modal);
  

  const Formik = useFormik({
    initialValues: {
      bidDate: '',
      deadlineTime: '',
      openingTime: '',
      withdrawingBid: '',
      conferenceDate: '',
      conferenceTime: '',
      conferenceAddress: '',
      conferenceCity: '',
      conferenceState: '',
      conferenceZipCode: '',
      presenceOfBiders: '',
      company_name: '',
      manager_name: '',
      manager_phone_number: '',
      manager_email_address: '',
      

    },
    validationSchema: AdvertisementBidSchema[pages],
    
    onSubmit: (values) => {
      if (show !==2) {
        
        dispatch(nextChoiceStep())
      }
      dispatch(saveDoc(values))


      
    }
  });


  useEffect(() => {
    (async function () {
      const response = await (await fetch('/states.json')).json();
      dispatch(getStates(response))
      
    }())
  }, [dispatch]);
  
  return <ModalOverlay show={id === advertisement_bid && show}>
    {pages === 0 && <Bids {...Formik} />}
    {pages === 1 && <ConferenceBid {...Formik} />}
    {pages === 2 && <CompanyInformation {...Formik} />}
    {pages === 3 && <Preview />}
  </ModalOverlay>
};

export default AdvertisementBid;