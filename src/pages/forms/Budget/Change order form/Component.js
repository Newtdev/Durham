import { useGetVendorsQuery } from "../../../../features/services/api";
import { FormSelect } from "../../components";

export const SelectComponent = (props) => {
	const vendors = useGetVendorsQuery({ queryValue: "" });
	const vendor = vendors?.data?.data?.data;

	const showVendor = () => {
		if (!vendors?.data) return null;
		return vendor?.map((vendor, index) => {
			return (
				<option key={index} value={vendor.company_name}>
					{vendor.company_name}
				</option>
			);
		});
	};

	return (
		<FormSelect
			value={props.values.vendor}
			name="Select Vendor"
			id="vendor"
			error={props.errors.vendor}
			touched={props.touched.vendor}
			onChange={props.handleChange}>
			<option value="">Select</option>
			{showVendor()}
			<option value="">Add New Vendor</option>
		</FormSelect>
	);
};
