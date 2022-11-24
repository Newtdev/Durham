import Logo from "../../../assets/logo.svg";
import DashboardImage from "../../../assets/image.svg";

import { Error, Input, Label } from "../../../ui";

const AuthComp = ({ children }) => {
	return (
		<div className="w-1/2">
			<div>
				<img src={Logo} alt="logo" className="py-4 mt-3" />
			</div>
			{children}
		</div>
	);
};

export default AuthComp;

export function AuthHeader({ name }) {
	return (
		<h1 className="text-3xl font-bold text-center text-[#111827]">{name}</h1>
	);
}

export function InputContainer(props) {
	const { name, error, touched } = props;
	return (
		<div className="mb-4 w-[344px]">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<Input {...props} />
			{error && touched && <Error message={error} />}
		</div>
	);
}

export function CheckBox({ name, value, onChange, id }) {
	return (
		<div className="flex items-start mt-2 w-80">
			<div className="flex items-center h-5">
				<input
					id="remember"
					type="checkbox"
					name={id}
					value={value}
					onChange={onChange}
					className="w-4 h-4 bg-red-900 rounded-sm border border-red-900  focus:bg-red-900"
				/>
			</div>
			<Label name={name} styles="ml-2 text-sm font-medium text-[#111827]" />
		</div>
	);
}

export function ImageSideContainer() {
	return (
		<div className="w-1/2 h-full bg-[#233F49]">
			{/* <div className="w-full h-1/2 flex items-center justify-center">
				<img src={DashboardImage} alt="" />
			</div> */}
			<div className="h-56 w-full bg-red-900 text-center">
				<h3 className="font-bold text-white text-lg ">
					A New Way To Manage Project
				</h3>
				<p className="text-base text-white font-light">
					Lorem ipsum dolor sit amet consectetur. Tellus lorem eu quisque
					gravida. A ac nullam suspendisse porttitor quam.
				</p>
			</div>
			<div className=" flex bg-green-900">
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-[#C3CFD3]"
					aria-current="false"
					aria-label="Slide 1"
					data-carousel-slide-to="0"></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-[#C3CFD3]"
					aria-current="false"
					aria-label="Slide 2"
					data-carousel-slide-to="1"></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-[#C3CFD3]"
					aria-current="false"
					aria-label="Slide 3"
					data-carousel-slide-to="2"></button>
			</div>
		</div>
	);
}
