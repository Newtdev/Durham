import User from "../../../assets/Avatar.svg";
import Logo from "../../../assets/logo.svg";
import ChevronDown from "../../../assets/chevronDown.svg";
import Plus from "../../../assets/Plus.svg";
import SortIcon from "../../../assets/sortIcon.svg";
import SearchIcon from "../../../assets/searchIcon.svg";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import Pagination from "@mui/material/Pagination";

import { Link, useNavigate } from "react-router-dom";
import { Error, Label, Select, SubmitButton } from "../../../ui";
import { Spinner } from "../../../assets";
import { useState } from "react";
import { useFetchSingleProjectManagerQuery } from "../../../features/services/api";
import { userDetails } from "../../../features/auth";
import { useSelector } from "react-redux";

/***** DASHBOARD HEADER AND NAVIGATION ********/
export function DashboardNav() {
	const profile = useSelector(userDetails);
	// PASS IN THE ID
	const result = useFetchSingleProjectManagerQuery(profile.id);
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	function LinkList() {
		return (
			<ul className="flex gap-8">
				{[
					{ id: 1, name: "Dashboard", link: "" },
					{
						id: 3,
						name: "Projects Manager",
						link: "product-manager",
					},
					{ id: 4, name: "Vendors", link: "vendors" },
					{ id: 5, name: "Schools", link: "schools" },
				].map(({ name, id, link }) => {
					return (
						<li key={id}>
							<Link
								to={`/dashboard/${link}`}
								className="block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0">
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		);
	}

	const image = !result?.data?.filename?.url
		? User
		: result?.data?.filename?.url;

	return (
		<nav className="bg-white border-b-2 border-[linear-gradient(180deg, #F0F0F0 0%, rgba(255, 255, 255, 0) 100%)] px-6 py-4 sm:px-4 ">
			<div
				className="container flex flex-wrap items-center justify-start mx-auto"
				onClick={() => setShow(!show)}>
				<span className="w-20 mr-8">
					<Link to="/dashboard">
						<img src={Logo} className="w-full object-cover" alt="Durham Logo" />
					</Link>
				</span>
				<div className=" ml-auto md:order-2 relative">
					<button
						onClick={() => setShow(!show)}
						type="button"
						className="flex items-center gap-2 "
						id="user-menu-button"
						aria-expanded="false"
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom">
						<img className="w-8 h-8 rounded-full" src={image} alt="user" />
						<img className="w-2" src={ChevronDown} alt="dropdown button" />
					</button>
					{/* <!-- Dropdown menu --> */}
					<div
						className={`z-50 ${
							show ? "visible" : "invisible"
						} absolute top-5  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
						id="user-dropdown`}>
						<ul>
							<li>
								<Link
									to="/dashboard/settings"
									className="block  px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
									Settings
								</Link>
							</li>
							<li
								className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
								onClick={() => {
									localStorage.removeItem("durham_token");
									navigate("/");
								}}>
								Log Out
							</li>
						</ul>
					</div>
					<button
						data-collapse-toggle="mobile-menu-2"
						type="button"
						className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="mobile-menu-2"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"></path>
						</svg>
					</button>
				</div>
				{/* Main menu list */}
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="mobile-menu-2">
					<LinkList />
				</div>
			</div>
		</nav>
	);
}

/****************** DASHBOARD BUTTON *************/

export function DashboardButton({
	name,
	width,
	hidden,
	type,
	onClick,
	loading,
}) {
	return (
		<button
			disabled={!loading ? false : true}
			onClick={onClick}
			className={`text-white text-sm font-normal ${width} hover:bg-blue-800 hover:text-white focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
			type={type}>
			{!hidden && <img src={Plus} alt="" className="mr-4" />}
			{loading && <Spinner />} {loading ? "Loading..." : name}
		</button>
	);
}

/**************SORT COMPONENTS**************/

export function Sort() {
	return (
		<div className="flex items-center justify-center">
			<p className="mr-4 font-bold text-gray-700">Sort By:</p>
			<div>
				<button
					className="inline-flex items-center text-gray-700 bg-white border border-gray-300 rounded px-3 py-1.5 focus:border-[#3B6979]"
					type="button">
					<img className="mr-1" src={SortIcon} alt="sort" />
					Name (A-Z)
					<svg
						className="ml-2 w-3 h-3"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"></path>
					</svg>
				</button>
			</div>
		</div>
	);
}

/**********SEARCH COMPONENTS*************** */

export function Search({ submit, setQuery, placeholder }) {
	return (
		<form
			className="flex flex-row justify-center items-center gap-4"
			onSubmit={submit}>
			<div>
				<label for="table-search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
						<img src={SearchIcon} alt="search" />
					</div>
					<input
						onChange={(e) => setQuery(e.target.value)}
						type="text"
						id="table-search"
						className="block p-2 pl-8 w-72 text-sm text-gray-900 bg-white rounded border border-gray-400 focus:outline-[#3B6979]"
						placeholder={placeholder}
					/>
				</div>
			</div>
			<SubmitButton name="search" />
			{/* <ButtonWhiteBG name="search" onClick={submit} /> */}
		</form>
	);
}

/*************DASHBOARD HEADER TABLE*********************/

export function TableHeader({ dataArray }) {
	return (
		<thead className="text-xs bg-white font-medium">
			<tr>
				{dataArray?.map((name, index) => {
					return (
						<th key={index} scope="col" className="py-4 px-4">
							{name}
						</th>
					);
				})}
			</tr>
		</thead>
	);
}

/*************DASHBOARD HEADER TABLE*********************/

export function TableBody({ dataArray, onDelete, onEdit }) {
	return (
		<tbody className="text-xs bg-white font-medium">
			{dataArray?.data?.map((manager, index) => {
				const { id, last_name, first_name, email, phone } = manager;
				const strip = index % 2 !== 0 ? "bg-white" : "bg-gray-50";
				return (
					<tr key={id} className={`${strip} border-b`}>
						<th
							scope="row"
							className="py-4 px-4 font-normal capitalize text-gray-900 whitespace-nowrap">
							{first_name}
						</th>
						<th
							scope="row"
							className="py-4 px-4 font-normal capitalize text-gray-900 whitespace-nowrap">
							{last_name}
						</th>
						<td className="py-4 px-4">{email}</td>
						<td className="py-4 px-4 whitespace-nowrap">{phone}</td>
						<td className="py-4 px-4 flex items-center justify-start gap-3">
							<span className="w-4 cursor-pointer" onClick={() => onDelete(id)}>
								<img className="w-full" src={Delete} alt="delete" />
							</span>
							<span
								className="w-4 cursor-pointer"
								onClick={() => onEdit(manager)}>
								<img className="w-full" src={Edit} alt="edit" />
							</span>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

/*************PAGINATION***************/

export function Paginations(props) {
	const { data, page, getPage } = props;

	const handleChange = (e, value) => {
		getPage(value);
	};
	if (data?.data?.last_page === 1 || !data?.data?.last_page) {
		return null;
	}

	return (
		<nav
			className="mb-4 flex justify-center items-center pt-4"
			aria-label="Table navigation">
			<Pagination
				count={data?.data?.last_page}
				page={page}
				onChange={handleChange}
				color="primary"
			/>
		</nav>
	);
}

export function Input(props) {
	const { placeholder, id, onChange, value } = props;
	return (
		<input
			className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979] block w-[424px] p-2.5"
			name={id}
			placeholder={placeholder}
			type="text"
			value={value}
			onChange={onChange}
		/>
	);
}

export function DashboardInput(props) {
	const { name, error, touched } = props;
	return (
		<div className="mb-4 w-[360px]">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<Input {...props} />
			{error && touched && <Error message={error} />}
		</div>
	);
}

export function PageHeader({ name }) {
	return <h1 className="text-[#0c1518] font-semibold text-3xl">{name}</h1>;
}

export function SelectContainer(props) {
	const { name, error, touched } = props;
	return (
		<div className="mb-4 w-full">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<Select {...props} />
			{error && touched && <Error message={error} />}
		</div>
	);
}

/********CLOSE ICON FOR MODAL******** */

export function Close() {
	return (
		<svg
			aria-hidden="true"
			className="w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"></path>
		</svg>
	);
}

export function OverviewNav() {
	function LinkList() {
		return (
			<ul className="flex gap-8">
				{["Dashboard", "Project Managers", "Vendors", "Users"].map(
					(name, id) => {
						return (
							<li key={id}>
								<Link
									to={`/dashboard/${name}`}
									className="block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0">
									{name}
								</Link>
							</li>
						);
					}
				)}
			</ul>
		);
	}
}

export function ProjectOverviewNav() {
	return (
		<nav className="bg-white border-b-2 border-[linear-gradient(180deg, #F0F0F0 0%, rgba(255, 255, 255, 0) 100%)] px-6 py-4 sm:px-4 h-20">
			<div className="container flex flex-wrap items-center justify-start mx-auto">
				<Link to="/dashboard" className="w-40 mr-6">
					<img src={Logo} className="w-full" alt="Durham Logo" />
				</Link>
			</div>
		</nav>
	);
}

export function Filter({ onChange, params }) {
	return (
		<div className="flex items-center justify-center">
			<p className="mr-4 font-bold text-gray-700 ">View:</p>
			<div className="flex flex-col items-center justify-center  h-16 mt-6">
				<select
					onChange={onChange}
					className="inline-flex items-center text-gray-400 bg-white border border-gray-300 rounded px-3 py-1.5 focus:border-[#3B6979] w-full">
					<option>My Projects</option>
					<option value="all">All Projects</option>
				</select>

				<p className="text-[#3b6979] text-base text-center mt-1 mr-2">
					{params === "My Projects" || params === ""
						? "My Projects"
						: "All Projects"}
				</p>
			</div>
		</div>
	);
}
