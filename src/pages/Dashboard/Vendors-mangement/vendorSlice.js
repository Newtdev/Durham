import { createSlice } from "@reduxjs/toolkit";

const AwardSlice = createSlice({
	name: "awardee",
	initialState: {
		awardee: null,
		searchVendor: ''
	},
	reducers: {
		save_awardee: (state, action) => {
			state.awardee = action.payload || {};
		},
		setSearchVendorQuery: (state,action) => {
			state.searchVendor = action.payload
		}
	},
});

export default AwardSlice.reducer;

// CREATE AN ACTION CEATOR
export const { save_awardee } = AwardSlice.actions;
export const { setSearchVendorQuery } = AwardSlice.actions;

// SELECT THE TOKEN AND USER
export const getSaveData = (state) => state.AwardeeReducer.awardee;
export const vendorQuery = (state) => state.AwardeeReducer.searchVendor;
