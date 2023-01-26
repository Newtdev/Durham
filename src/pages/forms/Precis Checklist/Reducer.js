import { createSlice } from "@reduxjs/toolkit";

const PreciseList = createSlice({
	name: "Precise",
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
		getStates: (state, { payload }) => {
			state.UScities = payload;
		},
	},
});

export default PreciseList.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = PreciseList.actions;
export const { nextChoiceStep } = PreciseList.actions;
export const { stepChoiceDefault } = PreciseList.actions;
export const { getStates } = PreciseList.actions;

// SELECT THE TOKEN AND USER

export const choiceStep = (state) => state.PreciseListReducer.step;
export const getList = (state) => state.PreciseListReducer.UScities;
