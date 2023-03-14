import moment from "moment";

export const SmallShortWrapper = ({ children, num }) => {
	return (
		<div
			className="text-black  py-[0.8in] pr-[0.6in] mt-[1in] pl-[0.8in] leading-[1.13] text-[13.5px] relative"
			style={{ height: "11in" }}>
			{children}

			<div className="px-3 absolute bottom-10 w-[90%] flex ">
				<div>
					<p className="text-[10px]">DCA (short form - $100K) 12-15-2020</p>
				</div>
				<div className="w-1 ml-auto mr-10">
					<p>{num}</p>
				</div>
			</div>
		</div>
	);
};
const PageTen = (props) => {
	return (
		// <div
		// 	className="text-black  py-[0.8in] pr-[0.6in] mt-[1in] pl-[0.8in] leading-[1.13] text-[13.5px]"
		// 	style={{ height: "10in" }}>
		<SmallShortWrapper num={10}>
			<div>
				{/* Page 10 */}
				<div>
					<p className="text-justify mb-12">
						In witness whereof, each individual executing this agreement
						acknowledges that he/she/it is authorized to execute this agreement
						and further acknowledges the execution of this agreement the day and
						year first written above.
					</p>

					<p className="font-bold mb-8">
						Durham Public Schools Board of Education
					</p>

					<p className=" mb-8">
						<span className="font-bold mr-8">By:</span>
						____________________________________(Seal)
					</p>
					<p className=" mb-8">
						<span className="font-bold mr-2">Attest:</span>
						____________________________________(Seal)
					</p>
					<p className="mb-8">
						<span className={`${props?.nottoBeHighlighted} `}>
							{props?.awardee[0]?.company_name}
						</span>
					</p>

					<div className="flex mb-8 gap-8">
						<p className="font-bold">By:</p>
						<div>
							<p>____________________________________(Seal)</p>
							<p>
								<span className={`${props?.nottoBeHighlighted} `}>
									{props?.awardee[0]?.president}
								</span>
							</p>
						</div>
					</div>

					<div className="flex mb-12 gap-2">
						<p className="font-bold">Attest:</p>
						<div>
							<p>____________________________________(Seal)</p>
							<p>
								<span className={`${props?.nottoBeHighlighted} `}>
									{props?.awardee[0]?.secretary}
								</span>
							</p>
						</div>
					</div>

					<div className="mb-8 font-bold text-justify text-[12.5px]">
						<p>
							This instrument has been pre-audited in the manner required by the
							School Budget and Fiscal Control Act.
						</p>
						<p>G.S. 115C-441(a).</p>
					</div>

					<div className="flex ">
						<div>
							<p className="border-b border-black w-56">
								<span className={`${props?.nottoBeHighlighted}`}>
									{props?.durham_profile?.chief_finance_officer?.name}
								</span>
							</p>
							<p className="font-bold">Finance Officer</p>
						</div>
						<div>
							<p className="border-b border-black">
								<span className={`inline-block ${props?.nottoBeHighlighted}`}>
									{!props?.form_fields?.signDate
										? ""
										: moment(props?.form_fields?.signDate).format(
												"MMMM D, YYYY"
										  )}
								</span>
							</p>
							<p className="font-bold">Date</p>
						</div>
					</div>
				</div>
			</div>
		</SmallShortWrapper>
	);
};

export default PageTen;
