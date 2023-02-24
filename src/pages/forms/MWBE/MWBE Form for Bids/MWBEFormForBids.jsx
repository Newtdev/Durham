import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { handleResultWithArray } from "../../../../shared-component";
import { MWBEFormsForBid } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const MWBEFormsForBidForm = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
			form_fields: handleResultWithArray(values).form_fields,
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextStep(3));
			}
		}
	};

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			chooseData: "",
			ownerRepName: "",
			ownerRepTitle: "",
			ownerRepDate: "",
			totalValue: "",
			minPercentage: "",
			mwbeInfo: [
				{
					mwbeName: "",
					companyName: "",
					companyNumber: "",
					mwbeCategory: "",
					workDescription: "",
					contractAmount: "",
				},
			],
		},
		// validationSchema: MWBEFormsForBidSchema[pages - 1],
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(nextStep(2));
			} else if (pages === 2) {
				// dispatch(nextStep(3));
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	const formsProps = { ...formik, isLoading };
	return (
		<ModalOverlay show={id === MWBEFormsForBid && show}>
			<FormikProvider value={formik}>
				{pages === 1 && <FormOne {...formik} />}
				{pages === 2 && <FormTwo {...formsProps} />}
				{pages === 3 && <Preview />}
			</FormikProvider>
		</ModalOverlay>
	);
};
export default MWBEFormsForBidForm;
