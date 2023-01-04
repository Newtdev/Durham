import { createSlice } from "@reduxjs/toolkit";

const NoticeAwardConsultant = createSlice({
	name: "NoticeAwardConsultant",
	initialState: {
		form_data: {},
		step: 1,
	},
	reducers: {
		nextStep: (state) => {
			state.step += 1;
		},
		prevStep: (state) => {
			state.step -= 1;
		},
		stepDefault: (state) => {
			state.step = 1;
		},
	},
});

export default NoticeAwardConsultant.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = NoticeAwardConsultant.actions;
export const { prevStep } = NoticeAwardConsultant.actions;
export const { nextStep } = NoticeAwardConsultant.actions;
export const { stepDefault } = NoticeAwardConsultant.actions;

// SELECT THE TOKEN AND USER

export const page = (state) => state.NoticeAwardConsultantReducer.step;
