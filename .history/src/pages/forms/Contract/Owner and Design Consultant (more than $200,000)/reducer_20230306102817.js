import { createSlice } from "@reduxjs/toolkit";

const OwnerDesignMoreForm = createSlice({
  name: "OwnerDesignMoreForm",
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
      console.log("next step", state.step);
    },
    prevStep: (state, { payload }) => {
      state.step = payload;
    },
    stepDefault: (state) => {
      state.step = 1;
    },
  },
});

export default OwnerDesignMoreForm.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = OwnerDesignMoreForm.actions;
export const { prevStep } = OwnerDesignMoreForm.actions;
export const { nextStep } = OwnerDesignMoreForm.actions;
export const { stepDefault } = OwnerDesignMoreForm.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.OwnerDesignMoreFormReducer.form_data;
export const page = (state) => state.OwnerDesignMoreFormReducer.step;
