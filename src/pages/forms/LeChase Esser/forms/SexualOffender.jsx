import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const SexualOffender = ({
	handleChange,
	error,
	touched,
	handleSubmit,
	isLoading,
	values,
}) => {
	const dispatch = useDispatch();
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
								LeChase Esser Contract Template
							</h3>
							<p className="text-base text-gray-700">
								Sexual Offender Registry Check Certification Form
							</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal"
							// onClick={close}
						>
							<Close />
						</button>
					</div>

					{/* Progress */}
					<div className="w-full bg-[#89A5AF] h-2.5 my-4">
						<div className="bg-[#2F5461] h-2.5 w-[100%]"></div>
					</div>

					<div className="mx-6 mb-12">
						<small className="text-gray-900 font-medium">
							To Specify the type of check, check the relevant option.
						</small>
						<div className=" mt-3 ml-2">
							<div className="flex items-center mb-5">
								<input
									id="default-radio-1"
									type="radio"
									value="Initial"
									name="type"
									checked={values.type === "Initial" ? true : false}
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
									checked={values.type === "Supplemental" ? true : false}
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
									checked={values.type === "Annual" ? true : false}
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
							name="back"
							onClick={() => dispatch(prevChoiceStep(1))}
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

export default SexualOffender;
