import { createSlice } from "@reduxjs/toolkit";

const ContractPreparationCheckList = createSlice({
	name: "projectCloseout",
	initialState: {
		step: 0,
	},
	reducers: {
		next: (state, action) => {
			state.step = action.payload;
		},
		prev: (state, action) => {
			state.step = action.payload;
		},
		stepDefault: (state) => {
			state.step = 0;
		},
	},
});

export default ContractPreparationCheckList.reducer;

// CREATE AN ACTION CEATOR
export const { prev } = ContractPreparationCheckList.actions;
export const { next } = ContractPreparationCheckList.actions;
export const { stepDefault } = ContractPreparationCheckList.actions;
export const { getStates } = ContractPreparationCheckList.actions;

// SELECT THE TOKEN AND USER

export const step = (state) => state.ContractPreparationCheckListReducer.step;
