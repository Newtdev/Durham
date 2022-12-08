import { configureStore } from "@reduxjs/toolkit";
import { DurhamsApi } from "../features/services/api";
import productManagerRegistration from "../pages/authentications/sign-up/signUpSlice";
import loginReducer from "../features/auth";

export const store = configureStore({
	// reducers
	reducer: {
		// API
		[DurhamsApi.reducerPath]: DurhamsApi.reducer,
		productRegistration: productManagerRegistration,
		loginReducer,
	},
	// middlewares
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(DurhamsApi.middleware),
	// devTools
	devTools: true,
});
