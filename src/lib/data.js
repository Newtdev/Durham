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
				name: "Owner and Contract Management (CM & CMAR) Agreement",
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
			{ id: 14, name: " 00 11 13 - Advertisement for Bid Template" },
			{ id: 15, name: "3 bids" },
			{ id: 16, name: " Bid Manual" },
			{ id: 17, name: "Determination of Apparent Low Bidder - Contractor" },
			{ id: 18, name: "Precise Checklist" },
			{ id: 19, name: "Contract Preparation Checklist" },
		],
	},
	{
		id: 2,
		name: "MWBE Forms",
		data: [
			{ id: 20, name: "MWBE Participation Sheet (% Form)" },
			{ id: 21, name: "MWBE Form for Bids" },
			{ id: 22, name: "RFP Template with MWBE" },
		],
	},

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
		id: 4,
		name: "Budget",
		data: [
			{ id: 27, name: "Capital Project Request Form" },
			{ id: 28, name: "CCP Requisition MODIFIED" },
			{ id: 29, name: "Change Order Directive" },
			{ id: 30, name: "Change Order Form" },
			{ id: 31, name: "Capital Proposal Form" },
			{ id: 32, name: "Design Phase Change Order" },
			{ id: 33, name: "OK to Change Template" },
		],
	},
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
	document_type: "",
	document_name: "",
};

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
		{
			id: 1,
			document_name: "Technology Service Agreement",
			identifier: "Technology-Service-Agreement",
			name: "edit",
			type: "Contract",
		},

		{
			id: 2,
			document_name: " Short Small Form Design Consultant Agreement",
			identifier: "-Short-Small-Form-Design-Consultant-Agreement",
			name: "edit",
			type: "Contract",
		},
		{
			id: 3,
			document_name: "Owner and Design Consultant (more $200,000)",
			identifier: "Owner-and-Design-Consultant-(more-$200,000)",
			name: "edit",
			type: "Contract",
		},
		{
			id: 4,
			document_name: " Owner and Design Consultant (less than $200,000)",
			identifier: "-Owner-and-Design-Consultant-(less-than-$200,000)",
			name: "edit",
			type: "Contract",
		},
		{
			id: 5,
			document_name: "Owner and Contractor Agreement Form (more $500,000)",
			identifier: "Owner-and-Contractor-Agreement-Form-(more-$500,000)",
			name: "edit",
			type: "Contract",
		},
		{
			id: 12,
			document_name:
				"Owner and Contractor Agreement Form (more $500,000)-ESSER",
			identifier: "Owner-and-Contractor-Agreement-Form-(more-$500,000)-ESSER",
			name: "edit",
			type: "Contract",
		},
		{
			id: 6,
			document_name: "Owner and Contract Management (CM & CMAR) Agreement",
			identifier: "Owner-and-Contract-Management-(CM-&-CMAR)-Agreement",
			name: "edit",
			type: "Contract",
		},
		{
			id: 7,
			document_name: " LeChase Esser Contract Template",
			identifier: "-LeChase-Esser-Contract-Template",
			name: "edit",
			type: "Contract",
		},
		{
			id: 8,
			document_name: "ESSER Contract Template",
			identifier: "ESSER-Contract-Template",
			name: "edit",
			type: "Contract",
		},
		{
			id: 9,
			document_name: "ESSER PM Contract Template",
			identifier: "ESSER-PM-Contract-Template",
			name: "edit",
			type: "Contract",
		},
		{
			id: 10,
			document_name: "DPS Short Form Engineer - Engineering Contract",
			identifier: "DPS-Short-Form-Engineer---Engineering-Contract",
			name: "edit",
			type: "Contract",
		},
		{
			id: 11,
			document_name: "Attachment A Lunsford Act Form",
			identifier: "Attachment-A-Lunsford-Act-Form",
			name: "edit",
			type: "Contract",
		},
	],
	Procurement: [
		{
			id: 12,
			document_name: " E-589CI Affidavit of Capital Improvement",
			identifier: "-E-589CI-Affidavit-of-Capital-Improvement",
			name: "edit",
			type: "Procurement",
		},
		{
			id: 13,
			document_name: "DPS Formal General Conditions - 1-17-20",
			identifier: "DPS-Formal-General-Conditions---1-17-20",
			name: "edit",
			type: "Procurement",
		},
		{
			id: 14,
			document_name: " 00 11 13 - Advertisement for Bid Template",
			identifier: "-00-11-13---Advertisement-for-Bid-Template",
			name: "edit",
			type: "Procurement",
		},
		{
			id: 15,
			document_name: "3 bids",
			identifier: "3-bids",
			name: "edit",
			type: "Procurement",
		},
		{
			id: 16,
			document_name: "Bid Manual",
			identifier: "-Bid-Manual",
			name: "edit",
			type: "Procurement",
		},
		{
			id: 17,
			document_name: "Determination of Apparent Low Bidder - Contractor",
			name: "edit",
			identifier: "Determination-of-Apparent-Low-Bidder---Contractor",
			type: "Procurement",
		},
		{
			id: 18,
			document_name: "Precise Checklist",
			identifier: "Precise-Checklist",
			name: "edit",
			type: "Procurement",
		},
		{
			id: 19,
			document_name: "Contract Preparation Checklist",
			identifier: "Contract-Preparation-Checklist",
			name: "edit",
			type: "Procurement",
		},
	],
	MWBE_Forms: [
		{
			id: 20,
			document_name: "MWBE Participation Sheet (% Form)",
			identifier: "MWBE-Participation-Sheet-(%-Form)",
			name: "edit",
			type: "MWBE_Forms",
		},
		{
			id: 21,
			document_name: "MWBE Form for Bids",
			identifier: "MWBE-Form-for-Bids",
			name: "edit",
			type: "MWBE_Forms",
		},
		{
			id: 22,
			document_name: "RFP Template with MWBE",
			identifier: "RFP-Template-with-MWBE",
			name: "edit",
			type: "MWBE_Forms",
		},
	],
	Notice_Letters: [
		{
			id: 23,
			document_name: "Notice of Award - Consultant",
			identifier: "Notice-of-Award---Consultant",
			name: "edit",
			type: "Notice_Letters",
		},
		{
			id: 24,
			document_name: "Notice of Award - Contractor",
			identifier: "Notice-of-Award---Contractor",
			name: "edit",
			type: "Notice_Letters",
		},
		{
			id: 25,
			document_name: "Notice of Intent to Award - Consultant",
			identifier: "Notice-of-Intent-to-Award---Consultant",
			name: "edit",
			type: "Notice_Letters",
		},
		{
			id: 26,
			document_name: "Notice to Proceed - Contractor",
			identifier: "Notice-to-Proceed---Contractor",
			name: "edit",
			type: "Notice_Letters",
		},
	],
	Project_Closeout: [
		{
			id: 27,
			document_name: "Project Closeout Checklist",
			identifier: "Project-Closeout-Checklist",
			name: "edit",
			type: "Project_Closeout",
		},
		{
			id: 28,
			document_name: "Certificate of Substantial Completion",
			identifier: "Certificate-of-Substantial-Completion",
			name: "edit",
			type: "Project_Closeout",
		},
		{
			id: 29,
			document_name: "Punch List and Substantial Completion Process",
			identifier: "Punch-List-and-Substantial-Completion-Process",
			name: "edit",
			type: "Project_Closeout",
		},
	],

	Budget: [
		{
			id: 30,
			document_name: "Capital Project Request Form",
			identifier: "Capital-Project-Request-Form",
			name: "edit",
			type: "Budget",
		},
		{
			id: 31,
			document_name: "CCP Requisition MODIFIED",
			identifier: "CCP-Requisition-MODIFIED",
			name: "edit",
			type: "Budget",
		},
		{
			id: 32,
			document_name: "Change Order Directive",
			identifier: "Change-Order-Directive",
			name: "edit",
			type: "Budget",
		},
		{
			id: 33,
			document_name: "Change Order Form",
			identifier: "Change-Order-Form",
			name: "edit",
			type: "Budget",
		},
		{
			id: 34,
			document_name: "Capital Proposal Form",
			identifier: "Capital-Proposal-Form",
			name: "edit",
			type: "Budget",
		},
		{
			id: 35,
			document_name: "Design Phase Change Order",
			identifier: "Design-Phase-Change-Order",
			name: "edit",
			type: "Budget",
		},
		{
			id: 36,
			document_name: "OK to Template",
			identifier: "OK-to-Template",
			name: "edit",
			type: "Budget",
		},
	],
};
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

// const LocationData = [
// {id:1, name:"100 Fuller Building *ED*"},
// {id:2, name:'150 Operational Services *ED*'},
// {id:3, name:'155 Capital Projects * ED *'},
// 	{ id: 4, name: '289 Whitted School * ED *' },
// {id:5, name:'304 Bethesda Elementary *ED*'	}	,
// {id:6, name:'306 Brodgen Middle *ED*'},
// {id:7, name:'308 Burton Elementary *ED*'
// 	},
// 	{ id: 9, name: '309 Early College High * ED *'}
// 	{ id: 10, name: '310 Eastway Elementary *ED*	'}
// 	{ id: 11, name: '312 Jordan High School *ED*	'}
// 	{ id: 12, name: '313 Easley Elementary YR *ED*'},
// 	{ id: 13, name: '314 School for Creative Studies *ED*'},
// 	{ id: 14, name: '315 Eno Valley Elementary *ED*'},
// 	{ id: 15, name: '316 Carrington Middle *ED*	'},
// 	{ id: 16, name: '317 City of Medicine Academy *ED*'},
// 	{ id: 17, name: '318 Club Blvd Elementary *ED*'},
// 	{ id: 18, name: '319 Creekside Elementary *ED*'},
// 	{ id: 19, name: '320 Glenn Elementary *ED*	'},
// 	{ id: 20, name: '322 Performance Learning Center *ED*'},
// 	{ id: 21, name: '323 Durham School of the Arts *ED*'},
// 	{ id: 22, name: '324 Hillandale Elementary *ED*	'},
// 	{ id: 23, name: '325 Hillside High School *ED*'},
// 	{ id: 24, name: '327 Hope Valley Elementary *ED*'},
// 	{ id: 25, name: '328 Holt Elementary YR *ED*'},
// 	{ id: 26, name: '329 Holton *ED*'},
// 	{ id: 27, name: '332 Forest View Elementary *ED*'},
// 	{ id: 28, name: '336 Hospital School *ED*'},
// 	{ id: 29, name: '338 Shepard Middle School *ED*'},
// 	{ id: 30, name: '339 Lakewood Elementary *ED*'},
// 	{ id: 31, name: '340 Little River Elementary *ED*'},
// 	{ id: 32, name: '341 Lakeview School *ED*'},
// 	{ id: 33, name: '342 Lakewood Montessori Middle *ED*'},
// 	{ id: 34, name: '343 Lucas Middle *ED*'},
// 	{ id: 35, name: '344 Fayetteville St. Elementary *ED*'},
// 	{ id: 36, name: '346 Lowes Grove Middle *ED*'},
// 	{ id: 37, name: '347 George Watts Elementary *ED*'},
// 	{ id: 38, name: '348 Mangum Elementary *ED*'},
// 	{ id: 39, name: '352 Merrick-Moore Elementary *ED*'},
// 	{ id: 40, name: '353 Middle College High *ED*' },
// 	{ id: 41, name: '354 Morehead Montessori Elementary *ED*' },
// 	{ id: 42, name: '355 Neal Middle *ED*' },
// 	{ id: 43, name: '356 Northern High School *ED*' },
// 	{ id: 44, name: '360 Oak Grove Elementary *ED*' },
// 	{ id: 45, name: '362 Parkwood Elementary *ED*' },
// 	{ id: 46, name: '364 Pearsontown Elementary *ED*' },
// 	{ id: 47, name: '365 Riverside High *ED*' },
// 	{ id: 48, name: '366 Githens Middle *ED*' },
// 	{ id: 49, name: '367 RN Harris Elementary *ED*' },
// 	{ id: 50, name: '368 Southern High *ED*' },
// 	{ id: 51, name: '368 Southern School of Energy & SU *ED*' },
// 	{ id: 52, name: '369 Sandy Ridge Elementary *ED*' },
// 	{ id: 54, name: '370 Rogers-Herr Middle YR *ED*' },
// 	{ id: 55, name: '372 Southwest Elementary *ED*' },
// 	{ id: 56, name: '374 CC Spaulding Elementary *ED*' },
// 	{ id: 57, name: '376 Spring Valley Elementary *ED*' },
// 	{ id: 58, name: '388 W G Pearson Elementary *ED*' },
// 	{ id: 59, name: '400 YE Smith Elementary *ED*' },
// 	{ id: 60, name: '520 Maintenance/Custodial' },
// 	{ id: 61, name: '530 Transportation' },
// 	{ id: 62, name: '580 Bacon Street EC "ED"' },
// 	{ id: 63, name: '700 Southern School of Engin *ED*' },
// 	{ id: 64, name: '701 Hillside New Tech High *ED*' },
// 	{ id: 65, name: '903 Community Education "ED"' },
// 	{ id: 66, name: '903 Staff Development Ctr.' },
// 	{ id: 67, name: '903 Staff Development Ctr.' },

// 916 Warehoouse
// ]

export const location = [
	{ id: 100, name: 'Fuller Building "ED"' },
	{ id: 150, name: "Operational Services *ED*" },
	{ id: 155, name: "Capital Projects *ED*" },
	{ id: 289, name: "Whitted School *ED*" },
	{ id: 304, name: "Bethesda Elementary *ED*" },
	{ id: 306, name: "Brodgen Middle *ED*" },
	{ id: 308, name: "Burton Elementary *ED*" },
	{ id: 309, name: "Early College High *ED*" },
	{ id: 310, name: "Eastway Elementary *ED*" },
	{ id: 312, name: "Jordan High School *ED*" },
	{ id: 313, name: "Easley Elementary YR *ED*" },
	{ id: 314, name: "School for Creative Studies *ED*" },
	{ id: 315, name: "Eno Valley Elementary *ED*" },
	{ id: 316, name: "Carrington Middle *ED*" },
	{ id: 317, name: "City of Medicine Academy *ED*" },
	{ id: 318, name: "Club Blvd Elementary *ED*" },
	{ id: 319, name: "Creekside Elementary *ED*" },
	{ id: 320, name: "Glenn Elementary *ED*" },
	{ id: 322, name: "Performance Learning Center *ED*" },
	{ id: 323, name: "Durham School of the Arts *ED*" },
	{ id: 324, name: "Hillandale Elementary *ED*	" },
	{ id: 325, name: "Hillside High School *ED*" },
	{ id: 327, name: "Hope Valley Elementary *ED*" },
	{ id: 328, name: "Holt Elementary YR *ED*" },
	{ id: 329, name: "Holton *ED*	" },
	{ id: 332, name: "Forest View Elementary *ED*" },
	{ id: 336, name: "Hospital School *ED*" },
	{ id: 338, name: "Shepard Middle School *ED*" },
	{ id: 339, name: "Lakewood Elementary *ED*" },
	{ id: 340, name: "Little River Elementary *ED*" },
	{ id: 341, name: "Lakeview School *ED*" },
	{ id: 342, name: "Lakewood Montessori Middle *ED*" },
	{ id: 343, name: "Lucas Middle *ED*" },
	{ id: 344, name: "Fayetteville St. Elementary *ED*" },
	{ id: 346, name: "Lowes Grove Middle *ED*" },
	{ id: 347, name: "George Watts Elementary *ED*" },
	{ id: 348, name: "Mangum Elementary *ED*" },
	{ id: 352, name: "Merrick-Moore Elementary *ED*" },
	{ id: 353, name: "Middle College High *ED*" },
	{ id: 354, name: "Morehead Montessori Elementary *ED*" },
	{ id: 355, name: "Neal Middle *ED*" },
	{ id: 356, name: "Northern High School *ED*" },
	{ id: 360, name: "Oak Grove Elementary *ED*" },
	{ id: 362, name: "Parkwood Elementary *ED*" },
	{ id: 363, name: "EK Powe Elementary *ED*" },
	{ id: 364, name: "Pearsontown Elementary *ED*" },
	{ id: 365, name: "Riverside High *ED*" },
	{ id: 366, name: "Githens Middle *ED*" },
	{ id: 367, name: "RN Harris Elementary *ED*" },
	{ id: 368, name: "Southern High *ED*" },
	{ id: 368, name: "Southern School of Energy & SU *ED*" },
	{ id: 369, name: "Sandy Ridge Elementary *ED*" },
	{ id: 370, name: "Rogers-Herr Middle YR *ED*" },
	{ id: 372, name: "Southwest Elementary *ED*" },
	{ id: 374, name: "CC Spaulding Elementary *ED*" },
	{ id: 376, name: "Spring Valley Elementary *ED*" },
	{ id: 388, name: "W G Pearson Elementary *ED*" },
	{ id: 400, name: "YE Smith Elementary *ED*" },
	{ id: 520, name: " Maintenance / Custodial " },
	{ id: 530, name: " Transportation " },
	{ id: 580, name: " Bacon Street EC 'ED'" },
	{ id: 700, name: "Southern School of Engin *ED*" },
	{ id: 701, name: "Hillside New Tech High *ED*" },
	{ id: 903, name: "Community Education 'ED'" },
	{ id: 903, name: "Staff Development Ctr." },
	{ id: 916, name: "Warehouse" },
];
