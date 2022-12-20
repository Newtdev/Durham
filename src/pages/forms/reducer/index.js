import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
	name: "modalSlice",
	initialState: {
		isModalActive: true,
		isDownloadModal: false,
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
	},
});

export default ModalSlice.reducer;

// CREATE AN ACTION CEATOR

export const { closeModal } = ModalSlice.actions;
export const { showModal } = ModalSlice.actions;
export const { showDownload } = ModalSlice.actions;
export const { closeDownload } = ModalSlice.actions;

// SELECT THE TOKEN AND USER

export const modal = (state) => state.ModalReducer.isModalActive;
export const openDownload = (state) => state.ModalReducer.isDownloadModal;
