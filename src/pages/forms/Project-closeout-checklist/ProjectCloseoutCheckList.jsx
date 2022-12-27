import {useFormik} from 'formik'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ModalOverlay } from "../../../ui";
import Preview from './Preview';
import { choiceStep } from '../Advertisement-for-bid-template/reducer';
import { page } from '../Notice-of-intent-consultant/reducerSlice';
import { modal } from '../reducer';
import GeneralInformation from './forms/GeneralInfo';


const ProjectCloseoutCheckList = ({id}) => {

    const dispatch = useDispatch();
    const pages = useSelector(choiceStep);
    const show = useSelector(modal);
  
  
  
    
    const formik = useFormik({
      initialValues: {
            completionDate: '',
          signDate: ''
      },
    //   validationSchema: NoticeConsultant,
      onSubmit: (values) => {
          
        if (pages === 1) {
        //   dispatch(saveDoc(values))
            
        //   dispatch(nextStep())
        }
      }
  
    });
      
    return <ModalOverlay show={show}>
      {pages === 0 && <GeneralInformation {...formik} />}
      {page === 0 && <Preview />}
              
    </ModalOverlay>
  }
  
  export default ProjectCloseoutCheckList;