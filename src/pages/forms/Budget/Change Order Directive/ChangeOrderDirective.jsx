import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ModalOverlay } from "../../../../ui";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { ChangeOrderDirective } from "../../../../shared-component/slug";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../../reducer";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";
import FormOne from "./form/formOne";
import { setResult } from "../../../../shared-component";

const ChangeOrderDirectiveForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);
	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		console.log(values);
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: setResult(values),
		});
		if (response) {
			console.log("response: ", response);
			if (response?.error) {
				console.log("response?.error: ", response?.error);
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextStep(2));
			}
		}
	};

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			triggered: "",
			maxPrice: "",
			unitPrice: "",
			exceed: "",
			exceedAmount: "",
			price: "",
			amount: "",
			contractTime: "",
			contractTimePerHour: "",
			ownerDatabase: "",
			ownerName: "",
			signDate: "",
			position: "",
		},
		// validationSchema: ChangeOrderDirectiveSchema,
		onSubmit: (values) => {
			if (pages === 1) {
				// dispatch(nextStep(2));
				// dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	const formProps = {
		...formik,
		isLoading,
	};
	// return <ModalOverlay show={true}>
	if (!filled) {
		return (
			<ModalOverlay show={id === ChangeOrderDirective && show}>
				{pages === 1 && <FormOne {...formProps} />}
				{pages === 2 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === ChangeOrderDirective && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default ChangeOrderDirectiveForm;
