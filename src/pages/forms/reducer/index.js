import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
	name: "modalSlice",
	initialState: {
		isModalActive: false,
		isDownloadModal: false,
		savedFormResponse: null,
		savedFieldResponse: null
	},
	reducers: {
		showModal: (state) => {
			state.isModalActive = true;
		},
		closeModal: (state) => {
			state.isModalActive = false;
		},
		closeDownload: (state) => {
			state.isDownloadModal = false;
		},
		showDownload: (state) => {
			state.isDownloadModal = true;
		},
		getFormResponse: (state,action) => {
			state.savedFormResponse = action.payload
		},
		saveFormField: (state,action) => {
			state.savedFieldResponse = action.payload
		}
	},
});

export default ModalSlice.reducer;

// CREATE AN ACTION CEATOR

export const { closeModal } = ModalSlice.actions;
export const { showModal } = ModalSlice.actions;
export const { showDownload } = ModalSlice.actions;
export const { closeDownload } = ModalSlice.actions;
export const { getFormResponse } = ModalSlice.actions;
export const { saveFormField } = ModalSlice.actions;

// SELECT THE TOKEN AND USER

export const modal = (state) => state.ModalReducer.isModalActive;
export const openDownload = (state) => state.ModalReducer.isDownloadModal;
export const savedResponse = (state) => state.ModalReducer.savedFormResponse;
export const fields = (state) => state.ModalReducer.savedFieldResponse;
