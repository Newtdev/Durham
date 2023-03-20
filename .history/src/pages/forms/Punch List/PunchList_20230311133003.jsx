import { useRef } from "react";
import { ButtonWhiteBG, ModalOverlay } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import {
	closeDownload,
	closeModal,
	modal,
	openDownload,
	showDownload,
} from "../reducer";
import DownLoadForm from "../Lundsford/Download";
import { punchList } from "../../../shared-component/slug";

const PunchList = ({ id }) => {
	const dispatch = useDispatch();
	const showModal = useSelector(modal);
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const props = {
		component: downloadComponent,
		name: "PUNCH LIST AND SUBSTANTIAL COMPLETION PROCESS",
		show: show ? "block" : "hidden",
		close: closeDownload,
	};
	return (
		<div>
			<ModalOverlay show={id === punchList && showModal}>
				<div>
					<DownLoadForm {...props} />

					{/* Modal content */}
					<div
						className={`${
							!show ? "block" : "hidden"
						} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
						{/* Header */}
						<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
							<div className="ml-6">
								<h3 className="text-lg font-bold text-gray-900">
									PUNCH LIST AND SUBSTANTIAL COMPLETION PROCESS
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
								className="bg-white mx-[0.8in] my-[0.5in] calibri-font text-[15.5px] text-black leading-[1.3]"
								ref={downloadComponent}>
								<div>
									<h1 className="text-center mb-10 mt-4 text-[23px]">
										PUNCH LIST AND SUBSTANTIAL COMPLETION PROCESS
									</h1>

									<p className="mb-4">
										As projects / portions of projects are racing to finish
										there are two critical documents for us:
									</p>
									<p className="mb-4">
										A{" "}
										<span className="underline underline-offset-2">
											punch list
										</span>{" "}
										inspection MUST be done by the Designer of Record to
										establish{" "}
										<span className="underline underline-offset-2">
											Substantial Completion
										</span>{" "}
										for the work. Where we have multi-phased projects, there
										will be multiple certificates. We must work to minimize the
										amount of SC certs issued. The SC date is often established
										by the Punch List inspection.
									</p>
									<p className="mb-4">Some things to remember:</p>
									<div className="ml-5 mb-4">
										<div className="flex">
											<p>1.</p>
											<p className="ml-3">
												The designer should schedule the Punch List inspection
												at the request of the Contractor. In your meetings, you
												need to monitor this date as it is critical path to
												finishing the work
											</p>
										</div>
										<div className="flex">
											<p>2.</p>
											<p className="ml-3">
												Punch list needs to be done prior to any owner directed
												activity such as furniture move in etc. If we start such
												an effort in advance of Substantial Completion, it will
												muddy the water regarding completion etc.
											</p>
										</div>
										<div className="flex">
											<p>3.</p>
											<p className="ml-3">
												The punch list will sometimes be multiple lists and may
												include walk through by both the architect and multiple
												consultants.
											</p>
										</div>
										<div className="flex">
											<p>4.</p>
											<p className="ml-3">
												Typically, the CO or TCO has been obtained prior to the
												punch walk through. These MUST be obtained (along with
												any other jurisdictional sign off) prior to issuance of
												a Substantial Completion Certificate.
											</p>
										</div>
										<div className="flex">
											<p>5.</p>
											<p className="ml-3">
												The Designer of Record issues the Certificate of
												Substantial Completion. A copy of all Punch Lists and
												supporting agency sign offs should be attached.
											</p>
										</div>
										<div className="flex">
											<p>6.</p>
											<p className="ml-3">
												Unless agreed in advance, work that is incomplete is not
												ready to punch or establish Substantial Completion.
												Allowing incomplete work to slide creates risk for us
												and should not be allowed.
											</p>
										</div>
										<div className="flex">
											<p>7.</p>
											<p className="ml-3">
												In the case where work will be allowed to be completed
												later, it must clearly be articulated under the “Project
												or Portion…” part of the form. You can attach diagrams
												if needed.
											</p>
										</div>
										<div className="flex">
											<p>8.</p>
											<div className="ml-3">
												<p>
													Substantial Completion date establishes several
													things:
												</p>
												<div className="flex ml-5">
													<p>a.</p>
													<p className="ml-3">
														1) It is the warranty start date for all work
														included under its issuance (make sure it matches in
														the Closeout Documents you receive) ;
													</p>
												</div>
												<div className="flex ml-5">
													<p>b.</p>
													<p className="ml-3">
														2) the date the Owner’s insurance regains
														possession;
													</p>
												</div>
												<div className="flex ml-5">
													<p>c.</p>
													<p className="ml-3">
														3) it stops the Contract Time as related to contract
														completion and any consideration of Liquidated
														Damages;
													</p>
												</div>
												<div className="flex ml-5">
													<p>d.</p>
													<p className="ml-3">
														4) The date in which utility costs are turned back
														over for owner payment
													</p>
												</div>
											</div>
										</div>
										<div className="flex">
											<p>9.</p>
											<p className="ml-3">
												For contracts where we have no designer of record, the
												PM and ED will work together to establish a punch list
												and issue the SC for that work.
											</p>
										</div>
									</div>
									<p className="mb-4">
										Attached is the DPS Substantial Completion Certificate for
										you to give your designers to use. Please make sure they use
										our certificate.
									</p>
									<p className="mb-2">
										Again as things are wrapping up rapidly, make sure the
										designers are making time / doing their Punch List
										inspections and establishing SC dates that are actually when
										they are ready for our acceptance. This is not optional.
									</p>
								</div>
							</div>
						</div>

						{/* Buttons */}
						<div className="flex justify-end gap-4 pr-6 pb-4">
							{/* <ButtonWhiteBG
								width="w-[171px]"
								name="Edit document"
								onClick={() => dispatch(closeDownload())}
							/> */}
							<DashboardButton
								hidden
								name="CREATE DOCUMENT"
								type="button"
								width="w-[198px]"
								onClick={() => dispatch(showDownload())}
							/>
						</div>
					</div>
				</div>
			</ModalOverlay>
		</div>
	);
};

export default PunchList;
