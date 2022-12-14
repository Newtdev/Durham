import { useState } from "react";
import { ChevronDown, ChevronUp } from "../../../ui";

export const ProjectCard = ({ name, value }) => {
	return (
		<div className="bg-white rounded-lg border border-gray-100 flex flex-col items-center justify-center h-[104px]">
			<small className="text-gray-900 font-bold text-xs block">{name}</small>
			<p className="text-[#3b6979] text-2xl font-semibold">{value}</p>
		</div>
	);
};

export const ProjectDetails = ({ name, description }) => {
	return (
		<div className="mt-4 pb-4 border-b border-b-gray-200">
			<p className="font-semibold text-2xl text-gray-900">{name}</p>
			<p className="text-gray-700 text-base mt-2">{description}</p>
		</div>
	);
};

export const Accordion = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const newClass =
		"bg-[#699bac] mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base  focus:border focus:border-black";

	const onClick = (e) => {
		if (e.target) {
			// getData(e.target);
			e.target.className = newClass;
		}
	};

	return (
		<>
			{!data
				? null
				: Object.keys(data)?.map((cur, idx) => {
						const active =
							activeIndex === idx ? "h-full" : "h-16 overflow-y-hidden ";
						return (
							<div
								className={`${active} transition-all ease-linear duration-75 overflow-y-hidden`}
								// key={id}
							>
								<h2>
									<button
										onClick={() => {
											setActiveIndex(idx);
										}}
										type="button"
										className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100 rounded-t-lg">
										<span>{cur}</span>
										{/* Down Arrow */}
										{activeIndex !== idx && <ChevronDown />}
										{activeIndex === idx && (
											<ChevronUp close={() => setActiveIndex(null)} />
										)}
									</button>
								</h2>
								<div>
									<ul className="px-4">
										{Object.values(data)[idx].map((cur, idx) => {
											return (
												<input
													onClick={onClick}
													value={cur}
													// name={objName}
													id={idx}
													type="button"
													key={idx}
													className={`bg-[#d8e1e4]
						mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base active:bg-[#699bac] focus:border focus:border-black cursor-pointer`}
												/>
											);
										})}
									</ul>
								</div>
							</div>
						);
				  })}
		</>
	);
};
