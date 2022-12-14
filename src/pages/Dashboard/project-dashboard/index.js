import { DashboardNav } from "../Components";
import RedDelete from "../../../assets/redDelete.svg";
import BackArrow from "../../../assets/backArrow.svg";
import Edit from "../../../assets/edit.svg";
import Duplicate from "../../../assets/duplicate.svg";
import { Link } from "react-router-dom";
import { Accordion, ProjectCard, ProjectDetails } from "./Components";
import { documents, state } from "../../../lib/data";
import { useSelector } from "react-redux";
import { getDocuments, project_details } from "../add-project/projectSlice";
import { useEffect } from "react";

const ProjectDashboard = () => {
	const document = useSelector(project_details);
	useEffect(() => {
		console.log(document);
	}, []);
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
						Burton Elementary School - Boiler Replacement
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
								<img src={Edit} alt="edit" />
								<span>edit</span>
							</button>

							<button
								type="submit"
								className="uppercase text-white text-center text-base w-[152px] bg-[#3B6979] hover:bg-blue-800 font-bold rounded h-8 transition-all flex gap-2 items-center justify-center">
								<img src={Duplicate} alt="duplicate" />
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
						<ProjectCard name="Total Documents" value="8" />
						<ProjectCard name="Filled" value="8" />
						<ProjectCard name="Yet to be Filled" value="8" />
					</div>

					{/* Main Content */}
					<div className="mt-6 grid grid-cols-3 gap-6">
						{/* Left Side */}
						<div class="col-span-2">
							{console.log(document)}
							<div className="bg-white border border-gray-100 rounded-lg p-4">
								<div className="pb-2 border-b border-b-gray-50 flex justify-between items-center">
									<p className="px-[10px] py-1 rounded font-bold bg-[#D8E1E4] text-[#2F5461]">
										{`No:${document?.project_number}`}
									</p>
									<p className="text-gray-700 text-base">12/Jun/2022</p>
								</div>
								<ProjectDetails
									name={document?.project_name}
									description={document?.project_description}
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
											{document?.consultant_name}
										</p>
										<p className="my-1">{document?.consultant_address}</p>
										{/* <p>Austin, TX</p> */}
									</div>
								</div>
								<div className="mb-5">
									<div className="border-b border-b-gray-100 pb-2 text-[#2f5461] font-bold">
										Trades Selected
									</div>
									<div className="text-gray-900 text-xs">
										<p className="mt-4">
											Finish Carpentry, Flooring, Painting, Plumbing and HVAC,
											Masonry, Glass and Glazing, Trade, Tile and Terrazzo,
											Sliding, Site Preparation
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
											Tife Olayinka
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default ProjectDashboard;
