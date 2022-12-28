import { createSlice } from "@reduxjs/toolkit";

const DurhamSlice = createSlice({
	name: "durham-settings",
	initialState: {
		durham_profile: {},
	},

	reducers: {
		save_profile: (state, { payload }) => {
			 payload.map((profile) => {
					return (state.durham_profile = {
						...state.durham_profile,
						[profile.name]: profile,
					});
				});
		},
	},
});

export default DurhamSlice.reducer;

// CREATE AN ACTION CEATOR
export const { save_profile } = DurhamSlice.actions;

// SELECT THE TOKEN AND USER
export const getSaveData = (state) => state.DurhamProfileReducer.durham_profile;
