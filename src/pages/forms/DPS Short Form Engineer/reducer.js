import { createSlice } from "@reduxjs/toolkit";

const ShortForm = createSlice({
	name: "ShortForm",
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

export default ShortForm.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = ShortForm.actions;
export const { prevStep } = ShortForm.actions;
export const { nextStep } = ShortForm.actions;
export const { stepDefault } = ShortForm.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.ShortForm.form_data;
export const page = (state) => state.ShortForm.step;
