import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
	handleSavedDate,
	parseDynamicInput,
} from "../../../../shared-component";
import { CCPRequisition } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const CCPRequisitionForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);
	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);

	// const pages = 4;

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			creationDate: "",
			budgetCode: "",
			commodityCode: "",
			requisitionOrder: "",
			po: "",
			attached: "",
			signDate: "",
			vendor: "",
			vendorId: "",
			companyName: "",
			addressCity: "",
			addressStreet: "",
			addressState: "",
			addressZipCode: "",
			ccpshippingCost: "",
			ccpsalesTax: "NO",
			ccptax: "4.75",
			name: "",
			city: "",
			street: "",
			state: "",
			zipCode: "",
			location: "",

			items: [
				{
					quantity: "",
					unit: "",
					stockNumber: "",
					description: "",
					unitPrice: "",
				},
			],
		},
		// validationSchema: CCPRequisitionSchema[pages - 1],
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(nextStep(2));
			} else if (pages === 2) {
				dispatch(nextStep(3));
			} else if (pages === 3) {
				// HandleSubmit(values);
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

		formik.setFieldValue("location", a?.data?.form_fields.location);
		formik.setFieldValue("zipCode", a?.data?.form_fields.zipCode);
		formik.setFieldValue("state", a?.data?.form_fields.state);
		formik.setFieldValue("street", a?.data?.form_fields.street);
		formik.setFieldValue("city", a?.data?.form_fields.city);
		formik.setFieldValue("name", a?.data?.form_fields.name);
		// formik.setFieldValue("ccptax", a?.data?.form_fields.ccptax);
		formik.setFieldValue("ccpsalesTax", a?.data?.form_fields.ccpsalesTax);
		formik.setFieldValue(
			"ccpshippingCost",
			a?.data?.form_fields.ccpshippingCost
		);
		formik.setFieldValue(
			"addressZipCode",
			a?.data?.form_fields?.addressZipCode
		);
		formik.setFieldValue("addressState", a?.data?.form_fields?.addressState);
		formik.setFieldValue("addressStreet", a?.data?.form_fields?.addressStreet);
		formik.setFieldValue("addressCity", a?.data?.form_fields?.addressCity);
		formik.setFieldValue("companyName", a?.data?.form_fields?.companyName);
		formik.setFieldValue("vendorId", a?.data?.form_fields?.vendorId);
		formik.setFieldValue("vendor", a?.data?.form_fields?.vendor);
		formik.setFieldValue(
			"signDate",
			handleSavedDate(a?.data?.form_fields?.signDate)
		);
		formik.setFieldValue(
			"creationDate",
			handleSavedDate(a?.data?.form_fields?.creationDate)
		);
		formik.setFieldValue("attached", a?.data?.form_fields?.attached);
		formik.setFieldValue("po", a?.data?.form_fields?.po);
		formik.setFieldValue(
			"requisitionOrder",
			a?.data?.form_fields?.requisitionOrder
		);
		formik.setFieldValue("commodityCode", a?.data?.form_fields?.commodityCode);
		formik.setFieldValue("budgetCode", a?.data?.form_fields?.budgetCode);
		formik.setFieldValue(
			"items",
			parseDynamicInput(a?.data?.form_fields?.items)
		);
	}, [a?.data]);

	if (!filled) {
		return (
			<ModalOverlay show={id === CCPRequisition && show}>
				<FormikProvider value={formik}>
					{pages === 1 && <FormOne {...formik} />}
					{pages === 2 && <FormTwo {...formik} />}
					{pages === 3 && <FormThree {...formik} />}
					{pages === 4 && <Preview />}
				</FormikProvider>
			</ModalOverlay>
		);
	}

	return (
		<ModalOverlay show={id === CCPRequisition && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default CCPRequisitionForm;
