import { Close, DashboardNav } from "../Components";
import RedDelete from "../../../assets/redDelete.svg";
import BackArrow from "../../../assets/backArrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { Accordion, ProjectCard, ProjectDetails } from "./Components";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments, project_details } from "../add-project/projectSlice";
import {
	ButtonRedBG,
	ButtonWhiteBG,
	LoadingArrow,
	ModalOverlay,
	Pen,
} from "../../../ui";
import { getTotals } from "../../../shared-component";
import Lunsford from "../../forms/Lundsford";

import NoticeOfIntentConsultant from "../../forms/Notice-of-intent-consultant/NoticeOfIntentConsultant";
import { deleted, onClose, onDelete, slug } from "./ReducerSlice";
import NoticeToProceed from "../../forms/Notice-to-Proceed";
import AdvertisementBid from "../../forms/Advertisement-for-bid-template/AD4Bid";
import Esser from "../../forms/ESSER Contract Template";
import EsserPM from "../../forms/ESSER PM Contract Template";
import Lechase from "../../forms/LeChase Esser";
import TechService from "../../forms/Tech Service Agreement";
import NoticeOfAwardContrator from "../../forms/Notice-of-award-contractor/NoticeOfAwardContrator";
import NoticeOfAwardConsultant from "../../forms/notice-of-award-consultant";
import ProjectCloseoutCheckList from "../../forms/Project-closeout-checklist";
import CertificateOfSubstantial from "../../forms/Certificate of Substantial Completion";
import PunchList from "../../forms/Punch List/PunchList";
import moment from "moment";
import { getProjectInfo, projectData } from "../Overview-dashboard/editReducer";
import { supabase } from "../../../lib/supabase";
import { toast } from "react-toastify";

const ProjectDashboard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const projectDetails = useSelector(project_details);
	const documents = useSelector(getDocuments);
	const remove = useSelector(deleted);
	const id = useSelector(slug);

	const onSubmit = async (e) => {
		e.preventDefault();
		const response = await supabase
			.from("durham_projects")
			.delete()
			.eq("id", projectDetails.id);

		if (response) {
			dispatch(onClose());
			if (response.error?.message) {
				// close();
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				toast.success("Project Deleted Successfully", {
					position: toast.POSITION.TOP_CENTER,
				});
				navigate("/dashboard", { replace: true });
			}
		}
	};

	return (
		<section>
			<ModalOverlay show={remove}>
				<div>
					{/* Modal content */}
					<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14 bg-white rounded-lg shadow pb-4">
						<div className="flex justify-between items-start px-6 py-3 rounded-t border-b">
							<div>
								<h3 className="text-lg font-bold text-gray-900">
									Are you sure you want to delete this Project information?
								</h3>
							</div>
							<button
								type="button"
								className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
								data-modal-toggle="small-modal">
								<Close />
							</button>
						</div>
						<div className="py-3 px-6">
							<p className="text-base text-gray-600">
								Lorem ipsum dolor sit amet consectetur. Consectetur bibendum ut
								nec malesuada sit ante ultrices orci libero.
							</p>
						</div>

						{/* Buttons */}
						<form
							className="mt-12 mr-5 flex gap-4 justify-end"
							onSubmit={onSubmit}>
							<ButtonWhiteBG
								name="no, cancel"
								onClick={() => dispatch(onClose())}
							/>
							{/* Make api request to delete the data */}
							<ButtonRedBG name="yes, edit" width="w-[136px]" />
						</form>
					</div>
				</div>
			</ModalOverlay>
			{/* <!-- Navbar --> */}
			<article>
				<DashboardNav />
			</article>

			{/* Page Marker */}
			<div className="bg-white h-14">
				<div className="container mx-auto px-4 py-4 lg:px-24 flex gap-2 items-center">
					<span className="text-gray-900 text-base">Dashboard</span>
					<span className="text-gray-700 font-bold">&gt;</span>

					<span className="text-gray-900 text-base">Project</span>
					<span className="text-gray-900 font-bold">&gt;</span>

					<span className="text-gray-900 font-bold text-base">
						{!projectDetails ? "" : projectDetails?.project_name}
					</span>
				</div>
			</div>

			{/* Main Content */}
			<main className="bg-[#fafafa] h-full pb-60">
				<div className="container mx-auto pt-5 px-4 lg:px-24 h-full">
					<div className="flex justify-between items-center">
						<div className="flex justify-start items-center gap-3 cursor-pointer">
							<img src={BackArrow} alt="go back" />
							<Link to="/dashboard" className="text-[#3b6979] font-semibold">
								BACK TO DASHBOARD
							</Link>
						</div>

						<div className="flex gap-4 items-center">
							<button
								onClick={() => {
									navigate("/dashboard/edit-project");
									dispatch(getProjectInfo(projectDetails));
								}}
								type="button"
								className="uppercase bg-white text-[#3b6979] font-semibold px-4 h-8 border border-[#3b6979] rounded hover:bg-gray-50 w-[102px] flex gap-2 items-center justify-center">
								<Pen />
								<span>edit</span>
							</button>

							<button
								type="submit"
								className="uppercase text-white text-center text-base w-[152px] bg-[#3B6979] hover:bg-blue-800 font-bold rounded h-8 transition-all flex gap-2 items-center justify-center">
								<LoadingArrow />
								<span>duplicate</span>
							</button>

							<button
								onClick={() => {
									dispatch(onDelete());
								}}
								type="submit"
								className="uppercase text-[#ef4444] text-center text-base w-[152px] hover:bg-blue-800 font-semibold rounded h-8 transition-all flex gap-2 items-center justify-center">
								<img src={RedDelete} alt="Delete" />
								<span>Delete</span>
							</button>
						</div>
					</div>

					<div className="mt-9 grid grid-cols-3">
						<ProjectCard name="Total Documents" value={getTotals(documents)} />
						<ProjectCard name="Filled" value="0" />
						<ProjectCard name="Yet to be Filled" value="0" />
					</div>

					{/* Main Content */}
					<div className="mt-6 grid grid-cols-3 gap-6">
						{/* Left Side */}
						<div class="col-span-2">
							<div className="bg-white border border-gray-100 rounded-lg p-4">
								<div className="pb-2 border-b border-b-gray-50 flex justify-between items-center">
									<p className="px-[10px] py-1 rounded font-bold bg-[#D8E1E4] text-[#2F5461]">
										{`No:${
											!projectDetails ? 0 : projectDetails?.project_number
										}`}
									</p>
									<p className="text-gray-700 text-base">
										{moment(projectDetails.create_At).format("MMMM D, YYYY ")}
									</p>
								</div>
								<ProjectDetails
									name={!projectDetails ? "" : projectDetails?.project_name}
									description={
										!projectDetails ? "" : projectDetails?.project_description
									}
								/>

								<div className="mt-4">
									<span className="text-[#623F04] text-base mr-4">
										This project has been duplicated 5 times.
									</span>
									<span className="underline underline-offset-4 text-[#3b6979] font-semibold text-base cursor-pointer">
										View History
									</span>
								</div>
							</div>
							{/* Accordions */}
							<div className="mt-6 bg-white rounded-lg border border-gray-100">
								<Accordion data={documents} />
							</div>
						</div>

						{/* Right Side */}
						<div>
							<div className="bg-white p-4 rounded-lg">
								<div className="mb-5">
									<div className="border-b border-b-gray-100 pb-2 text-[#2f5461] font-bold">
										School Information
									</div>
									<div className="text-gray-900 text-xs">
										<p className="mt-4 font-bold">Durham Public School</p>
										<p className="my-1">leekaisian@gmail.com</p>
										<p>+65 1234 1234</p>
									</div>
								</div>
								<div className="mb-5">
									<div className="border-b border-b-gray-100 pb-2 text-[#2f5461] font-bold">
										Design Consultant Information
									</div>
									<div className="text-gray-900 text-xs">
										<p className="mt-4 text-base font-bold">
											{!projectDetails
												? ""
												: !projectDetails?.awardeeInfo
												? ""
												: projectDetails?.awardeeInfo[0]?.consultant_name}
										</p>
										<p className="my-1">
											{!projectDetails
												? ""
												: !projectDetails?.awardeeInfo
												? ""
												: projectDetails?.awardeeInfo[0]?.consultant_address}
										</p>
									</div>
								</div>

								<div className="mb-5">
									<div className="border-b border-b-gray-100 pb-2 text-[#2f5461] font-bold">
										Project Manager
									</div>
									<div className="mt-4 flex gap-2 items-center">
										<div className="w-6 h-6 rounded-full">
											{/* <img className="w-full" src={Avatar} alt="user" /> */}
										</div>
										<span className="text-xs text-[#2f5461]">
											{!projectDetails ? "" : projectDetails?.project_manager}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Lunsford id={id} />
			<PunchList id={id} />
			<NoticeOfIntentConsultant id={id} />
			<CertificateOfSubstantial id={id} />
			<NoticeToProceed id={id} />
			<ProjectCloseoutCheckList id={id} />
			<NoticeOfAwardConsultant id={id} />
			<AdvertisementBid id={id} />
			<Esser id={id} />
			<EsserPM id={id} />
			<Lechase id={id} />
			<TechService id={id} />
			<NoticeOfAwardContrator id={id} />
			<NoticeOfAwardContrator id={id} />
		</section>
	);
};

export default ProjectDashboard;
