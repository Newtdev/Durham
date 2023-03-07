import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { DPSShortFormEngineer } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../reducer";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
// import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const DPSShortFormEngineerForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const param = Object.keys(values);
		const val = Object.values(values);

		console.log("values: ", values);

		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: [
				{ field_name: param[0], field_value: val[0] },
				{ field_name: param[1], field_value: val[1] },
				{ field_name: param[2], field_value: val[2] },
				{ field_name: param[3], field_value: val[3] },
				{ field_name: param[4], field_value: val[4] },
				{ field_name: param[5], field_value: val[5] },
				{ field_name: param[6], field_value: val[6] },
				{ field_name: param[7], field_value: val[7] },
				{ field_name: param[8], field_value: val[8] },
			],
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
			agreementDate: "",
			directorSignDate: "",
			officerSignDate: "",
			notarySealDate: "",
			checkType: "",
			address: "",
			state: "",
			city: "",
			zipCode: "",
		},
		// validationSchema: DPSShortFormEngineerSchema[pages - 1],
		onSubmit: (values) => {
			if (pages === 1) {
				console.log("pages: ", values);
				dispatch(nextStep(2));
			} else if (pages === 2) {
				console.log("pages: ", pages);
				// dispatch(nextStep(3));
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

	const formProps = {
		...formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === DPSShortFormEngineer && show}>
				<FormikProvider value={formik}>
					{pages === 1 && <FormOne {...formik} />}
					{pages === 2 && <FormTwo {...formProps} />}
					{pages === 3 && <Preview />}
				</FormikProvider>
			</ModalOverlay>
		);
	}

	return (
		<ModalOverlay show={id === DPSShortFormEngineer && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default DPSShortFormEngineerForm;
