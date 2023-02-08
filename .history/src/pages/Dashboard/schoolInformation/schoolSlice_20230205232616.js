import { createSlice } from "@reduxjs/toolkit";

const SchoolSlice = createSlice({
	name: "awardee",
	initialState: {
		schools: null,
		searchSchool: ''
	},
	reducers: {
		save_school: (state, action) => {
			state.schools = action.payload || {};
		},
		setSearchSchoolQuery: (state,action) => {
			state.searchSchool = action.payload
		}
	},
});

export default SchoolSlice.reducer;

// CREATE AN ACTION CEATOR
export const { save_school } = SchoolSlice.actions;
export const { setSearchSchoolQuery } = SchoolSlice.actions;

// SELECT THE TOKEN AND USER
export const getSaveData = (state) => state.SchoolReducer.awardee;
export const schoolQuery = (state) => state.SchoolReducer.searchSchool;
