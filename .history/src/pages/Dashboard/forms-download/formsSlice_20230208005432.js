import { createSlice } from "@reduxjs/toolkit";

const formIntitailState = {
  filteredForm: [],
  searchReasult: [],
  filteredResult: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: formIntitailState,
  reducers: {
    searchForm(state, action) {
      const forms = action.payload.forms;
      const searchTerm = action.payload.searchTerm;
      if (searchTerm.length < 1) {
        state.isSearching = false;
      } else {
        state.isSearching = true;
        const newFormsList = forms.filter((contact) => {
          return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        state.filteredForm = newFormsList;
      }
    },
    filterForm(state, action) {
      const forms = action.payload.forms;
      const filterParams = action.payload;
      let newFormsList = state.forms;
      if (filterParams === "all") {
        newFormsList = forms;
      } else {
        newFormsList = forms.filter(
          (form) => form.category.toLowerCase() === filterParams
        );
      }
      state.filteredForm = newFormsList;
    },
  },
});

export default formSlice.reducer;

export const { searchForm } = formSlice.actions;
export const { filterForm } = formSlice.actions;
