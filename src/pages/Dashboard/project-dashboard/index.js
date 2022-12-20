import { DashboardNav } from "../Components";
import RedDelete from "../../../assets/redDelete.svg";
import BackArrow from "../../../assets/backArrow.svg";
import { Link } from "react-router-dom";
import { Accordion, ProjectCard, ProjectDetails } from "./Components";
import { useSelector } from "react-redux";
import { getDocuments, project_details } from "../add-project/projectSlice";
import { LoadingArrow, Pen } from "../../../ui";
import { getTotals, handleDate } from "../../../shared-component";
import Lunsford from "../../forms/Lundsford";
import {
	lundsford,
	notice_of_award_contractor,
	notice_of_intent_award_consultant,
	notice_to_proceed,
} from "../../../shared-component/slug";
import NoticeOfIntentConsultant from "../../forms/Notice-of-intent-consultant/NoticeOfIntentConsultant";
import { slug } from "./ReducerSlice";
import NoticeToProceed from "../../forms/Notice-to-Proceed";

const ProjectDashboard = () => {
	const projectDetails = useSelector(project_details);
	const documents = useSelector(getDocuments);
	const id = useSelector(slug);
	console.log(id);
	const date = !projectDetails ? new Date() : projectDetails.date;

	return (
		<section>
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
									<p className="text-gray-700 text-base">{handleDate(date)}</p>
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
										<p className="mt-4 font-bold">
											{!projectDetails ? "" : projectDetails?.consultant_name}
										</p>
										<p className="my-1">
											{!projectDetails
												? ""
												: projectDetails?.consultant_address}
										</p>
										{/* <p>Austin, TX</p> */}
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
			{id === lundsford && <Lunsford {...{ name: slug.name }} />}
			{id === notice_of_intent_award_consultant && <NoticeOfIntentConsultant />}
			{id === notice_of_award_contractor && <NoticeToProceed />}
		</section>
	);
};

export default ProjectDashboard;
