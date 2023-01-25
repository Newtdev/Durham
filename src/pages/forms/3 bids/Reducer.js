import { createSlice } from "@reduxjs/toolkit";

const Vendor3Bid = createSlice({
	name: "Vendor3Bid",
	initialState: {
		form_data: [],
		step: 0,
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
		saveDoc: (state, { payload }) => {
			state.form_data = payload;
		},
	},
});

export default Vendor3Bid.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = Vendor3Bid.actions;
export const { nextChoiceStep } = Vendor3Bid.actions;
export const { stepChoiceDefault } = Vendor3Bid.actions;
export const { getStates } = Vendor3Bid.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.Vendor3Bid.form_data;
export const page = (state) => state.Vendor3Bid.step;
