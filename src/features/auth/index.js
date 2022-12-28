import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
	name: "login",
	initialState: {
		user_data: null,
		accessToken: null,
	},
	reducers: {
		userInfo: (state, action) => {
			state.user_data = action.payload;
			state.accessToken = action.payload.authorization.token;
		},
	},
});

// export const { setCredentials, logOut } = authSlice.actions

// export default authSlice.reducer

// export const selectCurrentUser = (state) => state.auth.user
// export const selectCurrentToken = (state) => state.auth.token

export default loginSlice.reducer;

// CREATE AN ACTION CEATOR
export const { userInfo } = loginSlice.actions;

// SELECT THE TOKEN AND USER

export const selectToken = (state) => state.loginReducer.accessToken;
export const userDetails = (state) => state.loginReducer.user_data;
