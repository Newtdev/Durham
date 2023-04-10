import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getProjectInfo,
	searchQuery,
	setProjectInfoDefault,
	setsearchQuery,
} from "./editReducer";
import { OverviewTableHeader } from "../../../lib/data";
import {
	FullPageLoader,
	ModalOverlay,
	TableLoaderComponent,
} from "../../../ui";
import { ButtonWhiteBG, ButtonRedBG } from "../../../ui";
import {
	Search,
	Filter,
	TableHeader,
	DashboardNav,
	Close,
	PageHeader,
	DashboardButton,
	Paginations,
} from "../Components";
import { OverviewTableBody, OverviewTitleCard } from "./OverviewComponents";
import {
	useDeleteProjectMutation,
	useFetchDashboardQuery,
	useFetchProjectsQuery,
} from "../../../features/services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setDefault } from "../add-project/reducer";
// import { project_details } from "../add-project/projectSlice";
import { SaveToLocalStorage } from "../../../shared-component";

const Overview = () => {
	const [action, setAction] = useState({ delete: false, id: null });
	const [searchVendorQuery, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [params, setParams] = useState("");
	const query = useSelector(searchQuery);
	const response = useFetchProjectsQuery({ query, page, params });
	const { currentData } = useFetchDashboardQuery();
	const [deleteProject, { isLoading }] = useDeleteProjectMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const dashboardProps = {
		onDelete: (id) => {
			setAction({ ...action, delete: true, id: id });
		},

		onEdit: (data) => {
			dispatch(getProjectInfo(data));
			// navigate("/dashboard/edit-project");
			SaveToLocalStorage(data.id);
			navigate(`/dashboard/project-details/${data.id}`);
			// dispatch( getProjectInfo(data) )
			// setAction({ ...action, edit: true, initialData:data })
		},
		dataArray: response?.data?.data,
	};

	const onDeleteConfirmation = async (id) => {
		// Make API Request
		const response = await deleteProject(action.id);
		if (response) {
			setAction({ delete: false, id: null });

			if (response?.error) {
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				toast.success(response?.data?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			}
		}
	};

	const CloseModal = () => setAction({ delete: false, id: null });

	const searchProps = {
		setQuery: (value) => setQuery(value),
		placeholder: "Search Project",

		submit: (e) => {
			e.preventDefault();
			dispatch(setsearchQuery(searchVendorQuery));
		},
	};

	const paginationProps = {
		data: response,
		page,
		getPage: (value) => setPage(value),
	};

	return (
		<div>
			{response.isLoading && <FullPageLoader />}

			{/* DASHBOARD */}
			<section>
				{/* <!-- Navbar --> */}
				<article>
					<DashboardNav />
				</article>
				<main className="pt-6 bg-[#fafafa] min-h-screen">
					<div className="container mx-auto px-4 lg:px-24">
						{/* Title Cards */}
						<div className="mb-6 grid grid-cols-4 gap-4">
							<OverviewTitleCard
								name="Total Projects"
								value={!currentData ? 0 : currentData.total_projects}
							/>
							<OverviewTitleCard
								name="Forms"
								value={!currentData ? 0 : currentData.documents}
							/>
							<OverviewTitleCard
								name="Project Managers"
								value={!currentData ? 0 : currentData.project_managers}
							/>
							<OverviewTitleCard
								name="Vendors"
								value={!currentData ? 0 : currentData.vendors}
							/>
						</div>

						<div className="flex gap-4 flex-col md:flex-row md:justify-between items-center">
							<div>
								<PageHeader name="Projects" />
								{/* <p className='text-[#3b6979] text-lg'>{!params ? 'My Projects' : 'All Projects'}</p> */}
							</div>
							<DashboardButton
								name="ADD NEW PROJECT"
								width="w-[211px]"
								onClick={() => {
									dispatch(setDefault());
									dispatch(setProjectInfoDefault());
									navigate("/dashboard/add-new-project");
								}}
							/>
						</div>

						<div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center mt-4 mb-6">
							<div className="flex flex-col items-center justify-center gap-6">
								{/* <!-- Sort --> */}
								{/* <Sort /> */}

								{/* <!-- Filter --> */}
								<Filter
									onChange={(e) => setParams(e.target.value)}
									params={params}
								/>
							</div>

							{/* <!-- Search --> */}
							<Search {...searchProps} />
						</div>

						{/* <!-- Table --> */}
						<div className="overflow-x-auto relative shadow rounded-lg border-solid border border-gray-100 ">
							{response.isSuccess && !response.isFetching ? (
								<table className="w-full text-sm text-left text-gray-900">
									<TableHeader dataArray={OverviewTableHeader} />
									<OverviewTableBody {...dashboardProps} />
								</table>
							) : (
								<TableLoaderComponent apiResponse={response} />
							)}
						</div>
						{/* PAGINATION */}
						{response.isSuccess && !response.isFetching ? (
							<Paginations {...paginationProps} />
						) : null}
					</div>
				</main>

				{/*  Leave Page? Modal */}

				{/*  Delete Project Verify Modal */}
				<ModalOverlay show={action.delete}>
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
									onClick={CloseModal}
									type="button"
									className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
									data-modal-toggle="small-modal">
									<Close />
								</button>
							</div>

							{/* Buttons */}
							<div className="mt-12 mr-5 flex gap-4 justify-end">
								<ButtonWhiteBG name="no, cancel" onClick={CloseModal} />
								{/* Make api request to delete the data */}
								<ButtonRedBG
									name="Yes, delete"
									width="w-[136px]"
									onClick={onDeleteConfirmation}
									loading={isLoading}
								/>
							</div>
						</div>
					</div>
				</ModalOverlay>
			</section>
		</div>
	);
};

export default Overview;
