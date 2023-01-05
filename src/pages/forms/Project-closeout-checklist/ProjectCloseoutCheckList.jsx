import {useFormik} from 'formik'
import { useSelector,useDispatch } from 'react-redux';
import { ModalOverlay } from "../../../ui";
import { modal, saveFormField } from '../reducer';
import GeneralInformation from './forms/GeneralInfo';
import { ProjectCloseOutSchema } from '../../../yup';
import CheckList from './forms/CheckList';
import CheckListTwo from './forms/CheckListTwo';
import CheckListThree from './forms/CheckListThree';
import { project_closeout_checklist } from '../../../shared-component/slug';
import ProjectCloseOutPreview from './Preview';
import { next, step } from './reducer';
import { toast } from 'react-toastify';
import { project_document_id } from '../../Dashboard/project-dashboard/ReducerSlice';
import { useFillProjectDocumentMutation } from '../../../features/services/api';


const ProjectCloseoutCheckList = ({id}) => {
    const dispatch = useDispatch();
    const pages = useSelector(step);
    const show = useSelector(modal);
    
    const formID = useSelector(project_document_id);
  
  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();


  const HandleSubmit = async (values) => {
    const param = Object.keys(values)
    const val = Object.values(values)
    console.log(val[2][0])
  
    const response = await fillProjectDocument({
      project_document_id: formID, form_fields: [
        { field_name: param[0], field_value: val[0] },
      { field_name: param[1], field_value: val[1] },
      { field_name: param[2], field_value: !val[2][0] ? '': val[2][0] },
      { field_name: param[3], field_value: !val[3][0] ? '': val[3][0] },
      { field_name: param[4], field_value: !val[4][0] ? '': val[4][0] },
      { field_name: param[5], field_value: !val[5][0] ? '': val[5][0] },
      { field_name: param[6], field_value: !val[6][0] ? '': val[6][0] },
      { field_name: param[7], field_value: !val[7][0] ? '': val[7][0] },
      { field_name: param[8], field_value: !val[8][0] ? '': val[8][0] },
      { field_name: param[9], field_value: !val[9][0] ? '': val[9][0] },
      { field_name: param[10], field_value: !val[10][0] ? '': val[10][0] },
      { field_name: param[11], field_value: !val[11][0] ? '': val[11][0] },
      { field_name: param[12], field_value: !val[12][0] ? '': val[12][0] },
      { field_name: param[13], field_value: !val[13][0] ? '': val[13][0] },
      { field_name: param[14], field_value: !val[14][0] ? '': val[14][0] },
      { field_name: param[15], field_value: !val[15][0] ? '': val[15][0] },
      { field_name: param[16], field_value: !val[16][0] ? '': val[16][0] },
      { field_name: param[17], field_value: !val[17][0] ? '': val[17][0] },
      { field_name: param[18], field_value: !val[18][0] ? '': val[18][0] },
      { field_name: param[19], field_value: !val[19][0] ? '': val[19][0] },
      { field_name: param[20], field_value: !val[20][0] ? '': val[20][0] },
      { field_name: param[21], field_value: !val[21][0] ? '': val[21][0]},
      { field_name: param[22], field_value: !val[22][0] ? '': val[22][0]},
      { field_name: param[23], field_value: !val[23][0] ? '': val[23][0]},
      
    ]
    })
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
      });
      } else {
        dispatch(next(4))
      }
    }
}

  
  
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
          
        if (pages === 0) {
          dispatch(next(1))
          
        } else if (pages === 1) {
          dispatch(next(2))
          
        } else if (pages === 2) {
          dispatch(next(3))
          
        } else if (pages === 3) {
          dispatch(saveFormField(values))

          HandleSubmit(values)
        }
      }
  
    });
      
  const props = {
    ...formik,
    isLoading
  }
  return <ModalOverlay show={id === project_closeout_checklist && show}>
      {pages === 0 && <GeneralInformation {...formik} />}
      {pages === 1 && <CheckList {...formik} />}
      {pages === 2 && <CheckListTwo {...formik} />}
      {pages === 3 && <CheckListThree {...props} />}
      {pages === 4 && <ProjectCloseOutPreview />}
              
    </ModalOverlay>
  }
  
  export default ProjectCloseoutCheckList;