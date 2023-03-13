import { createSlice } from "@reduxjs/toolkit";

const CertificateOfSubstantial = createSlice({
	name: "certificateOfSubstantial",
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

export default CertificateOfSubstantial.reducer;

// CREATE AN ACTION CEATOR
export const { prev } = CertificateOfSubstantial.actions;
export const { next } = CertificateOfSubstantial.actions;
export const { stepDefault } = CertificateOfSubstantial.actions;
export const { getStates } = CertificateOfSubstantial.actions;

// SELECT THE TOKEN AND USER

export const step = (state) => state.CertificateOfSubstantialReducer.step;
