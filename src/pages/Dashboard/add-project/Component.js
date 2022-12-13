import { useState } from "react";
import { ChevronDown } from "../../../ui";

export const AccordionSelector = ({ data, objName }) => {
	const [selected, setSelected] = useState(false);
	// const [selected, setSelected] = useState([]);

	const onClick = (name, objName, e) => {
		// setSelected([...selected, name]);
		if (e.target.id) {
			setSelected(true);
		}
		console.log(e.target.select());
	};

	return (
		<ul className="px-4">
			{data.map(({ name }, idx) => {
				return (
					<input
						onClick={(e) => onClick(name, objName, e)}
						value={name}
						name={objName}
						id={idx}
						type="button"
						key={idx}
						className={`bg-[#d8e1e4]
						mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base active:bg-[#699bac] focus:border focus:border-black`}
					/>
				);
			})}
			{console.log(selected)}
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
