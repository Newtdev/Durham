const PageTwo = ({ nottoBeHighlighted, form_fields }) => {
	return (
		<div
			className="mt-[27rem] pt-20 leading-[1.3] text-[12.5px]"
			style={{ height: "10in" }}>
			<div className="flex mb-2">
				<div className="">
					<p className={` adverstise ${nottoBeHighlighted} text-justify`}>
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
