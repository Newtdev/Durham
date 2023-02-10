import { configureStore } from "@reduxjs/toolkit";
import { DurhamsApi } from "../features/services/api";
import productManagerRegistration from "../pages/authentications/sign-up/signUpSlice";
import loginReducer from "../features/auth";
import editProject from "../pages/Dashboard/Overview-dashboard/editReducer";
import projectReducer from "../pages/Dashboard/add-project/projectSlice";
import SchoolReducer from "../pages/Dashboard/schoolInformation/schoolSlice";
import projectManagerReducer from "../pages/Dashboard/Product-manager-management/projectManagerSlice";
import AwardeeReducer from "../pages/Dashboard/Vendors-mangement/vendorSlice";
import FormReducer from "../pages/forms/Notice-of-intent-consultant/reducerSlice";
import NoticeOfProceedReducer from "../pages/forms/Notice-to-Proceed/reducerSlice";
import ProjectDocumentReducer from "../pages/Dashboard/project-dashboard/ReducerSlice";
import LundsfordReducer from "../pages/forms/Lundsford/lundsFormslice";
import ModalReducer from "../pages/forms/reducer";
import MultiFormReducer from "../pages/forms/Advertisement-for-bid-template/reducer";
import DurhamProfileReducer from "../pages/Dashboard/Settings/Durhams-settings/ReducerSlice";
import ProjectCloseoutStepReducer from "../pages/forms/Project-closeout-checklist/reducer";
import CertificateOfSubstantialReducer from "../pages/forms/Certificate of Substantial Completion/reducer";
import AddProjectReducer from "../pages/Dashboard/add-project/reducer";
import TechServiceReducer from "../pages/forms/Tech Service Agreement/reducer";
import NoticeAwardContractorReducer from "../pages/forms/Notice-of-award-contractor/reducer";
import NoticeAwardConsultantReducer from "../pages/forms/notice-of-award-consultant/reducer";
import LechaseReducer from "../pages/forms/LeChase Esser/reducer";
import EsserPMReducer from "../pages/forms/ESSER PM Contract Template/reducer";
import EsserContractTemplate from "../pages/forms/ESSER Contract Template/reducer";
import DeterminationReducer from "../pages/forms/Determination-low-bidder/reducer";
import ownersContractorFormReducer from "../pages/forms/Contract/Owner and Contract Management (CM_CMAR) Agreement/reducer";
import Vendor3Bid from "../pages/forms/3 bids/Reducer";
import PreciseListReducer from "../pages/forms/Precis Checklist/Reducer";
import CapitalForm from "../pages/forms/Budget/Capital Project Request Form/reducer";
import shortformDesign from "../pages/forms/Contract/Short Small Form/reducer";
import OwnerDesignConsultantLess from "../pages/forms/Contract/Owner and Design Consultant (Less than $200,000)/reducer";
import OwnerAndContractor from "../pages/forms/Contract/Owner and Contractor Agreement Form (more $500,000)/reducer";

export const store = configureStore({
  // reducers
  reducer: {
    // API
    [DurhamsApi.reducerPath]: DurhamsApi.reducer,
    productRegistration: productManagerRegistration,
    loginReducer,
    editProject,
    projectReducer,
    SchoolReducer,
    FormReducer,
    projectManagerReducer,
    AwardeeReducer,
    ProjectDocumentReducer,
    LundsfordReducer,
    ModalReducer,
    MultiFormReducer,
    DurhamProfileReducer,
    ProjectCloseoutStepReducer,
    CertificateOfSubstantialReducer,
    AddProjectReducer,
    TechServiceReducer,
    NoticeAwardContractorReducer,
    NoticeAwardConsultantReducer,
    NoticeOfProceedReducer,
    LechaseReducer,
    EsserPMReducer,
    EsserContractTemplate,
    DeterminationReducer,
    ownersContractorFormReducer,
    Vendor3Bid,
    PreciseListReducer,
    CapitalForm,
    shortformDesign,
    OwnerDesignConsultantLess,
    OwnerAndContractor,
  },

  // middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DurhamsApi.middleware),
  ignoredState: true,
  // devTools
  devTools: true,
});
