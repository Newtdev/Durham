import "react-datepicker/dist/react-datepicker.css";

import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { useDispatch, useSelector } from "react-redux";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { closeModal, fields, openDownload, showDownload } from "../reducer";
import { prevChoiceStep } from "./reducer";
import { useRef, useState } from "react";
import DownLoadForm from "../Lundsford/Download";
import Logo from "../../../assets/affidavit.png";

const Affidavit = () => {
	const formID = useSelector(project_document_id);
	const form_fields = useSelector(fields);
	const dispatch = useDispatch();

	const [a] = UseFetchFilledFormDetails(formID);
	const [highlighted, setHighlighed] = useState(false);
	const downloadComponent = useRef();

	const show = useSelector(openDownload);

	const props = {
		component: downloadComponent,
		name: "	Affidavit of Capital Improvement",
		show: !show ? "hidden" : "block",
		// stepDefault: stepChoiceDefault,
		// close: closeDownload,
	};

	const projectInfo = a?.data?.project;
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	return (
		<div>
			<div>
				{/* Modal content */}
				<DownLoadForm {...props} />

				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14 `}>
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								E-589CI Affidavit of Capital Improvement
							</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
						<div
							className="px-12 pt-8 pb-4 text-black text-[8pt] leading-[1.1] arial-font"
							ref={downloadComponent}>
							<div>
								<div className="border-b border-b-black pb-4 flex items-center mb-3 mt-4">
									<div className="flex flex-col items-center -ml-8">
										<img src={Logo} alt="" className=" object-contain h-14" />
										<span className="inline-block -mt-2">Web-Fill</span>
										<span>7-18</span>
									</div>
									<div className="pl-4 border-l border-l-black">
										<h1 className="text-xl font-bold text-[22pt]">E-589CI</h1>
										<h2 className="text-[18pt] font-bold">
											Affidavit of Capital Improvement
										</h2>
									</div>
								</div>

								<div className="mb-3">
									<p className="mb-3 ">
										Form E-589CI, Affidavit of Capital Improvement, may be used
										to substantiate that a contract, or a portion of work to be
										performed to fulfill a contract, is to be taxed for sales
										and use tax purposes, as a real property contract for a
										capital improvement to real property.
									</p>

									<p className="mb-3">
										The receipt of an affidavit of capital improvement for
										services to real property, absent fraud or other egregious
										activities, establishes that the subcontractor or other
										person receiving the affidavit should treat the transaction
										as a real property contract for sales and use tax purposes.
									</p>

									<p>
										A real property contract is a contract between a real
										property contractor and another person to perform a capital
										improvement to real property
									</p>
								</div>

								<div className="border border-black">
									<p className="border-b border-b-black p-2 mb-2">
										<span className="font-bold">Section I. Single Use </span>
										<em>
											Complete this section to issue the affidavit for a single
											capital improvement.)
										</em>
									</p>

									<div className="py-2 px-4">
										<div className="grid grid-cols-2 gap-3 mb-3">
											<div className="relative border border-black px-2 py-1">
												<div className="inline-flex absolute -top-[0.8rem] -left-2 justify-center items-center w-5 h-5 rounded-full border border-black bg-white">
													A
												</div>
												<div className="mb-1">
													<p className="font-bold mb-[0.5rem]">
														Owner, Lessee//Tenant, or Real Property Contractor
													</p>
													{form_fields?.boxA === "Owner" ? (
														<p className={`${nottoBeHighlighted} py-1`}>
															Durham Public Schools
														</p>
													) : (
														<p className={`bg-blue-0.500 p-1`}>
															{form_fields?.lesseeA}
														</p>
													)}
												</div>
												{form_fields?.boxA === "Owner" ? (
													<>
														<div className="mb-1">
															<p className="text-xs font-bold">Address</p>
															<p className={`${nottoBeHighlighted} py-1`}>
																2011 HAMLIN ROAD
															</p>
														</div>
														<div className="flex justify-between mb-1">
															<div className="w-[58%]">
																<p className="font-bold">City</p>
																<p className={`${nottoBeHighlighted} py-1`}>
																	Durham
																</p>
															</div>
															<div className="w-[10%]">
																<p className=" font-bold">State</p>
																<p className={`${nottoBeHighlighted} py-1`}>
																	NC
																</p>
															</div>
															<div className="w-[25%]">
																<p className="font-bold">Zipcode</p>
																<p className="bg-blue-100 p-1 ">27704</p>
															</div>
														</div>
													</>
												) : (
													<>
														<div className="mb-1">
															<p className="text-xs font-bold">Address</p>
															<p className={`${nottoBeHighlighted} py-1`}>
																{/* 2011 HAMLIN ROAD */}
																{form_fields?.companyAddressA}
															</p>
														</div>
														<div className="flex justify-between mb-1">
															<div className="w-[50%]">
																<p className=" font-bold">City</p>
																<p className={`${nottoBeHighlighted} py-1`}>
																	{form_fields?.conferenceCityA}
																</p>
															</div>
															<div className="">
																<p className=" font-bold">state</p>
																<p className={`${nottoBeHighlighted} py-1`}>
																	{form_fields?.conferenceStateA}
																</p>
															</div>
															<div className="w-[25%]">
																<p className=" font-bold">zip code</p>
																<p className={`${nottoBeHighlighted} py-1`}>
																	{form_fields?.conferenceZipCodeA}
																</p>
															</div>
														</div>
													</>
												)}
											</div>

											<div className="relative border border-black px-2 py-1">
												<div className="inline-flex absolute -top-[0.8rem] -left-2 justify-center items-center w-5 h-5 rounded-full border border-black bg-white">
													B
												</div>
												<div className="mb-1">
													<div className="flex justify-between">
														<p className=" font-bold">
															Real Property Contractor{" "}
															<em className="font-normal">
																(General Contractor or Subcontractor)
															</em>
														</p>
														<p className="text-[0.5rem] text-center mr-6">
															<em>Hired to perform</em> <br />
															<em>capital improvement</em>
														</p>
													</div>
													<p className={`${nottoBeHighlighted} py-1`}>
														{" "}
														{form_fields?.userType === "Single Use" ||
														form_fields?.userType === "Both"
															? form_fields.lesseeB
															: ""}
													</p>
												</div>
												<div className="mb-1">
													<p className="text-xs font-bold">Address</p>
													<p className={`${nottoBeHighlighted} py-1`}>
														{" "}
														{form_fields?.userType === "Single Use" ||
														form_fields?.userType === "Both"
															? form_fields?.companyAddressB
															: ""}
													</p>
												</div>
												<div className="flex justify-between mb-1">
													<div className="w-[58%]">
														<p className=" font-bold">City</p>
														<p className={`${nottoBeHighlighted} py-1`}>
															{" "}
															{form_fields?.userType === "Single Use" ||
															form_fields?.userType === "Both"
																? form_fields?.conferenceCityB
																: ""}
														</p>
													</div>
													<div className="">
														<p className="text-xs font-bold">State</p>
														<p className={`${nottoBeHighlighted} py-1`}>
															{" "}
															{form_fields?.userType === "Single Use" ||
															form_fields?.userType === "Both"
																? form_fields?.conferenceStateB
																: ""}
														</p>
													</div>
													<div className="">
														<p className=" font-bold">Zip Code</p>
														<p className={`${nottoBeHighlighted} py-1`}>
															{" "}
															{form_fields?.userType === "Single Use" ||
															form_fields?.userType === "Both"
																? form_fields?.conferenceZipCodeB
																: ""}
														</p>
													</div>
												</div>
											</div>
										</div>

										<div className="mb-3">
											<p className=" font-bold mb-0.5">
												Describe capital improvement to be performed:
											</p>
											<div className={` ${nottoBeHighlighted} p-2 h-24 `}></div>
										</div>

										<div className="mb-3">
											<p className=" font-bold">Project Name</p>
											<div className={`${nottoBeHighlighted} py-1`}>
												{projectInfo?.name}
											</div>
										</div>

										<div className="flex justify-between mb-3">
											<div className="w-[46%]">
												<p className=" font-bold">
													Project Address{" "}
													<span className="font-normal">
														(where the work is to be performed)
													</span>
												</p>
												<p className={`${nottoBeHighlighted} py-1`}>
													{projectInfo?.location}
												</p>
											</div>
											<div className="w-[25%]">
												<p className="t font-bold">City</p>
												<p className={`${nottoBeHighlighted} py-1`}>
													{projectInfo?.city}
												</p>
											</div>
											<div className="w-[10%]">
												<p className="text-xs font-bold">State</p>
												<p className={`${nottoBeHighlighted} py-1`}>
													{projectInfo?.state}
												</p>
											</div>
											<div className="w-[17%]">
												<p className="text-xs font-bold">Zip Code</p>
												<p className={`${nottoBeHighlighted} py-1`}>
													{projectInfo?.zip_code}
												</p>
											</div>
										</div>

										<div className="mb-3">
											<p className="mb-8">
												I certify that, to the best of my knowledge, this
												affidavit is accurate and complete and that the
												transaction described to be performed by the Real
												Property Contractor (General Contractor or Subcontractor
												identified in box “B”) shall be treated as a real
												property contract for a capital improvement to real
												property for sales and use tax purposes. I understand
												that if it is determined that I issued this affidavit in
												error and the transaction is subject to sales tax as a
												retail sale of repair, maintenance, and installation
												services to real property, I will be liable for payment
												of any additional taxes determined to be due.
											</p>

											<div className="flex -mb-4">
												<p>
													Signature of Authorized Person:
													______________________________Title:
													______________________________ Date:_______________
												</p>
											</div>
										</div>
									</div>

									<div>
										<p className="border-b-2 border-t-2 border-b-black border-t-black p-2 mb-2">
											<span className="font-bold">
												Section II. Blanket Use{" "}
											</span>
											<em>
												Complete this section to execute a blanket affidavit for
												capital improvements.)
											</em>
										</p>

										<div className="py-2 px-4">
											<div className="grid grid-cols-2 gap-3 mb-3">
												<div className="relative border border-black px-2 py-1">
													<div className="inline-flex absolute -top-[0.8rem] -left-2 justify-center items-center w-5 h-5 rounded-full border border-black bg-white">
														C
													</div>
													<div className="mb-1">
														<p className="text-xs font-bold mb-[0.5rem]">
															Real Property Contractor
														</p>
														<p className={`${nottoBeHighlighted} py-1`}>
															{form_fields?.userType === "Blanket Use" ||
															form_fields?.userType === "Both"
																? form_fields?.lesseeC
																: ""}
														</p>
													</div>
													<div className="mb-1">
														<p className=" font-bold">Address</p>
														<p className={`${nottoBeHighlighted} py-1`}>
															{form_fields?.userType === "Blanket Use" ||
															form_fields?.userType === "Both"
																? form_fields?.companyAddressC
																: ""}
														</p>
													</div>
													<div className="flex justify-between mb-1">
														<div className="w-[58%]">
															<p className=" font-bold">City</p>
															<p className={`${nottoBeHighlighted} py-1`}>
																{" "}
																{form_fields?.userType === "Blanket Use" ||
																form_fields?.userType === "Both"
																	? form_fields?.conferenceCityC
																	: ""}
															</p>
														</div>
														<div className="">
															<p className=" font-bold">State</p>
															<p className={`${nottoBeHighlighted} py-1`}>
																{" "}
																{form_fields?.userType === "Blanket Use" ||
																form_fields?.userType === "Both"
																	? form_fields?.conferenceStateC
																	: ""}
															</p>
														</div>
														<div className="w-[25%]">
															<p className=" font-bold">Zip Code</p>
															<p className={`${nottoBeHighlighted} py-1`}>
																{" "}
																{form_fields?.userType === "Blanket Use" ||
																form_fields?.userType === "Both"
																	? form_fields?.conferenceZipCodeC
																	: ""}
															</p>
														</div>
													</div>
												</div>

												<div className="relative border border-black px-2 py-1">
													<div className="inline-flex absolute -top-[0.8rem] -left-2 justify-center items-center w-5 h-5 rounded-full border border-black bg-white">
														D
													</div>
													<div className="mb-1">
														<div className="flex">
															<p className="text-xs font-bold">
																Real Property Contractor or Subcontractor
															</p>
															<p className="text-[0.5rem] text-center ml-12">
																<em>Hired to perform</em> <br />
																<em>capital improvement</em>
															</p>
														</div>
														<p className={`${nottoBeHighlighted} py-1`}>
															{" "}
															{form_fields?.userType === "Blanket Use" ||
															form_fields?.userType === "Both"
																? form_fields?.lesseeD
																: ""}
														</p>
													</div>
													<div className="mb-1">
														<p className=" font-bold">Address</p>
														<p className={`${nottoBeHighlighted} py-1`}>
															{form_fields?.userType === "Blanket Use" ||
															form_fields?.userType === "Both"
																? form_fields?.companyAddressD
																: ""}
														</p>
													</div>
													<div className="flex justify-between mb-1">
														<div className="w-[58%]">
															<p className=" font-bold">City</p>
															<p
																className={`${nottoBeHighlighted} py-1 h-[32px]`}>
																{form_fields?.userType === "Blanket Use" ||
																form_fields?.userType === "Both"
																	? form_fields?.conferenceCityD
																	: ""}
															</p>
														</div>
														<div className="">
															<p className=" font-bold">State</p>
															<p className={`${nottoBeHighlighted} py-1`}>
																{" "}
																{form_fields?.userType === "Blanket Use" ||
																form_fields?.userType === "Both"
																	? form_fields?.conferenceStateD
																	: ""}
															</p>
														</div>
														<div className="w-[25%]">
															<p className=" font-bold">Zip Code</p>
															<p className={`${nottoBeHighlighted} py-1`}>
																{" "}
																{form_fields?.userType === "Blanket Use" ||
																form_fields?.userType === "Both"
																	? form_fields?.conferenceZipCodeD
																	: ""}
															</p>
														</div>
													</div>
												</div>
											</div>

											<div className="mb-3">
												<p className="font-bold  mb-2">
													To be completed by the Real Property Contractor
													identified in Box C.
												</p>
												<p className="mb-6 ">
													I certify that I am a Real Property Contractor who
													performs capital improvements to real property and all
													transactions with the real property contractor
													(subcontractor) identified in box “D” shall be treated
													as real property contracts for capital improvements to
													real property for sales and use tax purposes. I
													understand that if it is determined that I issued this
													affidavit in error and the transaction is subject to
													sales tax as a retail sale of repair, maintenance, and
													installation services to real property, I will be
													liable for payment of any additional taxes determined
													to be due.
												</p>

												<div className="flex -mb-4">
													<p>
														Signature of Authorized Person:
														____________________________________Title:
														________________________ Date:_______________
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className=" mt-[1in] pt-3">
									<div className="flex justify-between items-center mt-10 mb-6">
										<div className="text-sm text-center leading-[1.1]">
											<p className="font-bold text-[9pt]">Page 2</p>
											<p className="text-[8pt]">E-589CI</p>
											<p className="text-[8pt]">Web-Fill</p>
											<p className="text-[8pt]">7-18</p>
										</div>
										<div className="font-bold text-[12pt]">
											Affidavit of Capital Improvement Instructions
										</div>
										<p></p>
									</div>

									<p className="text-justify mb-3">
										Form E-589CI, Affidavit of Capital Improvement, may be
										issued to substantiate that a contract, or a portion of work
										performed to fulfill a contract, is a capital improvement to
										real property and subject to sales and use tax as a real
										property contract. Generally, services to real property are
										retail sales of or the gross receipts derived from repair,
										maintenance, and installation services, unless a person
										substantiates that a transaction is subject to tax as a real
										property contract, subject to tax as a mixed transaction
										contract, or the transaction is not subject to sales and use
										tax. A “real property contract” is a contract between a real
										property contractor and another person to perform a capital
										improvement to real property.{" "}
									</p>

									<p className="text-justify mb-3">
										A mixed transaction contract is a contract that includes
										both a real property contract for a capital improvement and
										repair, maintenance, and installation services for real
										property that are not related to the capital improvement.
										For a mixed transaction contract, if the allocated sales
										price of the taxable repair, maintenance, and installation
										services included in the contract{" "}
										<span className="underline">
											is less than or equal to twenty-five percent (25%)
										</span>{" "}
										of the contract price, then the repair, maintenance, and
										installation services portion of the contract, and the
										tangible personal property, digital property, or service
										used to perform those services, are taxable as a real
										property contract for sales and use tax purposes.
									</p>

									<div className="mb-3">
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												A person that issues Form E-589CI is liable for any
												additional tax due on the transaction in excess of tax
												paid on purchases pursuant to N.C. Gen. Stat. § 105-
												164.4H(a), if it is determined that the transaction is
												not a capital improvement, but rather the transaction is
												subject to tax as a retail sale.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												A person who receives Form E-589CI from another person,
												absent fraud or other egregious activities, is not
												liable for any additional tax on the gross receipts from
												the transaction if it is determined that the transaction
												is not a capital improvement.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Form E-589CI{" "}
												<strong>is not an affidavit of tax paid</strong> on
												tangible personal property, or digital property
												purchased or used to fulfill a real property contract.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Form E-589CI may not to be used to purchase tangible
												personal property, or digital property exempt from sales
												and use tax.
											</p>
										</div>
									</div>

									<p className="mb-3 text-justify">
										<strong className="underline">
											Exceptions from the Issuance of Form E-589CI to Establish
											a Transaction is to be Taxed as a Real Property Contract
										</strong>{" "}
										<br /> In lieu of issuing an affidavit of capital
										improvement, a person may substantiate by other records that
										a transaction is a real property contract or a mixed
										transaction contract subject to tax as a real property
										contract, as discussed above, for a capital improvement to
										real property. However, where subcontractors are involved,
										it may be in the best interest of all parties to use Form
										E-589CI to ensure proper application of the sales and use
										tax laws.
									</p>
									<p className="mb-3 text-justify">
										<strong className="underline">
											Section I. Single Use Instructions
										</strong>{" "}
										<br /> A person may complete “Section I - Single Use” for a
										one time use to substantiate that a transaction is a real
										property contract for a single capital improvement to real
										property and subject to sales and use tax as a real property
										contract. When a real property contractor hires a
										subcontractor to perform a portion of the overall real
										property contract and there is not a recurring business
										relationship between the two parties (when a period of no
										more than twelve months elapse between transactions between
										two parties), “Section I – Single Use” may be completed and
										the form issued to the subcontractor as notice that the
										transaction is subject to sales and use tax as a real
										property contract.
									</p>

									<p className="text-justify mb-3">
										The following scenarios are for reference to assist a person
										to complete and issue Form E-589CI. The scenarios presented
										are not intended to cover all possible uses of the form.
									</p>

									<p className="text-justify mb-3">
										A <span className="underline">property owner</span> oversees
										the entire activity to real property that is a real property
										contract for a capital improvement to real property. The
										property owner hires various{" "}
										<span className="underline">subcontractors</span>
										to complete the real property contract or portions thereof:
									</p>

									<div className="mb-3">
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>
													Box A - Owner, Lessee/Tenant or Real Property
													Contractor:
												</strong>{" "}
												Enter property owner’s name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>Box B - Real Property Contractor</strong>{" "}
												<em> (General Contractor or Subcontractor): </em>
												Enter a single subcontractor’s name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Owner listed in Box A must describe the real property
												contract activity to be performed.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Owner listed in Box A must enter the project address (if
												different than the address entered in Box A).
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Authorized Person (owner) signs, enters title (owner),
												enters the date, and issues to the person listed in Box
												B.
											</p>
										</div>
									</div>

									<p className="text-justify mb-3">
										A property owner hires a{" "}
										<span className="underline">general contractor</span> to
										oversee the entire activity to real property that is a real
										property contract for a capital improvement to real
										property. The general contractor hires a{" "}
										<span className="underline">subcontractor</span> to perform
										the real property contract, or portion thereof:
									</p>

									<div className="mb-3">
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>
													Box A - Owner, Lessee/Tenant or Real Property
													Contractor:
												</strong>{" "}
												Enter general contractor's name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>Box B - Real Property Contractor</strong>{" "}
												<em> (General Contractor or Subcontractor): </em>
												Enter subcontractor’s name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												General contractor listed in Box A must describe the
												real property contract activity to be performed.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												General contractor listed in Box A must enter the
												project address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Authorized Person (general contractor) signs, enters
												title (general contractor), enters the date, and issues
												to the person listed in Box B.
											</p>
										</div>
									</div>

									<p className="text-justify mb-3">
										A <span className="underline">lessee/tenant</span> hires a{" "}
										<span className="underline">general contractor</span> for
										the installation of equipment that is to be attached to real
										property and will be depreciated under the Internal Revenue
										Code:
									</p>

									<div className="mb-3">
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>
													Box A - Owner, Lessee/Tenant or Real Property
													Contractor:
												</strong>{" "}
												Enter lessee/tenant's name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>Box B - Real Property Contractor</strong>{" "}
												<em> (General Contractor or Subcontractor): </em>
												Enter general contractor's name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Lessee or tenant listed in Box A must describe the
												capital improvement to be performed and indicate the
												equipment will be depreciated under the Internal Revenue
												Code.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Authorized Person (typically lessee or tenant) signs,
												enters title (lessee or tenant), enters the date, and
												issues to the person listed in Box B.
											</p>
										</div>
									</div>

									<p className="mb-3 text-justify">
										<strong className="underline">
											Section II. Blanket Use Instructions
										</strong>{" "}
										<br /> A real property contractor may complete “Section II –
										Blanket Use” and issue the form to another real property
										contractor (subcontractor) who is used exclusively to
										perform part, or all, of real property contracts with
										respect to capital improvements to real properties, where
										the parties have a recurring business relationship (when a
										period of no more than twelve months elapse between
										transactions between two parties). A blanket use affidavit
										continues in force so long as the real property contractor
										named in “Box C” and the real property contractor
										(subcontractor) named in ”Box D” maintain a recurring
										business relationship or until the affidavit is withdrawn or
										otherwise notified by the issuer of the form.
									</p>

									<p className="text-justify mb-3">
										The blanket use will generally apply for the following: (1)
										a builder who hires the same contractor(s) only for new
										construction; (2) a real property contractor who hires the
										same subcontractor(s) only for reconstruction; (3) a real
										property contractor who hires the same subcontractor(s) for
										remodeling or renovation and the activities performed by the
										subcontractor(s) for the other party are never repair,
										maintenance, and installation services for real property
										based on the contract or agreement between the parties; and
										(4) a real property contractor who exclusively hires the
										same subcontractor(s) to perform part, or all, of its real
										property contracts for capital improvements to real
										properties.
									</p>

									<p className="text-justify mb-3">
										A <span className="underline">general contractor</span> or{" "}
										<span className="underline">subcontractor</span> hires a
										subcontractor that will replace the complete electrical
										wiring in all renovated homes:
									</p>

									<div className="mb-3">
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>Box C - Real Property Contractor:</strong> Enter
												the hiring real property contractor’s name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												<strong>Box D - Real Property Contractor</strong>{" "}
												<em> (General Contractor or Subcontractor): </em>
												Enter the hired subcontractor's name and address.
											</p>
										</div>
										<div className="flex">
											<p>•</p>
											<p className="ml-4">
												Authorized person listed in Box C signs, enters title,
												enters the date, and issues to the person listed in Box
												D.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevChoiceStep(1))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
							onClick={() => {
								dispatch(showDownload());
								setHighlighed(true);
								// setShow(true);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Affidavit;
