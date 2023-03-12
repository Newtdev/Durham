import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
	handleResultWithArray,
	parseDynamicInput,
} from "../../../../shared-component";
import { MWBEFormId } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { MWBEFormSchema } from "../../../../yup";
// import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
// import { getStates } from "../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./FormOne";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const MWBEForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);
	const [a] = UseFetchFilledFormDetails(formID);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: handleResultWithArray(values),
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextStep(2));
			}
		}
	};

	const formik = useFormik({
		initialValues: {
			purpose: "",
			totalContractAmount: "",
			contractors: [
				{
					contractor: "",
					companyName: "",
					description: "",
					companyType: "",
					companyContractAmount: "",
				},
			],
		},
		// validationSchema: MWBEFormSchema,
		onSubmit: (values) => {
			if (pages === 1) {
				HandleSubmit(values);
			}
		},
	});

	const formprops = {
		...formik,
		isLoading,
	};

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		formik?.setFieldValue(
			"contractors",
			parseDynamicInput(a?.data?.form_fields?.contractors)
		);
		formik?.setFieldValue(
			"totalContractAmount",
			a?.data?.form_fields?.totalContractAmount
		);
		formik?.setFieldValue("purpose", a?.data?.form_fields?.purpose);
	}, [a?.data]);

	if (!filled) {
		return (
			<ModalOverlay show={id === MWBEFormId && show}>
				<FormikProvider value={formik}>
					{pages === 1 && <FormOne {...formprops} />}
					{pages === 2 && <Preview />}
				</FormikProvider>
			</ModalOverlay>
		);
	}

	return (
		<ModalOverlay show={id === MWBEFormId && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default MWBEForm;
