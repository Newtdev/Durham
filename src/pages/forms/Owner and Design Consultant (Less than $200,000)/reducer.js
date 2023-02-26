import { createSlice } from "@reduxjs/toolkit";

const OwnerDesignConsultantless = createSlice({
	name: "OwnerDesignConsultantless",
	initialState: {
		form_data: [],
		step: 1,
	},
	reducers: {
		saveDoc: (state, { payload }) => {
			state.form_data = payload;
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

export default OwnerDesignConsultantless.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = OwnerDesignConsultantless.actions;
export const { prevStep } = OwnerDesignConsultantless.actions;
export const { nextStep } = OwnerDesignConsultantless.actions;
export const { stepDefault } = OwnerDesignConsultantless.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.OwnerDesignConsultantless.form_data;
export const page = (state) => state.OwnerDesignConsultantless.step;
