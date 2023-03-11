import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { handleSavedDate, setResult } from "../../../shared-component";
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
	const [a] = UseFetchFilledFormDetails(formID);

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
				dispatch(nextStep(2));
			} else if (pages === 2) {
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

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		console.log(a?.data);
		formik.setFieldValue(
			"agreementDate",
			handleSavedDate(a?.data?.form_fields.agreementDate)
		);
		formik.setFieldValue(
			"directorSignDate",
			handleSavedDate(a?.data?.form_fields.directorSignDate)
		);
		formik.setFieldValue(
			"officerSignDate",
			handleSavedDate(a?.data?.form_fields.officerSignDate)
		);
		formik.setFieldValue(
			"notarySealDate",
			handleSavedDate(a?.data?.form_fields.notarySealDate)
		);

		formik.setFieldValue("checkType", a?.data?.form_fields.checkType);
		formik.setFieldValue("address", a?.data?.form_fields.address);
		formik.setFieldValue("state", a?.data?.form_fields.state);
		formik.setFieldValue("city", a?.data?.form_fields.city);

		formik.setFieldValue("zipCode", a?.data?.form_fields?.zipCode);
	}, [a?.data]);

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
