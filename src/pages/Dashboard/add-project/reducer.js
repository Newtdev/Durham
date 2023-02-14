import { createSlice } from "@reduxjs/toolkit";
import { state } from "../../../lib/data";

const AddProjectSlice = createSlice({
	name: "add-products",
	initialState: {
		projectForm: 2,
		form_id: null,
		vendorID: [],
		delete: false,
		activeForm: {
			id: "",
			type: "",
		},
		addNewDoc: [],
	},

	reducers: {
		nextForm: (state, action) => {
			state.projectForm = action.payload;
		},
		prevForm: (state, action) => {
			state.projectForm = action.payload;
		},
		setDefault: (state, action) => {
			state.projectForm = 0;
		},
		saveID: (state, action) => {
			state.form_id = action.payload;
		},
		saveVendorID: (state, action) => {
			state.vendorID = [...state.vendorID, action.payload];
		},
		deleteDocument: (state, action) => {
			state.delete = action.payload;
		},
		getActiveFormDetails: (state, action) => {
			state.activeForm.id = action.payload.id;
			state.activeForm.type = action.payload.type;
		},
		addNewDocToProject: (state, action) => {
			state.addNewDoc = [
				...state.addNewDoc,
				{
					document_type: action.payload.name,
					document_name: action.payload.document_name,
					identifier: action.payload.identifier,
				},
			];
		},
		RemoveNewDocToProject: (state, action) => {
			state.addNewDoc.splice(action.payload, 1);
		},
	},
});

export default AddProjectSlice.reducer;

// CREATE AN ACTION CEATOR
export const { nextForm } = AddProjectSlice.actions;
export const { prevForm } = AddProjectSlice.actions;
export const { setDefault } = AddProjectSlice.actions;
export const { saveID } = AddProjectSlice.actions;
export const { saveVendorID } = AddProjectSlice.actions;
export const { deleteDocument } = AddProjectSlice.actions;
export const { getActiveFormDetails } = AddProjectSlice.actions;
export const { addNewDocToProject } = AddProjectSlice.actions;
export const { RemoveNewDocToProject } = AddProjectSlice.actions;

// SELECT THE TOKEN AND USER
export const getForm = (state) => state.AddProjectReducer.projectForm;
export const getProjectID = (state) => state.AddProjectReducer.form_id;
export const getVendorID = (state) => state.AddProjectReducer.vendorID;
export const getDelete = (state) => state.AddProjectReducer.delete;
export const deletedFormDetails = (state) => state.AddProjectReducer.activeForm;
export const doc = (state) => state.AddProjectReducer.addNewDoc;
