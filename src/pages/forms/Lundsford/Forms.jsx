import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { ButtonWhiteBG, Error } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { FormSelect } from "../components";
import { FormInputContainer } from "../Notice-of-intent-consultant/Forms";
import { closeModal } from "../reducer";

const Forms = (props) => {
	const {
		handleChange,
		error,
		touched,
		handleSubmit,
		isLoading,
		value,
		addressValue,
	} = props;
	const formID = useSelector(project_document_id);
	const [a] = UseFetchFilledFormDetails(formID);
	const [length, setLength] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		setLength(a?.data?.vendors.length);
	}, [a.data]);

	const addressCopy = {
		value: addressValue,
		onChange: handleChange,
		id: "addressCopy",
		placeholder: "Select",
	};

	return (
		<div>
			<div
				className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}
				<form
					onSubmit={handleSubmit}
					className="relative w-[600px] bg-white rounded-lg shadow py-4">
					<div className="flex justify-between items-baseline mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								Attachment A Lunsford Act Form
							</h3>
							<p className="text-base text-gray-700">
								Sexual Offender Registry Check Certification Form
							</p>
						</div>
						<button
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal"
							onClick={() => dispatch(closeModal())}>
							<Close />
						</button>
					</div>

					{/* Progress */}
					<div className="w-full bg-[#89A5AF] h-2.5 my-4">
						<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-6">
							{length > 1 ? (
								<FormInputContainer name="For whom is this form being created?">
									<FormSelect {...addressCopy}>
										{!addressValue ? (
											<option>Select</option>
										) : (
											<option value={addressValue}>{addressValue}</option>
										)}
										<option value="Design Consultant">Design Consultant</option>
										<option value="Contractor">Contractor</option>
										<option value="Engineering">Engineering</option>
										<option value="Construction Manager">
											Construction Manager
										</option>
									</FormSelect>
								</FormInputContainer>
							) : null}
						</div>
						<small className="text-gray-900 font-medium">
							To Specify the type of check, check the relevant option.
						</small>

						<div className=" mt-3 ml-2">
							<div className="flex items-center mb-5">
								<input
									id="default-radio-1"
									type="radio"
									value="Initial"
									checked={value === "Initial" ? true : false}
									name="type"
									onChange={handleChange}
									className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
								/>
								<label
									for="default-radio-1"
									className="ml-2 text-base text-gray-900">
									Initial
								</label>
							</div>
							<div className="flex items-center mb-5">
								<input
									id="default-radio-1"
									type="radio"
									value="Supplemental"
									checked={value === "Supplemental" ? true : false}
									name="type"
									onChange={handleChange}
									className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
								/>
								<label
									for="default-radio-1"
									className="ml-2 text-base text-gray-900">
									Supplemental
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="default-radio-1"
									type="radio"
									value="Annual"
									checked={value === "Annual" ? true : false}
									name="type"
									className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
									onChange={handleChange}
								/>
								<label
									for="default-radio-1"
									className="ml-2 text-base text-gray-900">
									Annual
								</label>
							</div>
						</div>
						{error && touched && <Error message={error} />}
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="cancel"
							onClick={() => dispatch(closeModal())}
						/>
						<DashboardButton
							hidden
							name="NEXT"
							type="submit"
							width="w-[77px]"
							loading={isLoading}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Forms;
