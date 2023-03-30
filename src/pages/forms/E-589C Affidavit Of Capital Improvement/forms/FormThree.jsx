import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetVendorsQuery } from "../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { DataListComponent, GetState } from "../Affidavit";
import { prevChoiceStep } from "../reducer";

const FormThree = (props) => {
	const dispatch = useDispatch();
	const vendors = useGetVendorsQuery({ queryValue: "" });
	const states = useSelector(getList);
	const [focus, setValue] = useState();
	const vendorData = !vendors?.data ? [] : vendors?.currentData?.data?.data;

	useEffect(() => {
		if (!focus) {
		} else {
			vendorData?.forEach((cur) => {
				if (cur.company_name === props.values.lesseeA) {
					props.values.companyNameA = cur.company_name;
					props.values.companyAddressA = cur.street;
					props.values.conferenceCityA = cur.city;
					props.values.conferenceStateA = cur.state;
					props.values.conferenceZipCodeA = cur.zip_code;
				} else {
					return (
						props.values.companyNameA,
						props.values.companyAddressA,
						props.values.conferenceCityA,
						props.values.conferenceStateA,
						props.values.conferenceZipCodeA
					);
				}
			});
		}
	}, [props.values, vendorData, focus]);

	function CheckState() {
		if (!props.values.conferenceStateA) {
			return;
		}
		if (!states) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === props.values.conferenceStateA
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
		if (!props.values.conferenceCityA) {
			return;
		}
		if (!states) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === props.values.conferenceStateA
		);

		const zipcode = city?.find((cities) => cities);
		return zipcode?.cities[props.values.conferenceCityA]?.map(
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
						<p className="text-base text-gray-700">Box A</p>
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
				<div className="w-full bg-[#89A5AF] h-2.5 my-4">
					<div className="bg-[#2F5461] h-2.5 w-[33.3%]"></div>
				</div>
				<div className="mx-6 mb-12">
					<div className=" mt-3 ml-2">
						<FormInputContainer name="Select Lessee/Tenant/Real Property Contractor">
							<FormSelect
								value={props.values.lesseeA}
								onChange={(e) => {
									setValue(true);

									if (e.target.value === "Add New Lessee") {
										setValue(false);
										props.setFieldValue(
											`companyNameA`,
											props.values.companyNameA
										);
									} else {
										props.setFieldValue(`lesseeA`, e.target.value);
									}
								}}
								id="lesseeA"
								name="">
								<option>Select Lessee/Tenant/Real Property Contractor</option>;
								<option value="Add New Lessee">
									Add New Lessee/Tenant/Real Property Contractor
								</option>
								;
								{vendorData?.map((cur) => {
									return (
										<option value={cur.company_name}>{cur.company_name}</option>
									);
								})}
							</FormSelect>

							{props.errors.lesseeA && props.touched.lesseeA && (
								<Error message={props.errors.lesseeA} />
							)}
						</FormInputContainer>
						<p className="text-base text-gray-700 my-2">
							Enter Lessee/Tenant/Real Property Contractor details
						</p>
						<hr />
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">Company Name</label>
							<input
								value={props.values.companyNameA}
								onChange={props.handleChange}
								type="text"
								name="companyNameA"
								id="companyNameA"
								placeholder="Company Name"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
						</div>
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">
								Company Address
							</label>
							<input
								value={props.values.companyAddressA}
								name="companyAddressA"
								id="companyAddressA"
								onChange={props.handleChange}
								type="text"
								placeholder="Street"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex-1">
								<DataListComponent
									name="State"
									inputname="conferenceStateA"
									value={props.values.conferenceStateA}
									handleChange={props.handleChange}
									fn={() => GetState(states)}
									placeholder="State"
								/>
							</div>
							<div className="flex-1">
								<DataListComponent
									name="City"
									inputname="conferenceCityA"
									value={props.values.conferenceCityA}
									handleChange={props.handleChange}
									placeholder="City"
									fn={() => CheckState()}
								/>
							</div>
							<div className="flex-1">
								<DataListComponent
									name="Zip code"
									inputname="conferenceZipCodeA"
									value={props.values.conferenceZipCodeA}
									handleChange={props.handleChange}
									placeholder="Zip code"
									fn={() => CheckZipCode()}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="back"
						onClick={() => {
							if (props.both) {
								return dispatch(prevChoiceStep(2));
							} else if (props.single) {
								return dispatch(prevChoiceStep(4));
							} else {
								return;
							}
						}}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default FormThree;
