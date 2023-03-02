import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { EditDocumentData } from "../../../../lib/data";
import {
	ButtonWhiteBG,
	ChevronDown,
	ChevronUp,
	ModalOverlay,
} from "../../../../ui";
import { DashboardButton } from "../../Components";
import {
	addNewDocToProject,
	doc,
	prevForm,
	RemoveNewDocToProject,
} from "../reducer";
import {
	deleteDocument,
	getActiveFormDetails,
	getDelete,
	deletedFormDetails,
} from "../reducer";
import { useSelector } from "react-redux";
import {
	useAddProjectDocumentMutation,
	useDeleteFormMutation,
} from "../../../../features/services/api";
import { getId } from "../../../../shared-component";
import { Spinner } from "../../../../assets";
import { toast } from "react-toastify";
import { useEffect } from "react";

/**DELETE DOCUMENT FUNCTIONALITY */
const DeleteDocument = () => {
	const show = useSelector(getDelete);
	const details = useSelector(deletedFormDetails);
	const dispatch = useDispatch();
	const [Deleteform, { isLoading }] = useDeleteFormMutation();

	const projectDetails = {
		project_id: getId(),
		document_type: details.type,
		document_name: details.id,
	};

	const onDelete = async () => {
		const response = await Deleteform(projectDetails);
		if (response) {
			dispatch(deleteDocument(false));

			if (response?.error) {
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else if (response?.data) {
				toast.error(response?.success?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			}
		}
	};

	return (
		<ModalOverlay show={show}>
			<div>
				{/* Modal content */}
				<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14 bg-white rounded-lg shadow py-10 flex flex-col justify-center items-center">
					<p className="text-gray-900 font-semibold text-lg text-center">
						Are you sure you want to delete this document?
					</p>
					<p className="text-gray-600 text-lg text-center mt-4 mb-8"></p>
					{/* Buttons */}
					<div className="flex gap-4">
						<ButtonWhiteBG
							name="cancel"
							onClick={() => dispatch(deleteDocument(false))}
						/>
						<button
							onClick={onDelete}
							type="button"
							className="uppercase bg-red-500 text-white font-semibold px-4 h-[38px] hover:border hover:border-red-500 rounded hover:bg-white hover:text-red-500"
							disabled={isLoading ? true : false}>
							{isLoading && <Spinner />}{" "}
							{isLoading ? "Loading..." : "Yes, Delete"}
						</button>
					</div>
				</div>
			</div>
		</ModalOverlay>
	);
};

/******* INPUT COMPONENT TO SHOW FOR DOCUMENT THAT ARE NOT ADDED TO A PROJECT */
const AddNewDocument = ({ index, onChange, cur }) => {
	return (
		<label
			htmlFor={cur.id}
			className=" bg-[#699bac] flex justify-between items-center mb-5
						mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base active:bg-[#699bac] focus:border focus:border-black cursor-pointer">
			{cur?.document_name}
			<input
				id={cur.id}
				onChange={(e) => onChange(e, document, cur)}
				value={cur.document_name}
				type="checkbox"
				name={cur.document_name}
				key={index}
			/>
		</label>
	);
};

/***DOCUMENT ATTACHED TO A DOCUMENT */
const AddedDocument = ({ index, onClick, cur }) => {
	return (
		<label
			htmlFor={cur?.id}
			className=" bg-[#699bac] flex justify-between items-center mb-5
						mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base active:bg-[#699bac] focus:border focus:border-black cursor-pointer">
			{cur?.document_name}
			<input
				id={cur?.id}
				onChange={onClick}
				value={cur.document_name}
				checked
				type="checkbox"
				name={cur.document_name}
				key={index}
			/>
		</label>
	);
};

/**** */
const Accordion = ({ data, fetchData }) => {
	const dispatch = useDispatch();
	const selectDoc = useSelector(doc);
	const [activeIndex, setActiveIndex] = useState(null);

	// ONDELETE LOGIC
	const onClick = (doc, e) => {
		dispatch(deleteDocument(true));
		dispatch(getActiveFormDetails({ id: e.document_name, type: doc }));
		// DELETE FORM
	};

	// SELECTING AND UNSELETING A DOCUMENT
	const onChange = (e, d, a) => {
		const deletedID = selectDoc.findIndex(
			(cur) => cur.identifier === a.identifier
		);

		if (e.currentTarget && deletedID === -1) {
			dispatch(
				addNewDocToProject({
					name: a.type,
					document_name: a.document_name,
					identifier: a.identifier,
				})
			);
		} else {
			dispatch(RemoveNewDocToProject(deletedID));
		}
	};

	function removeUnderScore(str) {
		if (str.includes("_")) {
			return str.split("_").join(" ");
		}
		return str;
	}

	return (
		<>
			<DeleteDocument />
			{!data
				? null
				: Object.keys(data)?.map((document, idx) => {
						const active =
							activeIndex === idx ? "h-full" : "h-16 overflow-y-hidden ";
						return (
							<div
								className={`${active} transition-all ease-linear duration-75 overflow-y-hidden`}
								// key={id}
							>
								<h2>
									<button
										onClick={() => {
											setActiveIndex(idx);
										}}
										type="button"
										className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100 rounded-t-lg">
										<span>
											{removeUnderScore(document)}
											{/* {removeUnderScore(document).charAt(0).toUpperCase() +
												document.slice(1)} */}
										</span>
										{/* Down Arrow */}
										{activeIndex !== idx && <ChevronDown />}
										{activeIndex === idx && (
											<ChevronUp close={() => setActiveIndex(null)} />
										)}
									</button>
								</h2>
								<div>
									<ul className="px-4">
										{Object.values(data)[idx].map((cur, index) => {
											if (cur?.name === "edit") {
												return (
													<AddNewDocument
														index={index}
														onChange={(e) => onChange(e, document, cur)}
														cur={cur}
													/>
												);
											} else {
												return (
													<AddedDocument
														index={index}
														cur={cur}
														onClick={() => onClick(document, cur)}
													/>
												);
											}
										})}
									</ul>
								</div>
							</div>
						);
				  })}
		</>
	);
};

const EditDocument = ({ documents, getData }) => {
	const selectDoc = useSelector(doc);
	const [AddProjectDocument, result] = useAddProjectDocumentMutation();

	const [formData, setFormData] = useState({
		Contract: [],
		Budget: [],
		Notice_Letter: [],
		MWBE_Forms: [],
		Procurement: [],
		Project_Closeout: [],
	});
	const [mergedData, setMergedData] = useState({
		Contract: [],
		Budget: [],
		Notice_Letter: [],
		MWBE_Forms: [],
		Procurement: [],
		Project_Closeout: [],
	});
	// EXTRACTING THE UNSELETED DOCUMENT FROM THE LIST OF DOCUMENT.
	const unAssignedDocument = (edit, saved) => {
		return edit?.filter(
			({ identifier: id1 }) => !saved?.some((cur) => cur.identifier === id1)
		);
	};

	// MERGING BOTH UNSELETED AND THE SELECTED DOCUMENT
	const mergedDocuments = (c, d) => {
		let h = [];
		if (!c) {
			h = [...d];
		} else if (!d) {
			h = [...c];
		} else {
			h = [...c, ...d];
		}
		return h;
	};

	async function SubmitDocument() {
		if (selectDoc.length > 0) {
			const response = await AddProjectDocument({
				project_id: getId(),
				documents: selectDoc,
			});
			if (response?.error) {
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else if (response?.data) {
				// error alert
				navigate("/dashboard/add-new-project/preview");
			}
		} else {
			navigate("/dashboard/add-new-project/preview");
		}
	}

	useEffect(() => {
		setFormData(() => {
			return {
				Budget: unAssignedDocument(EditDocumentData?.Budget, documents?.Budget),
				Contract: unAssignedDocument(
					EditDocumentData?.Contract,
					documents?.Contract
				),
				MWBE_Forms: unAssignedDocument(
					EditDocumentData?.MWBE_Forms,
					documents?.MWBE_Forms
				),
				Notice_Letter: unAssignedDocument(
					EditDocumentData?.Notice_letters,
					documents?.Notice_letters
				),
				Procurement: unAssignedDocument(
					EditDocumentData?.Procurement,
					documents?.Procurement
				),
				Project_Closeout: unAssignedDocument(
					EditDocumentData?.Project_Closeout,
					documents?.Project_Closeout
				),
			};
		});
	}, [documents]);

	useEffect(() => {
		if (!formData) {
			return;
		}
		setMergedData(() => {
			return {
				Budget: mergedDocuments(documents?.Budget, formData.Budget),
				Contract: mergedDocuments(documents?.Contract, formData.Contract),
				MWBE_Forms: mergedDocuments(
					documents?.MWBE_Forms,
					formData?.MWBE_Forms
				),
				Notice_Letters: mergedDocuments(
					documents?.Notice_letters,
					formData?.Notice_Letter
				),
				Procurement: mergedDocuments(
					documents?.Procurement,
					formData?.Procurement
				),
				Project_Closeout: mergedDocuments(
					documents?.Project_Closeout,
					formData?.Project_Closeout
				),
			};
		});
	}, [documents, formData]);

	const onClick = () => {
		SubmitDocument();
	};

	const navigate = useNavigate();
	const dispatch = useDispatch();

	// if (!documents) {
	// 	return <Navigate to={"/dashboard"} />;
	// }

	return (
		<form className="" onSubmit={() => console.log("esdklsdkf")}>
			<div className="bg-white border border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8">
				<div className="mb-6">
					<h3 className="font-semibold text-gray-900 text-[32px]">
						Select Documents
					</h3>
					<p className="text-gray-700 text-base mb-4">
						Select documents needed to complete this project
					</p>
					<div className="flex items-center gap-4 mb-4">
						{/* <button className='border-none text-[#623F04] text-base'>
                        Select Template
                    </button> */}
						{/* <button className="underline underline-offset-8 text-[#3B6979] text-base">
							Load Template
						</button> */}
					</div>
				</div>
				{/* Document Accordions */}
				<div className="w-full rounded-lg border border-gray-100">
					<div id="accordion-collapse" data-accordion="collapse">
						<Accordion data={mergedData} />
					</div>
				</div>
			</div>

			{/* Buttons */}
			<div className="flex gap-4 pb-28">
				<ButtonWhiteBG
					name="go back"
					width="w-[168px]"
					onClick={() => dispatch(prevForm(1))}
				/>
				<DashboardButton
					name="NEXT"
					hidden
					type="button"
					width="w-[168px]"
					onClick={onClick}
					loading={result?.isLoading}
				/>
			</div>
		</form>
	);
};

export default EditDocument;
