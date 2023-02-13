import { createSlice } from "@reduxjs/toolkit";

const OwnerDesignConsultantLess = createSlice({
  name: "OwnerDesignConsultantLess",
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

export default OwnerDesignConsultantLess.reducer;

// CREATE AN ACTION CEATOR
export const { saveDoc } = OwnerDesignConsultantLess.actions;
export const { prevStep } = OwnerDesignConsultantLess.actions;
export const { nextStep } = OwnerDesignConsultantLess.actions;
export const { stepDefault } = OwnerDesignConsultantLess.actions;

// SELECT THE TOKEN AND USER

export const selectForm = (state) => state.OwnerDesignConsultantLess.form_data;
export const page = (state) => state.OwnerDesignConsultantLess.step;
