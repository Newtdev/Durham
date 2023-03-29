import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { DashboardNav, DashboardButton, PageHeader } from "../Components";
import { FormsArray } from "./components/index";
import { SuccessModal, Filter } from "./FormsComponents";
import { ModalOverlay } from "../../../ui";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/searchIcon.svg";
import { SubmitButton } from "../../../ui";
import { FormsDownloadButton } from "./FormsComponents";
import frame from "../../../assets/Frame.svg";
import { downloadFileAtURL } from "./FormsComponents";

const Forms = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const [filteredForms, setFilteredForms] = useState([...FormsArray]);
  const [searchTerm, setSearchTerm] = useState(false);

  const navigate = useNavigate();

  const onClose = () => {
    setShowModal(false);
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const PER_PAGE = 6;
  const pages = Math.ceil(filteredForms.length / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  const filterHandler = (e) => {
    const filteredArray = FormsArray.filter(
      (form) => form.category.toLowerCase() === e.target.value
    );
    setFilteredForms(filteredArray);
    if (e.target.value === "all") {
      setFilteredForms(FormsArray);
    }
    setPage(1);
  };

  const onDownload = (fileName) => {
    setShowModal(true);
    setFileName(fileName);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let searchResult = [];
    if (searchTerm.length < 1) {
      setFilteredForms(FormsArray);
    } else {
      searchResult = FormsArray.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredForms(searchResult);

      if (searchResult.length < 1) {
        setFilteredForms(FormsArray);
      }
    }
    setPage(1);
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
            <a href="#" download>
              <DashboardButton
                onClick={() => {
                  onDownload("All Forms");
                }}
                name="DOWNLOAD ALL"
                width="w-[197px]"
              />
            </a>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center mt-4 mb-6">
            <div className="flex flex-col items-center justify-center gap-6">
              {/* <!-- Filter --> */}
              <Filter onChange={filterHandler} />
            </div>
            {/* <!-- Search --> */}
            <form
              className="flex flex-row justify-center items-center gap-4"
              onSubmit={searchHandler}
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
            </form>
          </div>
          {/* <!-- Table --> */}
          <div className="overflow-x-auto relative rounded-lg  ">
            <table className="w-full text-sm text-left text-gray-900">
              <section className="w-full text-base font-medium overflow-hidden ">
                {filteredForms
                  .slice(skip, skip + PER_PAGE)
                  .map((manager, index) => {
                    const { id, title, category, downloadLink } = manager;
                    return (
                      <ul
                        key={id}
                        className="border border-[#D8E1E4] bg-white rounded-lg h-16 flex justify-between items-center mb-4 w-full flex-nowrap pr-[7.5rem]"
                      >
                        <li className="py-4 px-2 font-normal capitalize text-gray-900 whitespace-nowrap w-[65%] flex items-center justify-start gap-3">
                          <img src={frame} alt="icon" />
                          <span className="overflow-hidden text-ellipsis">
                            {title}
                          </span>
                        </li>
                        <li className="md:py-4 md:px-4  font-normal capitalize text-[#693B79] whitespace-nowrap w-[20%] lg:text-center md:text-right mr-auto">
                          {category}
                        </li>
                        <li className="py-4 px-4 flex items-center justify-start gap-3">
                          <div className="w-4 cursor-pointer">
                            <span
                              onClick={() => {
                                downloadFileAtURL(downloadLink, title);
                                onDownload(title);
                              }}
                            >
                              <FormsDownloadButton name="Download" />
                            </span>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
              </section>
            </table>
          </div>
          {/* pagination */}
          <nav
            className="mb-4 flex justify-center items-center pt-4"
            aria-label="Table navigation"
          >
            {filteredForms.length > PER_PAGE && (
              <Pagination
                count={pages}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            )}
          </nav>
        </div>
      </main>

      <article>
        {/* Main modal */}
        <ModalOverlay show={showModal}>
          <SuccessModal
            close={onClose}
            dashboard={goToDashboard}
            fileName={fileName}
          />
        </ModalOverlay>
      </article>
    </section>
  );
};

export default Forms;
