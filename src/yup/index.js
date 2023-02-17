import * as Yup from "yup";
import "yup-phone";

export const SignUpSchema = Yup.object().shape({
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct"),
	password: Yup.string()
		.min(6, "must be atleast 6 characters long ")
		.required("Password is required!"),
	password_confirmation: Yup.string()
		.oneOf([Yup.ref("password")], "Confirm password must match password")
		.required("Please confirm your password"),
	check: Yup.boolean().oneOf([true], "Accept terms of service"),
});

export const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct!"),
	password: Yup.string()
		.min(6, "must be atleast 6 characters long ")
		.required("Password is required!"),
});

export const ResetPasswordSchema = Yup.object().shape({
	password: Yup.string()
		.min(6, "must be atleast 6 characters long ")
		.required("Password is required!"),

	password_confirmation: Yup.string()
		.oneOf([Yup.ref("password")], "Confirm password must match password")
		.required("Please confirm your password"),
});

export const PasswordResendEmailSchema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct!"),
});

export const AddProjectSchema = Yup.object().shape({
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	email: Yup.string()
		.required("Email is required!")
		.email("provided is not correct!"),
	phone: Yup.string().required("Phone number is required!").phone("US", true),
});

export const AddVendorsSchema = Yup.object().shape({
	title: Yup.string().required("Company Representative is required!"),
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	company_name: Yup.string().required("Company name is required!"),
	street: Yup.string().required("Street is required!"),
	state: Yup.string().required("Address is required!"),
	city: Yup.string().required("Address is required!"),
	zip_code: Yup.string().required("Address is required!"),
	// industry: Yup.string().required("Industry is required!"),
});
export const AddSchoolSchema = Yup.object().shape({
	name: Yup.string().required("Field is required!"),
	code: Yup.string().required("Field is required!"),
	type: Yup.string().required("Field is required!"),
	tag: Yup.string().required("Field is required!"),
	// address: Yup.string().required("Field is required!"),
	// state: Yup.string().required("Field is required!"),
	// city: Yup.string().required("Field is required!"),
});

export const EditProfileDetailsSchema = [
	Yup.object().shape({
		fullName: Yup.string().required("Full name is required"),
		email: Yup.string()
			.required("Email is required!")
			.email("provided is not correct!"),
		phone: Yup.string()
			.required("Phone number is required!")
			.phone("US", false),
	}),

	Yup.object().shape({
		password: Yup.string()
			.min(6, "must be atleast 6 characters long ")
			.required("Password is required!"),
	}),
];

export const AddProjectInformation = Yup.object({
	name: Yup.string().required("field is required"),
	number: Yup.string().required("field is required"),
	description: Yup.string().required("field is required"),
});
export const AddDurhamSettings = Yup.object({
	chair_board_education: Yup.string().required("field is required"),
	chief_finance_officer: Yup.string().required("field is required"),
	construction_interim_director: Yup.string().required("field is required"),
	business_Manager: Yup.string().required("field is required"),
	project_manager: Yup.string().required("field is required"),
	project_manager_phone: Yup.string().required("field is required"),
	director_design: Yup.string().required("field is required"),
	director_construction: Yup.string().required("field is required"),
	director_durham: Yup.string().required("field is required"),
});

export const AddAwardeeInformation = Yup.object({
	awardeeInfo: Yup.array().of(
		Yup.object().shape({
			industry: Yup.string().required("field is required"),
			design_consultant: Yup.string().required("field is required"),
			consultant_name: Yup.string().required("field is required"),
			consultant_address: Yup.string().required("field is required"),

			company_representative_name: Yup.string().required("field is required"),
			company_representative_title: Yup.string().required("field is required"),
		})
	),
});

export const AddNewProjectSchema = [
	Yup.object({
		project_name: Yup.string().required("field is required"),
		project_number: Yup.string().required("field is required"),
		project_description: Yup.string().required("field is required"),
		// project_location: Yup.string().required("field is required"),
		project_manager: Yup.string().required("field is required"),
	}),
	Yup.object({
		project_vendors: Yup.array().of(
			Yup.object().shape({
				role: Yup.string().required("field is required"),
				company_name: Yup.string().required("field is required"),
				// street: Yup.string().required("field is required"),
				// state: Yup.string().required("field is required"),ß
				// city: Yup.string().required("field is required"),
				// zip_code: Yup.string().required("field is required"),
				first_name: Yup.string().required("field is required"),
				last_name: Yup.string().required("field is required"),
				title: Yup.string().required("field is required"),
			})
		),
	}),
];

export const LundsForm = Yup.object().shape({
	type: Yup.string().required("Type is required!"),
});

export const NoticeConsultant = Yup.object().shape({
	approval: Yup.string().required("Approval is required!"),
	creationDate: Yup.string().required("Creation date is required!"),
	projectAmount: Yup.string().required("Amount is required!"),
	// approvalDate: Yup.string().required("Approval date is required!"),
	deliveryDate: Yup.string().required("Delivery date is required!"),
});

export const NoticeProceed = Yup.object().shape({
	creationDate: Yup.string().required("Creation date is required!"),
	startDate: Yup.string().required("Starting date is required!"),
	startTime: Yup.string().required("Starting time date is required!"),
	effectiveDate: Yup.string().required("Delivery date is required!"),
});

/**
 *     bidDate: '',
      deadlineTime: '',
      openingTime: '',
      withdrawingBid: '',
      conferenceDate: '',
      conferenceTime: '',
      conferenceAddress: '',
      conferenceCity: '',
      conferenceState: '',
      conferenceZipCode: '',
      presenceOfBiders: false,
      company_name: '',
      manager_name: '',
      manager_phone_number: '',
      manager_email_address: '',
 */

export const AdvertisementBidSchema = [
	Yup.object({
		bidDate: Yup.date().required("Date field is required"),
		deadlineTime: Yup.date().required("Deadline time field is required"),
		openingTime: Yup.date().required("Bid opening time field is required"),
		withdrawingBid: Yup.string().required(
			"Period of withdrawing bid field is required"
		),
	}),
	Yup.object({
		conferenceDate: Yup.date().required("Date field is required"),
		conferenceTime: Yup.date().required("Time field is required"),
		conferenceAddress: Yup.string().required("Address field is required"),
		conferenceState: Yup.string().required("State field is required"),
		conferenceCity: Yup.string().required("City field is required"),
		conferenceZipCode: Yup.string().required("Zip code field is required"),
		presenceOfBiders: Yup.string().required("Choose an option"),
	}),
	Yup.object({
		company_name: Yup.string().required("Company name field is required"),
		manager_name: Yup.string().required("Manager name field is required"),
		manager_phone_number: Yup.string()
			.required("Manager phone number field is required")
			.phone("US", false),
		manager_email_address: Yup.string()
			.required("Manager email address field is required")
			.email("Enter a correct email address"),
	}),
];

export const EESSERContractSchema = [
	Yup.object({
		contractStartDate: Yup.string().required("Date field is required"),
		fromDuration: Yup.string().required("Duration field is required"),
		startDuration: Yup.string().required("Through date field is required"),
	}),
	Yup.object({
		calculatePayment: Yup.string().required("Payment metric is required"),
		allowablePayment: Yup.string().required(
			"Allowable total payment field is required"
		),
		reimburseObligation: Yup.string().required(
			"Additional Obligation field is required"
		),
		providerCompensation: Yup.string().required("Amount field is required"),
		providerInvoice: Yup.string().required(
			"Invoice receiver field is required"
		),
		signedDocument: Yup.string().required("Date field is required"),
	}),
	Yup.object({
		type: "",
	}),
];

export const TechServiceSchema = Yup.object().shape({
	creationDate: Yup.string().required("Creation date is required!"),
	startDate: Yup.string().required("Starting date is required!"),
	amount: Yup.string().required("Amount is required!"),
	endDate: Yup.string().required("Starting time date is required!"),
	signedDate: Yup.string().required("Delivery date is required!"),
});

export const NoticeIntentAward = Yup.object().shape({
	creationDate: Yup.string().required("Letter creation is required"),
	approvalDate: Yup.string().required("Letter approval date is required"),
	contractorContact: Yup.string().required(
		"Contractor contact person is required"
	),
	email: Yup.string()
		.required("Consultant email is required")
		.email("Please Provide a valid email address"),
	sendersName: Yup.string().required("Sender's name is required"),
	phone: Yup.string()
		.required("Sender's phone number field is required")
		.phone("US", false),
});

export const NoticeofAwardSchema = Yup.object().shape({
	approval: Yup.string().required("Approval field is required"),
	creationDate: Yup.string().required("Letter creation field is required"),
	services: Yup.string().required("Services field date is required"),
	amount: Yup.string().required("Amount field is required"),
	email: Yup.string()
		.required("Email field is required")
		.email("Please Provide a valid email address"),
	deliveryDate: Yup.string().required("Delivery date field is required"),
});

export const ProjectCloseOutSchema = Yup.object().shape({
	completionDate: Yup.string().required("completion date field is required"),
	signDate: Yup.string().required("signed date field is required"),
});
export const DeterminationFormContractor = Yup.object().shape({
	creationDate: Yup.date().required("Field is required"),
});

// export const OwnerContractManageMent = Yup.object().shape({
// 	substantialCompletionDate:Yup.date().required("Field is required"),
// 	agreementDate:Yup.date().required("Field is required"),
// 	projectIntent: Yup.string().required("Field is required"),
// 	amount: Yup.string().required("Field is required"),
// 	percentage: Yup.string().required("Field is required"),
// 	substantialAmount: Yup.string().required("Field is required"),
// 	finalAmount: Yup.string().required("Field is required"),
// 	Name: Yup.string().required("Field is required"),
// 	conferenceAddress: Yup.string().required("Field is required"),
// 	conferenceState: Yup.string().required("Field is required"),
// 	conferenceCity: Yup.string().required("Field is required"),
// 	conferenceZipCode: Yup.string().required("Field is required"),

// });
export const OwnerContractManageMent = Yup.object().shape({
	agreementDate: Yup.date().required("Field is required"),
	projectIntent: Yup.string().required("Field is required"),
	substantialCompletionstring: Yup.string().required("Field is required"),
	amount: Yup.string().required("Field is required"),
	percentage: Yup.string().required("Field is required"),
	substantialAmount: Yup.string().required("Field is required"),
	finalAmount: Yup.string().required("Field is required"),
	Name: Yup.string().required("Field is required"),
	conferenceAddress: Yup.string().required("Field is required"),
	conferenceState: Yup.string().required("Field is required"),
	conferenceCity: Yup.string().required("Field is required"),
	conferenceZipCode: Yup.string().required("Field is required"),
	projectName: Yup.string().required("Field is required"),

	location: [
		{
			projectState: Yup.string().required("Field is required"),
			projectCity: Yup.string().required("Field is required"),
			projectZipCode: Yup.string().required("Field is required"), 
		},
	],
	procurementAmount: Yup.string().required("Field is required"),
	constructionAmount: Yup.string().required("Field is required"),
	costOfWork: Yup.string().required("Field is required"),
	CMContingency: Yup.string().required("Field is required"),
	generalConditions: Yup.string().required("Field is required"),
	fees: Yup.string().required("Field is required"),
	preConstruction: Yup.string().required("Field is required"),
});

export const CCPRequisitionSchema = [
	Yup.object().shape({
		creationDate: Yup.string().required("Creation date field is required"),
		budgetCode: Yup.string().required("Budget code field is required"),
		commodityCode: Yup.string().required("Commodity code field is required"),
		requisitionOrder: Yup.string().required("Requisition order field is required"),
		po: Yup.string().required("PO field is required"),
		attached: Yup.string().required("Attached field is required"),
		signDate: Yup.string().required("Signed date field is required")
	}),
	Yup.object().shape({
		vendor: Yup.string().required("Vendor field is required"),
		vendorId: Yup.string().required("Vendor id field is required"),
		companyName: Yup.string().required("Company name field is required"),
		addressCity: Yup.string().required("city field is required"),
		addressStreet: Yup.string().required("street field is required"),
		addressState: Yup.string().required("state field is required"),
		addressZipCode: Yup.string().required("zip code field is required"),
		name: Yup.string().required("name field is required"),
		city: Yup.string().required("city field is required"),
		street: Yup.string().required("street field is required"),
		state: Yup.string().required("state field is required"),
		zipCode: Yup.string().required("zip code field is required"),
		location: Yup.string().required("location field is required")
	}),
	Yup.object().shape({
		items: Yup.array().of(
			Yup.object().shape({
				stockNumber: Yup.string().required("stock number field is required"),
				description: Yup.string().required("description field is required"),
				quantity: Yup.string().required("quantity field is required"),
				unit: Yup.string().required("unit field is required"),
				unitPrice: Yup.string().required("unit price field is required")
			}),
		),
		shippingCost: Yup.string().required("shipping cost field is required"),
		salesTax: Yup.string().required("sales tax field is required")
	}),
]

export const MWBEFormsForBidSchema = [
	Yup.object().shape({
		ownerRepDB: Yup.string().required("Owner rep field is required"),
		ownerRepName: Yup.string().required("Owner rep name field is required"),
		ownerRepTitle: Yup.string().required("Owner rep title field is required"),
		ownerRepDate: Yup.string().required("Owner rep date field is required")
	}),
	Yup.object().shape({
		totalValue: Yup.string().required("Total value field is required"),
		minPercentage: Yup.string().required("Min percentage field is required"),
		mwbeInfo: Yup.array().of(
			Yup.object().shape({
				mwbeName: Yup.string().required("MWBE name field is required"),
				companyName: Yup.string().required("Company name field is required"),
				companyNumber: Yup.string().required("Company number field is required"),
				mwbeCategory: Yup.string().required("MWBE category field is required"),
				workDescription: Yup.string().required("Work description field is required"),
				contractAmount: Yup.string().required("Contract amount field is required")
			}),
		),
	}),
]

export const DesignPhaseChangeOrderSchema = [
	Yup.object().shape({
		orderNumber: Yup.string().required("Change order Number is required"),
		orderDate: Yup.string().required("Order Date field is required"),
		fileNumber: Yup.string().required("File Number field is required"),
		descOfChange: Yup.string().required("Description of the change field is required"),
		netSumofPriorChangeOrders: Yup.string().required("Net Sum of Prior Change Order(s) field is required"),
		originalContractSum: Yup.string().required("Original Contract Sum field is required"),
		changeInOrderAmount: Yup.string().required("Change in order amount field is required"),
		amount: Yup.string().required("Amount field is required"),
	}),
	Yup.object().shape({
		originalContractSubstantialCompletionDate: Yup.string().required("Original Contract Substantial Completion Date field is required"),
		numberOfDaysAddedByPriorChangeOrder: Yup.string().required("Days Added by Prior Change Order(s) field is required"),
		numberOfDaysAddedByChangeOrder: Yup.string().required("Number of Days Added by this Change Order field is required"),
		ownerRepresentative: Yup.string().required("Owner Representative field is required"),
		ownerRepresentativeName: Yup.string().required("Owner Representative Name field is required"),
		ownerRepresentativeSign: Yup.string().required("Owner's representative sign this change order field is required"),
	}),
]

export const CertificateOfSubstantialSchema = Yup.object().shape({
	purposeOfContract: Yup.string().required("Field is required"),
	contractEffectDate: Yup.string().required("Field is required"),
	involvedInProject: Yup.string().required("Field is required"),
	areasCompleted: Yup.string().required("Field is required"),
	completionDate: Yup.string().required("Field is required"),
	workCompletionDate: Yup.string().required("Field is required"),
	costOfWork: Yup.string().required("Field is required"),
	ownersRep: Yup.string().required("Field is required"),
	ownerRepName: Yup.string().required("Field is required"),
	signedDate: Yup.string().required("Field is required"),
	responsibility: Yup.string().required("Field is required"),
	estimatedCost: Yup.string().required("Field is required"),
});

export const Bidschema = [
	Yup.object({
		selectDate: Yup.string().required("field is required"),
		input: Yup.string().required("field is required"),
		selectOption: Yup.string().required("field is required"),
		selectVendor: Yup.string().required("field is required"),
	}),
	Yup.object({
		information: Yup.array().of(
			Yup.object().shape({
				company_name: Yup.string().required("field is required"),
				address: Yup.string().required("field is required"),
				city: Yup.string().required("field is required"),
				state: Yup.string().required("field is required"),
				zip_code: Yup.string().required("field is required"),
				shippingPrice: Yup.string().required("field is required"),
				totalPrice: Yup.string().required("field is required"),
				unitPrice: Yup.string().required("field is required"),
			})
		),
	}),
];

export const RFPTemplateWithMWBESchema = [
	Yup.object().shape({
		bidderName: Yup.string().required("Field is required"),
		rfpNumber: Yup.string().required("Field is required"),
		personName: Yup.string().required("Field is required"),
		contractType: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		issueDate: Yup.string().required("Field is required"),
		proposalDate: Yup.string().required("Field is required"),
		proposalTime: Yup.string().required("Field is required"),
		submissionDate: Yup.string().required("Field is required"),
		submissionTime: Yup.string().required("Field is required"),
		answerTime: Yup.string().required("Field is required"),
		answerDate: Yup.string().required("Field is required"),
		bidOpeningDate: Yup.string().required("Field is required"),
		bidOpeningTime: Yup.string().required("Field is required"),
		proposalSubmissionDate: Yup.string().required("Field is required"),
		proposalSubmissionTime: Yup.string().required("Field is required"),
		street: Yup.string().required("Field is required"),
		city: Yup.string().required("Field is required"),
		state: Yup.string().required("Field is required"),
		zipCode: Yup.string().required("Field is required"),
		date: Yup.string().required("Field is required"),
		time: Yup.string().required("Field is required")
	}), 
	Yup.object().shape({
		prototype: Yup.string().required("Field is required"),
		validityPeriod: Yup.string().required("Field is required"),
		items: Yup.string().required("Field is required"),
		attachment: Yup.string().required("Field is required"),
		proposalScope: Yup.string().required("Field is required")
	})
];

export const MWBEFormSchema = Yup.object().shape({
	purpose: Yup.string().required("field is required"),
	totalContractAmount: Yup.string().required("field is required"),
	contractors: Yup.array().of(
		Yup.object().shape({
			contractor: Yup.string().required("field is required"),
			companyName: Yup.string().required("field is required"),
			description: Yup.string().required("field is required"),
			companyType: Yup.string().required("field is required"),
			companyContractAmount: Yup.string().required("field is required")
		})
	)
})

export const ShortSmallFormDesignSchema = Yup.object().shape({
	agreementDate: Yup.string().required("Field is required"),
	ownerEmail: Yup.string().required("Field is required"),
	signDate: Yup.string().required("Field is required")
});

export const OwnerAndDesignConsultantSchema = [
	Yup.object().shape({
		agreementDate: Yup.string().required("Field is required"),
		directorSignDate: Yup.string().required("Field is required"),
		officerSignDate: Yup.string().required("Field is required"),
		notarySealDate: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		checkType: Yup.string().required("Field is required")
	})
]

export const OwnerAndContractorSchema = [
	Yup.object().shape({
		agreementDate: Yup.string().required("Field is required"),
		construction: Yup.string().required("Field is required"),
		substantialCompletionDate: Yup.string().required("Field is required"),
		finalCompletionDate: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		project: Yup.string().required("Field is required"),
		projectDate: Yup.string().required("Field is required"),
		projectAgenda: Yup.string().required("Field is required"),
		projectAlternates: Yup.string().required("Field is required"),
		modification: Yup.string().required("Field is required"),
		modificationAmount: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		contractAmount: Yup.string().required("Field is required"),
		allowances: Yup.string().required("Field is required"),
		units: Yup.array().of(
			Yup.object().shape({
				unit: Yup.string().required("Field is required")
			})
		)
	})
]

export const CapitalProjectRequestSchema = [
	Yup.object().shape({
		pointOfContact: Yup.string().required("Field is required"),
		startDate: Yup.string().required("Field is required"),
		completionDate: Yup.string().required("Field is required"),
		fundingSource: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		landCost: Yup.string().required("Field is required"),
		designCost: Yup.string().required("Field is required"),
		constructionCost: Yup.string().required("Field is required"),
		renovationCost: Yup.string().required("Field is required"),
		repairCost: Yup.string().required("Field is required"),
		furnitureCost: Yup.string().required("Field is required"),
	})
]

export const ChangeOrderSchema = [
	Yup.object().shape({
		number: Yup.string().required("Field is required"),
		creatingDate: Yup.string().required("Field is required"),
		description: Yup.string().required("Field is required"),
		originalSum: Yup.string().required("Field is required"),
		netSum: Yup.string().required("Field is required"),
		amountEffect: Yup.string().required("Field is required"),
		amount: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		completionDate: Yup.string().required("Field is required"),
		priorChangeDays: Yup.string().required("Field is required"),
		changeDays: Yup.string().required("Field is required"),
		signDate: Yup.string().required("Field is required"),
		approval: Yup.string().required("Field is required"),
		persons: Yup.array().of(
			Yup.object().shape({
				database: Yup.string().required("Field is required"),
				name: Yup.string().required("Field is required")
			})
		)
	})
]

export const ChangeOrderDirectiveSchema = Yup.object().shape({
	maxPrice: Yup.string().required("Field is required"),
	amount: Yup.string().required("Field is required"),
	contractTime: Yup.string(),
	contractTimePerHour: Yup.string().when("maxPrice", {
		is: (maxPrice) => maxPrice === "Unit Price",
		then: Yup.string().required("Field is required")
	}),
	ownerDatabase: Yup.string().required("Field is required"),
	ownerName: Yup.string().required("Field is required"),
	signDate: Yup.string().required("Field is required")
});

export const DPSShortFormEngineerSchema = [
	Yup.object().shape({
		agreementDate: Yup.string().required("Field is required"),
		directorSignDate: Yup.string().required("Field is required"),
		officerSignDate: Yup.string().required("Field is required"),
		notarySealDate: Yup.string().required("Field is required"),
		checkType: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		address: Yup.string().required("Field is required"),
		state: Yup.string().required("Field is required"),
		city: Yup.string().required("Field is required"),
		zipCode: Yup.string().required("Field is required")
	})
];

export const DPSFormalGeneralConditionSchema = Yup.object().shape({
	substantialCompletion: Yup.string().required("Field is required"),
	finalCompletion: Yup.string().required("Field is required"),
	amount: Yup.string().required("Field is required")
});

export const CPCSchema = [
	Yup.object().shape({
		contractType: Yup.string().required("Field is required"),
		signDate: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		mostRecent: Yup.string(),
		bidDocument: Yup.string(),
		projectNumber: Yup.string(),
		projectTitle: Yup.string(),
		exhibit1: Yup.string(),
		exhibit2: Yup.string(),
		exhibitA: Yup.string(),
		exhibitB: Yup.string(),
		exhibitC: Yup.string(),
	}),
	Yup.object().shape({
		attachmentA: Yup.string(),
		performanceBond: Yup.string(),
		materialBond: Yup.string(),
		liabilityInsurance: Yup.string(),
		dps: Yup.string(),
		originals: Yup.string(),
		singleSided: Yup.string(),
		pagesInOrder: Yup.string(),
	})
]

export const OwnerAndDesignMoreSchema = [
	Yup.object().shape({
		agreementDate: Yup.string().required("Field is required"),
		projectObjective: Yup.string().required("Field is required"),
		newSchool: Yup.string().required("Field is required"),
		schoolName: Yup.string().required("Field is required"),
		studentNumber: Yup.string().required("Field is required"),
		squareFootage: Yup.string().required("Field is required"),
		accomodateNumber: Yup.string().required("Field is required"),
		street: Yup.string().required("Field is required"),
		state: Yup.string().required("Field is required"),
		city: Yup.string().required("Field is required"),
		zipCode: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		schematicCompletionDate: Yup.string().required("Field is required"),
		constructionCompletionDate: Yup.string().required("Field is required"),
		noticeDate: Yup.string().required("Field is required"),
		substantialCompletionDate: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		consultants: Yup.array().of(
			Yup.object().shape({
				consultantHired: Yup.string().required("Field is required"),
				selectedField: Yup.string().required("Field is required")
			})
		)
	}),
	Yup.object().shape({
		ccap: Yup.string().required("Field is required"),
		ownerDeadline: Yup.string().required("Field is required"),
		percentage: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		serviceCompensation: Yup.string().required("Field is required"),
		narrativePhase: Yup.string().required("Field is required"),
		schematicPhase: Yup.string().required("Field is required"),
		developmentPhase: Yup.string().required("Field is required"),
		constructionContractPhase: Yup.string().required("Field is required"),
		negotiationPhase: Yup.string().required("Field is required"),
		constructionPhase: Yup.string().required("Field is required"),
		constructionServicesPhase: Yup.string().required("Field is required"),
		maxCost: Yup.string().required("Field is required")
	}),
	Yup.object().shape({
		// services: Yup.array().of(
		// 	Yup.object().shape({
		// 		service: Yup.string().required("Field is required")
		// 	})
		// ),
		signDate: Yup.string().required("Field is required"),
		approveDate: Yup.string().required("Field is required"),
		notarySealDate: Yup.string().required("Field is required")
	})
]