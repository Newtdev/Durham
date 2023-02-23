import { createSlice } from "@reduxjs/toolkit";

const Affidavit = createSlice({
  name: "Affidavit",
  initialState: {
    form_data: [],
    step: 1,
  },
  reducers: {
    nextChoiceStep: (state, action) => {
      state.step = action.payload;
    },
    prevChoiceStep: (state, action) => {
      state.step = action.payload;
    },
    stepChoiceDefault: (state) => {
      state.step = 1;
    },
    saveDoc: (state, { payload }) => {
      state.form_data = payload;
    },
  },
});

export default Affidavit.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = Affidavit.actions;
export const { nextChoiceStep } = Affidavit.actions;
export const { stepChoiceDefault } = Affidavit.actions;
export const { getStates } = Affidavit.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.Affidavit.form_data;
export const page = (state) => state.Affidavit.step;
