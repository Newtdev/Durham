import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { userInfo } from "../../../features/auth";
import { useIdleTimer } from "react-idle-timer";
import OwnerContractorManagementForm from "../../forms/Contract/Owner and Contract Management (CM_CMAR) Agreement";
import EditProjectDashboard from "../Overview-dashboard/EditProjectDashboard";
import { Close } from "../Components";
import { ButtonRedBG, ButtonWhiteBG, ModalOverlay } from "../../../ui";
const Vendors = lazy(() => import("../Vendors-mangement"));
const ProjectDetails = lazy(() => import("../project-details"));
const ProjectManager = lazy(() =>
  import("../Product-manager-management/Product-manager")
);
const Forms = lazy(() => import("../forms/Forms"));
const Settings = lazy(() => import("../Settings/main"));
const DurhamSettings = lazy(() => import("../Settings/Durhams-settings"));
const ProfileSettings = lazy(() => import("../Settings/Profile-settings"));
const ProjectDashboard = lazy(() => import("../Overview-dashboard"));
const ProjectPreview = lazy(() => import("../project-dashboard"));
const ProjectFormsController = lazy(() => import("../add-project"));
const SchoolInformation = lazy(() => import("../schoolInformation"));

const Modal = ({ show }) => {
	const navigate = useNavigate();
	return (
		<ModalOverlay show={show}>
			<div>
				{/* Modal content */}
				<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14 bg-white rounded-lg shadow py-10 flex flex-col justify-center items-center">
					<p className="text-gray-900 font-semibold text-2xl">
						{/* You have been inactive on the portal for too lo */}
					</p>
					<p className="text-gray-600 text-lg text-center mt-4 mb-8">
						You have been inactive on the portal for too long! Please login
						again
					</p>
					{/* Buttons */}
					<div className="flex gap-4">
						<ButtonWhiteBG
							name="yes, log in"
							width="w-[125px]"
							onClick={() => {
								localStorage.removeItem("durham_token");
								navigate("/");
							}}
						/>
					</div>
				</div>
			</div>
		</ModalOverlay>
	);
};

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
        <Route path="/forms-download" element={<Forms />}></Route>
      </Routes>
    </Suspense>
  );
=======
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const [show, setShow] = useState(false);
	const data = JSON.parse(localStorage.getItem("durham_token"));

	// const onInactivityChange = () => {};
	// const onIdleModal = () => {};

	// const onIdle = () => {
	// 	setShow(true);
	// };
	// const idleTimer = useIdleTimer({
	// 	onIdle,
	// 	timeout: 1800000,
	// 	throttle: 500,
	// });
	// const {
	// 	start,
	// 	reset,
	// 	activate,
	// 	pause,
	// 	resume,
	// 	isIdle,
	// 	isPrompted,
	// 	isLeader,
	// 	isLastActiveTab,
	// 	getTabId,
	// 	getRemainingTime,
	// 	getElapsedTime,
	// 	getLastIdleTime,
	// 	getLastActiveTime,
	// 	getIdleTime,
	// 	getTotalIdleTime,
	// 	getActiveTime,
	// 	getTotalActiveTime,
	// } = useIdleTimer({
	// 	onIdle,
	// 	onActive,
	// 	timeout: 1000 * 60 * 20,
	// 	promptBeforeIdle: 0,
	// 	events: [
	// 		"mousemove",
	// 		"keydown",
	// 		"wheel",
	// 		"DOMMouseScroll",
	// 		"mousewheel",
	// 		"mousedown",
	// 		"touchstart",
	// 		"touchmove",
	// 		"MSPointerDown",
	// 		"MSPointerMove",
	// 		"visibilitychange",
	// 		"focus",
	// 	],
	// 	immediateEvents: [],
	// 	debounce: 0,
	// 	throttle: 0,
	// 	eventsThrottle: 200,
	// 	element: document,
	// 	startOnMount: true,
	// 	startManually: false,
	// 	stopOnIdle: false,
	// 	crossTab: false,
	// 	name: "idle-timer",
	// 	syncTimers: 0,
	// 	leaderElection: false,
	// });

	useEffect(() => {
		// console.log(idleTimer);
		if (!data) {
			navigate("/");
		}
		dispatch(userInfo(data));
	}, [dispatch, data, navigate]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			{/* <Modal show={show} /> */}

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
