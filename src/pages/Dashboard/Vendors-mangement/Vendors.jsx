import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
	useDeleteVendorMutation,
	useEditVendorMutation,
	useFetchVendorsQuery,
} from "../../../features/services/api";
import { FullPageLoader, ModalOverlay } from "../../../ui";
import {
	DashboardButton,
	DashboardNav,
	PageHeader,
	Paginations,
	Search,
	TableHeader,
} from "../Components";
import { EditVendorModal } from "./VendorsComponents";
import {
	AddVendor,
	DeleteVendorModal,
	VendorsHeader,
	VendorTableBody,
} from "./VendorsComponents";
import { setSearchVendorQuery, vendorQuery } from "./vendorSlice";

const Vendors = () => {
	const [showVendorModal, setShowVendorModal] = useState(false);
	const [showActionModal, setShowActionModal] = useState({
		delete: false,
		edit: false,
		id: null,
		data: {},
	});

	const [deleteVendor, { isLoading }] = useDeleteVendorMutation();
	const [editVendor, result] = useEditVendorMutation();
	const dispatch = useDispatch();
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const queryValue = useSelector(vendorQuery);
	const apiResponse = useFetchVendorsQuery({ queryValue, page });

	/***********HANDLE DELETE REQUEST AND RESPONSE ********************** */
	const HandleRequest = async () => {
		const response = await deleteVendor(showActionModal.id);

		if (response) {
			onDeleteClose();
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

	/***********HANDLE EDIT REQUEST AND RESPONSE ********************** */

	const HandleEditRequest = async (values) => {
		const response = await editVendor(values);

		if (response) {
			onEditClose();
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

	const close = () => {
		setShowVendorModal(false);
	};

	const onDelete = (id) =>
		setShowActionModal((prev) => {
			return { ...prev, delete: true, id: id };
		});
	const onEdit = (data) =>
		setShowActionModal((prev) => {
			return { ...prev, edit: true, data: data };
		});

	const onDeleteClose = () =>
		setShowActionModal((prev) => {
			return { ...prev, delete: false, id: null };
		});

	const onEditClose = () =>
		setShowActionModal((prev) => {
			return { ...prev, edit: false, data: {} };
		});

	const searchProps = {
		setQuery: (value) => setQuery(value),
		placeholder: "Search Vendor",
		submit: (e) => {
			e.preventDefault();
			dispatch(setSearchVendorQuery(query));
		},
	};

	const paginationProps = {
		data: apiResponse?.currentData,
		page: page,
		getPage: (value) => setPage(value),
	};

	return (
		<section className="h-full ">
			{!apiResponse?.data || apiResponse.isFetching ? <FullPageLoader /> : null}
			<article>
				{/* <!-- Navbar --> */}
				<DashboardNav />
			</article>
			<main className="pt-6 bg-[#fafafa] min-h-screen overflow-y-auto">
				<div className="container mx-auto px-4 lg:px-24 ">
					<div className="flex gap-4 flex-col md:flex-row md:justify-between items-center">
						<PageHeader name="Vendors" />
						<DashboardButton
							name="ADD NEW VENDOR"
							width="w-[211px]"
							onClick={() => setShowVendorModal(true)}
						/>
					</div>
					<div className="flex flex-col gap-3 md:flex-row md:justify-end md:items-center mt-4 mb-6">
						{/* <!-- Sort --> */}
						{/* <Sort /> */}

						{/* <!-- Search --> */}
						<Search {...searchProps} />
					</div>
					{/* <!-- Table --> */}
					<div className="overflow-x-auto relative shadow rounded-lg border-solid border border-gray-100 mb-6 h-full">
						<table className="w-full text-sm text-left text-gray-900">
							<TableHeader dataArray={VendorsHeader} />
							<VendorTableBody
								dataArray={apiResponse?.currentData?.data?.data || []}
								onDelete={onDelete}
								onEdit={onEdit}
							/>
						</table>
					</div>
					{/* PAGINATION */}
					<Paginations {...paginationProps} />
				</div>
			</main>

			{/* Add Vendor Modal */}
			<article>{/* Main modal */}</article>
			<ModalOverlay show={showVendorModal}>
				<AddVendor close={close} />
			</ModalOverlay>

			{/*  Vendor Succesfully Added Popup */}

			{/*  Edit Vendor Info Modal */}
			<ModalOverlay show={showActionModal.edit}>
				<EditVendorModal
					close={onEditClose}
					vendorInitValue={showActionModal.data}
					handleRequest={HandleEditRequest}
					isLoading={result.isLoading}
				/>
			</ModalOverlay>

			{/* Vendor deleted successfully */}
			<ModalOverlay show={showActionModal.delete}>
				<DeleteVendorModal
					close={onDeleteClose}
					onClick={HandleRequest}
					isLoading={isLoading}
				/>
			</ModalOverlay>
		</section>
	);
};

export default Vendors;
