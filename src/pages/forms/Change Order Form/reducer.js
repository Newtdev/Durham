import { createSlice } from "@reduxjs/toolkit";

const ownersContractorForm = createSlice({
	name: "ownersContractorForm",
	initialState: {
		form_data: [],
		step: 1,
	},
	reducers: {
		saveDoc: (state, {payload}) => {
			state.form_data = payload;
		},
		nextStep: (state, {payload}) => {
			state.step = payload;
		},
		prevStep: (state, {payload}) => {
			state.step = payload
		},
		stepDefault: (state) => {
			state.step = 1;
		},
	},
});

export default ownersContractorForm.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = ownersContractorForm.actions;
export const { prevStep } = ownersContractorForm.actions;
export const { nextStep } = ownersContractorForm.actions;
export const { stepDefault } = ownersContractorForm.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.ownersContractorFormReducer.form_data;
export const page = (state) => state.ownersContractorFormReducer.step;
