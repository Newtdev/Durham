import { createSlice } from "@reduxjs/toolkit";

const CapitalForm = createSlice({
	name: "CapitalForm",
	initialState: {
		step: 0,
		UScities: null,
	},
	reducers: {
		nextChoiceStep: (state, action) => {
			state.step = action.payload;
		},
		prevChoiceStep: (state, action) => {
			state.step = action.payload;
		},
		stepChoiceDefault: (state) => {
			state.step = 0;
		},
	},
});

export default CapitalForm.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = CapitalForm.actions;
export const { nextChoiceStep } = CapitalForm.actions;
export const { stepChoiceDefault } = CapitalForm.actions;
export const { getStates } = CapitalForm.actions;

// SELECT THE TOKEN AND USER

export const choiceStep = (state) => state.CapitalForm.step;
export const getList = (state) => state.CapitalForm.UScities;
