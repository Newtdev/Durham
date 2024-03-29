import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
	name: "projectSlice",
	initialState: {
		slugId: "",
		id: null,
		filled: false,
		document: null,
		deleteProject: false,
		showHistory: false,
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

		getID: (state, action) => {
			state.id = action.payload;
		},
		selectFilled: (state, action) => {
			state.filled = action.payload;
		},
		defaultID: (state) => {
			state.id = null;
		},
		hideHistory: (state) => {
			console.log(!state.showHistory);
			state.showHistory = !state.showHistory;
		},
	},
});

export default ProjectSlice.reducer;

// CREATE AN ACTION CEATOR
export const { getSlugId } = ProjectSlice.actions;
export const { getID } = ProjectSlice.actions;
export const { defaultID } = ProjectSlice.actions;
export const { getDocument } = ProjectSlice.actions;
export const { documentDefault } = ProjectSlice.actions;
export const { slugIdDefault } = ProjectSlice.actions;
export const { onDelete } = ProjectSlice.actions;
export const { onClose } = ProjectSlice.actions;
export const { hideHistory } = ProjectSlice.actions;
export const { selectFilled } = ProjectSlice.actions;

// SELECT THE TOKEN AND USER

export const slug = (state) => state.ProjectDocumentReducer.slugId;
export const formDocument = (state) => state.ProjectDocumentReducer.document;
export const deleted = (state) => state.ProjectDocumentReducer.deleteProject;
export const project_document_id = (state) => state.ProjectDocumentReducer.id;
export const historyToggle = (state) =>
	state.ProjectDocumentReducer.showHistory;
export const isFilled = (state) => state.ProjectDocumentReducer.filled;
