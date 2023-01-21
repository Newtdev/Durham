import { createSlice } from "@reduxjs/toolkit";

const editProject = createSlice({
	name: "edit-user",
	initialState: {
		projectData: null,
		searchQuery: '',
		filteredData: {}
	},
	reducers: {
		getProjectInfo: (state, { payload }) => {
			state.projectData = payload;
		},
		setProjectInfoDefault: (state, { payload }) => {
			state.projectData = null;
		},
		setsearchQuery: (state, {payload}) => {
			state.searchQuery = payload
		},
		SaveFilteredData: (state, {payload}) => {
			state.filteredData = payload
		}
	},
});

export default editProject.reducer;

// CREATE AN ACTION CEATOR
export const { getProjectInfo } = editProject.actions;
export const { setsearchQuery } = editProject.actions;
export const { SaveFilteredData } = editProject.actions;
export const { setProjectInfoDefault } = editProject.actions;

// SELECT THE TOKEN AND USER

export const projectData = (state) => state.editProject.projectData;
export const searchQuery = (state) => state.editProject.searchQuery;
export const GetFilteredData = (state) => state.editProject.filteredData;
