import {
	DashboardNav,
	DashboardButton,
	Sort,
	Search,
	TableHeader,
	TableBody,
	PageHeader,
	Paginations,
} from "../../Components";
import {
	AddPojectsManagerModal,
	DeleteProjectModal,
	EditPojectsManagerModal,
} from "./ProjectsComponents";
import { FullPageLoader, ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ProductHeader, productContent } from "./ProjectsComponents";
import {
	useDeleteProductManagerMutation,
	useFetchAllProjectManagerQuery,
} from "../../../../features/services/api";
import { toast } from "react-toastify";
import {
	searchProjectManager,
	setSearchManagerQuery,
} from "../projectManagerSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductManager = () => {
	const [showModal, setShowModal] = useState(false);
	const [tableButton, setTableButton] = useState({
		delete: false,
		edit: false,
		id: null,
		initialData: {},
	});
	const [deleteProductManager, result] = useDeleteProductManagerMutation();
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const queryValue = useSelector(searchProjectManager);
	const response = useFetchAllProjectManagerQuery({ queryValue, page });

	const HandleRequest = async () => {
		const response = await deleteProductManager(tableButton.id);

		if (response) {
			HandleClose();
			if (response.error) {
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

	const onClose = () => {
		setShowModal(false);
	};

	function HandleClose() {
		setTableButton({ ...tableButton, delete: false });
	}

	const ProductManagerProps = {
		onDelete: (id) => {
			setTableButton({ ...tableButton, delete: true, id: id });
		},

		onEdit: (data) => {
			setTableButton({ ...tableButton, edit: true, initialData: data });
		},
		dataArray: response?.data?.data,
	};

	const onEditClose = () => {
		setTableButton({ ...tableButton, edit: false, initialData: {} });
	};

	const searchProps = {
		setQuery: (value) => setQuery(value),
		placeholder: "Search project manager",

		submit: (e) => {
			e.preventDefault();
			dispatch(setSearchManagerQuery(query));
		},
	};

	const paginationProps = {
		data: response?.data,
		page,
		getPage: (value) => setPage(value),
	};

	return (
		<section>
			{!response?.data && <FullPageLoader />}
			<article>
				{/* <!-- Navbar --> */}
				<DashboardNav />
			</article>

			<main className="pt-6 bg-[#fafafa] h-screen overflow-y-hidden">
				<div className="container mx-auto px-4 lg:px-24">
					<div className="flex gap-4 flex-col md:flex-row md:justify-between items-center">
						<PageHeader name="Project Managers" />
						<DashboardButton
							name="ADD NEW PROJECT MANAGER"
							width="w-[290px]"
							onClick={() => setShowModal(true)}
						/>
					</div>
					<div className="flex flex-col gap-3 md:flex-row md:justify-end md:items-center mt-4 mb-6">
						{/* <!-- Sort --> */}
						{/* <Sort/> */}

						{/* <!-- Search --> */}
						<Search {...searchProps} />
					</div>
					{/* <!-- Table --> */}
					<div className="overflow-x-auto relative shadow rounded-lg border-solid border border-gray-100 ">
						<table className="w-full text-sm text-left text-gray-900">
							<TableHeader dataArray={ProductHeader}></TableHeader>
							<TableBody {...ProductManagerProps}></TableBody>
						</table>
					</div>
					{/* pagination */}
					<Paginations {...paginationProps} />
				</div>
			</main>

			{/* Add PM Modal */}
			<article>
				{/* Main modal */}
				<ModalOverlay show={showModal}>
					<AddPojectsManagerModal close={onClose} />
				</ModalOverlay>
			</article>
			<article>
				{/* Edit modal */}
				<ModalOverlay show={tableButton.edit}>
					<EditPojectsManagerModal
						close={onEditClose}
						data={tableButton.initialData}
					/>
				</ModalOverlay>
			</article>

			{/*  Delete PM Modal */}
			<article>
				{/* Main modal */}
				<ModalOverlay show={tableButton.delete}>
					<DeleteProjectModal
						HandleRequest={HandleRequest}
						close={() => setTableButton({ ...tableButton, delete: false })}
						isLoading={result.isLoading}
					/>
				</ModalOverlay>
			</article>
		</section>
	);
};

export default ProductManager;
