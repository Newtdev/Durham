import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
	handleResultWithArray,
	handleSavedDate,
	parseDynamicInput,
} from "../../../../shared-component";
import { MWBEFormsForBid } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const MWBEFormsForBidForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);

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
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		formik.setFieldValue("ownerRepName", a?.data?.form_fields?.ownerRepName);
		formik.setFieldValue("ownerRepTitle", a?.data?.form_fields?.ownerRepTitle);
		formik.setFieldValue("totalValue", a?.data?.form_fields?.totalValue);
		formik.setFieldValue("minPercentage", a?.data?.form_fields?.minPercentage);
		formik.setFieldValue(
			"ownerRepDate",
			handleSavedDate(a?.data?.form_fields?.ownerRepDate)
		);
		formik.setFieldValue(
			"mwbeInfo",
			parseDynamicInput(a?.data?.form_fields?.mwbeInfo)
		);
	}, [a?.data]);

	const formsProps = { ...formik, isLoading };

	if (!filled) {
		return (
			<ModalOverlay show={id === MWBEFormsForBid && show}>
				<FormikProvider value={formik}>
					{pages === 1 && <FormOne {...formik} />}
					{pages === 2 && <FormTwo {...formsProps} />}
					{pages === 3 && <Preview />}
				</FormikProvider>
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === MWBEFormsForBid && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default MWBEFormsForBidForm;
