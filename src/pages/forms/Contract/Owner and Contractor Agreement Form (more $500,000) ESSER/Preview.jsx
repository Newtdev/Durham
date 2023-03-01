import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { useDispatch, useSelector } from "react-redux";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { closeModal, openDownload, showDownload } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";
import DownLoadForm from "../../Lundsford/Download";
import PageOne from "./pages/Page1";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

import PageSeven from "./pages/PageSeven";
import PageEight from "./pages/PageEight";
import PageSix from "./pages/PageSix";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";

const Owner = () => {
	const formID = useSelector(project_document_id);
	const dispatch = useDispatch();
	const [awardee, setAwardee] = useState([]);
	const [highlighted, setHighlighed] = useState(false);
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const [a] = UseFetchFilledFormDetails(formID);

	const projectDetails = a?.data?.project;
	const formDetails = a?.data?.form_fields;
	const durham = a?.data?.durham_profile;
	const vendors = a?.data?.vendors;

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors?.filter((cur) => {
			return cur.role === "Contractor";
		});
		setAwardee(data);
	}, [vendors]);

	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const props = {
		component: downloadComponent,
		name: "Owner and Contractor Agreement Form (more $500,000) ESSER",
		show: !show ? "hidden" : "block",
		stepDefault,
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
								Owner and Contractor Agreement Form (more $500,000) ESSER
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
							className=" pb-4 text-black calibri-font"
							ref={downloadComponent}>
							<PageOne
								projectDetails={projectDetails}
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
								vendor={awardee}
								durham={durham}
							/>
							<PageTwo
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
								vendors={awardee}
							/>
							<PageThree
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
							<PageFour
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
								durham={durham}
								vendor={awardee}
							/>
							<PageFive
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
								vendor={awardee}
							/>
							<PageSix
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
								vendor={awardee}
							/>
							<PageSeven
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
								vendor={awardee}
								durham={durham}
							/>
							<PageEight
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
								vendor={awardee}
								durham={durham}
							/>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevStep(4))}
						/>
						<DashboardButton
							onClick={() => {
								dispatch(showDownload());
								setHighlighed(true);
								// setShow(true);
							}}
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Owner;
