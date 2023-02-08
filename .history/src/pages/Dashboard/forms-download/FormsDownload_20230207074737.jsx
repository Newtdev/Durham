import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import {
  DashboardNav,
  DashboardButton,
  PageHeader,
  Search,
} from "../Components";
import {
  TableBody,
  formsDownloadContents,
  Paginations,
} from "./components/index";

const FormsDownload = () => {
  const [page, setPage] = useState(1);

  const PER_PAGE = 5;
  const pages = 50;
  const skip = page * PER_PAGE - PER_PAGE;

  const FormsDownloadProps = 

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
              <TableBody></TableBody>
            </table>
          </div>
          {/* pagination */}
          <Pagination count={10} color="primary" onChange={handleChange} />
        </div>
      </main>
    </section>
  );
};

export default FormsDownload;
