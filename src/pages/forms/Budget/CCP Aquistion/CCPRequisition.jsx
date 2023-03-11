import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCPRequisition } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
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
				dispatch(saveFormField(values));
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
