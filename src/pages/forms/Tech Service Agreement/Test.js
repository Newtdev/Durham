import currency from "currency.js";
import moment from "moment";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { handleDate } from "../../../shared-component";
import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton } from "../../Dashboard/Components";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../Lundsford/Download";
import techPDF from "../../Dashboard/files/Technology/Technology Service Agreement(developerVersion).pdf";
// import { prevStep, selectForm, stepDefault } from "../Lundsford/lundsFormslice";
import jsPDF from "jspdf";

import {
	closeModal,
	fields,
	openDownload,
	savedResponse,
	showDownload,
} from "../reducer";
import { techPrevStep, techStepDefault } from "./reducer";
import { useEffect } from "react";

const doc = new jsPDF({
	// format: "a4",
	unit: "px",
	format: [595, 792, "a4"],
});

const Preview = (data) => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef(null);
	const formID = useSelector(project_document_id);
	const content = useFetchFilledFormQuery(formID);
	// const content = useSelector(savedResponse);
	const [awardee, setAwardee] = useState({});
	const form_fields = useSelector(fields);
	const [highlighted, setHighlighed] = useState(false);
	let formData = !content?.data ? [] : content?.data?.data;
	const durham_profile = formData?.durham_profile;
	const vendors = formData?.vendors;

	const props = {
		component: downloadComponent,
		name: "Technology Service Agreement",
		show: !show ? "hidden" : "block",
		stepDefault: techStepDefault,
		vendors,
		form_fields,
		// close: closeDownload
	};
	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 font-bold"
		: "bg-white";

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors?.filter((cur) => {
			return cur.role === "Contractor";
		});
		setAwardee(data);
	}, [vendors]);

	const onPrint = () => {
		// doc.fromHTML(downloadComponent);
		// doc.save("pdf");
		// doc.save(techPDF);
		// doc.setFontSize(1);
		doc.html(downloadComponent.current, {
			callback: function (doc) {
				// doc.save("techPDf.pdf");
				doc.setFontSize(1);
				doc.output("dataurlnewwindow");
			},
		});
		// console.log(a);
	};

	const vendorsData = !awardee[0] ? "" : awardee[0];
	return (
		<div>
			{/* <DownLoadForm {...props} /> */}
			<div>
				{/* Modal content */}
				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14 `}>
					{" "}
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3 ">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Technology Service Agreement
							</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal">
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
						<div
							className="bg-white mx-16 pt-8 pb-4 text-black arial-font text-[11px]"
							ref={downloadComponent}>
							<div className="text-center mb-4 font-bold">
								<h1>DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION</h1>
								<h1>TECHNOLOGY SERVICES AGREEMENT</h1>
							</div>
							<p className="text-justify mb-4">
								<span className="ml-10">
									THIS TECHNOLOGY SERVICES AGREEMENT
								</span>{" "}
								(the "Agreement") effective {/* {console.log(form_fields)} */}
								{/* <span className=''> {moment(form_fields.creationDate).format("MMMM D, YYYY ")}</span> */}
								<span className={`${nottoBeHighlighted}`}>
									{" "}
									{moment(form_fields.creationDate).format(
										"MMMM D, YYYY "
									)}{" "}
								</span>
								is made and entered into by and between the Durham Public
								Schools Board of Education at 511 Cleveland St., Durham, NC
								27701 (“DPS BOE” or “DPS” or “the Board”) and{" "}
								<span className={`${nottoBeHighlighted}`}>
									{/* {console.log(vendors[0].company_name)} */}
									{vendorsData?.company_name}
								</span>{" "}
								at{" "}
								<span className={`${nottoBeHighlighted}`}>
									{vendorsData?.street +
										", " +
										vendorsData?.city +
										", " +
										vendorsData?.state +
										", " +
										vendorsData?.zip_code}
								</span>
								. (“Contractor”).
							</p>

							<div>
								<p className="mb-2 text-center font-bold">RECITALS</p>
								<p className="mb-4">
									<span className="font-bold ml-10">WHEREAS</span>, DPS BOE is a
									local board of education working to provide public schools
									within its local school administrative unit as directed by
									law.
								</p>
								<p className="mb-2">
									<span className="font-bold ml-10">WHEREAS</span>, Contractor
									is in the business of computer technology management and
									operation services, and other related services, including
									computer network specialties.
								</p>

								<p className="mb-2">
									<span className="font-bold ml-10">WHEREAS</span>, Contractor
									desires to provide its services to DPS and DPS desires to
									obtain such services.
								</p>

								<p className="mb-2">
									<span className="font-bold ml-10">NOW, THEREFORE</span>, in
									consideration of the mutual covenants and agreements contained
									herein, and intending to be mutually bound, the parties hereby
									agree as follows:
								</p>
							</div>

							{/* Lists */}
							<div>
								<p className="mb-4 text-center font-bold">AGREEMENT</p>

								{/* 1 */}
								<div className="flex">
									<p>1.</p>
									<div className=" ml-7">
										<p>
											<span className="underline underline-offset-2">
												TERMS OF SERVICE
											</span>
											.
										</p>

										{/* Nested Letters Container */}
										<div className="mt-2">
											{/* "a" */}
											<div className="mb-2 flex">
												<span>a.</span>
												<span className="ml-3 text-justify">
													Contractor shall, in performing services under this
													Agreement, exercise the highest degree of care and
													perform such services in an expert fashion. The
													services to be performed are described in the
													Statement of Work attached hereto as Exhibit 1
													(“Statement of Work”) and incorporated herein by
													reference.
												</span>
											</div>

											{/* "b" */}
											<div className="mb-2 flex">
												<span>b.</span>
												<span className="ml-3 text-justify">
													Contractor shall maintain such supplies, equipment and
													employees as are necessary to perform of the services
													provided for herein. Contractor warrants its services
													and warrants that the contracted for services will
													perform substantially in conformance with the agreed
													upon DPS specifications. In the event any
													non-conformance cannot be corrected within seven days,
													DPS shall be entitled to a refund for services and
													expenses.
												</span>
											</div>

											{/* "c" */}
											<div className="mb-2 flex">
												<span>c.</span>
												<span className="ml-3 text-justify">
													The parties may agree to amend or modify the Statement
													of Work if documented and signed by the parties.
												</span>
											</div>

											{/* "d" */}
											<div className="">
												<div className="flex mb-1">
													<span>d.</span>
													<span className="ml-3 text-justify ">
														Contractor has obtained and shall maintain insurance
														to sufficiently protect Contractor and DPS BOE from
														any and all potential claims or damages
														{/* {/* , including but not limited to Worker’s
                              Compensation, Comprehensive General and
                              Contractual Liability Insurance in no event less
                              than the amount of $1,000,000 for each occurrence
                              with an insurer having a “Best Policyholders”
                              rating of B+ or better. DPS BOE shall be added as
                              an additional insured on the Certificate of
                              Insurance. Copies of certificates of insurance
                              shall be provided to DPS and shall include the
                              following: */}
													</span>
												</div>
												<div className="w-full flex items-center justify-center mb-4">
													<p>1</p>
												</div>

												<div>
													{/* <div className='ml-12 mb-2 flex'>
                              <span>i.</span>
                              <span className='ml-3'>
                                Name of insurance company, policy number and
                                expiration date;
                              </span>
                            </div> */}
													{/* <div className='ml-12 mb-2 flex'>
                              <span>ii.</span>
                              <span className='ml-3'>
                                The coverage required and the limits on each,
                                including the amount of deductibles or
                                self-insured retentions (which shall be for the
                                account of the Contractor);
                              </span>
                            </div> */}
													{/* <div className='ml-12 mb-2 flex'>
                              <span>iii.</span>
                              <span className='ml-3'>
                                A statement indicating that DPS BOE shall
                                receive thirty (30) days’ notice of cancellation
                                or significant modification of any of the
                                policies which may affect DPS BOE’s interest;
                                and
                              </span>
                            </div> */}
													{/* <div className='ml-12 mb-2 flex'>
                              <span>iv.</span>
                              <span className='ml-3'>
                                A statement confirming that DPS BOE has been
                                added as an additional insured (except for
                                Workers’ Compensation) on all policies.
                              </span>
                            </div> */}
												</div>
											</div>

											{/* <div className='mb-2 flex'>
                          <span>e.</span>
                          <span className='ml-3 text-justify'>
                            Contractor is a corporation duly organized, validly
                            existing and in good standing under the laws of the
                            State of California.
                          </span>
                        </div> */}

											{/* <div className='mb-2 flex'>
                          <span>f.</span>
                          <span className='ml-3 text-justify'>
                            Each party has all necessary corporate power and
                            authority to enter into and perform this Agreement.
                          </span>
                        </div> */}

											<div className="mb-2">
												{/* <div className='flex mb-2'>
                            <span>g.</span>
                            <span className='ml-3 text-justify'>
                              Each party owns and shall retain all right, title
                              and interest in and to any and all Intellectual
                              Property (as defined below) of such party
                              originated or developed by such party prior to the
                              effective date of this Agreement, or independently
                              developed materials or works of authorship and
                              Intellectual Property embodied therein
                              (collectively, “Proprietary IP”), as well as any
                              derivative works, enhancements or modifications to
                              such Proprietary IP (regardless of whether created
                              by such party), subject to any licenses provided
                              by one party to the other in this Agreement.
                            </span>
                          </div> */}

												{/* <div>
                            <div className='ml-12 mb-2 flex'>
                              <span>i.</span>
                              <span className='ml-3'>
                                To the extent DPS needs to utilize any
                                Proprietary IP of Contractor to fully utilize
                                the services delivered, Contractor shall
                                continue to own all right, title and interest in
                                such Proprietary IP, and Contractor hereby
                                grants to DPS BOE a non-exclusive and
                                non-transferable license (including the right to
                                grant sublicenses) to use such Proprietary IP,
                                which license will run concurrently with the
                                license granted to DPS BOE herein with respect
                                to the services. “Intellectual Property Rights”
                                shall mean all patent rights, copyrights,
                                trademarks, trade secrets, trade dress rights
                                and other proprietary rights in any
                                jurisdiction, and all applications and
                                registrations therefore.
                              </span>
                            </div>
                          </div> */}
											</div>

											{/* <div className='mb-2 flex'>
                          <span>h.</span>
                          <span className='ml-3 text-justify'>
                          {/* Contractor expressly agrees and acknowledges that
                            all original materials developed by Contractor in
                            connection with Contractor’s work for DPS, including
                            but not limited to computer programs, listings,
                            designs, specifications, flow charts and other
                          documentation, are to be
                            considered
                          “work made for
                            hire” under the United States copyright laws as the
                            same may be amended from time to time, and are and
                            shall be the sole and exclusive property of DPS BOE.
                            To the extent (if any) that, notwithstanding the
                            foregoing, Contractor retains such rights,
                            Contractor shall and does hereby assign exclusively
                            and irrevocably to DPS BOE the copyright in said
                            materials and all rights there under, including but
                            not limited to all rights to reproduce the work in
                            copies, to prepare derivative works based thereupon,
                            and to distribute copies of the work by sale or
                            other transfer, and all rights to authorize others
                            to do so. Contractor represents and warrants that
                            all materials delivered to DPS BOE shall be original
                            work of Contractor (and its employees, if any), and
                            not of any independent contractor. Contractor agrees
                            during its work for DPS BOE and thereafter to
                            execute any documents and papers and to render to
                            DPS BOE or its designee all assistance reasonably
                            necessary to establish, perfect, or preserve such
                            rights. To the extent any Proprietary IP of
                            Contractor is contained in such works, Contractor
                            grants to DPS BOE or its designee the rights noted
                            in subparagraph j above.
                          </span>
                        </div>

                        {/* "i." */}
											{/* <div className='mb-2 flex'>
                          <span>i.</span>
                          <span className='ml-3 text-justify'>
                            Contractor agrees that no license or right is
                            granted by DPS BOE to Contractor, either expressly
                            or by implication, estoppel or otherwise to publish
                            or reproduce, prepare derivative works based upon,
                            distribute copies of, publicly display, or perform
                            any of the works described in the preceding
                            paragraph, except pre-existing materials of
                            Contractor, either during or after the term of this
                            Agreement.
                          </span>
                        </div>  */}

											{/* "j." */}
											{/* <div className='mb-2 flex'>
                          <span>j.</span>
                          <span className='ml-3 text-justify'>
                            Notwithstanding anything to the contrary herein,
                            Contractor and its personnel shall be free to use
                            and employ its and their general skills, know-how,
                            and expertise, and to use, disclose, and employ and
                            generalized ideas, concepts, know-how, methods,
                            techniques, or skills gained or learned during the
                            course of any assignment, so long as it or they
                            acquire and apply such information without the use
                            or disclosure of any Proprietary IP of DPS BOE.
                          </span>
                        </div> */}

											{/* "k." */}
											{/* <div className='mb-2 flex'>
                          <span>k.</span>
                          <span className='ml-3 text-justify'>
                            Contractor agrees to communicate to DPS every
                            Invention conceived, completed, or reduced to
                            practice during the course of Contractor’s work for
                            DPS which is (i) related to the Statement of Work;
                            or (ii) results from any work performed by
                            Contractor using any equipment, facilities,
                            materials, information or personnel of DPS BOE; or
                            (iii) results from or are suggested by any work
                            performed for or on behalf of DPS BOE. “Invention”
                            refers without limitation to any idea, design,
                            concept, technique, discovery or improvement,
                            whether patentable or not, including, but not
                            limited to hardware, and apparatus, processes and
                            methods, formulas, computer programs and techniques,
                            as well as improvements thereof and knowledge
                            related thereto.
                          </span>
                        </div> */}

											{/* "l." */}
											<div className="mb-2 flex">
												{/* <span>l.</span> */}
												<span className="ml-3 text-justify mt-6">
													foreign country. During Contractor’s work with DPS and
													thereafter, Contractor agrees to execute any patent
													documents or papers relating to such developments as
													well as any documents and papers DPS BOE may consider
													necessary or helpful in obtaining or maintaining said
													patents during the prosecution of patent applications
													thereon or the conduct of any litigation or other
													proceeding in connection therewith. All expenses
													incident to such applications, litigation or
													proceedings shall be the sole responsibility of DPS.
												</span>
											</div>

											{/* "m." */}
											<div className="mb-2 flex">
												<span>m.</span>
												<span className="ml-3 text-justify">
													Contractor understands that DPS does not wish to
													receive from Contractor any information which may be
													considered confidential or proprietary to Contractor
													or any third party. Contractor represents and warrants
													that any information disclosed or provided by
													Contractor to DPS is not confidential or proprietary
													to Contractor or to any third party.
												</span>
											</div>

											{/* "n." */}
											<div className="mb-1 flex">
												<span>n.</span>
												<span className="ml-3 text-justify">
													Each party warrants to the other that it has good and
													marketable title to all of the inventions,
													information, material, work, or product made, created,
													conceived, written, invented, or provided by the party
													pursuant to the provisions of this Agreement
													(“Product”). Each party further warrants to the other
													that the Product shall be free and clear of all liens,
													claims, encumbrances, or demands of third parties,
													including any claims by any such third parties of any
													right, title, or interest in or to the product arising
													out of any trade secret, copyright, or patent.
												</span>
											</div>

											{/* "o." */}
											<div className="mb-1 flex">
												<span>o.</span>
												<span className="ml-3 text-justify">
													Should DPS permit Contractor to use any DPS equipment,
													tools or facilities during the term of this Agreement,
													such permission will be gratuitous, and Contractor
													shall indemnify and hold harmless DPS BOE and its
													officers, directors, agents, and employees from and
													against any claim, loss, expense, or judgment for
													injury to person or property (including death) arising
													out of the use of any such equipment, tools, or
													facilities, whether or not such claim is based upon
													the condition or on the alleged negligence of DPS BOE
													in permitting its use.
												</span>
											</div>

											{/* "p." */}
											<div className="mb-1 flex">
												<span>p.</span>
												<span className="ml-3 text-justify">
													Contractor shall keep accurate records and books of
													account showing all charges, disbursements or expenses
													made or incurred by Contractor in the performance of
													the services herein. DPS’s internal or outside auditor
													shall have the right, upon reasonable notice, to audit
													during business hours, the direct costs, compensation,
													expenses, and disbursements made or incurred in
													connection with the services to be performed herein,
													and may examine Contractor’s books and records
													relating to these several areas.
												</span>
											</div>
										</div>
									</div>
								</div>

								{/* 2 */}
								<div className="flex mb-1">
									<p>2.</p>
									<div className=" ml-7">
										<p className="text-justify">
											<span className="underline underline-offset-2">
												PAYMENT OF FEES
											</span>
											.{" "}
											<span className="ml-1">
												{" "}
												DPS BOE agrees to pay to Contractor invoiced amounts to
												accomplish the services required under this Agreement.
												Such invoiced amounts shall not exceed{" "}
												<span className="font-bold">
													[
													<span className={`${nottoBeHighlighted}`}>
														{currency(form_fields.amount).format()}
													</span>
													]
												</span>{" "}
												for the period of this contract without prior written
												consent of the parties. Invoiced amounts shall
												accurately reflect the work performed through the date
												of the invoice and will be paid within thirty (30) days
												of receipt and approval of Contractor’s invoice.
											</span>
										</p>
									</div>
								</div>

								{/* 3 */}
								<div className="flex mb-1">
									<p>3.</p>
									<div className=" ml-7">
										<p className="text-justify">
											<span className="underline underline-offset-2">TERM</span>
											.{" "}
											<span className="ml-1">
												{" "}
												This Agreement shall be for the time period between{" "}
												{/* <span className=''>{handleDate(form_fields.startDate
                        )}</span> and{" "} */}
												<span className={`${nottoBeHighlighted}`}>
													{moment(form_fields.startDate).format(
														"MMMM D, YYYY "
													)}
												</span>{" "}
												and{" "}
												<span className={`${nottoBeHighlighted}`}>
													{moment(form_fields.endDate).format("MMMM D, YYYY ")}{" "}
												</span>
												unless terminated earlier as provided herein. The
												{/* parties may
                          renew this Agreement only by separate written
                          agreement or addendum hereto, which must be executed
                          by both parties. */}
											</span>
										</p>
									</div>
								</div>
								<div className="w-full  flex items-center justify-center mt-1 mb-6">
									<p>4</p>
								</div>

								{/* 4 */}
								<div className="flex mb-2">
									{/* <p>4.</p> */}
									<div className=" ml-7">
										{/* <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          DPS’s COVENANTS
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          DPS covenants and agrees to be responsible for the
                          following:
                        </span>
                      </p> */}

										{/* Nested Letters Container */}
										<div className="mt-2">
											{/* "a" */}
											{/* <div className='mb-2 flex'>
                          <span>a.</span>
                          <span className='ml-3 text-justify'>
                            DPS shall grant access to equipment as needed
                            according to the prior notice and prescribed
                            schedule established by Contractor with the approval
                            of DPS.
                          </span>
                        </div> */}
											{/* "b" */}
											{/* <div className='mb-2 flex'>
                          <span>b.</span>
                          <span className='ml-3 text-justify'>
                            DPS reserves the right to exercise prior approval of
                            scheduled services.
                          </span>
                        </div> */}
											{/* "c" */}
											{/* <div className='mb-2 flex'>
                          <span>c.</span>
                          <span className='ml-3 text-justify'>
                            DPS shall have the right to request written reports
                            at any time during the performance of this Agreement
                            which shall be furnished within a reasonable time
                            after such request, in the manner directed,
                            describing progress, status of costs, data, and
                            other matters pertaining to the services rendered,
                            at no additional cost to DPS.
                          </span>
                        </div> */}
										</div>
									</div>
								</div>

								{/* 5 */}
								{/* <div className='flex mb-2'>
                    <p>5.</p>
                    <div className=' ml-7'>
                      <div className='text-justify'>
                        <span className='underline underline-offset-2'>
                          IDEMNIFICATION
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          Contractor shall indemnify, defend and save harmless
                          DPS against any and all claims, actions, demands,
                          costs, damages, loss or expense of any kind
                          whatsoever, in whole or part, resulting from or
                          connected with any negligent act or omission or
                          willful misconduct under this Agreement by Contractor,
                          its agents and/or employees, including but not limited
                          to court costs and attorney's fees incurred by DPS in
                          connection with the defense of said matters. The
                          parties agree that this indemnification clause is an
                          “evidence of indebtedness” for purpose of N. C. Gen.
                          Stat. § 6-21.2.
                        </span>
                        <p className='mt-2'>
                          DPS shall indemnify, defend and save harmless
                          Contractor against any and all claims, actions,
                          demands, costs, damages, loss or expense of any kind
                          whatsoever, in whole or part, resulting from or
                          connected with any negligent act or omission or
                          willful misconduct under this Agreement by DPS, and
                          its employees. However, nothing in this section,
                          entire agreement, or statement of work shall be
                          construed to waive any defense of governmental
                          immunity or sovereign immunity or any other immunity
                          which might otherwise be available to the DPS Board.
                          This indemnification provision shall not waive any
                          statutory, governmental, or other immunity applicable
                          to DPS, including without limitation N.C.G.S.
                          115C-524.
                        </p>
                      </div>
                    </div>
                  </div> */}

								{/* 6 */}
								{/* <div className='flex mb-2'>
                    <p>6.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          EVENTS OF DEFAULT
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          This paragraph shall not limit the Board’s right to
                          terminate this Agreement as provided in the foregoing
                          sections of this Agreement. The occurrence of any one
                          of the following events shall constitute an event of
                          default allowing either party to terminate this
                          Agreement upon fifteen (15) days written notice to the
                          other party:
                        </span>
                      </p>

                      <div className='mt-2'>
                        <div className='mb-2 flex'>
                          <span>a.</span>
                          <span className='ml-3 text-justify'>
                            A party's failure to provide payment or services
                            required under this Agreement or a party's material
                            breach of its obligations under this Agreement and a
                            failure to cure such failure or breach within
                            fifteen (15) days after written notification of such
                            failure or breach.
                          </span>
                        </div>
                        <div className='mb-2 flex'>
                          <span>b.</span>
                          <span className='ml-3 text-justify'>
                            A party's purported unauthorized transfer or
                            assignment of this Agreement or any rights or
                            obligations under this Agreement.
                          </span>
                        </div>
                        <div className='mb-2 flex'>
                          <span>c.</span>
                          <span className='ml-3 text-justify'>
                            A party or any agent or employee of that party
                            commits, during the course of performance of any
                            activity for or on behalf of the other party, any
                            act punishable by fine or imprisonment under state
                            or federal law.
                          </span>
                        </div>

                        <div className='mb-2 flex'>
                          <span>d.</span>
                          <span className='ml-3 text-justify'>
                            A party or any agent or employee of that party
                            commits an act or omission, in the course of its
                            performance hereunder, that endangers or threatens
                            the health and safety of others.
                          </span>
                        </div>

                        <div className='mb-2 flex'>
                          <span>e.</span>
                          <span className='ml-3 text-justify'>
                            A party or any agent or employee of that party
                            commits an act of fraud, defalcation, or dishonesty,
                            or any act or omission or series of acts or
                            omissions which singly or together constitute an
                            unfair or deceptive act or practice.
                          </span>
                        </div>

                        <div className='mb-2 flex'>
                          <span>f.</span>
                          <span className='ml-3 text-justify'>
                            Any discovery that any material representation by a
                            party is materially misleading or inaccurate, or a
                            party's failure to perform any material covenant,
                            obligation, term or condition contained in this
                            Agreement.
                          </span>
                        </div>

                        <div className='mb-2 flex'>
                          <span>g.</span>
                          <span className='ml-3 text-justify'>
                            A party's cessation of doing business as a going
                            concern, assignment for the benefit of creditor's,
                            admission in writing of its inability to pay debts
                            as they become due, filing of a petition in
                            bankruptcy or appointment of a receiver,
                            acquiescence in the appointment of a trustee or
                            liquidator of it or any substantial part of its
                            assets or properties.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}

								{/* 7 */}
								{/* <div className='flex mb-2'>
                    <p>7.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          TERMINATION FOR CONVENIENCE
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          DPS may terminate this Contract at any time at its
                          complete discretion upon twenty (20) calendar days’
                          notice in writing from DPS to the Contractor prior to
                          the date of termination. In addition, all finished or
                          unfinished documents and other materials produced by
                          the Contractor pursuant to this contract shall, at the
                          request of DPS be turned over to it and become its
                          property. If the contract is terminated by DPS in
                          accordance with this section, DPS will pay the
                          Contractor the lesser of the hourly rate for all
                          services performed as of the effective date of
                          termination or the amount due and owing under the SOW
                          as of the effective date of termination.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 8 */}
								{/* <div className='flex mb-2'>
                    <p>8.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          RIGHTS UPON TERMINATION
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          Upon the occurrence of an event of default, the
                          non-offending party shall have the right to terminate
                          the Agreement upon fifteen (15) days written notice to
                          the other party, and seek all legal and equitable
                          remedies to which it is entitled, including but not
                          limited to refunds for amounts paid or fees owed for
                          services performed as of the effective date of
                          termination. The remedies set forth herein shall be
                          deemed cumulative and not exclusive and may be
                          exercised successively or concurrently, in addition to
                          any other remedies available to it.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 9 */}
								{/* <div className='flex mb-2'>
                    <p>9.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          COUNTERPARTS
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          This Contract may be executed in any number of
                          counterparts, each of which shall be deemed an
                          original but all of which together will constitute one
                          and the same agreement. The Parties agree that
                          scanned, faxed, and/or electronically transmitted
                          copies of this Contract will have the same validity
                          and force as an original, and that scanned, faxed, or
                          electronic signatures shall be deemed original
                          signatures for purposes of this Contract and given the
                          same legal effect as original signatures.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 10 */}
								<div className="mb-2 pt-6">
									<div className="flex mb-2">
										<p>10.</p>
										<div className=" ml-7">
											<p className="text-justify">
												<span className="underline underline-offset-2">
													NOTICE
												</span>
												.{" "}
												<span className="ml-1">
													{" "}
													Any notice, consent or other communication in
													connection with this Agreement shall be in writing,
													will reference this Agreement and may be delivered in
													person, by certified mail, return receipt requested,
													or by overnight carrier. The notice shall be effective
													upon the earlier of actual delivery or three days from
													mailing. All communications will be sent to the
													addresses set forth below or to such other address as
													may be designated by a party by giving written notice
													to the other party.
												</span>
											</p>
										</div>
									</div>

									<div className="ml-[-10px] mb-8">
										<div className="flex">
											<p>If to DPS:</p>
											<div className="ml-[90px]">
												<p className="underline underline-offset-2">
													Durham Public Schools
												</p>
												<p className="underline underline-offset-2">
													Director of Construction & Sustainability
												</p>
												<p className="underline underline-offset-2">
													Durham Public Schools
												</p>
												<p className="underline underline-offset-2">
													2011 Hamlin Road
												</p>
												<p className="underline underline-offset-2">
													Durham NC 27704
												</p>
											</div>
										</div>
									</div>

									<div className="ml-[-10px]">
										<div className="flex">
											<p>If to Contractor:</p>
											<div className="ml-14">
												<div
													className={`${nottoBeHighlighted} h-4 mb-1 underline underline-offset-2`}>
													{vendorsData?.company_name}
												</div>
												<div
													className={`${nottoBeHighlighted} h-4 mb-1 underline underline-offset-2`}>
													{/* {!vendors ? "" : !vendors[0] ? "" : vendors[0].street} */}
													{vendorsData?.street}
												</div>
												<div
													className={`${nottoBeHighlighted} underline underline-offset-2 mb-[20px]`}>
													{console.log(vendorsData)}
													{vendorsData?.street +
														", " +
														vendorsData?.city +
														", " +
														vendorsData?.state +
														", " +
														vendorsData?.zip_code}
												</div>
												{/* <div className='w-[10rem] h-4 mb-[20px] border-b border-b-black'>
                            <span className={`${nottoBeHighlighted}`}>F7</span>
                          </div> */}
											</div>
										</div>
									</div>
								</div>

								{/* 11 */}
								<div className="flex mb-2">
									<p>11.</p>
									<div className=" ml-7">
										<p className="text-justify">
											{" "}
											No publicity releases (including news releases and
											advertising) using DPS’s name or in any way referencing
											the Durham Public Schools, shall be issued by Contractor
											without the prior written approval of DPS. Any inquiry
											which Contractor may receive from news media concerning
											this Agreement will be referred to DPS for coordination
											prior to response. Any technical paper, article,
											publication, or announcement of advances generated in
											connection with the services under this Agreement, which
											references DPS’s name or in any way references the Durham
											Public Schools, during the period of performance of the
											Agreement or in the future, shall require DPS’s prior
											written approval.
										</p>
									</div>
								</div>

								{/* 12 */}
								<div className="flex mb-2">
									<p>12.</p>
									<div className=" ml-7">
										<p className="text-justify">
											<span className="underline underline-offset-2">
												NO THIRD PARTY BENEFICIARIES.
											</span>
											.{" "}
											<span className="ml-1">
												{" "}
												Nothing herein is intended or shall be construed to
												confer upon or to give to any person or entity other
												than the parties hereto and their successors or
												permitted assigns, any rights or remedies under this
												Agreement.
											</span>
										</p>
									</div>
								</div>

								{/* 13 */}
								<div className="flex mb-2">
									<p>13.</p>
									<div className=" ml-7">
										<p className="text-justify">
											<span className="underline underline-offset-2">
												SEVERABILITY
											</span>
											.{" "}
											<span className="ml-1">
												{" "}
												Unless otherwise expressly provided herein, the rights
												of the parties hereunder are several rights, not rights
												jointly held with each other or with any other party.
												Any invalidity, illegality or limitation of the
												enforceability of any part of this Agreement, whether
												arising by reason of law or otherwise, shall in no way
												affect or impair the validity, legality or
												enforceability of this Agreement in all other respects.
											</span>
										</p>
									</div>
								</div>

								{/* 14 */}
								<div className="flex mb-2">
									<p>14.</p>
									<div className=" ml-7">
										<p className="text-justify">
											<span className="underline underline-offset-2">
												FORCE MAJEURE
											</span>
											.{" "}
											<span className="ml-1">
												{" "}
												Neither party shall be liable to the other by reason of
												any failure of performance hereunder if such failure
												arises out of the acts of governmental authority, acts
												of God, acts of the public enemy, acts of civil or
												military authority, fires, unavailability of energy
												resources, riots, war, or events of similar nature. Any
												party experiencing such an event shall give as prompt
												notice as possible under the circumstances and such
												protection from liability shall last only for the
												duration of the event of such force majeure. In the
												event a school facility is damaged by fire, weather, or
												by events of a similar nature
												{/* to
                          those described in this paragraph and this
                          substantially prevents DPS's use of Contractor's
                          service, DPS shall have the option of suspending
                          payments due under the Agreement for the time period
                          use is substantially prevented or terminating the
                          Agreement immediately without penalty or further
                          expense. */}
											</span>
										</p>
									</div>
								</div>
								<div className="w-full flex items-center justify-center mt-8">
									<p>7</p>
								</div>

								{/* 15 */}
								{/* <div className='flex mb-2'>
                    <p>15.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          COUNTERPARTS
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          This Agreement may be executed in several
                          counterparts, all of which taken together, shall
                          constitute one single agreement between the parties
                          hereto.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 16 */}
								{/* <div className='flex mb-2'>
                    <p>16.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          WAIVER
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          No delay or omission by either party hereto to
                          exercise any right or power hereunder shall be
                          construed to be a waiver thereof. A waiver by either
                          of the parties hereto of any of the covenants to be
                          performed by the other or any breach thereof shall not
                          be construed to be a waiver of any succeeding breach
                          thereof or of any other covenant contained herein.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 17 */}
								{/* <div className='flex mb-2'>
                    <p>17.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          ASSIGNMENT
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          This Agreement may not be assigned without the written
                          agreement of all parties, but if the same is assigned
                          by agreement, it shall be binding on the assignee and
                          his heirs. Notwithstanding the foregoing, each party
                          shall be permitted to assign this Agreement to its
                          successor in interest in the event of a change of
                          control resulting from a merger, sale of stock or sale
                          of all or substantially all of its assets without
                          first obtaining the written consent of the other
                          party.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 18 */}
								{/* <div className='flex mb-2'>
                    <p>18.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          GOVERNING LAW
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          This Agreement and the rights and obligations of the
                          parties hereto shall be governed by and construed and
                          enforced in accordance with the laws of the State of
                          North Carolina without regard to any principles of
                          conflicts of laws that would make applicable the law
                          of any other jurisdiction. Further, the parties
                          irrevocably agree that any legal action or proceedings
                          brought by or against them with respect to this
                          Agreement or its subject matter shall be in the
                          General Court of Justice in Durham County, North
                          Carolina or in the United States District Court
                          located in Durham County, North Carolina and, by
                          execution and delivery hereof, the parties hereby
                          irrevocably submit to each such jurisdiction and
                          hereby irrevocably waive any and all objections which
                          they may have with respect to such proceedings in any
                          of the courts of North Carolina identified above.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 19 */}
								{/* <div className='flex mb-2'>
                    <p>19.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          RESTRICTED COMPANIES LISTS.
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          Provider represents that as of the date of this
                          Contract, Provider is not included on the Final
                          Divestment List created by the North Carolina State
                          Treasurer pursuant to N.C. Gen. Stat. § 147-86.58.
                          Provider also represents that as of the date of this
                          Contract, Provider is not included on the list of
                          restricted companies determined to be engaged in a
                          boycott of Israel created by the North Carolina State
                          Treasurer pursuant to N.C. Gen. Stat. § 147-86.81.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 20 */}
								{/* <div className='flex mb-2'>
                    <p>20.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          ANTI-NEPOTISM.
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          Contractor warrants that, to the best of its knowledge
                          and in the exercise of due diligence, none of its
                          corporate officers, directors, or trustees and none of
                          its employees who will directly provide services under
                          this Agreement are immediate family members of any
                          member of the Durham Public Schools Board of Education
                          or of any principal or central office staff
                          administrator employed by the Board. For purposes of
                          this provision, “immediate family” means spouse,
                          parent, child, brother, sister, grandparent, or
                          grandchild, and includes step, half, and in-law
                          relationships. Should Contractor become aware of any
                          family relationship covered by this provision or
                          should such a family relationship arise at any time
                          during the term of this Agreement, Contractor shall
                          immediately disclose the family relationship in
                          writing to the Superintendent of the Schools. Unless
                          formally waived by the Board, the existence of a
                          family relationship covered by this Agreement is
                          grounds for immediate termination by DPS without
                          further financial liability to Contractor.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 21 */}
								{/* <div className='flex mb-2'>
                    <p>21.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          BINDING
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          All provisions of this Agreement shall be binding
                          upon, and inure to the benefit of, and be enforceable
                          by and against the parties, their respective heirs,
                          representatives, successors, and assigns.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 22 */}
								{/* <div className='flex mb-2'>
                    <p>22.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          FURTHER ASSURANCES.
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          The parties hereto shall each perform such acts,
                          execute and deliver such instruments and documents,
                          and do all such other things as may be reasonably
                          necessary to accomplish the transactions contemplated
                          herein.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 23 */}
								{/* <div className='flex mb-2'>
                    <p>23.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          HEADINGS
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          The articles and section headings are for reference
                          and convenience only and shall not be considered in
                          the interpretation of this Agreement.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 24 */}
								{/* <div className='flex mb-2'>
                    <p>24.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          RECORDS AND CONFIDENTIALITY OF STUDENT INFORMATION.
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          The Contractor agrees that all student records
                          obtained in the course of providing services to DPS
                          under this Agreement shall be subject to the
                          confidentiality and disclosure provisions of
                          applicable federal and state statutes and regulations
                          and DPS BOE’s policies which are available on the DPS
                          website. All student records shall be kept in a secure
                          location preventing access by unauthorized
                          individuals. Contractor will maintain an access log
                          delineating date, time, agency, and identity of
                          individual accessing student records who is not in the
                          direct employ of the Contractor. Contractor shall not
                          forward to any person any student record, including,
                          but not limited to, the student’s identity.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 25 */}
								{/* <div className='flex mb-2'>
                    <p>25.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          LUNSFORD ACT/CRIMINAL BACKGROUND CHECKS.
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          Contractor also acknowledges that G.S. § 14-208.18
                          prohibits anyone required to register as a sex
                          offender under Article 27A of Chapter 14 of the
                          General Statutes from knowingly being on the premises
                          of any school. Contractor shall conduct or arrange to
                          have conducted, at its own expense, sexual offender
                          registry checks on each of its employees, agents,
                          ownership personnel, or contractors (“contractual
                          personnel”) who will engage in any service on or
                          delivery of goods to school system property or at a
                          school-system sponsored event, except checks shall not
                          be required for individuals who are solely delivering
                          or picking up equipment, materials, or supplies at:
                          (1) the administrative office or loading dock of a
                          school; (2) non-school sites; (3) schools closed for
                          renovation; or (4) school construction sites. The
                          checks shall include at a minimum checks of the State
                          Sex Offender and Public Protection Registration
                          Program, the State Sexually Violent Predator
                          Registration Program, and the National Sex Offender
                          Registry (“the Registries”). For Contractor’s
                          convenience only, all of the required registry checks
                          may be completed at no cost by accessing the United
                          States Department of Justice Sex Offender Public
                          Website at http://www.nsopw.gov/. Contractor shall
                          provide certification on the Sexual Offender Registry
                          Check Certification Form that the registry checks were
                          conducted on each of its contractual personnel
                          providing services or delivering goods under this
                          Agreement prior to the commencement of such services
                          or the delivery of such goods. Contractor shall
                          conduct a current initial check of the registries (a
                          check done more than 30 days prior to the date of this
                          Agreement shall not satisfy this contractual
                          obligation). In addition, Contractor agrees to conduct
                          the registry checks and provide a supplemental
                          certification form before any additional contractual
                          personnel are used to deliver goods or provide
                          services pursuant to this Agreement. Contractor
                          further agrees to conduct annual registry checks of
                          all contractual personnel and provide annual
                          certifications at each anniversary date of this
                          Agreement. Contractor shall not assign any individual
                          to deliver goods or provide services pursuant to this
                          Agreement if said individual appears on any of the
                          listed registries. Contractor agrees that it will
                          maintain all records and documents necessary to
                          demonstrate that it has conducted a thorough check of
                          the registries as to each contractual personnel, and
                          agrees to provide such records and documents to DPS
                          upon request. Contractor specifically acknowledges
                          that DPS retains the right to audit these records to
                          ensure compliance with this section at any time in
                          DPS’s sole discretion. Failure to comply with the
                          terms of this provision shall be deemed a material
                          breach of the Agreement. In addition, DPS may conduct
                          additional criminal records checks at DPS’s expense.
                          If DPS exercises this right to conduct additional
                          criminal records checks, Contractor agrees to provide
                          within seven (7) days of request the full name, date
                          of birth, state of residency for the past ten years,
                          and any additional information requested by DPS for
                          all contractual personnel who may deliver goods or
                          perform services under this Agreement. Contractor
                          further agrees that it has an ongoing obligation to
                          provide DPS with the name of any new contractual
                          personnel who may deliver goods or provide services
                          under the Agreement. DPS reserves the right to
                          prohibit any contractual personnel of Contractor from
                          delivering goods or providing services under this
                          Agreement if DPS determines, in its sole discretion,
                          that such contractual personnel may pose a threat to
                          the safety or well-being of students, school personnel
                          or others.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 26 */}
								{/* <div className='flex mb-2'>
                    <p>26.</p>
                    <div className=' ml-7'>
                      <p className='text-justify'>
                        <span className='underline underline-offset-2'>
                          RELATIONSHIP OF PARTIES
                        </span>
                        .{" "}
                        <span className='ml-1'>
                          {" "}
                          The relationship of the parties established by this
                          Agreement is solely that of independent contractors,
                          and nothing contained herein shall be construed to (i)
                          give any party the power to direct and control the
                          day-to-day activities of the other; or (ii) constitute
                          such parties as partners, joint venturers, co-owners
                          or otherwise as participants in a joint or common
                          undertaking; or (iii) make Contractor an agent of the
                          Durham Public Schools for any purpose whatsoever
                          except as otherwise agreed in writing by the parties
                          hereto.
                        </span>
                      </p>
                    </div>
                  </div> */}

								{/* 27 */}
								<div className="flex mb-2 mt-96 pt-6">
									{/* <p>27.</p> */}
									<div className=" ml-7">
										<p className="text-justify">
											{/* <span className='underline underline-offset-2'>
                          ENTIRE UNDERSTANDING
                        </span> */}{" "}
											<span className="ml-1">
												{" "}
												{/* This Agreement contains the final expression of the
                          parties' intent and the sole and entire understanding
                        between Contractor */}
												and the DPS BOE. The parties agree that any statements,
												representations, discussions, or documentation,
												(including the attached exhibits) whether made prior to
												or contemporaneously with the execution of this
												Agreement, have been merged into this Agreement and this
												Agreement fairly and comprehensively memorializes the
												final negotiated agreement between the parties. The
												Agreement shall not be modified or amended in any manner
												except in writing signed by both parties hereto.
											</span>
										</p>
									</div>
								</div>
							</div>

							{/* Page11 */}
							<div className="mt-8">
								<p className="ml-[100px] mb-8">
									IN WITNESS WHEREOF, the parties to this agreement have
									hereunder set their respective hands on the day and year first
									above written.
								</p>

								<p className="font-bold mb-3">
									DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION, BY AND THROUGH ITS{" "}
									<br />
									AUTHORIZED AGENT
								</p>

								<p className="font-bold mb-4">
									Durham Public Schools Board of Education
								</p>

								<p className="mb-5">
									<span>By:</span>
									<span className="ml-6">
										__________________________________
										{/* {!durham_profile ? '' : durham_profile.chair_board_education} */}
									</span>
								</p>
								<p className="mb-6">
									Signature__________________________________
								</p>

								<p className="mb-5">
									<span className={`${nottoBeHighlighted}`}>
										{!vendors
											? ""
											: !vendors[0]
											? ""
											: vendors[0]?.company_name}
									</span>
								</p>

								<p className="mb-5">
									<span>By:</span>
									<span className="ml-6">____________________(Seal)</span>
									<p className={`${nottoBeHighlighted} ml-12`}>
										{vendorsData?.president}
									</p>
								</p>

								<p className="mb-10">
									<span>Attest:</span>
									<span className={`${nottoBeHighlighted} ml-2`}>
										____________________(Seal)
									</span>
									<p className={`${nottoBeHighlighted} ml-12`}>
										{vendorsData?.secretary}
									</p>
								</p>

								<div className="mb-4">
									<p className="mb-0">
										This instrument has been pre-audited in the manner required
										by the School Budget and Fiscal Control Act.
									</p>
									<p className="mt-0">G.S. 115C-441(a).</p>
								</div>

								<div className="">
									<p className="-mb-2">
										{console.log(durham_profile)}
										<span className={`${nottoBeHighlighted} mr-40`}>
											{!durham_profile
												? ""
												: durham_profile.chief_financial_officer?.name}
										</span>

										<span className={`${nottoBeHighlighted}`}>
											{moment(form_fields.signedDate).format("MMMM D, YYYY ")}
										</span>
									</p>
									<span className="block ">
										_______________________________________________
									</span>
									<p className="mt-0">
										<span>Finance Officer</span>
										<span className="ml-[170px]">Date</span>
									</p>
								</div>
							</div>
							<div className="w-full flex items-center justify-center mt-8">
								<p>11</p>
							</div>
							{/* <iframe
								src={techPDF}
								title="pdf"
								width="100%"
								height="500px"></iframe>
              */}
						</div>
					</div>
					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(techPrevStep())}
						/>
						<DashboardButton
							onClick={() => {
								setHighlighed(true);
								onPrint();
								// dispatch(showDownload());
								// data.handleReset();
							}}
							hidden
							name="CREATE DOCUMENT"
							type="button"
							width="w-[198px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
