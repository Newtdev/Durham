import { createSlice } from "@reduxjs/toolkit";

const Lechase = createSlice({
	name: "Lechase",
	initialState: {
		step: 0,
	},
	reducers: {
		nextChoiceStep: (state,action) => {
            state.step = action.payload;
		},
		prevChoiceStep: (state,action) => {
			state.step = action.payload;
		},
		stepChoiceDefault: (state) => {
			state.step = 0;
		},
	},
});

export default Lechase.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = Lechase.actions;
export const { nextChoiceStep } = Lechase.actions;
export const { stepChoiceDefault } = Lechase.actions;
export const { getStates } = Lechase.actions;

// SELECT THE TOKEN AND USER

export const choiceStep = (state) => state.LechaseReducer.step;
