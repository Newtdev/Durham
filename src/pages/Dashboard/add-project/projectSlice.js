import { createSlice } from "@reduxjs/toolkit";

const project = createSlice({
	name: "add-new-project",
	initialState: {
		isSubmitted: false,
		// awardee: null,
		project_overview: null,
		project_document: null,
	},
	reducers: {
		addNewProject: (state, { payload }) => {
			state.project_document = payload.document;
			state.project_overview = payload;
		},
	},
});

export default project.reducer;

// CREATE AN ACTION CEATOR
export const { addNewProject } = project.actions;

// SELECT THE TOKEN AND USER
export const getDocuments = (state) => state.projectReducer.project_document;
export const project_details = (state) => state.projectReducer.project_overview;
