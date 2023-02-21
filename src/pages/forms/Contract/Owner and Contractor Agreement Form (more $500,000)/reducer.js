import { createSlice } from "@reduxjs/toolkit";

const ownersContractorForm500 = createSlice({
	name: "ownersContractorForm500",
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

export default ownersContractorForm500.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = ownersContractorForm500.actions;
export const { prevStep } = ownersContractorForm500.actions;
export const { nextStep } = ownersContractorForm500.actions;
export const { stepDefault } = ownersContractorForm500.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.ownersContractorForm500.form_data;
export const page = (state) => state.ownersContractorForm500.step;
