import { createSlice } from "@reduxjs/toolkit";

const projectMangerSlice = createSlice({
	name: "project-manager",
	initialState: {
		project_manager: null,
		searchManagerQuery : '',
	},
	reducers: {
		save_project_manager: (state, action) => {
			state.project_manager = action.payload || {};
		},
		setSearchManagerQuery: (state, action) => {
			state.searchManagerQuery = action.payload
		}
	},
});

export default projectMangerSlice.reducer;

// CREATE AN ACTION CEATOR
export const { save_project_manager } = projectMangerSlice.actions;
export const { setSearchManagerQuery } = projectMangerSlice.actions;

// SELECT THE TOKEN AND USER
export const product_manager_data = (state) =>
	state.projectManagerReducer.project_manager;
export const searchProjectManager = (state) =>
	state.projectManagerReducer.searchManagerQuery;
