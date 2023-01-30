import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { OverviewTextarea } from "../../../../Dashboard/Overview-dashboard/OverviewComponents";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate, { FormSelect } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormCheckBox, FormInput } from "../../../components";

const FormOne = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(getList);

	const agreementDate = {
		...props,
		value: props.values.creationDate,
		onChange: props.handleChange,
		name: "creationDate",
		error: props.errors.creationDate,
		touched: props.touched.creationDate,
		placeholder: "Select date",
		//    prevPage
	};

	const requisitionSignDate = {
		...props,
		value: props.values.signedDate,
		onChange: props.handleChange,
		name: "signedDate",
		error: props.errors.signedDate,
		touched: props.touched.signedDate,
		placeholder: "Select date",
		//    prevPage
	};
	const budgetCode = {
		value: props.values.budgetCode,
		onChange: props.handleChange,
		name: "budgetCode",
		error: props.errors.budgetCode,
		touched: props.touched.budgetCode,
		placeholder: "Budget Code",
		//    prevPage
	};
	const commodityCode = {
		value: props.values.commodityCode,
		onChange: props.handleChange,
		name: "commodityCode",
		error: props.errors.commodityCode,
		touched: props.touched.commodityCode,
		placeholder: "Commodity Code",
		//    prevPage
	};
	const requisitionOrder = {
		value: props.values.requisitionOrder,
		onChange: props.handleChange,
		name: "requisitionOrder",
		error: props.errors.requisitionOrder,
		touched: props.touched.requisitionOrder,
		placeholder: "Requisition/Work Order #",
		//    prevPage
	};
	const poCode = {
		value: props.values.poCode,
		onChange: props.handleChange,
		name: "poCode",
		error: props.errors.poCode,
		touched: props.touched.poCode,
		placeholder: "P.O. #",
		//    prevPage
	};

	const one = {
		value: props.values.selectBox,
		onChange: props.handleChange,
		error: props.errors.selectBox,
		touched: props.touched.selectBox,
		name: "selectBox",
	};
	const two = {
		value: props.values.selectBox,
		onChange: props.handleChange,
		error: props.errors.selectBox,
		touched: props.touched.selectBox,
		name: "selectBox",
	};

	const checkBox = [
		{
			id: 1,
			numb: "1",
			value: "Best Price(Attached)",
		},
		{
			id: 2,
			numb: "2",
			value: "Franchise/Sole Source(Attached)",
		},
	];

	return (
		<div>
			<div
				className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}
				<div
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={props.onSubmit}>
					<div className="flex items-baseline justify-between mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								CCP Requisition - MODIFIED 4-22-22FM
							</h3>
							<p className="text-base text-gray-700">Aquisition Details</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					{/* Progress */}
					<div className="w-full bg-[#89A5AF] h-2.5 my-4">
						<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 ">
							<FormInputContainer name="What day is this requisition being made?">
								<SelectDate {...agreementDate} />
								{props.errors.agreementDate && props.touched.agreementDate && (
									<Error message={props.errors.agreementDate} />
								)}
							</FormInputContainer>

							<div className="p-2 border rounded-lg border-[#D1D5DB] flex flex-col gap-2">
								<h2 className="font-bold">
									For the following items, enter the corresponding codes or
									numbers.
								</h2>
								<div className="w-full h-[1px] bg-[#D1D5DB]"></div>
								<div className="grid grid-cols-2 gap-2">
									<FormInputPlain {...budgetCode} />
									<FormInputPlain {...commodityCode} />
									<FormInputPlain {...requisitionOrder} />
									<FormInputPlain {...poCode} />
								</div>
							</div>

							<div className="p-2 flex flex-col gap-2">
								<h2 className="font-bold">
									Select the appropriate boxes below.
								</h2>
								<div className="flex flex-col">
									<FormCheckBox data={checkBox[0].value} props={one} />
									<FormCheckBox data={checkBox[1].value} props={two} />
								</div>
							</div>

							<FormInputContainer name="When does the project manager sign the requisition?">
								<SelectDate {...requisitionSignDate} />
								{props.errors.requisitionSignDate &&
									props.touched.requisitionSignDate && (
										<Error message={props.errors.requisitionSignDate} />
									)}
							</FormInputContainer>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Previous"
							onClick={() => dispatch(closeModal())}
						/>
						<DashboardButton
							hidden
							name="NEXT"
							type="submit"
							width="w-[77px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormOne;
