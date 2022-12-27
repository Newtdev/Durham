import { configureStore } from "@reduxjs/toolkit";
import { DurhamsApi } from "../features/services/api";
import productManagerRegistration from "../pages/authentications/sign-up/signUpSlice";
import loginReducer from "../features/auth";
import editProject from "../pages/Dashboard/Overview-dashboard/editReducer";
import projectReducer from "../pages/Dashboard/add-project/projectSlice";
import projectManagerReducer from "../pages/Dashboard/Product-manager-management/projectManagerSlice";
import AwardeeReducer from "../pages/Dashboard/Vendors-mangement/vendorSlice";
import FormReducer from "../pages/forms/Notice-of-intent-consultant/reducerSlice";
import ProjectDocumentReducer from "../pages/Dashboard/project-dashboard/ReducerSlice";
import LundsfordReducer from "../pages/forms/Lundsford/lundsFormslice";
import ModalReducer from "../pages/forms/reducer";
import MultiFormReducer from "../pages/forms/Advertisement-for-bid-template/reducer";
import DurhamProfileReducer from "../pages/Dashboard/Settings/Durhams-settings/ReducerSlice";
import ProjectCloseoutStepReducer from "../pages/forms/Project-closeout-checklist/reducer";
import CertificateOfSubstantialReducer from "../pages/forms/Certificate of Substantial Completion/reducer";
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
	},
	// middlewares
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(DurhamsApi.middleware),
	ignoredState: true,
	// devTools
	devTools: true,
});
