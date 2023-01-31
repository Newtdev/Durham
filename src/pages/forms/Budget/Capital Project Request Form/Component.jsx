import React from "react";
import {
	useFetchDurhamQuery,
	useGetAllProjectManagerQuery,
} from "../../../../features/services/api";
import { Error } from "../../../../ui";
import { FormSelect } from "../../components";

const Component = (props) => {
	const { error, touched, label } = props;

	return (
		<div className="flex flex-col">
			<label className="text-base text-gray-900 mb-1">{label}</label>
			<div className="relative w-full">
				<input
					{...props}
					className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] w-full py-2 pl-8 pr-2 focus:outline-gray-400 "
				/>
				<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
					$
				</small>
			</div>
			{error && touched && <Error message={error} />}
		</div>
	);
};

export default Component;

export const PointOfContact = (props) => {
	const project_manager = useGetAllProjectManagerQuery({ queryValue: "" });
	const durham = useFetchDurhamQuery({ queryValue: "" });

	const getNameAndValue = () => {
		if (!durham?.data || !project_manager?.data) return null;
		return [
			...durham?.data?.filter(
				(value) =>
					value?.name !==
					"Construction & Capital Planning Project Manager's Phone Number"
			),
			...project_manager?.data?.data?.data,
		].map((name, index) => {
			return (
				<>
					{name?.first_name && (
						<option
							key={index}
							value={name?.first_name + " " + name?.last_name}>
							{name?.first_name + " " + name?.last_name}
						</option>
					)}
					{name?.value && <option value={name?.value}>{name?.value}</option>}
				</>
			);
		});
	};
	return (
		<FormSelect {...props}>
			{!props.value ? (
				<option value="">Select</option>
			) : (
				<option value={props.value}>{props.value}</option>
			)}
			{getNameAndValue()}
			<option value="Add New">Add New</option>
		</FormSelect>
	);
};
