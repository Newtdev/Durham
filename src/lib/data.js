/*"documents": [
    {
      "document_type": "Contract",
      "document_name": "Technology Service Agreement"
    },
    {
      "document_type": "Contract",
      "document_name": "Attachment A Lunsford Act Form"
    },
    {
      "document_type": "Procurement",
      "document_name": "00 11 13 - Advertisement for Bid Template"
    },
    {
      "document_type": "Notice",
      "document_name": "Notice of Intent to Award - Consultant"
    },
    {
      "document_type": "Notice",
      "document_name": "Notice to Proceed - Contractor"
    }
  ]
});
*/

// export const documents = [
// 	{
// 		id: 1,
// 		document_type: "Contract",
// 		document_name: "Technology Service Agreement"
// 	},
// 	{
// 		id: 2,
// 		document_type: "Contract",
// 		document_name: "LeChase Esser Contract Template"
// 	},
// 	{
// 		id:3,
// 		document_type: "Contract",
// 		document_name: "ESSER Contract Template"
// 	},
// 	{
// 		id: 4,
// 		document_type: "Contract",
// 		document_name: "ESSER PM Contract Template"
// 	},
// 	{
// 		id:5,
// 		document_type: "Contract",
// 		document_name: "Attachment A Lunsford Act Form"
// 	},
// 	{
// 		id: 6,
// 		document_type: "Procurement",
// 		document_name: "00 11 13 - Advertisement for Bid Template"
// 	},
// 	{
// 		id:7,
// 		document_type: "Notice Letter",
// 		document_name: "Notice of Award - Consultant"
// 	},
// 	{
// 		id:8,
// 		document_type: "Notice Letter",
// 		document_name: "Notice of Award - Contractor"
// 	},
// 	{
// 		id: 9,
// 		document_type: "Notice Letter",
// 		document_name: "Notice of Intent to Award - Consultant"
// 	},
// 	{
// 		id: 10,
// 		document_type: "Notice Letter",
// 		document_name: "Notice to Proceed - Contractor"
// 	},
// 	{
// 		id:11,
// 		document_type: "Project Closeout",
// 		document_name: "Project Closeout Checklist"
// 	},
// 	{
// 		id:12,
// 		document_type: "Project Closeout",
// 		document_name: "Certificate of Substantial Completion"
// 	},
// 	{
// 		id:13,
// 		document_type: "Project Closeout",
// 		document_name: "Punch List and Substantial Completion Process"
// 	},
// ]

export const documents = [
	{
		id: 0,
		name: "Contract",
		data: [
			{ id: 1, name: "Technology Service Agreement" },
			// { id: 2, name: " Short Small Form Design Consultant Agreement" },
			// { id: 3, name: "Owner and Design Consultant (more $200,000)" },
			// { id: 4, name: " Owner and Design Consultant (less than $200,000)" },
			// { id: 5, name: "Owner and Contractor Agreement Form (more $500,000)" },
			// {
			// 	id: 6,
			// 	name: "Owner and Contractor Agreement Form (less than $500,000)",
			// },
			{ id: 7, name: " LeChase Esser Contract Template" },
			{ id: 8, name: "ESSER Contract Template" },
			{ id: 9, name: "ESSER PM Contract Template" },
			// { id: 10, name: "DPS Short Form Engineer - Engineering Contract" },
			{ id: 11, name: "Attachment A Lunsford Act Form" },
		],
	},
	{
		id: 1,
		name: "Procurement",
		data: [
			// { id: 12, name: " E-589CI Affidavit of Capital Improvement" },
			// { id: 13, name: "DPS Formal General Conditions - 1-17-20" },
			 { id: 14, name: " 00 11 13 - Advertisement for Bid Template" },
			// { id: 15, name: "3 bids" },
			// { id: 16, name: " Bid Manual" },
			// { id: 17, name: "Determination of Apparent Low Bidder - Contractor" },
			// { id: 18, name: "Precise Checklist" },
			//{ id: 19, name: "Contract Preparation Checklist" },
		],
	},

	{
		id: 2,
		name: "Notice Letter",
		data: [
			{ id: 20, name: "Notice of Award - Consultant" },
			{ id: 21, name: "Notice of Award - Contractor" },
			{
				id: 22,
				name: "Notice of Intent to Award - Consultant",
			},
			{
				id: 23,
				name: "Notice to Proceed - Contractor",
			},
		],
	},
	{ id: 3, name: "Budget", data: [] },
	{
		id: 4,
		name: "Project Closeout",
		data: [
			{
				id: 24,
				name: "Project Closeout Checklist",
			},
			{
				id: 25,
				name: "Certificate of Substantial Completion",
			},
			{
				id: 26,
				name: "Punch List and Substantial Completion Process",
			},
		],
	},
	{ id: 5, name: "MWBE Forms", data: [] },
];

// export const state = {
// 	contract: [],
// 	procurement: [],
// 	notice: [],
// 	budget: [],
// 	project_closeout: [],
// 	mwbe_forms: [],
// 	notice_letter: [],
// };

export const state = {
	document_type: '', document_name: ''
}


export const OverviewTableHeader = [
	"Project Name",
	"Awardee",
	"Company Rep",
	"Project Manager",
	"Date",
	"",
];

export const Months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const ProductHeader = [
	"First Name",
	"Last name",
	"Email",
	"Phone Number",
	"",
];

export const project_closeout_data = [
	{
		id: 0,
		numb: 1,
		value:
			"1. Fully executed Certificate of Substantial Completion with attached punch list(s).",
	},
	{
		id: 1,
		numb: 2,
		value:
			"2. Fully executed Final Change Order (i.e., for allowances,  deductions for work done by others, etc.)",
	},
	{
		id: 2,
		numb: 3,
		value: "3. Final Approved Application for Payment",
	},
	{
		id: 3,
		numb: 4,
		value: "4. Consent of Surety to Final Payment",
	},
	{
		id: 4,
		numb: 5,
		value:
			"5. Contractor’s Affidavit of Release of Liens (properly signed, notarized, etc, with no exceptions)",
	},
	{
		id: 5,
		numb: 6,
		value:
			"6. Contractor’s Affidavit of Payment of Debts and Claims (properly signed, notarized, etc., with no exceptions)",
	},
	{
		id: 6,
		numb: 7,
		value:
			"7. Properly executed release of liens by subcontractors and/or vendors (if applicable for those who have had problems with payments, etc. per General Conditions",
	},
	{
		id: 7,
		numb: 8,
		value:
			"8. Certificate of Occupancy from proper municipality (Durham County Inspections / Durham FM)",
	},
	{
		id: 8,
		numb: 9,
		value: "9. Contractor’s One-Year Warranty (notarized)",
	},
	{
		id: 9,
		numb: 10,
		value:
			"10. Warranty summary sheet and original warranties for specific items (roofs, motors, etc.)",
	},
	{
		id: 10,
		numb: 11,
		value: "11. Contractor’s certification letter per General Conditions",
	},
	{
		id: 11,
		numb: 12,
		value:
			"12. Certification letter from Contractor stating that no asbestos containing materials were used (copy to Environmental Management)",
	},
	{
		id: 12,
		numb: 13,
		value:
			"13. Certification letter from Architect (or Engineer) regarding asbestos, per EPA regulations (copy to Environmental Management)",
	},
	{
		id: 13,
		numb: 14,
		value:
			"14. Architect’s and MEP Engineer’s certification letter saying punch list is complete, the work is per contract requirements, and recommending final payment be made to Contractor",
	},
	{
		id: 14,
		numb: 15,
		value: "15. Architects (or Engineer’s) letter regarding liquidated damages",
	},
	{
		id: 15,
		numb: 16,
		value:
			"16. Transmittal indicating keys have been given to Principal – signed by Principal",
	},
	{
		id: 16,
		numb: 17,
		value:
			"17. Final list of all subcontractors with names, addresses, and phone numbers (especially emergency numbers)",
	},
	{
		id: 17,
		numb: 18,
		value:
			"18. Letter from General Contractor Stating Removal of Temporary Facilities",
	},
	{
		id: 18,
		numb: 19,
		value:
			"19. As-Built Redline drawings (3 sets Stamped certified) and As-Built Electronic drawings (2 sets) received from A/E and cover letter from Architect and Engineer saying they have been reviewed and are as complete and accurate as possible, attach completed transmittal to Owner.",
	},
	{
		id: 19,
		numb: 20,
		value:
			"20. Operations and Maintenance Manuals (3 sets) and cover letter from Architect and Engineer saying they are complete and have been reviewed, attach completed transmittal to Owner.",
	},
	{
		id: 20,
		numb: 21,
		value:
			"21. Final commissioning report with certified Test And Balance report. Include cover letter indicating it TAB has been reviewed and approved by consulting Engineer",
	},

	{
		id: 21,
		numb: 22,
		value: "22. 2-CD’s record drawing files",
	},
];