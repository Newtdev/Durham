import { createSlice } from "@reduxjs/toolkit";

const changeOrderDirective = createSlice({
	name: "changeOrderDirective",
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

export default changeOrderDirective.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = changeOrderDirective.actions;
export const { prevStep } = changeOrderDirective.actions;
export const { nextStep } = changeOrderDirective.actions;
export const { stepDefault } = changeOrderDirective.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) =>
	state.changeOrderDirectiveReducer.form_data;
export const page = (state) => state.changeOrderDirectiveReducer.step;
