import "react-datepicker/dist/react-datepicker.css";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { prevStep } from "./reducer";
import { closeModal, openDownload, showDownload } from "../../reducer";
import PageOne from "./Preview Pages/Page1";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useRef, useState } from "react";
import PageTwo from "./Preview Pages/Page2";
import PageThree from "./Preview Pages/Page3";
import PageFour from "./Preview Pages/Page4";
import PageFive from "./Preview Pages/Page5";
import DownLoadForm from "../../Lundsford/Download";

const MWBEBids = () => {
	const formID = useSelector(project_document_id);
	const dispatch = useDispatch();
	const [awardee, setAwardee] = useState([]);
	const [highlighted, setHighlighed] = useState(false);
	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const [a] = UseFetchFilledFormDetails(formID);
	const projectDetails = a?.data?.project;
	const formDetails = a?.data?.form_fields;

	const props = {
		component: downloadComponent,
		name: "MWBE Form for Bids",
		show: show ? "block" : "hidden",
	};

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
							<h3 className="font-bold text-gray-900">MWBE Form for Bids</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal"></button>
					</div>

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
						<div className="pb-4 text-black arial-font" ref={downloadComponent}>
							<PageOne
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							<PageTwo
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							<PageThree
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							<PageFour
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							<PageFive
								formDetails={formDetails}
								project={projectDetails}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevStep(2))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
							onClick={() => {
								dispatch(showDownload());
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MWBEBids;
