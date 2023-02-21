import { createSlice } from "@reduxjs/toolkit";

const changeOrderForm = createSlice({
	name: "changeOrderForm",
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

export default changeOrderForm.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = changeOrderForm.actions;
export const { prevStep } = changeOrderForm.actions;
export const { nextStep } = changeOrderForm.actions;
export const { stepDefault } = changeOrderForm.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.changeOrderFormReducer.form_data;
export const page = (state) => state.changeOrderFormReducer.step;
