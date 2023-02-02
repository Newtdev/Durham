import currency from "currency.js";

const PageTwo = ({ form_fields, nottoBeHighlighted }) => {
	return (
		<div className="mt-[31rem] pt-[5.2rem] leading-[1.21]">
			{/* 4 */}
			<div className="flex mb-2">
				<p>4.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">Compensation</span>.{" "}
						<span className="ml-1">
							{" "}
							The School System hereby agrees to compensate Provider in the
							amount of{" "}
							<span className={`${nottoBeHighlighted}`}>
								{currency(form_fields.providerCompensation).format()}
							</span>{" "}
							once all services have been rendered in accordance with the terms
							of this Contract. Provider shall provide School System with
							invoice(s) itemized by service provided the number of hours worked
							and by whom, the date(s) that services were provided, and the
							amount owed, along with any supporting documentation that may be
							requested in advance by School System. The School System shall
							process payments to Provider within forty-five (45) days of
							submission of such invoice(s).
						</span>
					</p>
				</div>
			</div>
			{/* <div className="flex mb-2">
				<div className=" ml-10">
					<p className="text-justify"></p>
				</div>
			</div> */}

			<div className="flex mb-2">
				<p>5.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							Termination for Convenience
						</span>
						.{" "}
						<span className="ml-1">
							{" "}
							The School System may terminate this Contract at any time at its
							complete discretion upon twenty (20) calendar days’ notice in
							writing from the School System to Provider prior to the date of
							termination. In addition, all finished or unfinished documents and
							other materials produced by Provider pursuant to this Contract
							shall, at the request of the School System be turned over to it
							and become its property. If the Contract is terminated by the
							School System in accordance with this section, the School System
							will pay Provider at the rate set out in Section 2.1 for all
							services performed as of the date of termination.
						</span>
					</p>
				</div>
			</div>

			<div className="flex mb-3">
				<p>6.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							Termination for Default
						</span>
						.{" "}
						<span className="ml-1">
							{" "}
							At any time, the School System may terminate this Contract
							immediately and without prior notice if provider is unable to meet
							goals and timetables or if the School System is dissatisfied with
							the quality of services provided.
						</span>
					</p>
				</div>
			</div>

			<div className="flex mb-3">
				<p>7.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							Terms and Methods of Payment
						</span>
						.{" "}
						<span className="ml-1">
							{" "}
							Provider shall submit to the School System monthly invoices
							itemized by service provided, the number of hours worked and by
							whom, the date(s) that services were provided, and the amount
							owed, along with any supporting documentation that may be
							requested in advance by the School System. Such invoices shall be
							submitted within thirty (30) days of the rendering of services.
							The School System shall process payments to Provider within
							forty-five (45) days of submission of such invoices. Invoices
							should be sent to{" "}
							<span className={`${nottoBeHighlighted}`}>
								{!form_fields ? "" : form_fields.providerInvoice},
							</span>{" "}
							Durham Public Schools, 511 Cleveland Street, Durham, NC 27702, for
							review and approval.
						</span>
					</p>
				</div>
			</div>

			<div className="flex mb-3">
				<p>8.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							Contract Funding
						</span>
						.{" "}
						<span className="ml-1">
							{" "}
							It is understood and agreed between Provider and the School System
							that the School System’s payment obligation under this Contract is
							contingent upon the availability of appropriated funds from which
							payment for Contract purposes can be made.
						</span>
					</p>
				</div>
			</div>

			<div className="flex mb-3">
				<p>9.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">Insurance</span>.{" "}
						<span className="ml-1">
							{" "}
							Provider agrees to maintain Commercial General Liability in amount
							of $1,000,000 each occurrence with $2,000,000 General Aggregate.
							Provider shall maintain $1,000,000 in automobile liability, and
							other appropriate insurance, as well as Workers Compensation in
							the required statutory amount for all employees participating in
							the provision of services under this Contract. Provider also
							agrees to maintain $1,000,000 in professional liability insurance
							if the Provider is engaged in a professional service pursuant to
							this Contract. The Board of Education shall be named by
							endorsement as an additional insured on the General and Automobile
							Liability policies. Certificates of such insurance shall be
							furnished by Provider to the School System and shall contain an
							endorsement to provide the School System at least 10 days’ written
							notice of any intent to cancel or terminate by either Provider or
							the insuring company. Failure to furnish insurance certificates or
							maintain such insurance shall be a default under this contract and
							shall be grounds for immediate termination of this Contract.
						</span>
					</p>
				</div>
			</div>
			<div className="flex mb-3">
				<p>10.</p>
				<div className=" ml-5">
					<p className="text-justify">
						<span className="underline underline-offset-2">Taxes</span>.{" "}
						<span className="ml-1">
							{" "}
							Provider shall pay all federal, state, and FICA taxes for all
							employees participating in the provision of services under this
							Contract. If requested by the School System, Provider shall
							provide a breakdown of all sales and use taxes paid on labor,
							materials, parts and/or supplies.
						</span>
					</p>
				</div>
			</div>

			<div className="flex mb-3">
				<p>11.</p>
				<div className=" ml-5">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							Monitoring and Auditing
						</span>
						.{" "}
						<span className="">
							{" "}
							Provider shall cooperate with the School System, or with any other
							person or agency as directed by the School System, in monitoring,
							auditing, or investigating activities related to this Contract.
							Provider shall permit the School System to evaluate all activities
							conducted under this contract as dictated by the School System.
							Provider shall provide auditors retained by the School System with
							access to any records and files related to the provision of
							services under this Contract. The School System agrees that its
							auditors will maintain the confidentiality of any identified and
							actual trade secrets of Provider accessed during an audit
							conducted under this Contract.
						</span>
					</p>
				</div>
			</div>

			<div className="w-full flex justify-center mt-6">
				<p>2</p>
			</div>
		</div>
	);
};

export default PageTwo;
