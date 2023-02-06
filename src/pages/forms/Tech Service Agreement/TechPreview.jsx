import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../Lundsford/Download";
// import { prevStep, selectForm, stepDefault } from "../Lundsford/lundsFormslice";
// print: (iframe: HTMLIframeElement) => {
// the `iframe` contains the content you want printed. Now pass it to an HTML->PDF generator
// }
import { closeModal, fields, openDownload, showDownload } from "../reducer";
import { techPrevStep, techStepDefault } from "./reducer";
import { useEffect } from "react";
import PageOne from "./preview-pages/PageOne";
import PageTwo from "./preview-pages/PageTwo";
import PageThree from "./preview-pages/PageThree";
import PageFour from "./preview-pages/PageFour";
import PageFive from "./preview-pages/PageFive";
import PageSix from "./preview-pages/PageSix";
import PageSeven from "./preview-pages/PageSeven";
import PageEight from "./preview-pages/PageEight";
import PageNine from "./preview-pages/PageNine";
import PageTen from "./preview-pages/PageTen";
import PageEleven from "./preview-pages/PageEleven";

const TechPreview = (data) => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	const formID = useSelector(project_document_id);
	const content = useFetchFilledFormQuery(formID);
	const [awardee, setAwardee] = useState([]);
	const [showPage, setShowPage] = useState(false);
	const form_fields = useSelector(fields);
	const [highlighted, setHighlighed] = useState(false);
	let formData = !content?.data ? [] : content?.data?.data;
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
		if (!vendors || !form_fields?.addressCopy) {
			setAwardee(vendors);
			return;
		}
		const data = vendors?.filter((cur) => cur.role === form_fields.addressCopy);
		setAwardee(data);
	}, [vendors, form_fields]);

	const pageProps = {
		formData,
		form_fields,
		nottoBeHighlighted,
		awardee,
	};

	return (
		<div>
			<DownLoadForm {...props} />
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
							<Close />
						</button>
					</div>
					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
						<div
							className="bg-white -mt-4  pb-4 text-black arial-font text-[14.8px] leading-[1.3]"
							ref={downloadComponent}>
							<PageOne {...pageProps} />
							{/* <PageTwo {...pageProps} /> */}
							{/* <PageThree {...pageProps} /> */}
							{showPage && <PageTwo {...pageProps} />}
							{showPage && <PageThree {...pageProps} />}
							<PageFour {...pageProps} />
							{/* <PageFive {...pageProps} /> */}
							{/* <PageSix {...pageProps} /> */}
							{showPage && <PageFive {...pageProps} />}
							{showPage && <PageSix {...pageProps} />}
							<PageSeven {...pageProps} />
							{/* <PageEight {...pageProps} /> */}
							{/* <PageNine {...pageProps} /> */}
							{/* <PageTen {...pageProps} /> */}
							{showPage && <PageEight {...pageProps} />}
							{showPage && <PageNine {...pageProps} />}
							{showPage && <PageTen {...pageProps} />}
							<PageEleven {...pageProps} />
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
								dispatch(showDownload());
								setHighlighed(true);
								setShowPage(true);
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

export default TechPreview;
