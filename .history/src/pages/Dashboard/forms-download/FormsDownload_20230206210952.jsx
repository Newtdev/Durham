import React, from "react";
import {
  DashboardNav,
  DashboardButton,
  PageHeader,
  Search,
  TableHeader,
} from "../Components";
import { TableBody } from "./index.js";
import {
  formsDownloadContent,
  formsDownloadHeader,
} from "./formsDownloadComponents";

const FormsDownload = () => {
  const FormsDownloadProps = {
    onDowload: (id) => {
      console.log("Downloaded");
    },
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
              <TableHeader dataArray={formsDownloadHeader}></TableHeader>
              <TableBody {...FormsDownloadProps}></TableBody>
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
