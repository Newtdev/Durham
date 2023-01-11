import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import Bids from "./forms/Bids";
import { modal, saveFormField } from "../reducer";
import { choiceStep, getStates, nextChoiceStep, } from "./reducer";
import { AdvertisementBidSchema } from "../../../yup";
import ConferenceBid from '../Advertisement-for-bid-template/forms/ConferenceBid'
import CompanyInformation from "./forms/CompanyInfo";
import Preview from "./Preview";
import { useEffect } from "react";
import { advertisement_bid } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";

const AdvertisementBid = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(choiceStep);
  const show = useSelector(modal);
  // const show = true;

  
  const formID = useSelector(project_document_id);
  
  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  

  const HandleSubmit = async (values) => {
    const param = Object.keys(values)
    const val = Object.values(values)
  
    const response = await fillProjectDocument({
      project_document_id: formID, form_fields: [{ field_name: param[0], field_value: val[0] },
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
    ]
    })
    if (response) {
      console.log(response)
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
      });
      } else {
        dispatch(nextChoiceStep(3))
      }
    }
}


  const Formik = useFormik({
    initialValues: {
      bidDate: new Date(),
      deadlineTime: new Date(),
      openingTime: new Date(),
      withdrawingBid: '',
      conferenceDate: new Date(),
      conferenceTime: new Date(),
      conferenceAddress: '',
      conferenceCity: '',
      conferenceState: '',
      conferenceZipCode: '',
      presenceOfBiders: false,
      company_name: '',
      manager_name: '',
      manager_phone_number: '',
      manager_email_address: '',
      

    },
    validationSchema: AdvertisementBidSchema[pages],
    validateOnMount: false,
    
    onSubmit: (values) => {
      if (pages === 0) {
        dispatch(nextChoiceStep(1))
        
      } else if (pages === 1) {
        dispatch(nextChoiceStep(2))
        
      } else if (pages === 2) {
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

  const props = {
    ...Formik,
    isLoading
  }
  // return <ModalOverlay show={show}>
  return <ModalOverlay show={id === advertisement_bid && show}> 
    {pages === 0 && <Bids {...Formik} />}
    {pages === 1 && <ConferenceBid {...Formik} />}
    {pages === 2 && <CompanyInformation {...props} />}
    {pages === 3 && <Preview />}
  </ModalOverlay>
};

export default AdvertisementBid;