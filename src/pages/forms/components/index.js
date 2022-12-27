import { Calender, Error, Label } from "../../../ui";
import DatePicker from "react-datepicker";
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
export const FormInputPlain = (props) => {
	return (
		<label className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center">
			{/* <Icon /> */}
			<input
				{...props}
				className="bg-gray-50 borde text-gray-900 text-sm rounded-sm focus:outline-none block w-full px-1 py-1"
			/>
		</label>
	);
};

export const SelectDate = (props) => {
	const { value, setFieldValue, name, placeholder } = props;
	return (
		<label className="bg-gray-50 border flex items-center justify-between border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979]  w-full pr-2">
			<DatePicker
				{...props}
				selected={value}
				name={name}
				onChange={(e) => setFieldValue(name, e)}
				className="w-full p-2.5 bg-gray-50"
				placeholderText={placeholder}
			/>
			<Calender />
		</label>
	);
};

export default SelectDate;

export function FormSelect(props) {
	// const { name, error, touched } = props;
	const { id, values, children, onChange, name, error, touched } = props;
	return (
		<div className=" w-full">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>

			<select
				onChange={onChange}
				className=" cursor-pointer bg-white border border-gray-400 text-gray-900 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full py-3 px-1"
				name={id}
				type="text"
				value={values}>
				{children}
			</select>
			{error && touched && <Error message={error} />}
		</div>
	);
}
