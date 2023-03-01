import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { handleResultWithArray } from "../../../../shared-component";
import { OwnerAndContractorESSER } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormFour from "./forms/FormFour";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const OwnerAndContractorFormESSER = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	// const pages = 4;
	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	// const response = useFetchFilledFormQuery(formID);

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: handleResultWithArray(values).form_fields,
			dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
		});

		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextStep(5));
			}
		}
	};

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			agreementDate: "",
			construction: "",
			substantialCompletionDate: "",
			finalCompletionDate: "",
			project: "",
			projectDate: "",
			projectAgenda: "",
			projectAlternates: "",
			modification: "",
			modificationAmount: "",
			contractAmount: "",
			allowances: "",
			drawings: "",
			specifications: "",
			chairmanSign: "",
			chiefFinanceSign: "",
			boardApprovalDate: "",
			notarySealDate: "",
			units: [
				{
					unit: "",
				},
			],
		},
		// validationSchema: OwnerAndContractorSchema[pages - 1],
		onSubmit: (values) => {
			if (pages === 1) {
				console.log("pages: ", pages);
				dispatch(nextStep(2));
			} else if (pages === 2) {
				console.log("pages: ", pages);
				dispatch(nextStep(3));
			} else if (pages === 3) {
				console.log("pages: ", pages);
				dispatch(nextStep(4));
				// dispatch(nextStep(4));
			} else if (pages === 4) {
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		(async function () {
			const response = await (await fetch("/states.json")).json();
			dispatch(getStates(response));
		})();
	}, [dispatch]);

	const formProps = { ...formik, isLoading };

	return (
		<ModalOverlay show={id === OwnerAndContractorESSER && show}>
			<FormikProvider value={formik}>
				{pages === 1 && <FormOne {...formik} />}
				{pages === 2 && <FormTwo {...formik} />}
				{pages === 3 && <FormThree {...formik} />}
				{pages === 4 && <FormFour {...formProps} />}
				{pages === 5 && <Preview />}
				{/* <FormThree {...formik} /> */}
			</FormikProvider>
		</ModalOverlay>
	);
};
export default OwnerAndContractorFormESSER;
