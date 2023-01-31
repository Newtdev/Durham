import currency from "currency.js";
import moment from "moment";

const PageOne = ({ form_fields, content, nottoBeHighlighted, awardee }) => {
	return (
		<div className="-mt-4n leading-[1.3]">
			<div className="text-center mb-3">
				<h1 className="font-bold">DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION</h1>
				<h1 className="font-bold">CONTRACT FOR SERVICES</h1>
			</div>

			<p className="text-justify mb-3">
				This contract for services (the “Contract”) is made and entered into
				this{" "}
				<span className={`${nottoBeHighlighted}`}>
					{moment(form_fields.contractStartDate).format(" Do ")}{" "}
				</span>{" "}
				day of{" "}
				<span className={`${nottoBeHighlighted}`}>
					{moment(form_fields.contractStartDate).format(" MMMM ")}
				</span>{" "}
				<span className={`${nottoBeHighlighted}`}>
					{moment(form_fields.contractStartDate).format(" YYYY ")}
				</span>
				, between the Durham Public Schools Board of Education (the “School
				System”), 511 Cleveland Street, Durham, NC 27702, and
				<span className={`${nottoBeHighlighted} font-bold`}>
					{" "}
					{!awardee[0] ? "" : awardee[0].company_name}{" "}
				</span>
				(the “Provider”),{" "}
				<span className={`${nottoBeHighlighted} font-bold`}>
					{!awardee[0] ? "" : awardee[0].street},{" "}
					{!awardee[0] ? "" : awardee[0].city},{" "}
					{!awardee[0] ? "" : awardee[0].state},{" "}
					{!awardee[0] ? "" : awardee[0].zip_code}
				</span>
				.
			</p>

			<p className="ml-10 mb-3">
				For and in consideration of the mutual promises set forth in the
				Contract the parties do mutually agree as follows:
			</p>

			{/* Lists */}
			<div>
				{/* 1 */}
				<div className="flex">
					<p>1.</p>
					<div className=" ml-7">
						<p>
							<span className="underline underline-offset-2">
								Obligations of Provider
							</span>
							. <span className="ml-1"> Provider agrees to following:</span>
						</p>

						{/* 1.1 Container */}
						<div className="mt-2">
							{/* 1.1 */}
							<div className="mb-2">
								<span className="pr-4 underline underline-offset-2">1.1.</span>
								<span className="text-justify">
									Provider shall provide the following services regarding the
									School System’s use, including monitoring and reporting, of
									ESSER Funds:
								</span>
							</div>
							{/* 1.1 Nested List */}
							<div className="ml-[60px]">
								<div className="mb-2 flex">
									<p className="pr-4 underline underline-offset-2">1)</p>
									<p className="text-justify">
										Review and be familiar with all state and federal rules,
										laws and regulations regarding the use of ESSER funds by the
										School System;
									</p>
								</div>
								<div className="mb-2 flex">
									<p className="pr-4 underline underline-offset-2">2)</p>
									<p className="text-justify">
										Oversee and manage the use of ESSER funds by the School
										System;
									</p>
								</div>
								<div className="mb-2 flex">
									<p className="pr-4 underline underline-offset-2">3)</p>
									<p className="text-justify">
										Ensure the School System’s compliance with the use of ESSER
										funds;
									</p>
								</div>
								<div className="mb-2 flex">
									<p className="pr-4 underline underline-offset-2">4)</p>
									<p className="text-justify">
										Maintain all records associated with the use of ESSER funds,
										including preparing and submitting any required reports
										associated with the use of ESSER; and
									</p>
								</div>
								<div className="mb-2 flex">
									<p className="pr-4 underline underline-offset-2">5)</p>
									<p className="text-justify">
										Defend any audit by federal and/or state entities regarding
										the School System’s use of ESSER funds.
									</p>
								</div>
							</div>

							<p className="pl-4 texxt-justify">
								Work will be completed in a timely manner acceptable to the
								School System in full compliance with the terms and conditions
								of this Contract, including any documents incorporated by
								reference.
							</p>
						</div>

						{/* 1.2 */}
						<div className="mt-2 mb-2 text-justify">
							<span className="pr-4 underline underline-offset-2">
								1.2. Qualifications of Provider.
							</span>
							<span>
								Provider warrants that all agents or employees of Provider who
								will provide services under this Contract will be fully
								qualified, possess any requisite licenses, and otherwise be
								legally entitled to perform the services provided, and shall
								exercise the skill and care customarily exercised by duly
								licensed and/or qualified providers of the same or similar
								services.
							</span>
						</div>

						{/* 1.3 */}
						<div className="mt-2 mb-2 text-justify">
							<span className="pr-4 underline underline-offset-2">
								1.3. Records Maintenance.
							</span>
							<span>
								Provider shall maintain written documentation of any service
								provided, including any required documentation meeting the
								requirements of applicable federal, state and local laws and
								regulations.
							</span>
						</div>
					</div>
				</div>

				{/* 2 */}
				<div className="flex mb-2">
					<p>2.</p>
					<div className=" ml-7">
						<p>
							<span className="underline underline-offset-2">
								Obligations of the School System.
							</span>
						</p>

						{/* 2.1 */}
						<div className="mt-2 text-justify">
							<span className="pr-4">2.1.</span>
							<span>
								The School System hereby agrees to compensate Provider at a rate
								or in the amount of{" "}
								<span className={`${nottoBeHighlighted}`}>
									{!form_fields
										? ""
										: !form_fields?.calculatePayment
										? "N/A"
										: form_fields?.calculatePayment}
									{/* {currency(form_fields.calculatePayment).format()} */}
								</span>{" "}
								for services rendered, with total payments not to exceed{" "}
								<span className={`${nottoBeHighlighted}`}>
									{currency(form_fields.allowablePayment).format()}
								</span>
								. With the School System’s written consent, payments may be made
								in monthly installments for work performed and accepted during
								the previous month.
							</span>
						</div>

						{/* 2.2 */}
						<div className="mt-2 text-justify">
							<span className="pr-4 underline underline-offset-2">2.2.</span>
							<span className={`${nottoBeHighlighted}`}>
								{!form_fields
									? ""
									: !form_fields?.reimburseObligation
									? "N/A"
									: form_fields?.reimburseObligation}
							</span>
						</div>
					</div>
				</div>

				{/* 3 */}
				<div className="flex mb-2">
					<p>3.</p>
					<div className=" ml-7">
						<p className="text-justify">
							<span className="underline underline-offset-2">Term</span>.{" "}
							<span className="ml-1">
								{" "}
								The services described in the Contract will be provided from{" "}
								<span className={`${nottoBeHighlighted}`}>
									{moment(form_fields.fromDuration).format("MMMM Do, YYYY ")}
								</span>
								through{" "}
								<span className={`${nottoBeHighlighted}`}>
									{moment(form_fields.startDuration).format("MMMM Do, YYYY ")}
								</span>
								unless sooner terminated as herein provided.
							</span>
						</p>
					</div>
				</div>

				<div className="w-full flex justify-center mt-4">
					<p>1</p>
				</div>
			</div>
		</div>
	);
};

export default PageOne;
