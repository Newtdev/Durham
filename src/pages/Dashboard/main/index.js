import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectFormsController from "../add-project";

const Vendors = lazy(() => import("../Vendors-mangement"));
const ProjectManager = lazy(() =>
	import("../Product-manager-management/Product-manager")
);
const Settings = lazy(() => import("../Settings/main"));
const DurhamSettings = lazy(() => import("../Settings/Durhams-settings"));
const ProfileSettings = lazy(() => import("../Settings/Profile-settings"));
const ProjectDashboard = lazy(() => import("../Overview-dashboard"));

const Dashboard = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" index element={<ProjectDashboard />} />
				<Route path="/add-new-project" element={<ProjectFormsController />} />
				<Route path="/product-manager" element={<ProjectManager />}></Route>
				<Route path="/vendors" element={<Vendors />}></Route>
				<Route path="/settings" element={<Settings />} />
				<Route path="/settings/durhams-profile" element={<DurhamSettings />} />
				<Route path="/settings/profile" element={<ProfileSettings />} />
			</Routes>
		</Suspense>
	);
};

export default Dashboard;
