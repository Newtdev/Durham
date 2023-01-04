import { createSlice } from "@reduxjs/toolkit";

const EsserContractTemplate = createSlice({
	name: "EsserContractTemplate",
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

export default EsserContractTemplate.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = EsserContractTemplate.actions;
export const { nextChoiceStep } = EsserContractTemplate.actions;
export const { stepChoiceDefault } = EsserContractTemplate.actions;
export const { getStates } = EsserContractTemplate.actions;

// SELECT THE TOKEN AND USER

export const choiceStep = (state) => state.EsserContractTemplate.step;
