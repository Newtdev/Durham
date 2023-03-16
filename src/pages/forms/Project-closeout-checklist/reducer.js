import { createSlice } from "@reduxjs/toolkit";

const ProjectCloseoutStep = createSlice({
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

export default ProjectCloseoutStep.reducer;

// CREATE AN ACTION CEATOR
export const { prev } = ProjectCloseoutStep.actions;
export const { next } = ProjectCloseoutStep.actions;
export const { stepDefault } = ProjectCloseoutStep.actions;
export const { getStates } = ProjectCloseoutStep.actions;

// SELECT THE TOKEN AND USER

export const step = (state) => state.ProjectCloseoutStepReducer.step;
