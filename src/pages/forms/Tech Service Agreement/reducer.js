import { createSlice } from "@reduxjs/toolkit";

const TechServiceSlice = createSlice({
	name: "TechServiceSlice",
	initialState: {
		form_data: {},
		techStep: 1,
	},
	reducers: {
		techNextStep: (state) => {
			state.techStep += 1;
		},
		techPrevStep: (state) => {
			state.techStep -= 1;
		},
		techStepDefault: (state) => {
			state.techStep = 1;
		},
	},
});

export default TechServiceSlice.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = TechServiceSlice.actions;
export const { techPrevStep } = TechServiceSlice.actions;
export const { techNextStep } = TechServiceSlice.actions;
export const { techStepDefault } = TechServiceSlice.actions;

// SELECT THE TOKEN AND USER

export const page = (state) => state.TechServiceReducer.techStep;
