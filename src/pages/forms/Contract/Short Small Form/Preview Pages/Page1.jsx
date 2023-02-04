const PageOne = (props) => {
	console.log(props);
	return (
		<div
			className=" text-black pt-20"
			style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}>
			<div>
				{/* Page 1 */}
				<div className="text-center mb-8">
					<h1 className="text-lg font-bold mb-10">
						DESIGN CONSULTANT SERVICES AGREEMENT
					</h1>
					<p className="mb-8">BETWEEN</p>
					<p className="mb-8 font-bold">
						Durham Public Schools Board of Education
					</p>
					<p className="mb-12">Hereinafter referred to as the Owner</p>
					<p className="mb-8">AND</p>
					<p className="mb-8">
						<span
							className={`${props?.nottoBeHighlighted} inline-block w-36 border-b border-black`}>
							{props?.awardee[0]?.company_name}
						</span>
					</p>
					<p className="mb-12">
						Hereinafter referred to as the Design Consultant or Architect
					</p>
					<p className="mb-8">
						Project Name:{" "}
						<span className={`${props?.nottoBeHighlighted}`}>
							{props?.project?.name}
						</span>
					</p>
					<p className="mb-8">
						Project Number:{" "}
						<span className={`${props?.nottoBeHighlighted}`}>
							{props?.project?.number}
						</span>
					</p>
					<div className="">
						<p className="mb-36 text-[12px]">
							AGREEMENT FOR DESIGN CONSULTANT SERVICES
						</p>
					</div>
				</div>
			</div>
			<div className=" h-[10rem] flex flex-col justify-end">
				<p className=" mb-4 text-center">
					AGREEMENT FOR DESIGN CONSULTANT SERVICES
				</p>
				<div>
					<p>DCA (short form - $100K) 12-15-2020</p>
				</div>
				<div className="w-8  ml-auto">
					<p>1</p>
				</div>
			</div>
		</div>
	);
};

export default PageOne;
