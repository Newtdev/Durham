import {useFormik} from 'formik'
import { useSelector,useDispatch } from 'react-redux';
import { ModalOverlay } from "../../../ui";
import { saveDoc } from '../Notice-of-intent-consultant/reducerSlice';
import { modal } from '../reducer';
import { CertificateOfSubstantialSchema } from '../../../yup';
import ProjectInformation from './forms/ProjectInformation';
import SubstantialCompletionDetails from './forms/SubstantialCompletionDetails';
import SubstantialCompletionDetailsTwo from './forms/SubstantialCompletionDetailsTwo';
import CertificatePreview from './CertificatePreview';
import { next, step } from './reducer';
import { certificateOfSubstantialCompletion } from '../../../shared-component/slug';


const CertificateOfSubstantial = ({id}) => {
    const dispatch = useDispatch();
    const pages = useSelector(step);
    const show = useSelector(modal);
    const formik = useFormik({
      initialValues: {
            purposeOfContract: '',
            contractEffectDate: '',
            involvedInProject: '',
            areasCompleted: '',
            completionDate: '',
            workCompletionDate: '',
            costOfWork: '',
            ownersRep: '',
            ownerRepName: '',
            signedDate: '',
            responsibility: '',
            estimatedCost:'',
        },
    
      validationSchema: CertificateOfSubstantialSchema[pages],
      onSubmit: (values) => {
          
          if (pages !== 3) {
            dispatch(next())
          }
        
          dispatch(saveDoc(values))
        }
  
    });
      
  return <ModalOverlay show={id === certificateOfSubstantialCompletion && show}>
      {pages === 0 && <ProjectInformation {...formik} />}
      {pages === 1 && <SubstantialCompletionDetails {...formik} />}
      {pages === 2 && <SubstantialCompletionDetailsTwo {...formik} />}
      {pages === 3 && <CertificatePreview />}
              
    </ModalOverlay>
  }
  
  export default CertificateOfSubstantial;