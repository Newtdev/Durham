import { createSlice } from "@reduxjs/toolkit";

const AwardSlice = createSlice({
	name: "awardee",
	initialState: {
		awardee: null,
	},
	reducers: {
		save_awardee: (state, action) => {
			state.awardee = action.payload || {};
		},
	},
});

export default AwardSlice.reducer;

// CREATE AN ACTION CEATOR
export const { save_awardee } = AwardSlice.actions;

// SELECT THE TOKEN AND USER
export const getSaveData = (state) => state.AwardeeReducer.awardee;
