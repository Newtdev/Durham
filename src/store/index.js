import { configureStore } from "@reduxjs/toolkit";
import { DurhamsApi } from "../features/services/api";
import productManagerRegistration from "../pages/authentications/sign-up/signUpSlice";
import loginReducer from "../features/auth";
import editProject from "../pages/Dashboard/Overview-dashboard/editReducer";
import projectReducer from "../pages/Dashboard/add-project/projectSlice";
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
import AddProjectReducer from '../pages/Dashboard/add-project/reducer'
import TechServiceReducer from '../pages/forms/Tech Service Agreement/reducer'
import NoticeAwardContractorReducer from '../pages/forms/Notice-of-award-contractor/reducer'
import NoticeAwardConsultantReducer from '../pages/forms/notice-of-award-consultant/reducer'
import LechaseReducer from '../pages/forms/LeChase Esser/reducer'
import EsserPMReducer from '../pages/forms/ESSER PM Contract Template/reducer'
import EsserContractTemplate from '../pages/forms/ESSER Contract Template/reducer'

export const store = configureStore({
	// reducers
	reducer: {
		// API
		[DurhamsApi.reducerPath]: DurhamsApi.reducer,
		productRegistration: productManagerRegistration,
		loginReducer,
		editProject,
		projectReducer,
		projectManagerReducer,
		AwardeeReducer,
		FormReducer,
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
		EsserContractTemplate
	},
	// middlewares
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(DurhamsApi.middleware),
	ignoredState: true,
	// devTools
	devTools: true,
});
