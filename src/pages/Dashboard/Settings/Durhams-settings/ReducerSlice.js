import { createSlice } from "@reduxjs/toolkit";

const DurhamSlice = createSlice({
	name: "durham-settings",
	initialState: {
		durham_profile: {},
	},
	reducers: {
		save_profile: (state, { payload }) => {
			state.durham_profile = {
				...state.durham_profile,
				[payload.slug]: payload.value,
			};
		},
	},
});

export default DurhamSlice.reducer;

// CREATE AN ACTION CEATOR
export const { save_profile } = DurhamSlice.actions;

// SELECT THE TOKEN AND USER
export const getSaveData = (state) => state.DurhamProfileReducer.durham_profile;
