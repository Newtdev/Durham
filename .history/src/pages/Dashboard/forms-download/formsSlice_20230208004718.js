import { createSlice } from "@reduxjs/toolkit";

const formIntitailState = {
  forms: [],
  searchReasult: [],
  filteredResult: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: formIntitailState,
  reducers: {
    searchForm(state, action) {
      const searchTerm = action.payload;
      if (searchTerm.length < 1) {
        state.isSearching = false;
      } else {
        state.isSearching = true;
        const newFormsList = state.forms.filter((contact) => {
          return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        state.searchReasult = newFormsList;
      }
    },
    filterForm(state, action) {
      const filterParams = action.payload;
      let newFormsList = state.forms;
      if (filterParams === "all") {
        newFormsList = state.forms;
      } else {
        newFormsList = state.forms.filter(
          (form) => form.category.toLowerCase() === filterParams
        );
      }
      state.filteredResult = newFormsList;
    },
  },
});

export const formsActions = formSlice.actions;

export default formSlice.reducer;
