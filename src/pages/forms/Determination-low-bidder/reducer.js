import { createSlice } from "@reduxjs/toolkit";

const Determination = createSlice({
	name: "Determination",
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

export default Determination.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = Determination.actions;
export const { prevStep } = Determination.actions;
export const { nextStep } = Determination.actions;
export const { stepDefault } = Determination.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.DeterminationReducer.form_data;
export const page = (state) => state.DeterminationReducer.step;
