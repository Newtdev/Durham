import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import {
	project_document_id,
	selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
// import { prevChoiceStep } from "../Advertisement-for-bid-template/reducer";
import DownLoadForm from "../Lundsford/Download";
import { closeModal, fields, openDownload, showDownload } from "../reducer";
import PageOne from "./Preview/Page1";
import PageTen from "./Preview/Page10";
import PageEleven from "./Preview/Page11";
import PageTwelve from "./Preview/Page12";
import PageThirteen from "./Preview/Page13";
import PageFourteen from "./Preview/Page14";
import PageTwo from "./Preview/Page2";
import PageThree from "./Preview/Page3";
import PageFour from "./Preview/Page4";
import PageFive from "./Preview/Page5";
import PageSix from "./Preview/Page6";
import PageSeven from "./Preview/Page7";
import PageEight from "./Preview/Page8";
import PageNine from "./Preview/Page9";
import { prevStep } from "./reducer";

const Preview = () => {
	const formID = useSelector(project_document_id);

	const [awardee, setAwardee] = useState([]);
	const [showPage, setShowPage] = useState(false);

	// console.log(form_fields);
	const dispatch = useDispatch();

	const [a] = UseFetchFilledFormDetails(formID);
	const [highlighted, setHighlighed] = useState(false);
	const downloadComponent = useRef();

	const show = useSelector(openDownload);
	const vendors = a?.data?.vendors;
	const projectInfo = a?.data?.project;
	const durham = a?.data?.durham_profile;
	const form_fields = a?.data?.form_fields;

	const props = {
		component: downloadComponent,
		name: "DPS SHORT FORM ENGINEER -ENGINEERING CONTRACT",
		show: !show ? "hidden" : "block",
		// stepDefault: stepChoiceDefault,
		// close: closeDownload,
	};

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors?.filter(
			(cur) => cur.role === "Engineering Consultant"
		);
		setAwardee(data);
	}, [vendors]);

	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	// console.log(form_fields);
	return (
		// console.log(a);

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
								DPS ENGINEERING CONSULTANT SERVICES AGREEMENT
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
							className=" pt-8 pb-4 text-black text-[8pt] leading-[1.1] arial-font"
							ref={downloadComponent}>
							<PageOne
								vendor={awardee}
								project={projectInfo}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							<PageTwo
								formsDetails={form_fields}
								vendor={awardee}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							{showPage ? <PageThree /> : null}
							{showPage ? <PageFour /> : null}
							{showPage ? <PageFive /> : null}
							{showPage ? <PageSix /> : null}
							{showPage ? <PageSeven /> : null}
							{showPage ? <PageEight /> : null}
							{showPage ? <PageNine /> : null}
							<PageTen
								durham={durham}
								formDetails={form_fields}
								vendor={awardee}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							{showPage ? <PageEleven /> : null}
							{showPage ? <PageTwelve /> : null}
							{showPage ? <PageThirteen /> : null}
							<PageFourteen
								formDetails={form_fields}
								vendor={awardee}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
						</div>
					</div>
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => {
								dispatch(prevStep(2));
								dispatch(selectFilled(false));
							}}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
							onClick={() => {
								dispatch(showDownload());
								setHighlighed(true);
								setShowPage(true);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
