import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import {
  DashboardNav,
  DashboardButton,
  PageHeader,
  Search,
} from "../Components";
import { TableBody, SuccessModal, Filter } from "./components/index";
import { formsDownloadContent } from "./formsDownloadComponents";
import { ModalOverlay } from "../../../ui";
import { useNavigate } from "react-router-dom";

const FormsDownload = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [params, setParams] = useState("");
  const [filteredFormsDownloadContent, setFilteredFormsDownloadContent] =
    useState([...formsDownloadContent]);
  const [isSearching, setIsSearching] = useState(false)

  const navigate = useNavigate();

  const onClose = () => {
    setShowModal(false);
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const PER_PAGE = 5;
  const pages = Math.ceil(formsDownloadContent.length / 5);
  const skip = page * PER_PAGE - PER_PAGE;

  console.log(params);

  if (params === "all") {
    setFilteredFormsDownloadContent(formsDownloadContent);
  }
  // if (params !== "all") {
  //   const filteredArray = formsDownloadContent.filter(
  //     (form) => form.category.toLowerCase() === params
  //   );
  //   setFilteredFormsDownloadContent(filteredArray);
  // }

  const FormsDownloadProps = {
    dataArray: filteredFormsDownloadContent,
    pages,
    perPage: PER_PAGE,
    skip,
  };

  const searchProps = {
    setQuery: (value) => setQuery(value),
    placeholder: "Search Project",

    submit: (e) => {
      e.preventDefault();
      dispatch(setsearchQuery(searchVendorQuery));
    },
  };

  const serchTermHandler = (e) => {
    const searchTerm = e.target.value
    if (searchTerm.length < 1) {
        setIsSearching(false);
    } else {
        setIsSearching(true);
        searchResult = state.formsDownloadContent.filter(contact => {
            return (Object.values(contact).join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase()));
        });
      setFilteredFormsDownloadContent(searchResult)
    }
}
}

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    
);
};

export default FormsDownload;
