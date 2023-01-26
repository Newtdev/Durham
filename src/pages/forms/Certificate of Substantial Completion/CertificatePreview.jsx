import Logo from "../../../assets/formlogo.png";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { prev, stepDefault } from "./reducer";
import {
	closeDownload,
	closeModal,
	fields,
	openDownload,
	savedResponse,
	showDownload,
} from "../reducer";
import moment from "moment";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { doConvert } from "../../../shared-component";

const CertificatePreview = () => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const content = useFetchFilledFormQuery(formID);
	// const content = useSelector(savedResponse);
	const [highlighted, setHighlighted] = useState(false);
	// const project = content?.data?.data?.project;
	// const vendors = content?.data?.data?.vendors;
	let formData = !content?.data ? [] : content?.data?.data;
	const vendors = formData?.vendors;
	// const durham_profile = formData?.durham_profile;
	const project = formData?.project;
	const form_fields = useSelector(fields);
	const [awardee, setAwardee] = useState({ design: {}, contractor: {} });
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const props = {
		component: downloadComponent,
		name: "Certificate of Substantial Completion",
		show: show ? "block" : "hidden",
		stepDefault,
		close: closeDownload,
	};

	useEffect(() => {
		if (!vendors) {
			return;
		}
		vendors?.forEach((cur) => {
			// console.log(cur);
			if (cur.role === "Design Consultant") {
				setAwardee((prev) => {
					return { ...prev, design: cur };
				});
			} else if (cur.role === "Contractor") {
				setAwardee((prev) => {
					return { ...prev, contractor: cur };
				});

				// setAwardee({ contractor: cur });
			}
		});
	}, [vendors]);
	return (
		<div>
			<DownLoadForm {...props} />

			<div>
				{/* Modal content */}
				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Certificate of Substantial Completion
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

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%] arial-font adverstise h-[380px]">
						<div
							className="bg-white px-12 pt-8 pb-4 text-black adverstise"
							ref={downloadComponent}>
							<div>
								<div className="flex items-center mb-10 ">
									<img
										src={Logo}
										alt="logo"
										className="h-20 object-cover mb-4"
									/>

									<h1 className="font-bold text-xl ml-8">
										Certficate of Substantial Completion
									</h1>
								</div>

								<table className="w-full border border-black text-left mb-5 advertise">
									<thead className="h-[3rem]">
										<tr>
											<th className="border border-black pl-[1rem]">PROJECT</th>
											<th className="border border-black pl-[1rem]">
												PROJECT INFORMATION
											</th>
											<th className="border border-black pl-[1rem]">
												DISTRIBUTION
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												{!project ? "" : project.name}
											</td>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												Project No: {!project ? "" : project.number}, g8.1
											</td>
											<td className="border border-black pl-[1rem]">Owner</td>
										</tr>
										<tr>
											<td
												className={`${nottoBeHighlighted} border font-bold border-black pl-[1rem]`}>
												{!project ? "" : project?.location},{" "}
											</td>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												Contract for:{" "}
												{!form_fields ? "" : form_fields?.purposeOfContract}{" "}
												Construction
											</td>
											<td className="border border-black pl-[1rem]">
												Architect
											</td>
										</tr>
										<tr>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												{!project ? "" : project.city},{" "}
												{!project ? "" : project.state},{" "}
												{!project ? "" : project.zip_code}
											</td>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												Contract Date:{" "}
												{moment(form_fields?.contractEffectDate).format(
													"MMMM D, YYYY "
												)}
											</td>
											<td className="border border-black pl-[1rem] adverstise">
												Contractor
											</td>
										</tr>
										<tr>
											<td className="border border-black pl-[1rem]"></td>
											<td className="border border-black pl-[1rem]"></td>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												{!form_fields ? "" : form_fields.involvedInProject}
											</td>
										</tr>
									</tbody>
								</table>

								<table className="w-full border border-black text-left mb-4">
									<thead>
										<tr>
											<th className="border border-black pl-[1rem]">
												TO OWNER:
											</th>
											<th className="border border-black pl-[1rem]">
												TO CONTRACTOR:
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="border border-black pl-[1rem]">
												Durham Public Schools
											</td>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												{!awardee?.contractor
													? ""
													: awardee?.contractor?.company_name}
											</td>
										</tr>
										<tr>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												511 Cleveland St.,
											</td>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												{!awardee?.contractor
													? ""
													: awardee?.contractor?.street}
											</td>
										</tr>
										<tr>
											<td className="border border-black pl-[1rem]">
												{" "}
												Durham, NC 27701
											</td>
											<td
												className={`font-bold ${nottoBeHighlighted} adverstise border border-black pl-[1rem]`}>
												{!awardee?.contractor ? "" : awardee?.contractor?.city},{" "}
												{!awardee?.contractor ? "" : awardee?.contractor?.state}
												,{" "}
												{!awardee?.contractor
													? ""
													: awardee?.contractor?.zip_code}
											</td>
										</tr>
									</tbody>
								</table>

								<div>
									<p className="font-bold mb-4 adverstise">
										PROJECT OR PORTION OF THE PROJECT DETERMINED SUBSTANTIALLY
										COMPLETE:
										<br />
										<span
											className={`font-bold ${nottoBeHighlighted} adverstise`}>
											{" "}
											{!form_fields ? "" : form_fields.areasCompleted}
										</span>
									</p>

									<p className="mb-4 adverstise">
										The Work performed under this contract has been reviewed and
										found to be Substantially Complete. Substantial Completion
										is the stage in the progress of the Work when the Work (or
										designated portion thereof) is sufficiently complete in
										accordance with the Contract Documents so that the Owner can
										occupy or utilize the Work for its intended use. The date of
										Substantial Completion of the Project or portion designated
										above is the date identified below. This date is also the
										Date of Commencement of all applicable warranties required
										by the Contract Documents:
									</p>

									<p className="font-bold mb-4 adverstise">
										DATE OF SUBSTANTIAL COMPLETION:{" "}
										<span
											className={`font-bold ${nottoBeHighlighted} adverstise`}>
											{moment(form_fields?.completionDate).format(
												"MMMM D, YYYY "
											)}
										</span>
									</p>

									<p className="mb-4 adverstise">
										A punch list of items to be corrected is attached hereto.
										The failure to include items on the punch list does not
										alter the Contractor’s responsibility to complete all Work
										in accordance with the Contract Documents. Unless otherwise
										agreed to in writing, the date of commencement of warranties
										for items on the punch list will be the date of the
										Consultants Certification of the Final Payment.
									</p>

									<div className="mb-4">
										<p className="mb-0 border-b border-black py-1">
											<span
												className={`font-bold ${nottoBeHighlighted} adverstise`}>
												{!awardee?.contractor
													? ""
													: awardee?.design?.company_name}
											</span>
										</p>
										<div className="w-full flex justify-between">
											<span className="adverstise">CONSULTANT</span>
											<span className=" adverstise">
												BY:{" "}
												<span
													className={`font-bold ${nottoBeHighlighted} adverstise`}>
													{!awardee?.design
														? ""
														: awardee?.design?.first_name +
														  " " +
														  awardee?.design?.last_name}
												</span>
											</span>
											<span className="adverstise">DATE</span>
										</div>
									</div>

									<p className="mb-6 adverstise">
										The Contractor will complete all work on the attached punch
										list within{" "}
										<span
											className={`font-bold ${nottoBeHighlighted} adverstise`}>
											{doConvert(form_fields?.workCompletionDate)}(
											{!form_fields ? "" : form_fields.workCompletionDate})
										</span>{" "}
										days from the date of Substantial Completion.
									</p>

									<p className="mb-4 font-bold adverstise">
										COST ESTIMATE OF REMAINING WORK:
										<span
											className={`font-bold ${nottoBeHighlighted} adverstise`}>
											{" "}
											{currency(form_fields?.costOfWork).format()}
										</span>
									</p>

									<div className="mb-4 ">
										<p className="mb-0 border-b border-black py-1">
											<span
												className={`font-bold ${nottoBeHighlighted} adverstise`}>
												{!awardee?.contractor
													? ""
													: awardee?.contractor?.company_name}
											</span>
										</p>
										<div className="flex justify-between w-full">
											<span className="adverstise">CONTRACTOR</span>
											<span className="adverstise">
												BY:{" "}
												<span
													className={`font-bold ${nottoBeHighlighted} adverstise`}>
													{!awardee?.contractor
														? ""
														: awardee?.contractor?.first_name +
														  " " +
														  awardee?.contractor?.last_name}
												</span>
											</span>
											<span className="adverstise">DATE</span>
										</div>
									</div>

									<p className="mb-4 adverstise">
										The Owner accepts the Work or designated portion as
										Substantially Complete and will assume full possession at
										12:01 AM on the Substantial Completion date identified
										above.
									</p>

									<div className="mb-4">
										<p className="mb-0 border-b border-black flex justify-between py-1">
											<span className="adverstise">Durham Public Schools</span>

											<span className="">
												{moment(form_fields?.signedDate).format(
													"MMMM D, YYYY "
												)}
											</span>
										</p>
										<div className="w-full flex justify-between">
											<span className="adverstise">OWNER </span>
											<span className=" adverstise">
												BY:{" "}
												<span
													className={`font-bold ${nottoBeHighlighted} adverstise`}>
													{!form_fields ? "" : form_fields.owner} -{" "}
													{!form_fields ? "" : form_fields.position}
												</span>
											</span>
											<span className={`font-bold adverstise`}>DATE: </span>
										</div>
									</div>

									<p className="mb-4 adverstise">
										The responsibility of the Owner and Contractor for security,
										maintenance, heat, utilities, damage to the Work and
										insurance shall be as follows:
									</p>

									<p>
										<span
											className={`font-bold ${nottoBeHighlighted} adverstise`}>
											{!form_fields ? "" : form_fields.responsibility}
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prev(2))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="button"
							width="w-[198px]"
							onClick={() => {
								setHighlighted(true);
								dispatch(showDownload());
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CertificatePreview;
