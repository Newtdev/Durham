const PageTwo = ({ nottoBeHighlighted, form_fields }) => {
	return (
		<div
			className="mt-[27rem] pt-20 leading-[1.3] text-[12.5px]"
			style={{ margin: "0.5in 0.1in", height: "10in" }}>
			<p className="mb-4 text-[12.5px]">
				The responsibility of the Owner and Contractor for security,
				maintenance, heat, utilities, damage to the Work and insurance shall be
				as follows:{" "}
			</p>
			<div className="flex mb-2">
				<div className="">
					<p className={`  ${nottoBeHighlighted} text-justify text-[9pt]`}>
						{!form_fields ? "" : form_fields?.responsibility}
					</p>
				</div>
			</div>

			<div className="w-full flex justify-center">
				{/* <p className="mt-auto">2</p> */}
			</div>
		</div>
	);
};
export default PageTwo;
