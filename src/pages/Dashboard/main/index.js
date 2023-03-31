import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { userInfo } from "../../../features/auth";
import { useIdleTimer } from "react-idle-timer";
import { BiSupport } from "react-icons/bi";
import OwnerContractorManagementForm from "../../forms/Contract/Owner and Contract Management (CM_CMAR) Agreement";
import EditProjectDashboard from "../Overview-dashboard/EditProjectDashboard";
import { Close } from "../Components";
import { ButtonRedBG, ButtonWhiteBG, ModalOverlay } from "../../../ui";
import { onClose } from "../project-dashboard/ReducerSlice";
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
  const [showModal, setShowModal] = useState(false);
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

// const Dashboard = () => {
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const data = JSON.parse(localStorage.getItem("durham_token"));

// 	// const onInactivityChange = () => {};
// 	// const onIdleModal = () => {};

// 	// const idleTimer = useIdleTimer({
// 	// 	onActive,
// 	// 	onIdle,
// 	// 	timeout: 2000,
// 	// 	throttle: 500,
// 	// });

// 	useEffect(() => {
// 		// console.log(idleTimer());
// 		if (!data) {
// 			navigate("/");
// 		}
// 		dispatch(userInfo(data));
// 	}, [dispatch, data, navigate]);

// 	return (
// 		<Suspense fallback={<div>Loading...</div>}>
// 			<Routes>
// 				<Route path="/" index element={<ProjectDashboard />} />
// 				<Route path="/add-new-project" element={<ProjectFormsController />} />
// 				<Route path="/edit-project" element={<EditProjectDashboard />} />
// 				<Route path="/forms" element={<OwnerContractorManagementForm />} />
// 				<Route path="/product-manager" element={<ProjectManager />}></Route>
// 				<Route path="/vendors" element={<Vendors />}></Route>
// 				<Route path="/schools" element={<SchoolInformation />}></Route>
// 				<Route path="/settings" element={<Settings />} />
// 				<Route path="/settings/durhams-profile" element={<DurhamSettings />} />
// 				<Route path="/settings/profile" element={<ProfileSettings />} />
// 				<Route path="/add-new-project/preview" element={<ProjectPreview />} />
// 				<Route path="/project-details/:id" element={<ProjectDetails />} />
// 				<Route path="/forms-download" element={<Forms />}></Route>
// 			</Routes>
// 		</Suspense>
// 	);
// };

// export default Dashboard;
// =======

export function SupportModal({ close }) {
  return (
    <article>
      {/* Main modal */}
      <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow pb-4 pt-14">
          {/* <div className="flex justify-center items-center ">
            <img src={success} alt="success" />
          </div> */}
          <div className="flex justify-center items-center px-6 py-3 rounded-t ">
            <h3 className="text-lg font-bold text-gray-900 text-center">
              Contact Support
            </h3>
          </div>
          <div className="py-3 px-5">
            <p className="text-base text-gray-600 text-center">
              Email:
              <a
                className="ml-1 hover:text-[#3B6979] cursor-pointer"
                href="mailto:tanz@concisecontracts.com"
              >
                tanz@concisecontracts.com
              </a>
            </p>
            <p className="text-base text-gray-600 text-center">
              Phone no:{" "}
              <a
                className="ml-1 hover:text-[#3B6979] cursor-pointer"
                href="tel:9257275161"
              >
                (925) 727-5161
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 mr-5 flex justify-center items-center w-full">
            <button
              className="bg-[#3B6979] text-white text-base py-2 px-[170px] rounded"
              onClick={close}
            >
              BACK
            </button>
          </div>
          {/* <div className="my-4 mr-5 flex justify-center items-center w-full">
            <button
              className="border border-[#3B6979] font-semibold text-[#3B6979] text-base py-2 px-28 rounded"
              onClick={dashboard}
            >
              GO TO DASHBOARD
            </button>
          </div> */}
        </div>
      </div>
    </article>
  );
}

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const data = JSON.parse(localStorage.getItem("durham_token"));

  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  // const onInactivityChange = () => {};
  // const onIdleModal = () => {};

  // const onActive = () => {
  // 	console.log("active");
  // };

  const onIdle = () => {
    setShow(true);
    sessionStorage.setItem("storedSessionUrl", window?.location?.pathname);
  };

  useIdleTimer({
    onIdle,
    // onActive,
    timeout: 79200000,
    promptBeforeIdle: 0,
    events: [
      "mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mousewheel",
      "mousedown",
      "touchstart",
      "touchmove",
      "MSPointerDown",
      "MSPointerMove",
      "visibilitychange",
      "focus",
    ],
    immediateEvents: [],
    debounce: 0,
    throttle: 0,
    eventsThrottle: 200,
    element: document,
    startOnMount: true,
    startManually: false,
    stopOnIdle: false,
    crossTab: false,
    name: "idle-timer",
    syncTimers: 0,
    leaderElection: false,
  });

  useEffect(() => {
    // console.log(idleTimer);
    if (!data) {
      navigate("/");
    }
    dispatch(userInfo(data));
  }, [dispatch, data, navigate]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Modal show={show} />
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
      <div
        onClick={() => setShowModal(true)}
        className="fixed bottom-5 right-5 flex justify-center items-center w-16 h-16 rounded-full  bg-[#3d6979] text-white cursor-pointer hover:shadow-lg"
      >
        <BiSupport size={40} />
      </div>

      <article>
        {/* Main modal */}
        <ModalOverlay show={showModal}>
          <SupportModal close={onClose} />
          {/* <div className="w-[20rem] mx-auto bg-white">
            <h1>Support Modal</h1>
          </div> */}
        </ModalOverlay>
      </article>
    </Suspense>
  );
};

export default Dashboard;
