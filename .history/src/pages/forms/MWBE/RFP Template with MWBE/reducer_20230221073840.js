import { createSlice } from "@reduxjs/toolkit";

const RFPTemplateWithMWBE = createSlice({
  name: "RFPTemplateWithMWBE",
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

export default RFPTemplateWithMWBE.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = RFPTemplateWithMWBE.actions;
export const { prevStep } = RFPTemplateWithMWBE.actions;
export const { nextStep } = RFPTemplateWithMWBE.actions;
export const { stepDefault } = RFPTemplateWithMWBE.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.RFPTemplateWithMWBEReducer.form_data;
export const page = (state) => state.RFPTemplateWithMWBEReducer.step;
