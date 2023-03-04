import { createSlice } from "@reduxjs/toolkit";

const NoticeAwardContractor = createSlice({
	name: "NoticeAwardContractor",
	initialState: {
		form_data: {},
		step: 1,
	},
	reducers: {
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

export default NoticeAwardContractor.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = NoticeAwardContractor.actions;
export const { prevStep } = NoticeAwardContractor.actions;
export const { nextStep } = NoticeAwardContractor.actions;
export const { stepDefault } = NoticeAwardContractor.actions;

// SELECT THE TOKEN AND USER

export const page = (state) => state.NoticeAwardContractorReducer.step;
