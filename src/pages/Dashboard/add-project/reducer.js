import { createSlice } from "@reduxjs/toolkit";

const AddProjectSlice = createSlice({
	name: "add-products",
	initialState: {
        projectForm: 2,
        form_id:null
	},

	reducers: {
        nextForm: (state, action) => {
            state.projectForm += 1
        },
        prevForm: (state, action) => {
            state.projectForm -= 1
        },
        saveID: (state, action) => {
            state.form_id = action.payload
        }
	},
});

export default AddProjectSlice.reducer;

// CREATE AN ACTION CEATOR
export const { nextForm } = AddProjectSlice.actions;
export const { prevForm } = AddProjectSlice.actions;
export const { saveID } = AddProjectSlice.actions;

// SELECT THE TOKEN AND USER
export const getForm = (state) => state.AddProjectReducer.projectForm;
export const getProjectID = (state) => state.AddProjectReducer.form_id;
