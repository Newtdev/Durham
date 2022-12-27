import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { techServices } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { TechServiceSchema } from "../../../yup";
import { nextStep, page, saveDoc } from "../Lundsford/lundsFormslice";
import { modal } from "../reducer";
import Forms from "./Forms";
import TechPreview from "./TechPreview";

const TechService = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(page)
  const show = useSelector(modal);
  

  const Formik = useFormik({
     
      initialValues: {
        creationDate: '',
        amount:'',
        startDate: '',
        endDate: '',
        signedDate: '',
      },
      validationSchema: TechServiceSchema,
    onSubmit: (values) => {
        console.log(values)
        if (pages === 1) {
          dispatch(saveDoc(values))
          
          dispatch(nextStep())
        }
      }
  });

  
  return <ModalOverlay show={id === techServices && show}>
    
    {pages === 1 && <Forms {...Formik} />}
    {pages === 2 && <TechPreview {...Formik} />}
  </ModalOverlay>
};

export default TechService;