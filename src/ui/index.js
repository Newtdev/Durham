import { Spinner } from "../assets";
import ErrorIcon from "../assets/error.svg";
// import ErrorIcon from "../assets/error.svg";
import SuccessIcon from "../assets/successIcon.svg";
import DeleteIcon from "../assets/deleteIcon.svg";
import { DashboardButton } from "../pages/Dashboard/Components";

// REUSABLE INPUT COMP
export function Input(props) {
	const { placeholder, id, onChange, value, type, name } = props;
	return (
		<input
			className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
			name={id}
			title={name}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
}

// REUSABLE Textarea
export function Textarea(props) {
	const { placeholder, id, onChange, value } = props;
	return (
		<textarea
			className="bg-white border border-gray-400 placeholder-gray-400 text-gray-900 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
			name={id}
			placeholder={placeholder}
			type="text"
			value={value}
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
			className={`bg-[rgba(0,0,0,0.8)] transition-all fixed ${showModal} left-0 z-10000 h-full w-full overflow-y-auto`}
			onClick={close}
			style={{ zIndex: 10000 }}>
			{children}
		</div>
	);
}

export function ButtonRedBG(props) {
	const { name, disablebtn, loading, onClick } = props;
	// const cursor = disablebtn ? "cursor-not-allowed" : "cursor-pointer";
	return (
		<button
			onClick={onClick}
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
	const { name, onClick, disabled } = props;
	// const cursor = disablebtn ? "cursor-not-allowed" : "cursor-pointer";
	return (
		<button
			onClick={onClick}
			disabled={disabled ? true : false}
			type="button"
			className="uppercase bg-white text-[#3b6979] font-semibold px-4 h-[38px] border border-[#3b6979] rounded hover:bg-[#3b6979] hover:text-white cursor-pointer">
			{name}
		</button>
	);
}
export function SubmitButton(props) {
	const { name, onClick, disabled } = props;
	// const cursor = disablebtn ? "cursor-not-allowed" : "cursor-pointer";
	return (
		<button
			// onClick={onClick}
			disabled={disabled ? true : false}
			type="submit"
			className="uppercase bg-white text-[#3b6979] font-semibold px-4 h-[38px] border border-[#3b6979] rounded hover:bg-[#3b6979] hover:text-white cursor-pointer">
			{name}
		</button>
	);
}

export function ChevronDown() {
	return (
		<svg
			data-accordion-icon
			className="w-6 h-6 shrink-0"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function ChevronUp({ close }) {
	return (
		<svg
			onClick={(e) => {
				e.stopPropagation();
				close();
			}}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4.5 15.75l7.5-7.5 7.5 7.5"
			/>
		</svg>
	);
}

export const LoadingArrow = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-4 h-4 hover:rotate-90 transition-all">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
			/>
		</svg>
	);
};

export const Pen = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-4 h-4">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
			/>
		</svg>
	);
};

export const Calender = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-5 h-5">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
			/>
		</svg>
	);
};

export const Time = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-5 h-5">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
};

export const FullPageLoader = () => {
	return (
		<div className="bg-[rgba(0,0,0,0.9)] w-full h-full fixed top-0 z-50 left-0 flex justify-center items-center">
			<svg
				role="status"
				className="inline mr-2 w-14 h-14 text-white animate-spin dark:text-gray-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="#fff"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="#3B6979"
				/>
			</svg>
		</div>
	);
};

export const TableLoaderComponent = ({ apiResponse }) => {
	return (
		<div className="h-80 flex flex-col items-center justify-center">
			<div className="w-full flex justify-center items-center text-lg">
				{apiResponse.isFetching ? (
					<div>
						<Spinner color="text-gray-600" width="w-12" height="h-12" />
					</div>
				) : null}
				{apiResponse?.isError ? <p> {apiResponse?.error?.message}</p> : null}
			</div>
			<div className="mt-3">
				{apiResponse?.isError ? (
					<DashboardButton
						name="Reload"
						hidden
						width="w-full"
						onClick={() => apiResponse?.refetch()}
					/>
				) : null}
			</div>
		</div>
	);
};
