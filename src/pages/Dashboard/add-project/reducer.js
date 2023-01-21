import { createSlice } from "@reduxjs/toolkit";
import { state } from "../../../lib/data";

const AddProjectSlice = createSlice({
	name: "add-products",
	initialState: {
        projectForm:0,
        form_id: null,
        vendorID: [],
	},

	reducers: {
        nextForm: (state, action) => {
            state.projectForm =action.payload
        },
        prevForm: (state, action) => {
            state.projectForm =action.payload
        },
        setDefault: (state, action) => {
            state.projectForm = 0;
        },
        saveID: (state, action) => {
            state.form_id = action.payload
        },
        saveVendorID: (state, action) => {
            // console.log([...state.vendorID, action.payload])
            
            state.vendorID =[...state.vendorID, action.payload]
        }
	},
});

export default AddProjectSlice.reducer;

// CREATE AN ACTION CEATOR
export const { nextForm } = AddProjectSlice.actions;
export const { prevForm } = AddProjectSlice.actions;
export const { setDefault } = AddProjectSlice.actions;
export const { saveID } = AddProjectSlice.actions;
export const { saveVendorID } = AddProjectSlice.actions;

// SELECT THE TOKEN AND USER
export const getForm = (state) => state.AddProjectReducer.projectForm;
export const getProjectID = (state) => state.AddProjectReducer.form_id;
export const getVendorID = (state) => state.AddProjectReducer.vendorID
