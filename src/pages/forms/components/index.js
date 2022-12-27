import { Calender, Error, Label } from "../../../ui";
import DatePicker from "react-datepicker";
import DollarSign from "../../../assets/dollar.svg";

export const FormInput = (props) => {
	const { name, value, onChange, type, placeholder } = props;
	return (
		<label className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center">
			{/* <Icon /> */}
			<img src={DollarSign} className="h-4 w-4 mr-3" alt=""></img>
			<input
				name={name}
				value={value}
				onChange={onChange}
				type={type}
				placeholder={placeholder}
				className="bg-gray-50 borde text-gray-900 text-sm rounded-sm focus:outline-none block w-full px-1 py-1"
			/>
		</label>
	);
};
export const FormInputPlain = (props) => {
	const { value, onChange, type, placeholder, name } = props;
	return (
		<label className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center">
			{/* <Icon /> */}
			<input
				value={value}
				name={name}
				onChange={onChange}
				type={type}
				placeholder={placeholder}
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

export const FormCheckBox = ({ props, data }) => {
	const { id } = data;

	return (
		<div className="flex items-center mb-5">
			<input
				id={id}
				type="checkbox"
				value={data}
				name={props.name}
				onChange={props.onChange}
				className=" text-gray-900 bg-gray-100 border-gray-300"
			/>
			<label for="default-radio-1" className="ml-2 text-sm text-gray-900">
				{data}
			</label>
		</div>
	);
};

export const FormTextArea = (props) => {
	const { onChange, value, placeholder, id, name, error, touched } = props;
	return (
		<div className="mb-4">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<textarea
				rows={4}
				className="bg-white border border-gray-400 placeholder-gray-400 text-gray-900 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
				name={id}
				placeholder={placeholder}
				type="text"
				value={value}
				onChange={onChange}
			/>
			{error && touched && <Error message={props.error} />}
		</div>
	);
};