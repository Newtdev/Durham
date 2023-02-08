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
      let searchResult = [];
      if (searchTerm.length < 1) {
        setIsSearching(false);
        searchResult = formsDownloadContent;
      } else {
        setIsSearching(true);
        searchResult = formsDownloadContent.filter((contact) => {
          return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setFilteredFormsDownloadContent(searchResult);
      }
    },
    filterForm(state, action) {},
  },
});
