import { createSlice } from "@reduxjs/toolkit";

export const ProjectManagerRegistrationSlice = createSlice({
	name: "project-manager",
	initialState: {
		userDetails: null,
		verification_token: null,
	},
	reducers: {
		setUserInfo: (state, action) => {
			console.log(state);
			state.userDetails = action.payload;
			// state.userDetails = action.payload.data
		},
	},
});

export const { setUserInfo } = ProjectManagerRegistrationSlice.actions;

export default ProjectManagerRegistrationSlice.reducer;

export const selectUserData = (state) => state;
// export const userDetails = (state) => state.user;
