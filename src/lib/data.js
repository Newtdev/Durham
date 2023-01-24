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
			
			{ id: 2, name: " Short Small Form Design Consultant Agreement" },
			{ id: 3, name: "Owner and Design Consultant (more $200,000)" },
			{ id: 4, name: "Owner and Design Consultant (less than $200,000)" },
			{ id: 5, name: "Owner and Contractor Agreement Form (more $500,000)" },
			{
				id: 6,
				name:'Owner and Contract Management (CM & CMAR) Agreement'
			},
			{ id: 7, name: " LeChase Esser Contract Template" },
			{ id: 8, name: "ESSER Contract Template" },
			{ id: 9, name: "ESSER PM Contract Template" },
			{ id: 10, name: "DPS Short Form Engineer - Engineering Contract" },
			{ id: 11, name: "Attachment A Lunsford Act Form" },
		],
	},
	{
		id: 1,
		name: "Procurement",
		data: [
			{ id: 12, name: " E-589CI Affidavit of Capital Improvement" },
			{ id: 13, name: "DPS Formal General Conditions - 1-17-20" },
			 { id: 14,name: " 00 11 13 - Advertisement for Bid Template" },
			{ id: 15, name: "3 bids" },
			{ id: 16, name: " Bid Manual" },
			{ id: 17, name: "Determination of Apparent Low Bidder - Contractor" },
			{ id: 18, name: "Precise Checklist" },
			{ id: 19, name: "Contract Preparation Checklist" },
		],
	},
	{ id: 2, name: "MWBE Forms", data: [
		{ id: 20, name:'MWBE Participation Sheet (% Form)'},
		{ id: 21, name:'MWBE Form for Bids'},
		{ id: 22, name:'RFP Template with MWBE'}
	] },
	

	{
		id: 3,
		name: "Notice Letter",
		data: [
			{ id: 23, name: "Notice of Award - Consultant" },
			{ id: 24, name: "Notice of Award - Contractor" },
			{
				id: 25,
				name: "Notice of Intent to Award - Consultant",
			},
			{
				id: 26,
				name: "Notice to Proceed - Contractor",
			},
		],
	},
	{
		id: 4, name: "Budget", data: [
			{ id: 27, name:'Capital Project Request Form'},
			{ id: 28, name:'CCP Requisition MODIFIED'},
			{ id: 29, name:'Change Order Directive'},
			{ id: 30, name:'Change Order Form'},
			{ id: 31, name:'Capital Proposal Form'},
			{ id: 32, name:'Design Phase Change Order'},
			{ id: 33, name:'OK to Change Template'},
	] },
	{
		id: 5,
		name: "Project Closeout",
		data: [
			{
				id: 34,
				name: "Project Closeout Checklist",
			},
			{
				id: 35,
				name: "Certificate of Substantial Completion",
			},
			{
				id: 36,
				name: "Punch List and Substantial Completion Process",
			},
		],
	},

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



// Project Closeout
// : 
// Array(3)
// 0
// : 
// {id: 158, document_name: 'Project Closeout Checklist'}
// 1
// : 
// {id: 159, document_name: 'Certificate of Substantial Completion'}
// 2
// : 
// {id: 160, document_name: 'Punch List and Substantial Completion Process'}
/**
 * "Attachment-A-Lunsford-Act-Form";
export const dPS_short_form = "DPS-Short-Form-Engineer---Engineering-Contract";
export const constract_preparation = "Contract-Preparation-Checklist";
export const precise_checkList = "Precise-Checklist";

export const notice_to_proceed = "Notice-to-Proceed---Contractor";
export const notice_of_award_contractor = "Notice-of-Award---Contractor";
export const notice_of_award_consultant = "Notice-of-Award---Consultant";
export const notice_of_intent_consultant = "Notice-of-Intent-to-Award---Consultant";


export const project_closeout_checklist = "Project-Closeout-Checklist";
export const certificateOfSubstantialCompletion =
	"Certificate-of-Substantial-Completion";
export const punchList = "Punch-List-and-Substantial-Completion-Process";

//Notice of Intent to Award - Consultant

export const advertisement_bid = "00-11-13---Advertisement-for-Bid-Template";
export const Determination_bidder = "Determination-of-Apparent-Low-Bidder---Contractor";
export const OwnerContractManagement = "Owner-and-Contract-Management-(CM-&-CMAR)-Agreement";
export const ESSERContract = "ESSER-Contract-Template";
export const ESSERContractPM = "ESSER-PM-Contract-Template";
export const leChase = "LeChase-Esser-Contract-Template";
export const techServices = "Technology-Service-Agreement";
 * 
 * 
 * 
 * 
 */
export const EditDocumentData = {
	Contract: [
		{ id: 1, document_name: "Technology Service Agreement" },
		
		{ id: 2, document_name: " Short Small Form Design Consultant Agreement" },
		{ id: 3, document_name: "Owner and Design Consultant (more $200,000)" },
		{ id: 4, document_name: " Owner and Design Consultant (less than $200,000)" },
		{ id: 5, document_name: "Owner and Contractor Agreement Form (more $500,000)" },
		{
			id: 6,
			document_name:'Owner and Contract Management (CM & CMAR) Agreement'
		},
		{ id: 7, document_name: " LeChase Esser Contract Template" },
		{ id: 8, document_name: "ESSER Contract Template" },
		{ id: 9, document_name: "ESSER PM Contract Template" },
		{ id: 10, document_name: "DPS Short Form Engineer - Engineering Contract" },
		{ id: 11, document_name: "Attachment A Lunsford Act Form" },
	],
	Procurement: [
		{ id: 12, name: " E-589CI Affidavit of Capital Improvement" },
		{ id: 13, name: "DPS Formal General Conditions - 1-17-20" },
		 { id: 14, document_name: " 00 11 13 - Advertisement for Bid Template" },
		{ id: 15, name: "3 bids" },
		{ id: 16, name: " Bid Manual" },
		{ id: 17, document_name: "Determination of Apparent Low Bidder - Contractor" },
		{ id: 18, name: "Precise Checklist" },
		{ id: 19, name: "Contract Preparation Checklist" },
	],
	MWBE_Forms: [
		{ id: 20, document_name:'MWBE Participation Sheet (% Form)'},
		{ id: 21, document_name:'MWBE Form for Bids'},
		{ id: 22, document_name:'RFP Template with MWBE'}
	],
		Noticer_letters: [
			{ id: 23, document_name: "Notice of Award - Consultant" },
			{ id: 24, document_name: "Notice of Award - Contractor" },
			{
				id: 25,
				document_name: "Notice of Intent to Award - Consultant",
			},
			{
				id: 26,
				document_name: "Notice to Proceed - Contractor",
			},
	],
	Project_Closeout: [
		{
			id: 27,
			document_name: "Project Closeout Checklist",
		},
		{
			id: 28,
			document_name: "Certificate of Substantial Completion",
		},
		{
			id: 29,
			document_name: "Punch List and Substantial Completion Process",
		},
	],
	
	Budget: [
		{ id: 30, document_name:'Capital Project Request Form'},
		{ id: 31, document_name:'CCP Requisition MODIFIED'},
		{ id: 32, document_name:'Change Order Directive'},
		{ id: 33, document_name:'Change Order Form'},
		{ id: 34, document_name:'Capital Proposal Form'},
		{ id: 35, document_name:'Design Phase Change Order'},
		{ id: 36, document_name:'OK to Change Template'},
	]
}
// export const EditDocument = [
	// 	{
		// 		id: 0,
		// 		name: "Contract",
// 		data: [
// 			{ id: 1, name: "Technology Service Agreement" },
			
// 			// { id: 2, name: " Short Small Form Design Consultant Agreement" },
// 			// { id: 3, name: "Owner and Design Consultant (more $200,000)" },
// 			// { id: 4, name: " Owner and Design Consultant (less than $200,000)" },
// 			// { id: 5, name: "Owner and Contractor Agreement Form (more $500,000)" },
// 			{
// 				id: 6,
// 				name:'Owner and Contract Management (CM & CMAR) Agreement'
// 			},
// 			{ id: 7, name: " LeChase Esser Contract Template" },
// 			{ id: 8, name: "ESSER Contract Template" },
// 			{ id: 9, name: "ESSER PM Contract Template" },
// 			// { id: 10, name: "DPS Short Form Engineer - Engineering Contract" },
// 			{ id: 11, name: "Attachment A Lunsford Act Form" },
// 		],
// 	},
// 	{
// 		id: 1,
// 		name: "Procurement",
// 		data: [
// 			// { id: 12, name: " E-589CI Affidavit of Capital Improvement" },
// 			// { id: 13, name: "DPS Formal General Conditions - 1-17-20" },
// 			 { id: 14, name: " 00 11 13 - Advertisement for Bid Template" },
// 			// { id: 15, name: "3 bids" },
// 			// { id: 16, name: " Bid Manual" },
// 			{ id: 17, name: "Determination of Apparent Low Bidder - Contractor" },
// 			// { id: 18, name: "Precise Checklist" },
// 			//{ id: 19, name: "Contract Preparation Checklist" },
// 		],
// 	},

// 	{
// 		id: 2,
// 		name: "Notice Letter",
// 		data: [
// 			{ id: 20, name: "Notice of Award - Consultant" },
// 			{ id: 21, name: "Notice of Award - Contractor" },
// 			{
// 				id: 22,
// 				name: "Notice of Intent to Award - Consultant",
// 			},
// 			{
// 				id: 23,
// 				name: "Notice to Proceed - Contractor",
// 			},
// 		],
// 	},
// 	{ id: 3, name: "Budget", data: [] },
// 	{
// 		id: 4,
// 		name: "Project Closeout",
// 		data: [
// 			{
// 				id: 24,
// 				name: "Project Closeout Checklist",
// 			},
// 			{
// 				id: 25,
// 				name: "Certificate of Substantial Completion",
// 			},
// 			{
// 				id: 26,
// 				name: "Punch List and Substantial Completion Process",
// 			},
// 		],
// 	},
// 	{ id: 5, name: "MWBE Forms", data: [] },
// ];
