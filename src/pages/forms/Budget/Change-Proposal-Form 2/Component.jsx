import React, { useMemo } from "react";

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

export const HandleMultiplication = (c, d) => {
	return useMemo(() => {
		if (!c || !d) {
			return;
		}
		return c * d;
	}, [c, d]);
};

export const HandleTotal = (a, b) => {
	return useMemo(() => {
		if (!a) {
			return b;
		} else if (!b) {
			return "";
		}
		let percentage = a / 100;
		let total = percentage * Number(b);
		return total?.toFixed(2);
	}, [a, b]);
};

export const HandleSubTotal = (...val) => {
	return useMemo(() => {
		if (!val) {
			return "";
		}

		let sum = 0;
		for (let i of val) {
			console.log(i);
			sum = sum += Number(i);
		}
		return sum;
	}, [val]);
};
export const MasterhandleSubTotal = (...val) => {
	return useMemo(() => {
		if (!val) {
			return "";
		}

		let total = 0;
		for (let i of val) {
			total = total += Number(i);
		}
		return total;
	}, [val]);
};

export default Component;
