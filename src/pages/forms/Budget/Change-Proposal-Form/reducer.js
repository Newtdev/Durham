import { createSlice } from "@reduxjs/toolkit";

const Proposal = createSlice({
  name: "Proposal",
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

export default Proposal.reducer;

// CREATE AN ACTION CEATOR
export const { prevChoiceStep } = Proposal.actions;
export const { nextChoiceStep } = Proposal.actions;
export const { stepChoiceDefault } = Proposal.actions;
export const { getStates } = Proposal.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.Proposal.form_data;
export const page = (state) => state.Proposal.step;
