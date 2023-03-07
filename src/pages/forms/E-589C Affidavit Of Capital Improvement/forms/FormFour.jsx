import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetVendorsQuery } from "../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect, FormTextArea } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const FormFour = (props) => {
	const dispatch = useDispatch();
	const vendors = useGetVendorsQuery({ queryValue: "" });
	const states = useSelector(getList);
	const [focus, setValue] = useState();
	const vendorData = !vendors?.data ? [] : vendors?.currentData?.data?.data;

	useEffect(() => {
		if (!focus) {
		} else {
			vendorData?.forEach((cur) => {
				if (cur.company_name === props.values.lesseeB) {
					props.values.companyNameB = cur.company_name;
					props.values.companyAddressB = cur.street;
					props.values.conferenceCityB = cur.city;
					props.values.conferenceStateB = cur.state;
					props.values.conferenceZipCodeB = cur.zip_code;
				} else {
					return (
						props.values.companyNameB,
						props.values.companyAddressB,
						props.values.conferenceCityB,
						props.values.conferenceStateB,
						props.values.conferenceZipCodeB
					);
				}
			});
		}
	}, [props.values, vendorData, focus]);

	function CheckState() {
		if (!props.values.conferenceStateB) {
			return;
		}
		if (!states) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === props.values.conferenceStateB
		);

		if (!stat) {
			return;
		}
		return Object.keys(stat?.cities)?.map((cur, id) => {
			return (
				<option key={id} value={cur}>
					{cur}
				</option>
			);
		});
	}

	function CheckZipCode() {
		if (!props.values.conferenceCityB) {
			return;
		}
		if (!states) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === props.values.conferenceStateB
		);
		const zipcode = city?.find((cities) => cities);
		return zipcode?.cities[props.values.conferenceCityB]?.map(
			(zipcode, index) => {
				return (
					<option key={index} value={zipcode}>
						{zipcode}
					</option>
				);
			}
		);
	}

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							E-589CI Affidavit of Capital Improvement
						</h3>
						<p className="text-base text-gray-700">Box B</p>
					</div>
					<button
						onClick={() => dispatch(closeModal())}
						type="button"
						className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						data-modal-toggle="small-modal">
						<Close />
					</button>
				</div>
				{/* Progress */}
				<hr />
				<div className="mx-6 mb-12">
					<div className=" mt-3 ml-2">
						<FormInputContainer name="Select Real Property Contractor(General Contractor or Subcontractor)">
							<FormSelect
								value={props.values.lesseeB}
								onChange={(e) => {
									setValue(true);
									props.setFieldValue(`lesseeB`, e.target.value);
								}}
								id="lesseeB"
								name="">
								<option>Selct Company</option>;
								<option value="NewCompany">Add New Company</option>;
								{vendorData?.map((cur) => {
									return (
										<option value={cur.company_name}>{cur.company_name}</option>
									);
								})}
							</FormSelect>

							{props.errors.lesseeB && props.touched.lesseeB && (
								<Error message={props.errors.lesseeB} />
							)}
						</FormInputContainer>
						<p className="text-base text-gray-700 my-2">
							Enter Lessee/Tenant/Real Property Contractor details
						</p>
						<hr />
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">Company Name</label>
							<input
								value={props.values.companyNameB}
								onChange={props.handleChange}
								type="text"
								name="companyNameB"
								id="companyNameB"
								placeholder="Company Name"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
						</div>
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">
								Company Address
							</label>
							<input
								value={props.values.companyAddressB}
								name="companyAddressB"
								id="companyAddressB"
								onChange={props.handleChange}
								type="text"
								placeholder="Street"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex-1">
								<FormSelect
									value={props.values.conferenceStateB}
									id="conferenceStateB"
									onChange={props.handleChange}>
									{props.values.conferenceStateB ? (
										<option value={props.values.conferenceStateB}>
											{props.values.conferenceStateB}
										</option>
									) : (
										<option value="">Select State</option>
									)}
									{!states
										? null
										: Object.entries(states).map((cur, index) => {
												return (
													<option key={index} value={cur[1].name}>
														{cur[1].name}
													</option>
												);
										  })}
								</FormSelect>
								{props.errors.conferenceStateB &&
									props.touched.conferenceStateB && (
										<Error message={props.errors.conferenceStateB} />
									)}
							</div>
							<div className="flex-1">
								<FormSelect
									value={props.values.conferenceCityB}
									id="conferenceCityB"
									onChange={props.handleChange}>
									{props.values.conferenceCityB ? (
										<option value={props.values.conferenceCityB}>
											{props.values.conferenceCityB}
										</option>
									) : (
										<option value="">Select City</option>
									)}
									{CheckState()}
								</FormSelect>

								{props.errors.conferenceCityB &&
									props.touched.conferenceCityB && (
										<Error message={props.errors.conferenceCityB} />
									)}
							</div>
							<div className="flex-1">
								<FormSelect
									value={props.values.conferenceZipCodeB}
									id="conferenceZipCodeB"
									onChange={props.handleChange}>
									{props.values.conferenceZipCodeB ? (
										<option value={props.values.conferenceZipCodeB}>
											{props.values.conferenceZipCodeB}
										</option>
									) : (
										<option value="">Zip Code</option>
									)}
									{CheckZipCode()}
								</FormSelect>

								{props.errors.conferenceZipCodeB &&
									props.touched.conferenceZipCodeB && (
										<Error message={props.errors.conferenceZipCodeB} />
									)}
							</div>
						</div>
						<div className="flex flex-col gap-1 mt-4">
							<FormTextArea
								onChange={props.handleChange}
								id="improvement"
								limit="100"
								placeholder={"Describe the capital improvement to be performed"}
								name="Describe the capital improvement to be performed."
							/>
						</div>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => {
							if (props.both === "lessee") {
								return dispatch(prevChoiceStep(3));
							} else if (props.both === "owner") {
								return dispatch(prevChoiceStep(2));
							} else if (props.single === "lessee") {
								return dispatch(prevChoiceStep(5));
							} else if (props.single === "owner") {
								return dispatch(prevChoiceStep(4));
							} else {
								return;
							}
						}}
					/>
					<DashboardButton
						hidden
						name="NEXT"
						type="submit"
						width="w-[77px]"
						loading={props?.isLoading}
					/>
				</div>
			</form>
		</div>
	);
};

export default FormFour;
