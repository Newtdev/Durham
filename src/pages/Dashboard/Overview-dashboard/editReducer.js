import { createSlice } from "@reduxjs/toolkit";

const editProject = createSlice({
	name: "edit-user",
	initialState: {
		projectData: null,
		searchQuery: '',
		projectDataArray: []
	},
	reducers: {
		getProjectInfo: (state, { payload }) => {
			state.projectData = payload;
		},
		setsearchQuery: (state, {payload}) => {
			state.searchQuery = payload
		},
		fetchProjectData: (state, {payload}) => {
			state.projectDataArray = payload
		}
	},
});

export default editProject.reducer;

// CREATE AN ACTION CEATOR
export const { getProjectInfo } = editProject.actions;
export const { setsearchQuery } = editProject.actions;
export const { fetchProjectData } = editProject.actions;

// SELECT THE TOKEN AND USER

export const projectData = (state) => state.editProject.projectData;
export const searchQuery = (state) => state.editProject.searchQuery;
export const projectArray = (state) => state.editProject.projectDataArray;
