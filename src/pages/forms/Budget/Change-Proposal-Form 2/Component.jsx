import React from "react";

const Component = ({ onChange, value, id }) => {
	return (
		<div className="relative w-full">
			<input
				type="text"
				name={id}
				value={value}
				onChange={onChange}
				className="bg-transparent border-none p-1 pr-3 placeholder:text-black  border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] w-full focus:outline-gray-400 "
			/>
			<small className="absolute top-1/2 text-black translate-y-[-9px] right-[2px]">
				%
			</small>
		</div>
	);
};

export default Component;
