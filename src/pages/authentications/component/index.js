import Logo from "../../../assets/logo.svg";
import DashboardImage from "../../../assets/image.svg";
import Left from "../../../assets/left.svg";
import Right from "../../../assets/right.svg";

import { Error, Input, Label } from "../../../ui";
import { useState } from "react";

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
		<h1 className="text-[24px] font-bold text-center text-[#111827]">{name}</h1>
	);
}

export function InputContainer(props) {
	const { name, error, touched } = props;

	return (
		<div className="mb-4 w-[360px]">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<Input {...props} />
			{/* {console.log(error)} */}
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

function SliderTextContainer({ name, description, show }) {
	return (
		<div
			className={`h-full min-w-[33rem] mx-auto text-center transition-all ${show}`}>
			<h3 className="font-extrabold text-white text-lg ">{name}</h3>
			<p className="text-sm text-white font-light mt-2">{description}</p>
		</div>
	);
}

function SliderButton({ show, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`w-3 h-3 rounded-full ${show}`}></button>
	);
}

export function ImageSideContainer() {
	const [show, setShow] = useState(1);
	return (
		<div className="w-1/2 h-full bg-[#233F49] grid content-center overflow-x-hidden">
			<div className="w-full flex items-center justify-center">
				<img src={DashboardImage} alt="" />
			</div>
			<div className="h-1/2 mt-10 ">
				<div className="flex w-[35rem] mx-auto items-center justify-between py-6 px-8 h-36 overflow-x-hidden">
					<SliderTextContainer
						show={show === 1 ? "translate-x-0" : " -translate-x-[130%]"}
						hidden
						name="A New Way To Manage Project"
						description="Lorem ipsum dolor sit amet consectetur. Tellus lorem eu quisque
							gravida. A ac nullam suspendisse porttitor quam."
					/>

					<SliderTextContainer
						show={show === 2 ? "-translate-x-full " : ""}
						hidden
						name="Testing Project"
						description="Lorem ipsum dolor sit amet consectetur. Tellus lorem eu quisque
							gravida. A ac nullam suspendisse porttitor quam."
					/>

					<SliderTextContainer
						show={show === 3 ? "-translate-x-[200%]" : ""}
						name="Testing @"
						description="Lorem ipsum dolor sit amet consectetur. Tellus lorem eu quisque
							gravida. A ac nullam suspendisse porttitor quam."
					/>
				</div>
				<div className="flex px-8">
					<img
						src={Left}
						alt=""
						className={`${show === 1 ? "hidden" : "block"} `}
						onClick={() => {
							if (show === 1) {
								return;
							}
							setShow((prev) => prev - 1);
						}}
					/>
					<div className="w-24 mx-auto flex justify-evenly items-center">
						<SliderButton
							show={show === 1 ? "bg-white" : "bg-[#C3CFD3]"}
							onClick={() => setShow(1)}
						/>
						<SliderButton
							show={show === 2 ? "bg-white" : "bg-[#C3CFD3]"}
							onClick={() => setShow(2)}
						/>
						<SliderButton
							show={show === 3 ? "bg-white" : "bg-[#c3cfd3]"}
							onClick={() => setShow(3)}
						/>
					</div>
					<img
						src={Right}
						alt=""
						className={`${show === 3 ? "hidden" : "block"} `}
						onClick={() => {
							if (show === 3) {
								return;
							}
							setShow((prev) => prev + 1);
						}}
					/>
				</div>
			</div>
		</div>
	);
}


// SUCCESS COMPONENTS

export const AuthSuccessModal = ({email, content, name}) => {
	return (
		<div
			className="h-[344px] w-[472px] mx-auto mt-10  bg-white py-6 px-14 rounded-lg"
			onClick={(e) => e.stopPropagation()}>
			<div className="h-full w-full flex flex-col justify-evenly items-center">
				<AuthHeader name={name} />
				<p className="text-center text-sm text-gray-500">
					We sent a link to {email}
				</p>
				<p className="text-center text-sm text-gray-500">
					{content}
				</p>
				<button className="text-[#3B6979] text-base w-[360px] focus:ring-4 hover:bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:bg-transparent border border-[#3B6979] hover:text-white font-extrabold rounded-md px-5 py-3 text-center">
					Resend Email
				</button>
			</div>
		</div>
	);
}
