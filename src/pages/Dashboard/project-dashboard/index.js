import { Close, DashboardNav } from "../Components";
import RedDelete from "../../../assets/redDelete.svg";
import BackArrow from "../../../assets/backArrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { Accordion, ProjectCard, ProjectDetails } from "./Components";
import { useDispatch, useSelector } from "react-redux";
import { project_details } from "../add-project/projectSlice";
import {
  ButtonRedBG,
  ButtonWhiteBG,
  FullPageLoader,
  LoadingArrow,
  ModalOverlay,
  Pen,
} from "../../../ui";
import Lunsford from "../../forms/Lundsford";

import NoticeOfIntentConsultant from "../../forms/Notice-of-intent-consultant/NoticeOfIntentConsultant";
import {
  deleted,
  hideHistory,
  historyToggle,
  onClose,
  onDelete,
  show,
  slug,
} from "./ReducerSlice";
import NoticeToProceed from "../../forms/Notice-to-Proceed";
import AdvertisementBid from "../../forms/Advertisement-for-bid-template/AD4Bid";
import Esser from "../../forms/ESSER Contract Template";
import EsserPM from "../../forms/ESSER PM Contract Template";
import Lechase from "../../forms/LeChase Esser";
import TechService from "../../forms/Tech Service Agreement";
import NoticeOfAwardContrator from "../../forms/Notice-of-award-contractor/NoticeOfAwardContrator";
import NoticeOfAwardConsultant from "../../forms/notice-of-award-consultant";
import ProjectCloseoutCheckList from "../../forms/Project-closeout-checklist";
import CertificateOfSubstantial from "../../forms/Certificate of Substantial Completion";
import PunchList from "../../forms/Punch List/PunchList";
import moment from "moment";
import { getProjectInfo } from "../Overview-dashboard/editReducer";
import { toast } from "react-toastify";
import {
  useDeleteProjectMutation,
  useDuplicateProjectMutation,
  useDuplicateProjectQuery,
  useFetchSingleProjectQuery,
} from "../../../features/services/api";
// import { getProjectID } from "../add-project/reducer";
import DeterminationOFLowestBidder from "../../forms/Determination-low-bidder";
import OwnerContractorManagementForm from "../../forms/Contract/Owner and Contract Management (CM_CMAR) Agreement/OwnerContract";
import { getId, SaveToLocalStorage } from "../../../shared-component";
import VInfo3 from "../../forms/3 bids/VInfo3";
import CapitalProjectForm from "../../forms/Capital-Project-Request-Form/CapitalProjectForm";
import PFForProjects from "../../forms/Precis-Checklist/PFForProjects";
import { DPSMain } from "../../forms/DPS Short Form Engineer";
import { MainAffidavit } from "../../forms/E-589C Affidavit Of Capital Improvement";

const ProjectDashboard = () => {
  // const id = useSelector(getProjectID)
  const response = useFetchSingleProjectQuery(getId());

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectDetails = useSelector(project_details);
  const documentsID = useSelector(slug);
  const remove = useSelector(deleted);
  const toggle = useSelector(historyToggle);
  const [deleteProject, { isLoading }] = useDeleteProjectMutation();
  const [duplicateProject, result] = useDuplicateProjectMutation();
  const awardee = !projectDetails?.project_vendors
    ? ""
    : projectDetails.project_vendors[0];
  const summary = !projectDetails ? "" : projectDetails.document_summary;
  const school = !projectDetails ? "" : projectDetails.school;
  console.log(documentsID);
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await deleteProject(projectDetails.id);
    if (response) {
      dispatch(onClose());
      if (response?.error) {
        toast.error(response?.error?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success(response?.data?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/dashboard");
      }
    }
  };
  const onDuplicate = async (e) => {
    e.preventDefault();
    const response = await duplicateProject(projectDetails.id);
    if (response) {
      // dispatch(onClose())
      if (response?.error) {
        toast.error(response?.error?.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success(`${projectDetails.name} project has been duplicated`, {
          position: toast.POSITION.TOP_CENTER,
        });
        // navigate("/dashboard");
      }
    }
  };

  return (
    <section>
      <ModalOverlay show={remove}>
        <div>
          {/* Modal content */}
          {!response?.data && <FullPageLoader />}

          <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14 bg-white rounded-lg shadow pb-4">
            <div className="flex justify-between items-start px-6 py-3 rounded-t border-b">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Are you sure you want to delete this Project information?
                </h3>
              </div>
              <button
                onClick={() => dispatch(onClose())}
                type="button"
                className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="small-modal"
              >
                <Close />
              </button>
            </div>

            {/* Buttons */}
            <form
              className="mt-12 mr-5 flex gap-4 justify-end"
              onSubmit={onSubmit}
            >
              <ButtonWhiteBG
                name="no, cancel"
                onClick={() => dispatch(onClose())}
              />
              {/* Make api request to delete the data */}
              <ButtonRedBG
                name="yes, Delete"
                width="w-[136px]"
                loading={isLoading}
              />
            </form>
          </div>
        </div>
      </ModalOverlay>
      {/* <!-- Navbar --> */}
      <article>
        <DashboardNav />
      </article>

      {/* Page Marker */}
      <div className="bg-white h-14">
        <div className="container mx-auto px-4 py-4 lg:px-24 flex gap-2 items-center">
          <span className="text-gray-900 text-base">Dashboard</span>
          <span className="text-gray-700 font-bold">&gt;</span>

          <span className="text-gray-900 text-base">Project</span>
          <span className="text-gray-900 font-bold">&gt;</span>

          <span className="text-gray-900 font-bold text-base">
            {!projectDetails ? "" : projectDetails?.name}
          </span>
        </div>
      </div>
      {/* Main Content */}
      <main className="bg-[#fafafa] h-full pb-60">
        <div className="container mx-auto pt-5 px-4 lg:px-24 h-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-3 cursor-pointer">
              <img src={BackArrow} alt="go back" />
              <span
                to="/dashboard"
                className="text-[#3b6979] font-semibold"
                onClick={() => {
                  navigate("/dashboard");
                  SaveToLocalStorage("");
                }}
              >
                BACK TO DASHBOARD
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <button
                onClick={() => {
                  dispatch(getProjectInfo(projectDetails));
                  navigate("/dashboard/edit-project");
                }}
                type="button"
                className="uppercase bg-white text-[#3b6979] font-semibold px-4 h-8 border border-[#3b6979] rounded hover:bg-gray-50 w-[102px] flex gap-2 items-center justify-center"
              >
                <Pen />
                <span>edit</span>
              </button>

              <button
                onClick={onDuplicate}
                type="submit"
                className="uppercase text-white text-center text-base w-[152px] bg-[#3B6979] hover:bg-blue-800 font-bold rounded h-8 transition-all flex gap-2 items-center justify-center"
              >
                <LoadingArrow />
                {result.isLoading && (
                  <span className="text-xs">Duplicating...</span>
                )}
                {!result.isLoading && <span>Duplicate</span>}
              </button>

              <button
                onClick={() => {
                  dispatch(onDelete());
                }}
                type="submit"
                className="uppercase text-[#ef4444] text-center text-base w-[152px] hover:bg-blue-800 font-semibold rounded h-8 transition-all flex gap-2 items-center justify-center"
              >
                <img src={RedDelete} alt="Delete" />
                <span>Delete</span>
              </button>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-3">
            <ProjectCard
              name="Total Documents"
              value={!summary ? "0" : summary.total}
            />
            <ProjectCard
              name="Filled"
              value={!summary ? "0" : summary.filled}
            />
            <ProjectCard
              name="Yet to be Filled"
              value={!summary ? "0" : summary.unfilled}
            />
          </div>

          {/* Main Content */}
          <div className="mt-6 grid grid-cols-3 gap-6">
            {/* Left Side */}
            <div class="col-span-2">
              <div className="bg-white border border-gray-100 rounded-lg p-4">
                <div className="pb-2 border-b border-b-gray-50 flex justify-between items-center">
                  <p className="px-[10px] py-1 rounded font-bold bg-[#D8E1E4] text-[#2F5461]">
                    {`No:${!projectDetails ? 0 : projectDetails?.number}`}
                  </p>
                  <p className="text-gray-700 text-base">
                    {moment(projectDetails.created_at).format("MMMM D, YYYY ")}
                  </p>
                </div>
                <ProjectDetails
                  name={!projectDetails ? "" : projectDetails?.name}
                  description={
                    !projectDetails ? "" : projectDetails?.description
                  }
                />

                <div className="mt-4">
                  <span className="text-[#623F04] text-base mr-4">
                    This project has been duplicated{" "}
                    {!projectDetails ? "" : projectDetails.duplicate_count}{" "}
                    times.
                  </span>
                  <span
                    className="underline underline-offset-4 text-[#3b6979] font-semibold text-base cursor-pointer"
                    onClick={() => dispatch(hideHistory())}
                  >
                    View History
                  </span>
                  <div
                    className={`${
                      toggle ? "h-full" : "h-0 overflow-hidden"
                    } py-2 transition-auto`}
                  >
                    {" "}
                    {projectDetails?.duplicates?.map((project, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-gray-100 h-16 flex justify-between items-center rounded  px-4 py-2 my-1"
                        >
                          <h1 className="text-[#2f5461] font-bold">
                            {project?.name}
                          </h1>
                          <p className="text-sm">
                            {moment(project.created_at).format("MMM D, YYYY ")}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Accordions */}
              <div className="mt-6 bg-white rounded-lg border border-gray-100">
                <Accordion data={projectDetails.project_documents} />
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div className="bg-white p-4 rounded-lg">
                <div className="mb-5">
                  <div className="border-b border-b-gray-100 pb-2 text-[#2f5461] font-bold">
                    School Information
                  </div>
                  <div className="text-gray-900 text-xs">
                    <p className="mt-4 font-bold">
                      {!school ? "" : school.name}
                    </p>
                    <p className="my-1">{`${!school ? "" : school.address}, ${
                      !school ? "" : school.city
                    }, ${!school ? "" : school.state}, ${
                      !school ? "" : school.zip_code
                    }`}</p>
                    {/* <p>+65 1234 1234</p> */}
                  </div>
                </div>
                <div className="mb-5">
                  <div className="border-b border-b-gray-100 pb-2 text-[#2f5461] font-bold">
                    {!awardee ? "" : awardee?.role}
                  </div>
                  <div className="text-gray-900 text-xs">
                    <p className="mt-4 text-base font-bold">
                      {!awardee ? "" : awardee?.company_name}
                    </p>
                    <p className="my-1">
                      {!awardee
                        ? ""
                        : `${awardee?.street}, ${awardee?.city}, ${awardee?.state}, ${awardee?.zip_code}`}
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="border-b border-b-gray-100 pb-2 text-[#2f5461] font-bold">
                    Project Manager
                  </div>
                  <div className="mt-4 flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full">
                      {/* <img className="w-full" src={!projectDetails} alt="user" /> */}
                    </div>
                    <span className="text-xs text-[#2f5461]">
                      {!projectDetails || !projectDetails.project_manager
                        ? ""
                        : projectDetails?.project_manager.first_name +
                          " " +
                          projectDetails?.project_manager.last_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Lunsford id={documentsID} />
      <PunchList id={documentsID} />
      <NoticeOfIntentConsultant id={documentsID} />
      <CertificateOfSubstantial id={documentsID} />
      <NoticeToProceed id={documentsID} />
      <ProjectCloseoutCheckList id={documentsID} />
      <NoticeOfAwardConsultant id={documentsID} />
      <AdvertisementBid id={documentsID} />
      <Esser id={documentsID} />
      <EsserPM id={documentsID} />
      <Lechase id={documentsID} />
      <TechService id={documentsID} />
      <NoticeOfAwardContrator id={documentsID} />
      <DeterminationOFLowestBidder id={documentsID} />
      <OwnerContractorManagementForm id={documentsID} />
      <CapitalProjectForm id={documentsID} />
      <VInfo3 id={documentsID} />
      <PFForProjects id={documentsID} />
      <DPSMain id={documentsID} />
      <MainAffidavit id={documentsID} />
    </section>
  );
};

export default ProjectDashboard;
