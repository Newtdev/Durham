import React from "react";
import { useDispatch } from "react-redux";
// import { ButtonWhiteBG, Error } from "../../../../ui";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { closeModal } from "../reducer";

export const PreciseListComponent = ({
	type,
	onChange,
	value,
	name,
	label,
}) => {
	return (
		<div className="flex items-center mb-5 ml-2 mt-2">
			<input
				type={type}
				onChange={onChange}
				value={value}
				name={name}
				checked={value ? true : false}
				className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
			/>
			<label for="default-radio-1" className="ml-2 text-base text-gray-900">
				{label}
			</label>
		</div>
	);
};

const PrecisFolder = (props) => {
	const dispatch = useDispatch();

	const prices = {
		type: "checkbox",
		onChange: props.handleChange,
		value: props.values.precis,
		name: "precis",
		label: "Precis",
	};
	const bidTab = {
		type: "checkbox",
		onChange: props.handleChange,
		value: props.values.bidTab,

		name: "bidTab",
		label: "Bid Tab (certified if 3rd party led)",
	};
	const contract = {
		type: "checkbox",
		onChange: props.handleChange,
		value: props.values.contract,

		name: "contract",
		label: "Contract(with proposal)",
	};
	const participation = {
		type: "checkbox",
		onChange: props.handleChange,
		value: props.values.participation,

		name: "participation",
		label: "MWBE Participation Sheet (% Form)",
	};
	const affidavits = {
		type: "checkbox",
		onChange: props.handleChange,
		value: props.values.affidavits,

		name: "affidavits",
		label: "Affidavits(A,C or D)",
	};
	const plan = {
		type: "checkbox",
		onChange: props.handleChange,
		value: props.values.plan,

		name: "plan",
		label: "HUB Plan(If they did not achieve the 10%)",
	};
	const presentation = {
		type: "checkbox",
		onChange: props.handleChange,
		value: props.values.presentation,

		name: "presentation",
		label: "Presentation Slides (if required)",
	};

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							Precis Checklist
						</h3>
						<p className="text-base text-gray-700">
							Precis Folders for Projects
						</p>
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
				<hr />
				<div className="mx-6 mb-12">
					<div className=" mt-3 ml-2">
						<label className="text-base text-gray-900 mb-1">
							Enter the quantity of the items
						</label>
						<PreciseListComponent {...prices} />
						<PreciseListComponent {...bidTab} />
						<PreciseListComponent {...contract} />
						<PreciseListComponent {...participation} />
						<PreciseListComponent {...affidavits} />
						<PreciseListComponent {...plan} />
						<PreciseListComponent {...presentation} />
					</div>
				</div>

				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => dispatch(closeModal())}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default PrecisFolder;
