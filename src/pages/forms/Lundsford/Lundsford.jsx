import { useState,useRef } from "react";
import { useFormik } from "formik";
import { LundsForm } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import Forms from "./Forms";
import PreviewForm from "./Preview";
import { useDispatch, useSelector } from "react-redux";
import { nextStep,page,saveDoc } from "./lundsFormslice";
import { lundsford } from "../../../shared-component/slug";



const Lunsford = ({ id }) => {
  
  const [showModal, setShowModal] = useState(true);
  const Dispatch = useDispatch();
  const pages = useSelector(page)
  const component = useRef();
  

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      type: ''
    },
    validationSchema: LundsForm,

    onSubmit: (values) => {
      if (pages === 1) {
        
        Dispatch(nextStep())
        Dispatch(saveDoc(values))
      }
    }
   
 })
      
      
  const typeProps = {
    value: values.type,
    handleChange,
    handleSubmit,
    error: errors.type,
    touched: touched.type,
  }
  
  const previewProps = {
    value: values.type,
    component
  }




  return (
    <div>
          <ModalOverlay show={id === lundsford && showModal}>
    
      
              {pages === 1 && <Forms {...typeProps} />}
              {pages === 2 && <PreviewForm {...previewProps} />}
        
      </ModalOverlay>
    </div>
  );
};

export default Lunsford;
