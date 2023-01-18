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
	address: Yup.string().required("Address is required!"),
	state: Yup.string().required("Address is required!"),
	city: Yup.string().required("Address is required!"),
	zip_code: Yup.string().required("Address is required!"),
	industry: Yup.string().required("Industry is required!"),
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
	chair_board_education: Yup.string().required("field is required") ,
	chief_finance_officer: Yup.string().required("field is required"),
	construction_interim_director: Yup.string().required("field is required"),
	business_Manager:Yup.string().required("field is required") ,
	project_manager: Yup.string().required("field is required"),
	project_manager_phone: Yup.string().required("field is required"),
	director_design:Yup.string().required("field is required"),
	director_construction: Yup.string().required("field is required"),
	director_durham:Yup.string().required("field is required"),
});

export const AddAwardeeInformation = 
	Yup.object({
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
				street: Yup.string().required("field is required"),
				state: Yup.string().required("field is required"),
				city: Yup.string().required("field is required"),
				zip_code: Yup.string().required("field is required"),
				first_name: Yup.string().required("field is required"),
				last_name: Yup.string().required("field is required"),
				title:
					Yup.string().required("field is required"),
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
	approvalDate: Yup.string().required("Approval date is required!"),
	deliveryDate: Yup.string().required("Delivery date is required!"),
});

export const NoticeProceed = Yup.object().shape({
	creationDate: Yup.string().required("Creation date is required!"),
	startDate: Yup.string().required("Starting date is required!"),
	startTime: Yup.string().required("Starting time date is required!"),
	deliveryDate: Yup.string().required("Delivery date is required!"),
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
          projectZipCode: Yup.string().required("Field is required")
        },
      ],
      procurementAmount: Yup.string().required("Field is required"),
      constructionAmount: Yup.string().required("Field is required"),
      costOfWork: Yup.string().required("Field is required"),
      CMContingency: Yup.string().required("Field is required"),
      generalConditions: Yup.string().required("Field is required"),
      fees: Yup.string().required("Field is required"),
      preConstruction: Yup.string().required("Field is required")
	
});

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