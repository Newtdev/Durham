import { createSlice } from "@reduxjs/toolkit";

const MWBEFormForBidsReducer = createSlice({
	name: "MWBEFormForBidsReducer",
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

export default MWBEFormForBidsReducer.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = MWBEFormForBidsReducer.actions;
export const { prevStep } = MWBEFormForBidsReducer.actions;
export const { nextStep } = MWBEFormForBidsReducer.actions;
export const { stepDefault } = MWBEFormForBidsReducer.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.MWBEFormForBidsReducer.form_data;
export const page = (state) => state.MWBEFormForBidsReducer.step;
