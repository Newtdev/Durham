import { configureStore } from "@reduxjs/toolkit";
import { DurhamsApi } from "../features/services/api";
import productManagerRegistration from "../pages/authentications/sign-up/signUpSlice";
import loginReducer from "../features/auth";
import editProject from "../pages/Dashboard/Overview-dashboard/editReducer";
import projectReducer from "../pages/Dashboard/add-project/projectSlice";
import projectManagerReducer from "../pages/Dashboard/Product-manager-management/projectManagerSlice";
import AwardeeReducer from "../pages/Dashboard/Vendors-mangement/vendorSlice";

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
	},
	// middlewares
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(DurhamsApi.middleware),
	// devTools
	devTools: true,
});
