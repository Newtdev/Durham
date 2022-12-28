import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { userInfo } from "../../../features/auth";
import PunchList from "../../forms/Punch List/PunchList";
const Vendors = lazy(() => import("../Vendors-mangement"));
const ProjectDetails = lazy(() => import("../project-details"));
const ProjectManager = lazy(() =>
	import("../Product-manager-management/Product-manager")
);
const Settings = lazy(() => import("../Settings/main"));
const DurhamSettings = lazy(() => import("../Settings/Durhams-settings"));
const ProfileSettings = lazy(() => import("../Settings/Profile-settings"));
const ProjectDashboard = lazy(() => import("../Overview-dashboard"));
const ProjectPreview = lazy(() => import("../project-dashboard"));
const ProjectFormsController = lazy(() => import("../add-project"));

const Dashboard = () => {
	const dispatch = useDispatch();
	const data = JSON.parse(localStorage.getItem("durham_token"));

	useEffect(() => {
		if (!data) {
			return;
		}
		dispatch(userInfo(data));
	}, [dispatch, data]);
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" index element={<ProjectDashboard />} />
				<Route path="/add-new-project" element={<ProjectFormsController />} />
				<Route path="/forms" element={<PunchList />} />
				<Route path="/product-manager" element={<ProjectManager />}></Route>
				<Route path="/vendors" element={<Vendors />}></Route>
				<Route path="/settings" element={<Settings />} />
				<Route path="/settings/durhams-profile" element={<DurhamSettings />} />
				<Route path="/settings/profile" element={<ProfileSettings />} />
				<Route path="/add-new-project/preview" element={<ProjectPreview />} />
				<Route path="/project-details/:id" element={<ProjectDetails />} />
			</Routes>
		</Suspense>
	);
};

export default Dashboard;
