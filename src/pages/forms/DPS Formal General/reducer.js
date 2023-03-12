import { createSlice } from "@reduxjs/toolkit";

const DpsFormalGeneral = createSlice({
  name: "DpsFormalGeneral",
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

export default DpsFormalGeneral.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = DpsFormalGeneral.actions;
export const { prevStep } = DpsFormalGeneral.actions;
export const { nextStep } = DpsFormalGeneral.actions;
export const { stepDefault } = DpsFormalGeneral.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.DpsFormalGeneralReducer.form_data;
export const page = (state) => state.DpsFormalGeneralReducer.step;
