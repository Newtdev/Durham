import { Spinner } from "../assets";
import ErrorIcon from "../assets/error.svg";

// REUSABLE INPUT COMP
export function Input(props) {
	const { placeholder, id, onChange, values } = props;
	return (
		<input
			className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
			name={id}
			placeholder={placeholder}
			type="text"
			value={values}
			onChange={onChange}
		/>
	);
}

// REUSABLE LABEL COMP

export function Label(props) {
	const { styles } = props;
	return <label className={styles}>{props.name}</label>;
}
// REUSABLE BUTTON COMP

export function Button(props) {
	const { name, disablebtn, loading } = props;
	const cursor = disablebtn ? "cursor-not-allowed" : "cursor-pointer";
	return (
		<button
			type="submit"
			className={`${cursor} text-white text-base font-normal w-[344px] hover:bg-blue-800 focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:bg-transparent hover:border border-[#3B6979] hover:text-[#3B6979] font-bold rounded-md text-sm px-5 py-3 text-center`}
			disabled={disablebtn ? true : false}>
			{loading && <Spinner />} {loading ? "Loading..." : name}
		</button>
	);
}

export function Error({ message }) {
	return (
		<div className="flex">
			<img src={ErrorIcon} alt="error" className="mr-1" />
			<small className="text-red-700 mt-0.5">{message}</small>
		</div>
	);
}
