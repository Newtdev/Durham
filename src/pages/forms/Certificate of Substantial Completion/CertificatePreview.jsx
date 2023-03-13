import LogoOne from "../../../assets/Durham.png";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { prev, stepDefault } from "./reducer";
import {
	closeDownload,
	closeModal,
	openDownload,
	showDownload,
} from "../reducer";
import moment from "moment";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";
import {
	project_document_id,
	selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { doConvert, trucateText } from "../../../shared-component";
import PageTwo from "./PageTwo";

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
	let formData = !content?.data ? [] : content?.currentData?.data;

	const vendors = formData?.vendors;
	// const durham_profile = formData?.durham_profile;
	const project = formData?.project;
	const form_fields = formData?.form_fields;
	// const form_fields = useSelector(fields);
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
			if (
				cur.role === "Design Consultant" ||
				cur.role === "Engineering Consultant"
			) {
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

	const pageProps = {
		form_fields,
		nottoBeHighlighted,
	};
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

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%] arial-font  h-[380px]">
						<div
							className=" text-black  leading-[1.3]"
							ref={downloadComponent}
							style={{ margin: "0.5in 1in", height: "10.5in" }}>
							<div>
								<div className="flex items-center mb-4 ">
									<img
										src={LogoOne}
										alt="logo"
										className="h-20 object-cover mb-4"
									/>

									<h1 className="font-extrabold -mt-9 text-[23.5px] ml-8">
										Certficate of Substantial Completion
									</h1>
								</div>

								<table className="w-full border border-black text-left mb-5 advertise">
									<thead className="h-[2rem] text-[13.5px]">
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
										<tr className="text-[12.5px]">
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem]`}>
												{!project ? "" : project.name}
											</td>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem]`}>
												<i>
													Project No: {!project ? "" : project.number}, g8.1
												</i>
											</td>
											<td className="border border-black pl-[1rem]">Owner</td>
										</tr>
										<tr>
											<td
												className={`${nottoBeHighlighted} border  border-black pl-[1rem] text-[12.5px]`}>
												<i>{!project ? "" : project?.location}, </i>
											</td>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem] text-[12.5px]`}>
												Contract for:{" "}
												<i>
													{!form_fields ? "" : form_fields?.purposeOfContract}{" "}
												</i>
											</td>
											<td className="border border-black pl-[1rem] text-[12.5px]">
												Architect
											</td>
										</tr>
										<tr>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem] text-[12.5px]`}>
												<i>
													{!project ? "" : project.city},{" "}
													{!project ? "" : project.state},{" "}
													{!project ? "" : project.zip_code}
												</i>
											</td>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem] text-[12.5px]`}>
												Contract Date:{" "}
												<i>
													{moment(form_fields?.contractEffectDate).format(
														"MMMM D, YYYY "
													)}
												</i>
											</td>
											<td className="border border-black pl-[1rem] text-[12.5px] ">
												Contractor
											</td>
										</tr>
										<tr>
											<td className="border border-black pl-[1rem]"></td>
											<td className="border border-black pl-[1rem]"></td>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem] text-[12.5px]`}>
												{!form_fields ? "" : form_fields.involvedInProject}
											</td>
										</tr>
									</tbody>
								</table>

								<table className="w-full border border-black text-left mb-4 text-[13.5px]">
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
										<tr className="text-[12.5px]">
											<td className="border border-black pl-[1rem]">
												<i>Durham Public Schools</i>
											</td>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem]`}>
												<i>
													{!awardee?.contractor
														? ""
														: awardee?.contractor?.company_name}
												</i>
											</td>
										</tr>
										<tr className="text-[12.5px]">
											<td className={`  border border-black pl-[1rem]`}>
												<i>511 Cleveland St.,</i>
											</td>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem]`}>
												<i>
													{!awardee?.contractor
														? ""
														: awardee?.contractor?.street}
												</i>
											</td>
										</tr>
										<tr className="text-[12.5px]">
											<td className="border border-black pl-[1rem]">
												{" "}
												<i>Durham, NC 27701</i>
											</td>
											<td
												className={` ${nottoBeHighlighted}  border border-black pl-[1rem]`}>
												<i>
													{!awardee?.contractor
														? ""
														: awardee?.contractor?.city}
													,{" "}
													{!awardee?.contractor
														? ""
														: awardee?.contractor?.state}
													,{" "}
													{!awardee?.contractor
														? ""
														: awardee?.contractor?.zip_code}
												</i>
											</td>
										</tr>
									</tbody>
								</table>

								<div>
									<p className="font-bold mb-4 text-[12.5px]">
										PROJECT OR PORTION OF THE PROJECT DETERMINED SUBSTANTIALLY
										COMPLETE:
										<br />
										<span
											className={`inline-block font-light mt-4 ${nottoBeHighlighted} `}>
											{" "}
											{!form_fields
												? ""
												: trucateText(form_fields.areasCompleted, 40)}
										</span>
									</p>

									<p className="mb-4 text-[12.5px] leading-[1.3]">
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

									<p className="font-bold mb-4 text-[12.5px]">
										DATE OF SUBSTANTIAL COMPLETION:{" "}
										<span
											className={`font-bold inline-block ml-6 ] ${nottoBeHighlighted} `}>
											{moment(form_fields?.completionDate).format(
												"MMMM D, YYYY "
											)}
										</span>
									</p>

									<p className="mb-4 text-[12.5px] leading-[1.2]">
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
											<span className={`text-[12.5px] ${nottoBeHighlighted} `}>
												{!awardee?.contractor
													? ""
													: awardee?.design?.company_name}
											</span>
										</p>
										<div className="w-full flex justify-between">
											<span className="text-[12.5px]">CONSULTANT</span>
											<span className="text-[12.5px] mt-0.5 ">
												BY:{" "}
												<span
													className={`text-[12.5px] ${nottoBeHighlighted} `}>
													{!awardee?.design
														? ""
														: awardee?.design?.first_name +
														  " " +
														  awardee?.design?.last_name}
												</span>
											</span>
											<span className="text-[12.5px]">DATE</span>
										</div>
									</div>

									<p className="mb-6  text-[12.5px]">
										The Contractor will complete all work on the attached punch
										list within{" "}
										<span className={` ${nottoBeHighlighted} `}>
											{doConvert(form_fields?.workCompletionDate)}(
											{!form_fields ? "" : form_fields.workCompletionDate})
										</span>{" "}
										days from the date of Substantial Completion.
									</p>

									<p className="mb-4 font-bold text-[12.5px]">
										COST ESTIMATE OF REMAINING WORK:
										<span
											className={`font-bold inline-block ml-10 ${nottoBeHighlighted} `}>
											{" "}
											{currency(form_fields?.costOfWork).format()}
										</span>
									</p>

									<div className="mb-4 text-[12.5px]">
										<p className="mb-0 border-b border-black py-1">
											<span className={` ${nottoBeHighlighted} `}>
												{!awardee?.contractor
													? ""
													: awardee?.contractor?.company_name}
											</span>
										</p>
										<div className="flex justify-between w-full text-[12.5px]">
											<span className="">CONTRACTOR</span>
											<span className="text-[12.5px] mt-0.5">
												BY:{" "}
												<span className={`${nottoBeHighlighted}  `}>
													{!awardee?.contractor
														? ""
														: awardee?.contractor?.first_name +
														  " " +
														  awardee?.contractor?.last_name}
												</span>
											</span>
											<span className="">DATE</span>
										</div>
									</div>

									<p className="mb-4 text-[12.5px]">
										The Owner accepts the Work or designated portion as
										Substantially Complete and will assume full possession at
										12:01 AM on the Substantial Completion date identified
										above.
									</p>

									<div className="mb-4">
										<p className="mb-0 border-b border-black flex justify-between py-1 text-[12.5px]">
											<span className="">Durham Public Schools</span>

											<span className="">
												{moment(form_fields?.signedDate).format(
													"MMMM D, YYYY "
												)}
											</span>
										</p>
										<div className="w-full flex justify-between text-[12.5px]">
											<span className="">OWNER </span>
											<span className=" mt-0.5">
												BY:{" "}
												<span className={` ${nottoBeHighlighted} `}>
													{!form_fields ? "" : form_fields.owner} -{" "}
													{!form_fields ? "" : form_fields.position}
												</span>
											</span>
											<span className={` `}>DATE </span>
										</div>
									</div>
								</div>
							</div>
							<PageTwo {...pageProps} />
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => {
								dispatch(selectFilled(false));
								dispatch(prev(2));
							}}
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
