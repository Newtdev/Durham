import moment from "moment";

const PageTen = (props) => {
	return (
		<div
			className="text-black font11  py-[0.8in] px-[0.6in] leading-[1.13]"
			style={{ height: "10in" }}>
			<div>
				{/* Page 10 */}
				<div>
					<p className="text-justify mb-8">
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

					<div className="flex mb-8 gap-2">
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

					<div className="mb-8 font-bold text-justify">
						<p>
							This instrument has been pre-audited in the manner required by the
							School Budget and Fiscal Control Act.
						</p>
						<p>G.S. 115C-441(a).</p>
					</div>

					<div className="flex ">
						<div>
							<p className="border-b-2 border-black w-56 my-1">
								<span className={`${props?.nottoBeHighlighted}`}>
									{props?.durham_profile?.chief_finance_officer?.name}
								</span>
							</p>
							<p className="font-bold">Finance Officer</p>
						</div>
						<div>
							<p className="border-b-2 border-black  my-1">
								<span className={`${props?.nottoBeHighlighted}`}>
									{moment(props?.form_fields?.signData).format("MMMM, D,YYYY")}
								</span>
							</p>
							<p className="font-bold">Date</p>
						</div>
					</div>
				</div>
			</div>
			<div className=" h-[28.2rem] flex flex-col justify-end">
				<div>
					<p>DCA (short form - $100K) 12-15-2020</p>
				</div>
				<div className="w-1 ml-auto">
					<p>10</p>
				</div>
			</div>
		</div>
	);
};

export default PageTen;
