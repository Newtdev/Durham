import React, { useState } from "react";
import {
  DashboardNav,
  DashboardButton,
  PageHeader,
  Search,
  Paginations,
} from "../Components";
import { TableBody, formsDownloadContents } from "./components/index";

const FormsDownload = () => {
  const [page, setPage] = useState(1);

  const paginationProps = {
    data: formsDownloadContents,
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
          {/* <Paginations {...paginationProps} /> */}
        </div>
      </main>
    </section>
  );
};

export default FormsDownload;
