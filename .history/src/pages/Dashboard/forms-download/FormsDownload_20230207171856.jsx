import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import {
  DashboardNav,
  DashboardButton,
  PageHeader,
  Search,
} from "../Components";
import { TableBody, SuccessModal } from "./components/index";
import { formsDownloadContent } from "./formsDownloadComponents";
import { ModalOverlay } from "../../../ui";
import { useNavigate } from "react-router-dom";

const FormsDownload = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

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

  const FormsDownloadProps = {
    dataArray: formsDownloadContent,
    pages,
    perPage: PER_PAGE,
    skip,
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
          <div className="flex flex-col gap-3 md:flex-row md:justify-end md:items-center mt-4 mb-6">
            {/* <!-- Sort --> */}
            {/* <Sort/> */}

            {/* <!-- Search --> */}
            <Search />
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
          <SuccessModal close={onClose} />
        </ModalOverlay>
      </article>
    </section>
  );
};

export default FormsDownload;
