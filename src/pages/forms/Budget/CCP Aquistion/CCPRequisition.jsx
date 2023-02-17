import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { array } from "yup";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { CCPRequisition } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { CCPRequisitionSchema } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const CCPRequisitionForm = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	// const pages = 4;
	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	// const response = useFetchFilledFormQuery(formID);

	function a(vals) {
		//console.log(vals[0]); //section
		const b = [];
		vals[1].forEach((curs) => {
			Object.keys(curs).forEach((cur, index) => {
				b.push({
					section: vals[0],
					field_name: cur,
					field_value: Object.values(curs)[index],
				});
			});
		});
		console.log(b);
		return b;
	}

	const setResult = (values) => {
		let sum = [];

		for (const object of Object.entries(values)) {
			sum = [...sum, { field_name: object[0], field_value: object[1] }];
		}
		console.log(sum);
		return sum;
	};
	const HandleSubmit = async (values) => {
		console.log(values);
		const param = Object.keys(values);
		const val = Object.values(values);
		const vals = Object.values({ field_name: param[20], field_value: val[20] });
		a(vals);
		setResult(values);
		console.log({ field_name: param[0], field_value: val[0] });

		const response = await fillProjectDocument({
			project_document_id: formID,
			// form_fields: setResult(values),
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
				{ field_name: param[9], field_value: val[9] },
				{ field_name: param[10], field_value: val[10] },
				{ field_name: param[11], field_value: val[11] },
				{ field_name: param[12], field_value: val[12] },
				{ field_name: param[13], field_value: val[13] },
				{ field_name: param[14], field_value: val[14] },
				{ field_name: param[15], field_value: val[15] },
				{ field_name: param[16], field_value: val[16] },
				{ field_name: param[17], field_value: val[17] },
				{ field_name: param[18], field_value: val[18] },
				{ field_name: param[19], field_value: val[19] },
				{ field_name: param[21], field_value: val[21] },
				{ field_name: param[22], field_value: val[22] },
				{ field_name: param[23], field_value: val[23] },
			],
			dynamic_inputs: a(vals),
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextStep(4));
			}
		}
	};

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
			shippingCost: "",
			salesTax: "YES",
			tax: "4.75",
		},
		// validationSchema: CCPRequisitionSchema[pages - 1],
		onSubmit: (values) => {
			console.log(values);
			if (pages === 1) {
				console.log("pages: ", pages);
				dispatch(nextStep(2));
			} else if (pages === 2) {
				console.log("pages: ", pages);
				dispatch(nextStep(3));
			} else if (pages === 3) {
				console.log("pages: ", pages);
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
};
export default CCPRequisitionForm;
