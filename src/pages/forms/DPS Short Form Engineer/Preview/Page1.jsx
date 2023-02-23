const PageOne = ({ vendor, project, nottoBeHighlighted }) => {
	return (
		<div className="pt-8 pb-4 text-black h-[11in]">
			<div>
				{/* Page 1*/}
				<div className="text-center m-[1in] text-[10pt]">
					<h1 className="text- font-bold mt-8 mb-10">
						ENGINEERING CONSULTANT SERVICES AGREEMENT
					</h1>
					<p className="mb-8 ">BETWEEN</p>
					<p className="mb-8 font-bold ">
						Durham Public Schools Board of Education
					</p>
					<p className="mb-12">hereinafter referred to as the Owner</p>
					<p className="mb-8 ">AND</p>
					<p className="mb-8">
						<span className={`${nottoBeHighlighted}`}>
							{!vendor[0] ? "" : vendor[0]?.company_name}
						</span>
					</p>
					<p className="mb-8">hereinafter referred to as the Engineer</p>
					<p className="mb-12 font-bold">
						For the{" "}
						<span className={`${nottoBeHighlighted}`}>{project?.name}</span>{" "}
						Project
					</p>

					<div className="h-[31rem]  text-[12pt] mt-auto flex items-end justify-center">
						1
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageOne;
