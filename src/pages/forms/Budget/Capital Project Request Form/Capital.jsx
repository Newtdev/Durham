import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { choiceStep, nextChoiceStep } from "./reducer";
import { CapitalPForm } from "../../../../yup";
import Preview from "./Preview";
import { CapitalProjectRequestForm } from "../../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import Cinput from "./forms/FormOne";
import Estimate from "./forms/FormTwo";
import { ModalOverlay } from "../../../../ui";
import { modal, saveFormField } from "../../reducer";

const CapitalProjectForm = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(choiceStep);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const param = Object.keys(values);
		const val = Object.values(values);

		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: [
				{ field_name: param[0], field_value: val[0] },
				{ field_name: param[1], field_value: val[1] },
				{ field_name: param[2], field_value: val[2] },
				{ field_name: param[3], field_value: val[3] },
			],
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextChoiceStep(2));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			selectOption: "",
			startDate: "",
			completionDate: "",
			Source: "",
			purchase: "",
			design: "",
			construction: "",
			renovation: "",
			repair: "",
			furniture: "",
			funding_source: "",
		},
		// validationSchema: CapitalPForm[pages],

		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(nextChoiceStep(1));
			} else if (pages === 1) {
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	const props = {
		...Formik,
		isLoading,
	};

	return (
		<ModalOverlay show={id === CapitalProjectRequestForm && show}>
			{pages === 0 && <Cinput {...Formik} />}
			{pages === 1 && <Estimate {...props} />}
			{pages === 2 && <Preview />}
		</ModalOverlay>
	);
};

export default CapitalProjectForm;
