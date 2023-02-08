import { createSlice } from "@reduxjs/toolkit";

const formIntitailState = {
  forms: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: formIntitailState,
  reducers: {
    searchForm(state, action) {
      const searchTerm = action.payload;
    },
    filterForm(state, action) {},
  },
});
