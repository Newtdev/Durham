import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { userInfo } from "../../../features/auth";
import { useIdleTimer } from "react-idle-timer";
import OwnerContractorManagementForm from "../../forms/Contract/Owner and Contract Management (CM_CMAR) Agreement";
import EditProjectDashboard from "../Overview-dashboard/EditProjectDashboard";
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
const SchoolInformation = lazy(() => import("../schoolInformation"));

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("durham_token"));

  // const onInactivityChange = () => {};
  // const onIdleModal = () => {};
  // const onActive = () => {
  // 	console.log("active");
  // };
  // const onIdle = () => {
  // 	console.log("idle");
  // };
  // const idleTimer = useIdleTimer({
  // 	onActive,
  // 	onIdle,
  // 	timeout: 2000,
  // 	throttle: 500,
  // });

  useEffect(() => {
    // console.log(idleTimer());
    if (!data) {
      navigate("/");
    }
    dispatch(userInfo(data));
  }, [dispatch, data, navigate]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" index element={<ProjectDashboard />} />
        <Route path="/add-new-project" element={<ProjectFormsController />} />
        <Route path="/edit-project" element={<EditProjectDashboard />} />
        <Route path="/forms" element={<OwnerContractorManagementForm />} />
        <Route path="/product-manager" element={<ProjectManager />}></Route>
        <Route path="/vendors" element={<Vendors />}></Route>
        <Route path="/schools" element={<SchoolInformation />}></Route>
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
