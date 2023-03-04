import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
	name: "formSlice",
	initialState: {
		form_data: null,
		step: 1,
	},
	reducers: {
		saveDoc: (state, action) => {
			state.form_data = action.payload;
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

export default FormSlice.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = FormSlice.actions;
export const { prevStep } = FormSlice.actions;
export const { nextStep } = FormSlice.actions;
export const { stepDefault } = FormSlice.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.FormReducer.form_data;
export const page = (state) => state.FormReducer.step;
