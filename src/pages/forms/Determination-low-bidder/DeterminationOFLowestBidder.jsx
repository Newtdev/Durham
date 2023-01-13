import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { Determination_bidder } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { DeterminationFormContractor } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import DeterminationForm from "./Form";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const DeterminationOFLowestBidder = ({ id }) => {
    const dispatch = useDispatch();
    const pages = useSelector(page);
    const show = useSelector(modal);

    const formID = useSelector(project_document_id);

    const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();



    const HandleSubmit = async (values) => {
        const param = Object.keys(values)
        const val = Object.values(values)

        const response = await fillProjectDocument({
            project_document_id: formID, form_fields: [
                { field_name: param[0], field_value: val[0] },
                { field_name: param[1], field_value: val[1] },

            ]
        })
        if (response) {
            if (response?.error) {
                toast.error(response?.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else {
                dispatch(nextStep(2))
            }
        }
    }


    const Formik = useFormik({
        initialValues: {
            creationDate: new Date(),
            recipientCopy: '',
            userValue: '',
        },
        validationSchema: DeterminationFormContractor,

        onSubmit: (values) => {
            console.log(values)

            if (pages === 1) {
                dispatch(saveFormField(values))

                HandleSubmit(values)
            }


        }
    });

    // console.log(pages)
    const props = {
        ...Formik,
        isLoading
    }
    return <ModalOverlay show={id === Determination_bidder && show}>
        {pages === 1 && <DeterminationForm {...props} />}
        {pages === 2 && <Preview {...Formik} />}
    </ModalOverlay>
}


export default DeterminationOFLowestBidder;