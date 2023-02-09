import { useState } from "react";
// import { useDispatch } from "react-redux";
import { ChevronDown } from "../../../ui";
// import { addDocuments } from "./projectSlice";

export const AccordionSelector = ({ data, objName, getData }) => {
	const [checkedID, setID] = useState({});

	const onChange = (e) => {
		if (!e.target.checked) {
			setID(null);
		} else {
			getData(e.target);

			setID(Number(e.target.id));
		}
	};

	const makeId = (...arg) => {
		return arg[0].split(" ").join("-");
	};
	return (
		<ul className="px-4">
			{data.map(({ name, id }, idx) => {
				return (
					<label
						htmlFor={id}
						key={id}
						className={`${
							checkedID === id ? "bg-[#699bac]" : "bg-[#d8e1e4]"
						} flex justify-between items-center mb-5
						mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base active:bg-[#699bac] focus:border focus:border-black cursor-pointer`}>
						{name}

						<input
							id={id}
							type="checkbox"
							value={name}
							name={objName}
							title={makeId(name)}
							onChange={onChange}
							className="text-gray-900 bg-gray-100 border-gray-300"
						/>
					</label>
				);
			})}
		</ul>
	);
};

export const AccordionHeader = ({ name }) => {
	return (
		<h2 id="accordion-collapse-heading-1">
			<button
				type="button"
				className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100 rounded-t-lg"
				data-accordion-target="#accordion-collapse-body-1"
				aria-expanded="false"
				aria-controls="accordion-collapse-body-1">
				<span>{name}</span>
				{/* Down Arrow */}
				<ChevronDown />
			</button>
		</h2>
	);
};
