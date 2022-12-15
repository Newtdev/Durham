import { useState,useRef } from "react";
import { useFormik } from "formik";
import { LundsForm } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import Forms from "./Forms";
import PreviewForm from "./Preview";



const Lunsford = ({name}) => {
  const [showModal, setShowModal] = useState(true);
  const [step, setStep] = useState(1);
  const component = useRef();

    const nextPage = () => setStep(2);
  const prevPage = () => setStep(1);
  

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      type: ''
    },
    validationSchema: LundsForm,
    onSubmit: (values) => {
      if (step === 1) {
        
        console.log(values)
        nextPage()
      }
    }
   
 })
      
      
      const typeProps = {
        value: values.type,
    handleChange,
    handleSubmit,
        error: errors.type,
        touched: touched.type,
        prevPage
      };
  
      const previewProps = {
        value: values.type,
        prevPage,
        name,
        component
      };




  return (
    <div>
          <ModalOverlay show={showModal}>
    
      
              {step === 1 && <Forms {...typeProps} />}
              {step === 2 && <PreviewForm {...previewProps} />}
        
      </ModalOverlay>
    </div>
  );
};

export default Lunsford;
