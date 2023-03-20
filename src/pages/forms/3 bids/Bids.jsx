import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
// import { modal, saveFormField } from "../reducer";
// import { page, nextChoiceStep } from "./reducer";
// import { Vendor3Bid } from "../../../yup";
import { useEffect } from "react";
import { Vendor3BidSlug } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import BidInfo from "./forms/BidInfo";
import MultiVendors from "./forms/MultiVendors";
import Preview from "./Preview";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { nextChoiceStep, page } from "./Reducer";
import { modal } from "../reducer";
import { Bidschema } from "../../../yup";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { handleSavedDate, parseDynamicInput } from "../../../shared-component";
import { handleResult } from "../RFP Template with MWBE/Forms/FormsThree";

const Bids = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);

	const HandleSubmit = async (values) => {
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
				dispatch(nextChoiceStep(2));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			selectDate: "",
			input: "",
			// selectOption: "",
			// selectVendor: "",

			services: "",
			addVendor: "",
			information: [
				{
					company_name: "",
					address: "",
					city: "",
					state: "",
					zip_code: "",
					shippingPrice: "",
					totalPrice: "",
					unitPrice: "",
				},
			],
		},

		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(nextChoiceStep(1));
			} else if (pages === 1) {
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
		Formik.setFieldValue(
			"selectDate",
			handleSavedDate(a?.data?.form_fields?.selectDate)
		);
		Formik.setFieldValue("input", a?.data?.form_fields?.input);
		Formik.setFieldValue("services", a?.data?.form_fields?.services);
		Formik.setFieldValue("addVendor", a?.data?.form_fields?.addVendor);
		Formik.setFieldValue(
			"information",
			parseDynamicInput(a?.data?.form_fields?.information)
		);
	}, [a?.data]);

	const props = {
		...Formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === Vendor3BidSlug && show}>
				<FormikProvider value={Formik}>
					{pages === 0 && <BidInfo {...Formik} />}
					{pages === 1 && <MultiVendors {...props} />}
					{pages === 2 && <Preview {...Formik} />}
				</FormikProvider>
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === Vendor3BidSlug && show}>
			<Preview {...Formik} />
		</ModalOverlay>
	);
};

export default Bids;
