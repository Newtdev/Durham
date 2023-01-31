const PageEight = ({ form_fields, content, nottoBeHighlighted, awardee }) => {
	//vendors, project, durham_profile
	const project = content?.data?.project || "";
	// const vendors = content?.data?.vendors || "";
	return (
		<div className="mt-[30rem] pt-10 h-screen">
			<small className="text-[11px] ml-2">R2468186</small>
			<div className="w-full flex justify-center bg-red-900  ">
				<p className="mt-auto">8</p>
			</div>
		</div>
	);
};

export default PageEight;
