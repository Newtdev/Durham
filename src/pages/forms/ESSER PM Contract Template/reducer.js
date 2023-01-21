import { createSlice } from "@reduxjs/toolkit";

const EsserPM = createSlice({
	name: "EsserPM",
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

export default EsserPM.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = EsserPM.actions;
export const { nextChoiceStep } = EsserPM.actions;
export const { stepChoiceDefault } = EsserPM.actions;
export const { getStates } = EsserPM.actions;

// SELECT THE TOKEN AND USER

export const choiceStep = (state) => state.EsserPMReducer.step;
