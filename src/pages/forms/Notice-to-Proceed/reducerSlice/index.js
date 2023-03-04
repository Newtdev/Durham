import { createSlice } from "@reduxjs/toolkit";

const NoticeOfProceed = createSlice({
	name: "NoticeOfProceed",
	initialState: {
		form_data: null,
		step: 1,
	},
	reducers: {
		saveDoc: (state, action) => {
			state.form_data = action.payload;
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

export default NoticeOfProceed.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = NoticeOfProceed.actions;
export const { prevStep } = NoticeOfProceed.actions;
export const { nextStep } = NoticeOfProceed.actions;
export const { stepDefault } = NoticeOfProceed.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.NoticeOfProceedReducer.form_data;
export const page = (state) => state.NoticeOfProceedReducer.step;
