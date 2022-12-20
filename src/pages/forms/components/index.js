import { Calender } from "../../../ui";
import { DatePicker } from "react-datepicker";
import DollarSign from "../../../assets/dollar.svg";

export const FormInput = (props) => {
	return (
		<label className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center">
			{/* <Icon /> */}
			<img src={DollarSign} className="h-4 w-4 mr-3" alt=""></img>
			<input
				{...props}
				className="bg-gray-50 borde text-gray-900 text-sm rounded-sm focus:outline-none block w-full px-1 py-1"
			/>
		</label>
	);
};

const SelectDate = () => {
	return (
		<label>
			<DatePicker
				// selected={startDate} onChange={(date) => setStartDate(date)}
				className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
				placeholderText="Select Date"
			/>
			<Calender />
		</label>
	);
};

export default SelectDate;
