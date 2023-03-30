import { DashboardNav } from "../../Components";
import { ProfileDetails } from "../Profile-settings/ProfileSettingsComponent";
import {
	useUpdateDurhamDetailsMutation,
	useFetchDurhamQuery,
} from "../../../../features/services/api";
import { toast } from "react-toastify";
import { PageNavigation } from "../components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getSaveData, save_profile } from "./ReducerSlice";
import { FullPageLoader } from "../../../../ui";

const DurhamSettings = () => {
	let a = {
		chair_dps_board_of_education: "",
		chief_finance_officer: "",
		construction_capital_planning_interim_executive_director: "",
		construction_capital_planning_business_manager: "",
		construction_capital_planning_project_manager: "",
		construction_capital_planning_project_managers_phone_number: "",
		director_of_construction_and_sustainability: "",
		director_of_design_and_construction: "",
		executive_director_durham_public_schools_building_services: "",
	};
	const [values, setValue] = useState(a);
	const [target, setTarget] = useState({});
	const [updateDurhamDetails, { isLoading }] = useUpdateDurhamDetailsMutation();

	const dispatch = useDispatch();
	const result = useFetchDurhamQuery();

	useEffect(() => {
		let data = {};
		if (!result?.data) {
			return;
		}
		result.data?.forEach((item, i) => {
			data = { ...data, [result.data[i].slug]: result.data[i].value };
			setValue(data);
		});
	}, [dispatch, result]);

	const HandleRequest = async (values) => {
		const response = await updateDurhamDetails({ ...values });

		if (response) {
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

	const onChange = (e) => {
		const { value, title, name } = e.target;
		setTarget({ [title]: value });

		setValue((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (target) {
			Object.entries(target).forEach((cur) => {
				const [name, value] = [cur[0], cur[1]];
				HandleRequest({ name, value });
			});
		}
	};

	const props = {
		chair_board_education: {
			indx: 0,
			value: values?.chair_dps_board_of_education,
			name: "Chair, DPS Board of Education",
			id: "chair_dps_board_of_education",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		chief_finance_officer: {
			indx: 1,
			value: values?.chief_finance_officer,
			name: "Chief Finance Officer",
			id: "chief_finance_officer",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		construction_interim_director: {
			indx: 2,
			value: values?.construction_capital_planning_interim_executive_director,
			name: "Construction & Capital Planning Interim Executive Director",
			id: "construction_capital_planning_interim_executive_director",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		business_Manager: {
			indx: 3,
			value: values?.construction_capital_planning_business_manager,
			name: "Construction & Capital Planning Business Manager",
			id: "construction_capital_planning_business_manager",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		project_manager: {
			indx: 4,
			value: values?.construction_capital_planning_project_manager,
			name: " Construction & Capital Planning Project Manager",
			id: "construction_capital_planning_project_manager",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		project_manager_phone: {
			indx: 5,
			value:
				values?.construction_capital_planning_project_managers_phone_number,
			name: "Construction & Capital Planning Project Manager's Phone Number",
			id: "construction_capital_planning_project_managers_phone_number",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		director_construction: {
			indx: 6,
			value: values?.director_of_construction_and_sustainability,
			name: " Director of Construction and Sustainability",
			id: "director_of_construction_and_sustainability",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		director_design: {
			indx: 7,
			value: values?.director_of_design_and_construction,
			name: " Director of Design and Construction",
			id: "director_of_design_and_construction",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
		director_durham: {
			indx: 8,
			value: values?.executive_director_durham_public_schools_building_services,
			name: " Executive Director Durham Public Schools Building Services",
			id: "executive_director_durham_public_schools_building_services",
			placeholder: "Enter first name and last name",
			onChange,
			onSubmit,
		},
	};

	return (
		<section>
			{!result?.data && <FullPageLoader />}

			<article>
				<DashboardNav />
				{/* <!-- Navbar --> */}
			</article>

			{/* Durham Info */}
			<article className=" pt-6">
				<div className="container mx-auto px-4 lg:px-24">
					<PageNavigation next="Durham Information" />

					{/* Details */}
					<div className="w-full lg:w-[552px]">
						<ProfileDetails data={props} loading={isLoading} />
					</div>
				</div>
			</article>
		</section>
	);
};

export default DurhamSettings;
