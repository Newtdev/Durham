import helperFragments from "../helper-fragments";

const items2 = [
  {
    marker: "A",
    title: "Design Consultant Agreement - CM at Risk Projects",
  },

  {
    marker: "B",

    title: "Construction Schedules and Reports",
  },
  {
    marker: "C",

    title: "Sales Tax Reporting Form",
  },
  {
    marker: "D-1",

    title: "Lump Sum Change Proposal Form",
  },
  {
    marker: "D-2",

    title: "Time and Material Change Proposal Form",
  },
  {
    marker: "E",

    title: "Division of Project Cost Elements",
  },
  {
    marker: "F",

    title: "Bond Forms",
  },
  {
    marker: "G",

    title: "Sex Offender Check Certification",
  },
  {
    marker: "H",

    title: "Minority Business Enterprises (MBE)",
  },
  {
    marker: "I",

    title: "Dispute Resolution",
  },
  {
    marker: "J",

    title: "Prequalification Policies",
  },
];

const items1 = [
  {
    title: "Relationship of the Parties",
  },

  {
    title: "Project Definition",
  },
  {
    title: "Construction Manager’s Basic Services",
  },
  {
    title: "Duration of the Construction Manager’s Services",
  },
  {
    title:
      "Changes in the Construction Manager’s Basic Services and Additional Compensation",
  },
  {
    title: "Owner’s Responsibilities",
  },
  {
    title: "Compensation for CM Services and Payment",
  },
  {
    title: "Insurance and Mutual Indemnity",
  },
  {
    title: "Suspension",
  },
  {
    title: "Termination",
  },
  {
    title: "Additional Provisions",
  },
  {
    title: "Special Guaranteed Maximum Price Provisions",
  },
];

export default function Page2(props) {
  return (
    <div className="mb-52 mt-32 text-black">
      <div className="mb-6">
        <helperFragments.SimpleCapsHeading text="Table of Contents" />
      </div>

      <p className="text-left text-base capitalize my-6"> Article: </p>

      <helperFragments.SimpleOrderedList items={items1} />

      <p className="text-left text-base capitalize mt-10 mb-6"> Appendix: </p>

      <helperFragments.SimpleOrderedList items={items2} />
    </div>
  );
}
