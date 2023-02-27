import { createSlice } from "@reduxjs/toolkit";

const lundsfordSlice = createSlice({
	name: "lundsfordSlice",
	initialState: {
		form_data: [],
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

export default lundsfordSlice.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = lundsfordSlice.actions;
export const { prevStep } = lundsfordSlice.actions;
export const { nextStep } = lundsfordSlice.actions;
export const { stepDefault } = lundsfordSlice.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.LundsfordReducer.form_data;
export const page = (state) => state.LundsfordReducer.step;
