import React from "react";
import { DashboardNav, DashboardButton, PageHeader } from "../Components";

const FormsDownload = () => {
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
              name="ADD NEW PROJECT MANAGER"
              width="w-[290px]"
              onClick={() => setShowModal(true)}
            />
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:justify-end md:items-center mt-4 mb-6">
            {/* <!-- Sort --> */}
            {/* <Sort/> */}

            {/* <!-- Search --> */}
            <Search {...searchProps} />
          </div>
          {/* <!-- Table --> */}
          <div className="overflow-x-auto relative shadow rounded-lg border-solid border border-gray-100 ">
            <table className="w-full text-sm text-left text-gray-900">
              <TableHeader dataArray={ProductHeader}></TableHeader>
              <TableBody {...ProductManagerProps}></TableBody>
            </table>
          </div>
          {/* pagination */}
          <Paginations {...paginationProps} />
        </div>
      </main>
    </section>
  );
};

export default FormsDownload;
