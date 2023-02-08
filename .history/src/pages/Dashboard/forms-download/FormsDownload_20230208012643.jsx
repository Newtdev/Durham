import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { DashboardNav, DashboardButton, PageHeader } from "../Components";
import { TableBody, SuccessModal, Filter } from "./components/index";
import { formsDownloadContent } from "./formsDownloadComponents";
import { ModalOverlay } from "../../../ui";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/searchIcon.svg";
import { SubmitButton } from "../../../ui";
import { searchFormAction, filteredForm, searchResult } from "./formsSlice";

const FormsDownload = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [params, setParams] = useState("");
  const [filteredFormsDownloadContent, setFilteredFormsDownloadContent] =
    useState([...formsDownloadContent]);
  // const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);

  // const forms = useSelector(filteredForm);
  // const result = useSelector(searchResult);

  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClose = () => {
    setShowModal(false);
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const PER_PAGE = 5;
  const pages = Math.ceil(filteredForm.length / 5);
  const skip = page * PER_PAGE - PER_PAGE;

  console.log(params);

  // if (params === "all") {
  //   setFilteredFormsDownloadContent(formsDownloadContent);
  // }
  // if (params) {
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

  const searchTermHandler = (e) => {
    e.preventDefault();
    let searchResult = [];
    if (searchTerm.length < 1) {
      // setIsSearching(false);
      searchResult = formsDownloadContent;
    } else {
      // setIsSearching(true);
      searchResult = formsDownloadContent.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredFormsDownloadContent(searchResult);
    }
    // dispatch(
    //   searchFormAction({ forms: formsDownloadContent, searchTerm: searchTerm })
    // );
    // console.log(forms);
    // console.log(result);
  };

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <section>
      <article>
        <DashboardNav />
      </article>
      <main className="pt-6 bg-[#fafafa] h-screen overflow-y-hidden">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="flex gap-4 flex-col md:flex-row md:justify-between items-center">
            <PageHeader name="Forms" />
            <DashboardButton
              onClick={() => {
                setShowModal(true);
              }}
              name="DOWNLOAD ALL"
              width="w-[290px]"
              // onClick={() => setShowModal(true)}
            />
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center mt-4 mb-6">
            <div className="flex flex-col items-center justify-center gap-6">
              {/* <!-- Sort --> */}
              {/* <Sort /> */}

              {/* <!-- Filter --> */}
              <Filter
                onChange={(e) => setParams(e.target.value)}
                params={params}
              />
            </div>
            {/* <!-- Sort --> */}
            {/* <Sort/> */}

            {/* <!-- Search --> */}
            <form
              className="flex flex-row justify-center items-center gap-4"
              onSubmit={searchTermHandler}
            >
              <div>
                <label for="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                    <img src={SearchIcon} alt="search" />
                  </div>
                  <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    id="table-search"
                    className="block p-2 pl-8 w-72 text-sm text-gray-900 bg-white rounded border border-gray-400 focus:outline-[#3B6979]"
                    placeholder="Search"
                  />
                </div>
              </div>
              <SubmitButton name="search" />
              {/* <ButtonWhiteBG name="search" onClick={submit} /> */}
            </form>
          </div>
          {/* <!-- Table --> */}
          <div className="overflow-x-auto relative shadow rounded-lg border-solid border border-gray-100 ">
            <table className="w-full text-sm text-left text-gray-900">
              <TableBody {...FormsDownloadProps}></TableBody>
            </table>
          </div>
          {/* pagination */}
          <nav
            className="mb-4 flex justify-center items-center pt-4"
            aria-label="Table navigation"
          >
            <Pagination count={pages} onChange={handleChange} color="primary" />
          </nav>
        </div>
      </main>

      <article>
        {/* Main modal */}
        <ModalOverlay show={showModal}>
          <SuccessModal close={onClose} dashboard={goToDashboard} />
        </ModalOverlay>
      </article>
    </section>
  );
};

export default FormsDownload;
