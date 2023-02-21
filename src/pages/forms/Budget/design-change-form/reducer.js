import { createSlice } from "@reduxjs/toolkit";

const designChangePhase = createSlice({
	name: "designChangePhase",
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

export default designChangePhase.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = designChangePhase.actions;
export const { prevStep } = designChangePhase.actions;
export const { nextStep } = designChangePhase.actions;
export const { stepDefault } = designChangePhase.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.designChangePhaseReducer.form_data;
export const page = (state) => state.designChangePhaseReducer.step;
