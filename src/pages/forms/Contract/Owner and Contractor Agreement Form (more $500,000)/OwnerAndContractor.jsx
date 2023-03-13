import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
	handleSavedDate,
	parseDynamicInput,
} from "../../../../shared-component";
import { OwnerAndContractor } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal } from "../../reducer";
import FormFour from "./forms/FormFour";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const OwnerAndContractorForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	// const pages = 4;
	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);
	const handleResult = (res) => {
		let dynamic = [];
		let b = [];

		if (!res) return null;

		Object.entries(res).forEach((d, i) => {
			if (Array.isArray(d[1])) {
				dynamic = [
					...dynamic,
					{ field_name: d[0], field_value: JSON.stringify(d[1]) },
				];
			} else {
				b = [...b, { field_name: d[0], field_value: d[1] }];
			}
		});
		return [...b, ...dynamic];
	};

	const HandleSubmit = async (values) => {
		handleResult(values);
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: handleResult(values),
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
			units: [
				{
					unit: "",
				},
			],
			modificationArray: [{ modification: "", modificationAmount: "" }],
			allowancesArray: [""],
			projectAlternates: "",
			agreementDate: "",
			construction: "",
			substantialCompletionDate: "",
			finalCompletionDate: "",
			project: "",
			projectDate: "",
			projectAgenda: "",

			contractAmount: "",
			drawings: "",
			specifications: "",
			chairmanSign: "",
			chiefFinanceSign: "",
			boardApprovalDate: "",
			notarySealDate: "",
		},
		// validationSchema: OwnerAndContractorSchema[pages - 1],
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(nextStep(2));
			} else if (pages === 2) {
				dispatch(nextStep(3));
			} else if (pages === 3) {
				dispatch(nextStep(4));
				// dispatch(nextStep(4));
			} else if (pages === 4) {
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		formik.setFieldValue(
			"agreementDate",
			handleSavedDate(a?.data?.form_fields?.agreementDate)
		);
		formik.setFieldValue(
			"substantialCompletionDate",
			handleSavedDate(a?.data?.form_fields?.substantialCompletionDate)
		);
		formik.setFieldValue(
			"finalCompletionDate",
			handleSavedDate(a?.data?.form_fields?.finalCompletionDate)
		);
		formik.setFieldValue(
			"projectDate",
			handleSavedDate(a?.data?.form_fields?.projectDate)
		);
		formik.setFieldValue("construction", a?.data?.form_fields?.construction);
		formik.setFieldValue("project", a?.data?.form_fields?.project);
		formik.setFieldValue("projectAgenda", a?.data?.form_fields?.projectAgenda);
		formik.setFieldValue(
			"projectAlternates",
			a?.data?.form_fields?.projectAlternates
		);
		formik.setFieldValue(
			"modificationArray",
			parseDynamicInput(a?.data?.form_fields?.modificationArray)
		);
		formik.setFieldValue(
			"modificationAmount",
			a?.data?.form_fields?.modificationAmount
		);
		formik.setFieldValue(
			"contractAmount",
			a?.data?.form_fields?.contractAmount
		);
		formik.setFieldValue(
			"allowancesArray",
			parseDynamicInput(a?.data?.form_fields?.allowancesArray)
		);
		formik.setFieldValue("drawings", a?.data?.form_fields?.drawings);
		formik.setFieldValue(
			"specifications",
			a?.data?.form_fields?.specifications
		);
		formik.setFieldValue(
			"chairmanSign",
			handleSavedDate(a?.data?.form_fields?.chairmanSign)
		);
		formik.setFieldValue(
			"chiefFinanceSign",
			handleSavedDate(a?.data?.form_fields?.chiefFinanceSign)
		);
		formik.setFieldValue(
			"boardApprovalDate",
			handleSavedDate(a?.data?.form_fields?.boardApprovalDate)
		);
		formik.setFieldValue(
			"notarySealDate",
			handleSavedDate(a?.data?.form_fields?.notarySealDate)
		);
		formik.setFieldValue(
			"units",
			parseDynamicInput(a?.data?.form_fields?.units)
		);
	}, [a?.data]);
	useEffect(() => {
		(async function () {
			const response = await (await fetch("/states.json")).json();
			dispatch(getStates(response));
		})();
	}, [dispatch]);

	const formProps = { ...formik, isLoading };
	if (!filled) {
		return (
			<ModalOverlay show={id === OwnerAndContractor && show}>
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
	}
	return (
		<ModalOverlay show={id === OwnerAndContractor && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default OwnerAndContractorForm;
