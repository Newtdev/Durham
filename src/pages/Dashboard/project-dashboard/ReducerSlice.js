import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
	name: "projectSlice",
	initialState: {
		slugId: "",
		document: null,
	},
	reducers: {
		getSlugId: (state, action) => {
			state.slugId = action.payload;
		},
		getDocument: (state, action) => {
			state.document = action.payload;
		},
		documentDefault: (state) => {
			state.document = null;
		},
		slugIdDefault: (state) => {
			state.slugId = "";
		},
	},
});

export default ProjectSlice.reducer;

// CREATE AN ACTION CEATOR
export const { getSlugId } = ProjectSlice.actions;
export const { getDocument } = ProjectSlice.actions;
export const { documentDefault } = ProjectSlice.actions;
export const { slugIdDefault } = ProjectSlice.actions;

// SELECT THE TOKEN AND USER

export const slug = (state) => state.ProjectDocumentReducer.slugId;
export const formDocument = (state) => state.ProjectDocumentReducer.document;
