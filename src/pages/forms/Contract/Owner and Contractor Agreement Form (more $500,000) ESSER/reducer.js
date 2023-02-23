import { createSlice } from "@reduxjs/toolkit";

const ownersContractorFormESSER = createSlice({
	name: "ownersContractorFormESSER",
	initialState: {
		form_data: [],
		step: 1,
	},
	reducers: {
		saveDoc: (state, { payload }) => {
			state.form_data = payload;
		},
		nextStep: (state, { payload }) => {
			state.step = payload;
		},
		prevStep: (state, { payload }) => {
			state.step = payload;
		},
		stepDefault: (state) => {
			state.step = 1;
		},
	},
});

export default ownersContractorFormESSER.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = ownersContractorFormESSER.actions;
export const { prevStep } = ownersContractorFormESSER.actions;
export const { nextStep } = ownersContractorFormESSER.actions;
export const { stepDefault } = ownersContractorFormESSER.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.ownersContractorFormESSER.form_data;
export const page = (state) => state.ownersContractorFormESSER.step;
