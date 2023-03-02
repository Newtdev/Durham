import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton, Close } from "../../Dashboard/Components";
import DownLoadForm from "./Download";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, stepDefault } from "./lundsFormslice";
import { useEffect, useRef, useState } from "react";
import {
	closeDownload,
	closeModal,
	openDownload,
	showDownload,
} from "../reducer";
import {
	project_document_id,
	selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const PageTwo = () => {
	return (
		<div className="bg-white pt-8 pb-4 text-black arial-font text-[11pt] h-[11in] mt-[1in]  leading-[1.3]">
			<p className="text-right mb-4 text-[16pt]">Attachment B</p>
		</div>
	);
};

const PreviewForm = ({ value }) => {
	const showModal = useSelector(openDownload);
	const downloadComponent = useRef();
	const dispatch = useDispatch();
	const [highlighted, setHighlighed] = useState(false);

	const formID = useSelector(project_document_id);
	const [a] = UseFetchFilledFormDetails(formID);
	const vendors = a?.data?.vendors || [];
	const project = a?.data?.project || {};
	const form_fields = a?.data?.form_fields || {};

	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";
	const [awardee, setAwardee] = useState([]);

	useEffect(() => {
		if (!vendors) {
			return;
		}

		const data = vendors?.filter(
			(cur) => cur.role === form_fields?.addressCopy
		);
		if (data.length < 1) {
			setAwardee(vendors);
		} else {
			setAwardee(data);
		}
	}, [vendors, form_fields]);

	const props = {
		component: downloadComponent,
		name: "Attachment A Lunsford Act Form",
		show: showModal ? "block" : "hidden",
		stepDefault,
		close: closeDownload,
	};

	return (
		<>
			<div>
				{/* Modal content */}
				<DownLoadForm {...props} />
				<div
					className={` ${
						showModal
							? "hidden"
							: " relative mx-auto w-[60rem] h-[46rem] bg-white rounded-lg shadow mt-4"
					}`}>
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900 ">
								Attachment A Lunsford Act Form
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

					{/* Forms */}
					<div className="mx-auto mt-6  w-[95%] h-[35rem] overflow-y-auto">
						<div
							className="bg-white pt-8 pb-10 text-black arial-font text-[11pt] h-[11in] ml-[0.8in] mr-[0.7in]  leading-[1.3]"
							ref={downloadComponent}>
							<p className="text-right mb-4 text-[16pt]">Attachment A</p>
							<div className="mb-6 text-center arial-font">
								<h2 className="font-bold text-[16pt]">Lunsford Act</h2>
								<h3 className="font-bold text-[14pt]">
									Sexual Offender Registry Check Certification Form
								</h3>
							</div>
							<div className={``}>
								<p className={` ${nottoBeHighlighted} font-bold`}>
									DPS Project Name: {project?.name || ""}{" "}
								</p>
								<p className={` ${nottoBeHighlighted} font-bold`}>
									DPS Project Number: {project?.number || ""}{" "}
								</p>
								<p className="mt-3">
									Check the appropriate box to indicate the type of check:
								</p>
								<p className="mt-2">
									<input
										className="mr-2"
										type="checkbox"
										checked={value === "Initial" ? true : false}
									/>
									<span>Initial</span>
								</p>
								<p className="mt-2">
									<input
										className="mr-2"
										type="checkbox"
										checked={value === "Supplemental" ? true : false}
									/>
									<span>Supplemental</span>
								</p>
								<p className="mt-2">
									<input
										className="mr-2"
										type="checkbox"
										checked={value === "Annual" ? true : false}
									/>
									<span>Annual</span>
								</p>
							</div>
							<div className="mt-6 ">
								<p className="text-justify ">
									I,{"  "}
									<span className={` ${nottoBeHighlighted}  `}>
										<span className="border-b border-black inline-block w-56">
											{!awardee[0] ? "" : awardee[0].first_name}{" "}
											{!awardee[0] ? "" : awardee[0].last_name}
										</span>
										(insert name),{" "}
										<span className="border-b border-black inline-block w-48">
											{" "}
											{!awardee[0] ? "" : awardee[0].title}{" "}
										</span>{" "}
										(insert title),
										<br />
										<br />
										of{" "}
										<span className="border-b border-black inline-block w-64">
											{!awardee[0] ? "" : awardee[0].company_name}
										</span>{" "}
										(insert company name)
									</span>{" "}
									hereby certify that I have conducted sexual offender registry
									checks required under this Agreement for all employees,
									agents, ownership personnel, or contractors (“contractual
									personnel”) who will engage in any service on or delivery of
									goods to school system property, except for individuals who
									are solely delivering or picking up equipment, materials, or
									supplies at: (1) the administrative office or loading dock of
									a school; (2) non-school sites; (3) schools closed for
									renovation; or (4) school construction sites., including the
									North Carolina Sex Offender and Public Protection Registration
									Program, the North Carolina Sexually Violent Predator
									Registration Program, and the National Sex Offender Registry.
									I further certify that I will not assign any individual to
									deliver goods or perform services under this Agreement if said
									individual appears on any of the sex offender registries. I
									agree to maintain all records and documents associated with
									these registry checks, and that I will provide such records
									and documents to the school system upon request. I
									specifically acknowledge that the school system retains the
									right to audit these records to ensure compliance with this
									section at any time in the school system’s sole discretion. I
									acknowledge that I am required to perform these checks and
									provide this certification form before any work is performed
									under the Agreement (initial check), any time additional
									contractual personnel may perform work under the Agreement
									(supplemental check), and at each anniversary date of the
									Agreement (annual check).
								</p>
							</div>
							<div className="mt-4 mb-4 grid grid-cols-2 gap-16 ">
								<div className="overflow-hidden">
									<p className="font-bold text-[12pt] mb-2">
										Contractual Personnel Names
									</p>
									<div className="flex gap-5">
										<p>1.</p>
										<p>_____________________________</p>
									</div>
									<div className="flex gap-5 mt-3">
										<p>2.</p>
										<p>_____________________________</p>
									</div>
									<div className="flex gap-5 mt-3">
										<p>3.</p>
										<p>_____________________________</p>
									</div>
									<div className="flex gap-5 mt-3">
										<p>4.</p>
										<p>_____________________________</p>
									</div>
									<p className="ml-3 mt-2 ">
										(Attach additional page(s) if needed)
									</p>
								</div>
								<div>
									<p className="font-bold text-[12pt]">Job Title</p>
									<div className="w-full  bg-black mt-5 border-b border-black"></div>
									<div className="w-full bg-black mt-7 border-b border-black"></div>
									<div className="w-full  bg-black mt-7  border-b border-black"></div>
									<div className="w-full  bg-black mt-9  border-b border-black"></div>
								</div>
							</div>
							<p className="">
								I attest that the forgoing information is true and accurate to
								the best of my knowledge.
							</p>
							<div className="mt-8 mb-4 pr-6 ">
								<div className="flex justify-between">
									<p className="flex  items-center  ">
										<span className="text-center inline-block border-b border-black w-52">
											{!awardee[0]
												? ""
												: awardee[0]?.first_name + " " + awardee[0]?.last_name}
										</span>
										<span>(print name)</span>
									</p>
									<p className="flex">
										<span className="inline-block border-b border-black w-44"></span>
										<span className="">(signature)</span>
									</p>
								</div>
								<div className="mt-6 flex items-center  justify-between">
									<p className="flex  items-center h-0 mt-3">
										<span className="text-center inline-block border-b border-black w-[16rem]">
											{!awardee[0] ? "" : awardee[0]?.title}
										</span>
										<span>(title)</span>
									</p>
									<p className="mt-3">
										<span className="inline-block border-b border-black w-52"></span>
										<span className="">(date)</span>
									</p>
								</div>
							</div>
							<PageTwo />
						</div>
					</div>

					{/* Buttons exportPDFWithComponent */}
					<div className="flex justify-end items-center h-20 gap-4 py-4 pr-6">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => {
								dispatch(selectFilled(false));
								dispatch(prevStep(1));
							}}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="button"
							width="w-[198px]"
							onClick={() => {
								setHighlighed(true);
								dispatch(showDownload());
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PreviewForm;
