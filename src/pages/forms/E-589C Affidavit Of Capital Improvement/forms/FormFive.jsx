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

const FormFive = (props) => {
	const dispatch = useDispatch();
	const vendors = useGetVendorsQuery({ queryValue: "" });
	const states = useSelector(getList);
	const [focus, setValue] = useState();
	const vendorData = !vendors?.data ? [] : vendors?.currentData?.data?.data;

	useEffect(() => {
		if (!focus) {
		} else {
			vendorData?.forEach((cur) => {
				if (cur.company_name === props.values.lesseeC) {
					props.values.companyNameC = cur.company_name;
					props.values.companyAddressC = cur.street;
					props.values.conferenceCityC = cur.city;
					props.values.conferenceStateC = cur.state;
					props.values.conferenceZipCodeC = cur.zip_code;
				} else {
					return (
						props.values.companyNameC,
						props.values.companyAddressC,
						props.values.conferenceCityC,
						props.values.conferenceStateC,
						props.values.conferenceZipCodeC
					);
				}
			});
		}
	}, [props.values, vendorData, focus]);

	function CheckState() {
		if (!props.values.conferenceStateC) {
			return;
		}
		if (!states) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === props.values.conferenceStateC
		);
		if (!stat) {
			return;
		}

		return Object.keys(stat.cities)?.map((cur, id) => {
			return (
				<option key={id} value={cur}>
					{cur}
				</option>
			);
		});
	}

	function CheckZipCode() {
		if (!props.values.conferenceCityC) {
			return;
		}
		if (!states) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === props.values.conferenceStateC
		);
		const zipcode = city?.find((cities) => cities);
		return zipcode?.cities[props.values.conferenceCityC]?.map(
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
						<p className="text-base text-gray-700">Box C</p>
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
						<FormInputContainer name="Select Real Property Contractor">
							<FormSelect
								value={props.values.lesseeC}
								onChange={(e) => {
									setValue(true);
									if (e.target.value === "Add New Lessee") {
										setValue(false);

										props.setFieldValue(`lesseeC`, props.values.companyNameA);
									} else {
										props.setFieldValue(`lesseeC`, e.target.value);
									}
								}}
								id="lesseeC"
								name="">
								<option>Selct Company</option>;
								<option value="NewCompany">Add New Company</option>;
								{vendorData?.map((cur) => {
									return (
										<option value={cur.company_name}>{cur.company_name}</option>
									);
								})}
							</FormSelect>

							{props.errors.lesseeC && props.touched.lesseeC && (
								<Error message={props.errors.lesseeC} />
							)}
						</FormInputContainer>
						<p className="text-base text-gray-700 my-2">
							Enter Lessee/Tenant/Real Property Contractor details
						</p>
						<hr />
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">Company Name</label>
							<input
								value={props.values.companyNameC}
								onChange={props.handleChange}
								type="text"
								name="companyNameC"
								id="companyNameC"
								placeholder="Company Name"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
						</div>
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">
								Company Address
							</label>
							<input
								value={props.values.companyAddressC}
								name="companyAddressC"
								id="companyAddressC"
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
									inputname="conferenceStateC"
									value={props.values.conferenceStateC}
									handleChange={props.handleChange}
									fn={() => GetState(states)}
									placeholder="State"
								/>
							</div>
							<div className="flex-1">
								<DataListComponent
									name="City"
									inputname="conferenceCityC"
									value={props.values.conferenceCityC}
									handleChange={props.handleChange}
									fn={() => CheckState()}
									placeholder="City"
								/>
							</div>
							<div className="flex-1">
								<DataListComponent
									name="Zip code"
									inputname="conferenceZipCodeC"
									value={props.values.conferenceZipCodeC}
									handleChange={props.handleChange}
									fn={() => CheckZipCode()}
									placeholder="Zip code"
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
								return dispatch(prevChoiceStep(4));
							} else if (props.blanket) {
								return dispatch(prevChoiceStep(1));
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

export default FormFive;
