import { createSlice } from "@reduxjs/toolkit";

const formIntitailState = {
  filteredForm: [],
  searchReasult: [1, 2, 3],
  filteredResult: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: formIntitailState,
  reducers: {
    searchFormAction(state, action) {
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
    filterFormAction(state, action) {
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

export const { searchFormAction } = formSlice.actions;
export const { filterFormAction } = formSlice.actions;

export const filteredForm = (state) => state.FormReducer.filteredForm;
export const searchResult = (state) => state.FormReducer.searchReasult;
