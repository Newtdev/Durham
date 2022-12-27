import {useFormik} from 'formik'
import { useSelector,useDispatch } from 'react-redux';
import { ModalOverlay } from "../../../ui";
import { choiceStep, nextChoiceStep } from '../Advertisement-for-bid-template/reducer';
import { saveDoc } from '../Notice-of-intent-consultant/reducerSlice';
import { modal } from '../reducer';
import GeneralInformation from './forms/GeneralInfo';
import { ProjectCloseOutSchema } from '../../../yup';
import CheckList from './forms/CheckList';
import CheckListTwo from './forms/CheckListTwo';
import CheckListThree from './forms/CheckListThree';
import Preview from './Preview';
import { project_closeout_checklist } from '../../../shared-component/slug';
import ProjectCloseOutPreview from './Preview';
import { next, step } from './reducer';


const ProjectCloseoutCheckList = ({id}) => {
    const dispatch = useDispatch();
    const pages = useSelector(step);
    const show = useSelector(modal);
    
    const formik = useFormik({
      initialValues: {
            completionDate: '',
            signDate: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: '',
            ten: '',
            eleven: '',
            twelve: '',
            thirteen: '',
            fourteen: '',
            fifteen: '',
            sixteen: '',
            seventeen: '',
            eighteen: '',
            ninteen: '',
            twenty: '',
            twentyOne: '',
            twentyTwo:"", 
        },
    
      validationSchema: ProjectCloseOutSchema,
      onSubmit: (values) => {
          
          if (pages !== 4) {
            dispatch(next())
          }
        
          dispatch(saveDoc(values))
        }
  
    });
      
  return <ModalOverlay show={id === project_closeout_checklist && show}>
      {pages === 0 && <GeneralInformation {...formik} />}
      {pages === 1 && <CheckList {...formik} />}
      {pages === 2 && <CheckListTwo {...formik} />}
      {pages === 3 && <CheckListThree {...formik} />}
      {pages === 4 && <ProjectCloseOutPreview />}
              
    </ModalOverlay>
  }
  
  export default ProjectCloseoutCheckList;