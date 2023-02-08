import { Spinner } from "../../../assets";
import download from "../../../assets/download.svg";
import success from "../../../assets/success.svg";
import frame from "../../../assets/Frame.svg";
import sort from "../../../assets/sort.svg";

export function FormsDownloadButton({
  name,
  width,
  hidden,
  type,
  onClick,
  loading,
}) {
  return (
    <button
      disabled={!loading ? false : true}
      onClick={onClick}
      className={`text-white w-[140px] text-xs font-normal hover:bg-blue-800 hover:text-white focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
      type={type}
    >
      {loading && <Spinner />} {loading ? "Loading..." : name}
      {!hidden && <img src={download} alt="" className="ml-4" />}
    </button>
  );
}

export function TableBody({ skip, perPage, dataArray, onDownload }) {
  return (
    // <table
    //   className=" border-separate w-full"
    //   style={{ borderCollapse: "separate", borderSpacing: "0 15px" }}
    // >
    //   <tbody className="w-full text-base font-medium">
    //     {dataArray.slice(skip, skip + perPage).map((manager, index) => {
    //       const { id, title, category, downloadLink } = manager;
    //       return (
    //         <tr
    //           key={id}
    //           className="border-b border-black bg-white rounded-lg h-16"
    //         >
    //           <td
    //             // scope="row"
    //             className="py-4 px-4 font-normal capitalize text-gray-900 whitespace-nowrap w-[50%]"
    //           >
    //             {title}
    //           </td>
    //           <td
    //             // scope="row"
    //             className="py-4 px-4 font-normal capitalize text-[#693B79] whitespace-nowrap w-[35%]"
    //           >
    //             {category}
    //           </td>
    //           <td className="py-4 px-4 flex items-center justify-start gap-3">
    //             <Link
    //               className="w-4 cursor-pointer"
    //               target="_blank"
    //               to={`/${downloadLink}`}
    //               download
    //             >
    //               <span onClick={() => onDownload(title)}>
    //                 <FormsDownloadButton name="Download" />
    //               </span>
    //             </Link>
    //           </td>
    //           {/* <td>
    //             <button type="submit" >Download</button>
    //           </td> */}
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
    <section className="w-full text-base font-medium overflow-hidden ">
      {dataArray.slice(skip, skip + perPage).map((manager, index) => {
        const { id, title, category, downloadLink } = manager;
        return (
          <ul
            key={id}
            className="border border-[#D8E1E4] bg-white rounded-lg h-16 flex justify-between items-center mb-4 w-full flex-nowrap pr-32"
          >
            <li
              // scope="row"
              className="py-4 px-2 font-normal capitalize text-gray-900 whitespace-nowrap w-[50%] flex items-center justify-start gap-3"
            >
              <img src={frame} alt="icon" />
              {title}
            </li>
            <li
              // scope="row"
              className="py-4 px-4 font-normal capitalize text-[#693B79] whitespace-nowrap w-[35%]"
            >
              {category}
            </li>
            <li className="py-4 px-4 flex items-center justify-start gap-3">
              {/* <Link
                className="w-4 cursor-pointer"
                target="_blank"
                to={`/${downloadLink}`}
                download
              > */}
              <a
                className="w-4 cursor-pointer"
                href={`${downloadLink}`}
                download
              >
                <span onClick={() => onDownload(title)}>
                  <FormsDownloadButton name="Download" />
                </span>
              </a>
            </li>
            {/* <td>
                <button type="submit" >Download</button>
              </td> */}
          </ul>
        );
      })}
    </section>
  );
}

export function SuccessModal({ close, dashboard, fileName }) {
  return (
    <article>
      {/* Main modal */}
      <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow pb-4 pt-14">
          <div className="flex justify-center items-center ">
            <img src={success} alt="success" />
          </div>
          <div className="flex justify-center items-center px-6 py-3 rounded-t ">
            <h3 className="text-lg font-bold text-gray-900 text-center">
              Download Successful
            </h3>
            {/* <button
              type="button"
              onClick={close}
              className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal"
            >
              <Close />
            </button> */}
          </div>
          <div className="py-3 px-5">
            <p className="text-base text-gray-600 text-center">
              Congratulations! You have successfully downloaded. {`${fileName}`}
            </p>
            {/* <p className="text-base text-gray-600"></p> */}
          </div>

          {/* Buttons */}
          {/* <div className="mt-12 mr-5 flex gap-4 justify-end">
            <DashboardButton
              name="PROCEED"
              hidden
              width="78px"
              onClick={close}
            />
          </div> */}
          {/* <div className="mt-12 mr-5 flex gap-4 justify-end">
            <DashboardButton
              name="GO TO DASHBOARD"
              hidden
              width="78px"
              onClick={close}
            />
          </div> */}
          <div className="mt-8 mr-5 flex justify-center items-center w-full">
            <button
              className="bg-[#3B6979] text-white text-base py-2 px-[170px] rounded"
              onClick={close}
            >
              BACK
            </button>
          </div>
          <div className="my-4 mr-5 flex justify-center items-center w-full">
            <button
              className="border border-[#3B6979] font-semibold text-[#3B6979] text-base py-2 px-28 rounded"
              onClick={dashboard}
            >
              GO TO DASHBOARD
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Filter({ onChange, params }) {
  return (
    <div className="flex items-center justify-center">
      <p className="mr-4 font-bold text-gray-700 mt-6">View</p>
      <div className="flex flex-col items-center justify-center h-16 mt-6">
        <select
          onChange={onChange}
          className="inline-flex items-center text-gray-400 bg-white border border-gray-300 rounded px-3 py-1.5 focus:border-[#3B6979] w-full"
        >
          <option value="all">All</option>
          <option value="budgets">Budgets</option>
          <option value="contracts">Contracts</option>
          <option value="mwbe">MWBE</option>
          <option value="notice letters">Notice Letters</option>
          <option value="project closeout">Project Closeout</option>
        </select>

        {/* <p className="text-[#3b6979] text-base text-center mt-1 mr-2">
          {params === "My Projects" || params === ""
            ? "My Projects"
            : "All Projects"}
        </p> */}
      </div>
    </div>
  );
}

export const FormsArray = [
  {
    id: 1,
    title: "Capital Project Request Form(Original)",
    category: "budgets",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Capital%20Project%20Request%20Form(Original).pdf",
  },
  {
    id: 2,
    title: "CCP Requisition - MODIFIED 4-22-22FM(Original)",
    category: "budgets",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/CCP%20Requisition%20-%20MODIFIED%204-22-22FM(Original).pdf",
  },
  {
    id: 3,
    title: "Change Order Directive(Original)",
    category: "budgets",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Change Order Directive(Original).docx",
  },
  {
    id: 4,
    title: "Change Order Form(Original)",
    category: "budgets",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Change Order Form(Original).docx",
  },
  {
    id: 5,
    title: "Change Proposal Form(Original)",
    category: "budgets",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Change Proposal Form(Original).pdf",
  },
  {
    id: 6,
    title: "Design Phase Change Order (Consultant) (Original)",
    category: "budgets",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Design Phase Change Order (Consultant) (Original).doc",
  },
  {
    id: 7,
    title: "OK to Pay Template(Original)",
    category: "budgets",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/OK to Pay Template(Original).xlsx",
  },
  {
    id: 8,
    title: "Attachment A Lunsford Act Form(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Attachment A Lunsford Act Form(Original).docx",
  },
  {
    id: 9,
    title: "DPS Short Form Engineer - Engineering Contract(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/DPS Short Form Engineer - Engineering Contract(Original).docx",
  },
  {
    id: 10,
    title: "ESSER Contract Template(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/ESSER Contract Template(Original).docx",
  },
  {
    id: 11,
    title: "ESSER PM Contract Template(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/ESSER PM Contract Template(Original).docx",
  },
  {
    id: 12,
    title: "LeChase Esser Contract Template(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/LeChase Esser Contract Template(Original).docx",
  },
  {
    id: 13,
    title: "Owner and Contract Management (CM _ CMAR) Agreement(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Owner and Contract Management (CM _ CMAR) Agreement(Original).docx",
  },
  {
    id: 14,
    title:
      "Owner and Contractor Agreement Form (more $500,000) - ESSER(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Owner and Contractor Agreement Form (more $500,000) - ESSER(Original).docx",
  },
  {
    id: 15,
    title:
      "Owner and Contractor Agreement Form (more $500,000) - ESSER(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Owner and Contractor Agreement Form (more $500,000) - ESSER(Original).docx",
  },
  {
    id: 16,
    title: "Owner and Design Consultant (less than $200,000)(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Owner and Design Consultant (less than $200,000)(Original).docx",
  },
  {
    id: 17,
    title: "Owner and Design Consultant (more $200,000)(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Owner and Design Consultant (more $200,000)(Original).docx",
  },
  {
    id: 18,
    title: "Short Small Form Design Consultant Agreement(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Short Small Form Design Consultant Agreement(Original).docx",
  },
  {
    id: 19,
    title: "Technology Service Agreement(Original)",
    category: "contracts",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Technology Service Agreement(Original).docx",
  },
  {
    id: 20,
    title: "MWBE Form for Bids(Original)",
    category: "MWBE",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/MWBE Form for Bids(Original).pdf",
  },
  {
    id: 21,
    title: "MWBE Participation Sheet (_ Form)(Original)",
    category: "MWBE",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/MWBE Participation Sheet (_ Form)(Original).docx",
  },
  {
    id: 22,
    title: "MWBE Participation Sheet (_ Form)(Original)",
    category: "MWBE",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/MWBE Participation Sheet (_ Form)(Original).docx",
  },
  {
    id: 23,
    category: "Notice Letters",
    title: "Notice of Award - Consultant(Original)",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Notice of Award - Consultant(Original).docx",
  },
  {
    id: 24,
    category: "Notice Letters",
    title: "Notice of Award - Contractor(Original)",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Notice of Award - Contractor(Original).docx",
  },
  {
    id: 25,
    category: "Notice Letters",
    title: "Notice of Intent to Award - Consultant(Original)",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Notice of Intent to Award - Consultant(Original).docx",
  },
  {
    id: 26,
    category: "Notice Letters",
    title: "Notice to Proceed - Contractor(Original)",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Notice to Proceed - Contractor(Original).docx",
  },
  {
    id: 27,
    title: "00 11 13 - Advertisement for Bid Template(Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/00 11 13 - Advertisement for Bid Template(Original).docx",
  },
  {
    id: 28,
    title: "3 bids(Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/3 bids(Original).pdf",
  },
  {
    id: 29,
    title: "Bid Manual(Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Bid Manual(Original).pdf",
  },
  {
    id: 30,
    title: "Contract Preparation Checklist - TMP20180502RB.xlsx (Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Contract Preparation Checklist - TMP20180502RB.xlsx (Original).pdf",
  },
  {
    id: 31,
    title: "Determination of Apparent Low Bidder - Contractor(Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Determination of Apparent Low Bidder - Contractor(Original).docx",
  },
  {
    id: 32,
    title: "DPS Formal General Conditions - 1-17-20(Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/DPS Formal General Conditions - 1-17-20(Original).docx",
  },
  {
    id: 33,
    title: "E-589CI Affidavit of Capital Improvement(Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/E-589CI Affidavit of Capital Improvement(Original).pdf",
  },
  {
    id: 34,
    title: "Precis Checklist (Original)",
    category: "procurement",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Precis Checklist (Original).pdf",
  },
  {
    id: 35,
    title: "Certificate of Substantial Completion(Original)",
    category: "project closeout",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Certificate of Substantial Completion(Original).docx",
  },
  {
    id: 36,
    title: "Certificate of Substantial Completion(Original)",
    category: "project closeout",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Certificate of Substantial Completion(Original).docx",
  },
  {
    id: 37,
    title: "Certificate of Substantial Completion(Original)",
    category: "project closeout",
    downloadLink:
      "https://durhamapp.000webhostapp.com/pdfs/Certificate of Substantial Completion(Original).docx",
  },
];
