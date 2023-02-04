import { createSlice } from "@reduxjs/toolkit";

const shortformDesign = createSlice({
	name: "shortformDesign",
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

export default shortformDesign.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = shortformDesign.actions;
export const { prevStep } = shortformDesign.actions;
export const { nextStep } = shortformDesign.actions;
export const { stepDefault } = shortformDesign.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.shortformDesign.form_data;
export const page = (state) => state.shortformDesign.step;
