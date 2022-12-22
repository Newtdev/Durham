import { createSlice } from "@reduxjs/toolkit";

const MultiChoiceStep = createSlice({
	name: "MultiChoiceStep",
	initialState: {
		step: 0,
		UScities: null,
	},
	reducers: {
		nextChoiceStep: (state) => {
			state.step += 1;
		},
		prevChoiceStep: (state) => {
			state.step -= 1;
		},
		stepChoiceDefault: (state) => {
			state.step = 0;
		},
		getStates: (state, { payload }) => {
			state.UScities = payload;
		},
	},
});

export default MultiChoiceStep.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = MultiChoiceStep.actions;
export const { nextChoiceStep } = MultiChoiceStep.actions;
export const { stepChoiceDefault } = MultiChoiceStep.actions;
export const { getStates } = MultiChoiceStep.actions;

// SELECT THE TOKEN AND USER

export const choiceStep = (state) => state.MultiFormReducer.step;
export const getList = (state) => state.MultiFormReducer.UScities;
