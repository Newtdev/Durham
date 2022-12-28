import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
	name: "projectSlice",
	initialState: {
		slugId: "",
		document: null,
		deleteProject: false,
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
		onDelete: (state, action) => {
			state.deleteProject = true;
		},
		onClose: (state, action) => {
			state.deleteProject = false;
		},
	},
});

export default ProjectSlice.reducer;

// CREATE AN ACTION CEATOR
export const { getSlugId } = ProjectSlice.actions;
export const { getDocument } = ProjectSlice.actions;
export const { documentDefault } = ProjectSlice.actions;
export const { slugIdDefault } = ProjectSlice.actions;
export const { onDelete } = ProjectSlice.actions;
export const { onClose } = ProjectSlice.actions;

// SELECT THE TOKEN AND USER

export const slug = (state) => state.ProjectDocumentReducer.slugId;
export const formDocument = (state) => state.ProjectDocumentReducer.document;
export const deleted = (state) => state.ProjectDocumentReducer.deleteProject;
