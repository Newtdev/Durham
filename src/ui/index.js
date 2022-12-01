import { Spinner } from "../assets";
import ErrorIcon from "../assets/error.svg";
// import ErrorIcon from "../assets/error.svg";
import SuccessIcon from "../assets/successIcon.svg";
import DeleteIcon from "../assets/deleteIcon.svg";

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
	const cursor =
		disablebtn || loading ? "cursor-not-allowed" : "cursor-pointer";
	return (
		<button
			type="submit"
			className={`${cursor} text-white text-base w-[344px] hover:bg-blue-800 focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:bg-transparent hover:border border-[#3B6979] hover:text-[#3B6979] font-bold rounded-md px-5 py-3 text-center`}
			disabled={disablebtn || loading ? true : false}>
			{loading && <Spinner />} {loading ? "Loading..." : name}
		</button>
	);
}

export function Select(props) {
	const { id, values, children, onChange } = props;
	return (
		<select
			onChange={onChange}
			className="cursor-pointer bg-white border border-gray-400 text-gray-900 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-[424px] p-2.5"
			name={id}
			type="text"
			value={values}>
			{children}
		</select>
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

export function ModalOverlay({ children, show, close }) {
	const showModal = show ? "top-0" : "bottom-full";
	return (
		<div
			className={`bg-[rgba(0,0,0,0.8)] transition-all fixed ${showModal} left-0 z-10 h-full w-full`}
			onClick={close}>
			{children}
		</div>
	);
}

export function ButtonRedBG(props) {
	const { name, disablebtn, loading } = props;
	// const cursor = disablebtn ? "cursor-not-allowed" : "cursor-pointer";
	return (
		<button
			type="submit"
			className="uppercase bg-red-500 text-white font-semibold px-4 h-[38px] hover:border hover:border-red-500 rounded hover:bg-white hover:text-red-500"
			disabled={disablebtn ? true : false}>
			{loading && <Spinner />} {loading ? "Loading..." : name}
		</button>
	);
}

//   export function Error({ message }) {
// 	return (
// 	  <div className='flex'>
// 		<img src={ErrorIcon} alt='error' className='mr-1' />
// 		<small className='text-red-700 mt-0.5'>{message}</small>
// 	  </div>
// 	);
//   }

export function SuccessPopup({ text }) {
	return (
		<div className="bg-[#E9F9EF] rounded-lg border border-[#D3F3DF] p-4 text-[#0E4F26] text-base w-full max-w-md flex items-center justify-between">
			<div className="flex items-center">
				<img src={SuccessIcon} alt="success" className="mr-4" />
				<p>{text}</p>
			</div>
			<div className="cursor-pointer">
				<svg
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
						fill="#147638"
					/>
				</svg>
			</div>
		</div>
	);
}

export function DeletePopup({ text }) {
	return (
		<div className="bg-red-900 rounded-lg border border-[#FCDADA] p-4 text-[#601B1B] text-base w-full max-w-md flex items-center justify-between">
			<div className="flex items-center">
				<img src={DeleteIcon} alt="delete" className="mr-4" />
				<p>{text}</p>
			</div>
			<div className="cursor-pointer">
				<svg
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
						fill="#8F2929"
					/>
				</svg>
			</div>
		</div>
	);
}

export function ButtonWhiteBG(props) {
	const { name, onClick } = props;
	// const cursor = disablebtn ? "cursor-not-allowed" : "cursor-pointer";
	return (
		<button
			onClick={onClick}
			type="button"
			className="uppercase bg-white text-[#3b6979] font-semibold px-4 h-[38px] border border-[#3b6979] rounded hover:bg-[#3b6979] hover:text-white">
			{name}
		</button>
	);
}