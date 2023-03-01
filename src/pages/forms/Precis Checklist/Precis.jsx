import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { modal, saveFormField } from "../reducer";
// import { choiceStep, getStates, nextChoiceStep } from "./reducer";
// import { Vendor3Bid } from "../../../yup";
import { useEffect } from "react";
import { precise_checkList } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { ModalOverlay } from "../../../ui";
import { choiceStep, getStates, nextChoiceStep } from "./Reducer";
import PrecisFolder from "./Form";
import Preview from "./Preview";
import { setResult } from "../../../shared-component";

const PFForProjects = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(choiceStep);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: setResult(values),
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextChoiceStep(1));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			precis: "",
			bidTab: "",
			contract: "",
			participation: "",
			affidavits: "",
			plan: "",
			presentation: "",
		},
		// validationSchema: Vendor3Bid[pages],

		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
			// if (pages === 0) {
			// 	dispatch(nextChoiceStep(1));
			// } else if (pages === 1) {
			// 	dispatch(saveFormField(values));

			// }
		},
	});

	const props = {
		...Formik,
		isLoading,
	};
	return (
		<ModalOverlay show={id === precise_checkList && show}>
			{pages === 0 && <PrecisFolder {...Formik} />}
			{pages === 1 && <Preview {...Formik} />}
			{/* {pages === 1 && <VendorsInfo {...Formik} />} */}
		</ModalOverlay>
	);
};

export default PFForProjects;
