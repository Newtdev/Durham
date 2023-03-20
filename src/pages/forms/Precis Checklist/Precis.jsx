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
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const PFForProjects = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(choiceStep);
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
				HandleSubmit(values);
			}
		},
	});

	const props = {
		...Formik,
		isLoading,
	};

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		console.log(a?.data?.form_fields?.precis === "1");
		Formik.setFieldValue(
			"precis",
			a?.data?.form_fields?.precis === "1" ? true : false
		);
		Formik.setFieldValue(
			"contract",
			a?.data?.form_fields?.contract === "1" ? true : false
		);
		Formik.setFieldValue(
			"participation",
			a?.data?.form_fields?.participation === "1" ? true : false
		);
		Formik.setFieldValue(
			"affidavits",
			a?.data?.form_fields?.affidavits === "1" ? true : false
		);
		Formik.setFieldValue(
			"plan",
			a?.data?.form_fields?.plan === "1" ? true : false
		);
		Formik.setFieldValue(
			"presentation",
			a?.data?.form_fields?.presentation === "1" ? true : false
		);
	}, [a?.data]);
	if (!filled) {
		return (
			<ModalOverlay show={id === precise_checkList && show}>
				{pages === 0 && <PrecisFolder {...props} />}
				{pages === 1 && <Preview {...Formik} />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === precise_checkList && show}>
			<Preview {...Formik} />
		</ModalOverlay>
	);
};

export default PFForProjects;
