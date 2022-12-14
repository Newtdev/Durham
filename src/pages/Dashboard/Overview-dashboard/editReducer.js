import { createSlice } from "@reduxjs/toolkit";

const editProject = createSlice({
	name: "edit-user",
	initialState: {
		projectData: null,
	},
	reducers: {
		getProjectInfo: (state, { payload }) => {
			state.projectData = payload;
		},
	},
});

export default editProject.reducer;

// CREATE AN ACTION CEATOR
export const { getProjectInfo } = editProject.actions;

// SELECT THE TOKEN AND USER

export const projectData = (state) => state.projectData;
