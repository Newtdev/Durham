import { useDispatch, useSelector } from "react-redux";

import { DPSFormalGeneralSlug } from "../../../shared-component/slug";
// import { OwnerDesignConsultantLessSchema } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal } from "../reducer";

const DpsFormalGeneral = ({ id }) => {
  const show = useSelector(modal);
  const formID = useSelector(project_document_id);

  //   return (
  //     <ModalOverlay show={id === DPSFormalGeneralSlug && show}>
  //       <div className="bg-white">
  //         <h1>Hey You</h1>
  //       </div>
  //     </ModalOverlay>
  //   );
};

export default DpsFormalGeneral;
