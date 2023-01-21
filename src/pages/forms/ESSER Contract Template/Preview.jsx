import { ButtonWhiteBG } from "../../../ui";

import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { closeDownload, fields, openDownload, savedResponse, showDownload } from "../reducer";
import DownLoadForm from "../Lundsford/Download";
import { useRef } from "react";
import moment from "moment";
import currency from "currency.js";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { prevChoiceStep, stepChoiceDefault } from "./reducer";

const Preview = () => {
    
    const dispatch = useDispatch()
    const show = useSelector(openDownload)
   
    const downloadComponent = useRef();

    const formID = useSelector(project_document_id);

    useFetchFilledFormQuery(formID)
    const content = useSelector(savedResponse);
    const { vendors, project, durham_profile } = content;
    const form_fields = useSelector(fields)
    
    const props = {
        component: downloadComponent,
        name: 'ESSER Contract Template',
        show: !show ? 'hidden' : 'block',
        stepDefault: stepChoiceDefault,
        close: closeDownload


    }
    

    return (
      
        <div>
            <DownLoadForm {...props} />
            <div>
                {/* Modal content */}
                <div className={`${!show ? "block" : "hidden"} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
                    {/* Header */}
                    <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
                        <div className='ml-6'>
                            <h3 className='text-lg font-bold text-gray-900'>
                                ESSER Contract Template
                            </h3>
                            <p className='text-base text-gray-700'>Preview Document</p>
                        </div>
                        <button
                            type='button'
                            className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                            data-modal-toggle='small-modal'
                        >
                            <Close />
                        </button>
                    </div>

                    <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
                        <div className='bg-white px-12 pt-8 pb-4 text-black' ref={downloadComponent}>
                            <div className='text-center mb-4'>
                                <h1 className='font-bold'>
                                    DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION
                                </h1>
                                <h1 className='font-bold'>CONTRACT FOR SERVICES</h1>
                            </div>

                            <p className='text-justify mb-4'>
                                This contract for services (the “Contract”) is made and
                                entered into this{" "}
                                <span className=''>{moment(form_fields.contractStartDate).format(" Do ")}</span> day of{" "}
                                <span className=''>{moment(form_fields.contractStartDate).format(" MMMM ")}</span>{" "}
                                <span className=''>{moment(form_fields.contractStartDate).format(" YYYY ")}</span>, between the Durham
                                Public Schools Board of Education (the “School System”), 511
                                Cleveland Street, Durham, NC 27702, and [
                                <span className=' '>{!vendors ? '' : vendors[0].company_name.toUpperCase()}</span>] (the
                                “Provider”), [
                                
                                <span className=' '>{!vendors ? '' : vendors[0].address.toUpperCase()}</span>].
                            </p>

                            <p className='ml-10 mb-4'>
                                For and in consideration of the mutual promises set forth in
                                the Contract the parties do mutually agree as follows:
                            </p>

                            {/* Lists */}
                            <div>
                                {/* 1 */}
                                <div className='flex'>
                                    <p>1.</p>
                                    <div className=' ml-7'>
                                        <p>
                                            <span className='underline underline-offset-2'>
                                                Obligations of Provider
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider agrees to following:
                                            </span>
                                        </p>

                                        {/* 1.1 Container */}
                                        <div className='mt-2'>
                                            {/* 1.1 */}
                                            <div className='mb-2'>
                                                <span className='pr-4 underline underline-offset-2'>
                                                    1.1.
                                                </span>
                                                <span className='text-justify'>
                                                    Provider shall provide the following services
                                                    regarding the School System’s use, including
                                                    monitoring and reporting, of ESSER Funds:
                                                </span>
                                            </div>
                                            {/* 1.1 Nested List */}
                                            <div className='ml-[60px]'>
                                                <div className='mb-2 flex'>
                                                    <p className='pr-4 underline underline-offset-2'>
                                                        1)
                                                    </p>
                                                    <p className='text-justify'>
                                                        Review and be familiar with all state and federal
                                                        rules, laws and regulations regarding the use of
                                                        ESSER funds by the School System;
                                                    </p>
                                                </div>
                                                <div className='mb-2 flex'>
                                                    <p className='pr-4 underline underline-offset-2'>
                                                        2)
                                                    </p>
                                                    <p className='text-justify'>
                                                        Oversee and manage the use of ESSER funds by the
                                                        School System;
                                                    </p>
                                                </div>
                                                <div className='mb-2 flex'>
                                                    <p className='pr-4 underline underline-offset-2'>
                                                        3)
                                                    </p>
                                                    <p className='text-justify'>
                                                        Ensure the School System’s compliance with the use
                                                        of ESSER funds;
                                                    </p>
                                                </div>
                                                <div className='mb-2 flex'>
                                                    <p className='pr-4 underline underline-offset-2'>
                                                        4)
                                                    </p>
                                                    <p className='text-justify'>
                                                        Maintain all records associated with the use of
                                                        ESSER funds, including preparing and submitting
                                                        any required reports associated with the use of
                                                        ESSER; and
                                                    </p>
                                                </div>
                                                <div className='mb-2 flex'>
                                                    <p className='pr-4 underline underline-offset-2'>
                                                        5)
                                                    </p>
                                                    <p className='text-justify'>
                                                        Defend any audit by federal and/or state entities
                                                        regarding the School System’s use of ESSER funds.
                                                    </p>
                                                </div>
                                            </div>

                                            <p className='pl-4 texxt-justify'>
                                                Work will be completed in a timely manner acceptable
                                                to the School System in full compliance with the terms
                                                and conditions of this Contract, including any
                                                documents incorporated by reference.
                                            </p>
                                        </div>

                                        {/* 1.2 */}
                                        <div className='mt-2 mb-2 text-justify'>
                                            <span className='pr-4 underline underline-offset-2'>
                                                1.2. Qualifications of Provider.
                                            </span>
                                            <span>
                                                Provider warrants that all agents or employees of
                                                Provider who will provide services under this Contract
                                                will be fully qualified, possess any requisite
                                                licenses, and otherwise be legally entitled to perform
                                                the services provided, and shall exercise the skill
                                                and care customarily exercised by duly licensed and/or
                                                qualified providers of the same or similar services.
                                            </span>
                                        </div>

                                        {/* 1.3 */}
                                        <div className='mt-2 mb-2 text-justify'>
                                            <span className='pr-4 underline underline-offset-2'>
                                                1.3. Records Maintenance.
                                            </span>
                                            <span>
                                                Provider shall maintain written documentation of any
                                                service provided, including any required documentation
                                                meeting the requirements of applicable federal, state
                                                and local laws and regulations.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2 */}
                                <div className='flex mb-2 mt-6'>
                                    <p>2.</p>
                                    <div className=' ml-7'>
                                        <p>
                                            <span className='underline underline-offset-2'>
                                                Obligations of the School System.
                                            </span>
                                        </p>

                                        {/* 2.1 */}
                                        <div className='mt-2 text-justify'>
                                            <span className='pr-4'>2.1.</span>
                                            <span>
                                                The School System hereby agrees to compensate Provider
                                                at a rate or in the amount of{" "}
                                                <span className=''>{!form_fields ? '' : form_fields.calculatePayment}</span> for services
                                                rendered, with total payments not to exceed{" "}
                                              
                                                <span className=''>{currency(form_fields.allowablePayment).format()}</span>. With the
                                                School System’s written consent, payments may be made
                                                in monthly installments for work performed and
                                                accepted during the previous month.
                                            </span>
                                        </div>

                                        {/* 2.2 */}
                                        <div className='mt-2 text-justify'>
                                            <span className='pr-4 underline underline-offset-2'>
                                                2.2.
                                            </span>
                                            <span className=''>{!form_fields ? '' : form_fields.obligation}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 3 */}
                                <div className='flex mb-2'>
                                    <p>3.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Term
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                The services described in the Contract will be
                                                provided from{" "}
                                                <span className=''>{moment(form_fields.fromDuration).format("MMMM Do YYYY ")}</span>
                                                through <span className=''>{moment(form_fields.startDuration).format("MMMM Do YYYY ")}</span>
                                                unless sooner terminated as herein provided.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 4 */}
                                <div className='flex mb-2'>
                                    <p>4.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Compensation
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                The School System hereby agrees to compensate Provider
                                                in the amount of $____
                                                <span className=''>{currency(form_fields.providerCompensation).format()}</span>____ once
                                                all services have been rendered in accordance with the
                                                terms of this Contract. Provider shall provide School
                                                System with invoice(s) itemized by service provided
                                                the number of hours worked and by whom, the date(s)
                                                that services were provided, and the amount owed,
                                                along with any supporting documentation that may be
                                                requested in advance by School System. The School
                                                System shall process payments to Provider within
                                                forty-five (45) days of submission of such invoice(s).
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 5 */}
                                <div className='flex mb-2'>
                                    <p>5.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Termination for Convenience
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                The School System may terminate this Contract at any
                                                time at its complete discretion upon twenty (20)
                                                calendar days’ notice in writing from the School
                                                System to Provider prior to the date of termination.
                                                In addition, all finished or unfinished documents and
                                                other materials produced by Provider pursuant to this
                                                Contract shall, at the request of the School System be
                                                turned over to it and become its property. If the
                                                Contract is terminated by the School System in
                                                accordance with this section, the School System will
                                                pay Provider at the rate set out in Section 2.1 for
                                                all services performed as of the date of termination.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 6 */}
                                <div className='flex mb-2'>
                                    <p>6.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Termination for Default
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                At any time, the School System may terminate this
                                                Contract immediately and without prior notice if
                                                provider is unable to meet goals and timetables or if
                                                the School System is dissatisfied with the quality of
                                                services provided.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 7 */}
                                <div className='flex mb-2'>
                                    <p>7.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Terms and Methods of Payment
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                              
                                                Provider shall submit to the School System monthly
                                                invoices itemized by service provided, the number of
                                                hours worked and by whom, the date(s) that services
                                                were provided, and the amount owed, along with any
                                                supporting documentation that may be requested in
                                                advance by the School System. Such invoices shall be
                                                submitted within thirty (30) days of the rendering of
                                                services. The School System shall process payments to
                                                Provider within forty-five (45) days of submission of
                                                such invoices. Invoices should be sent to{" "}
                                                <span className=''>{!form_fields ? "" : form_fields.providerInvoice}</span>, for review
                                                and approval.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 8 */}
                                <div className='flex mb-2'>
                                    <p>8.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Contract Funding
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                It is understood and agreed between Provider and the
                                                School System that the School System’s payment
                                                obligation under this Contract is contingent upon the
                                                availability of appropriated funds from which payment
                                                for Contract purposes can be made.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 9 */}
                                <div className='flex mb-2'>
                                    <p>9.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Insurance
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider agrees to maintain Commercial General
                                                Liability in amount of $1,000,000 each occurrence with
                                                $2,000,000 General Aggregate. Provider shall maintain
                                                $1,000,000 in automobile liability, and other
                                                appropriate insurance, as well as Workers Compensation
                                                in the required statutory amount for all employees
                                                participating in the provision of services under this
                                                Contract. Provider also agrees to maintain $1,000,000
                                                in professional liability insurance if the Provider is
                                                engaged in a professional service pursuant to this
                                                Contract. The Board of Education shall be named by
                                                endorsement as an additional insured on the General
                                                and Automobile Liability policies. Certificates of
                                                such insurance shall be furnished by Provider to the
                                                School System and shall contain an endorsement to
                                                provide the School System at least 10 days’ written
                                                notice of any intent to cancel or terminate by either
                                                Provider or the insuring company. Failure to furnish
                                                insurance certificates or maintain such insurance
                                                shall be a default under this contract and shall be
                                                grounds for immediate termination of this Contract.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 10 */}
                                <div className='flex mb-2'>
                                    <p>10.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Taxes
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider shall pay all federal, state, and FICA taxes
                                                for all employees participating in the provision of
                                                services under this Contract. If requested by the
                                                School System, Provider shall provide a breakdown of
                                                all sales and use taxes paid on labor, materials,
                                                parts and/or supplies.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 11 */}
                                <div className='flex mb-2'>
                                    <p>11.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Monitoring and Auditing
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider shall cooperate with the School System, or
                                                with any other person or agency as directed by the
                                                School System, in monitoring, auditing, or
                                                investigating activities related to this Contract.
                                                Provider shall permit the School System to evaluate
                                                all activities conducted under this contract as
                                                dictated by the School System. Provider shall provide
                                                auditors retained by the School System with access to
                                                any records and files related to the provision of
                                                services under this Contract. The School System agrees
                                                that its auditors will maintain the confidentiality of
                                                any identified and actual trade secrets of Provider
                                                accessed during an audit conducted under this
                                                Contract.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 12 */}
                                <div className='flex mb-2'>
                                    <p>12.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Confidentiality of Student Information
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider agrees that all student records or personally
                                                identifiable information contained in student records
                                                that may be obtained in the course of providing
                                                services to the School System under this contract
                                                shall be subject to the confidentiality and disclosure
                                                provisions of applicable federal and state statutes
                                                and regulations as well as the School System’s
                                                policies. All student records shall be kept in a
                                                secure location preventing access by unauthorized
                                                individuals. Provider will maintain an access log
                                                delineating date, time, agency, and identity of
                                                individual accessing student records who is not in the
                                                direct employ of Provider. Provider shall not forward
                                                to any person other than parent or the School System
                                                any student record or personally identifiable
                                                information obtained from a student record (including,
                                                but not limited to, the student’s identity) without
                                                the written consent of the School System. Upon
                                                termination of this Contract, Provider shall turn over
                                                to the School System all student records or personally
                                                identifiable information about students obtained by
                                                Provider while providing services under this Contract.
                                                Nothing in this Contract gives Provider any right to
                                                access any student records or personally identifiable
                                                information.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 13 */}
                                <div className='flex mb-2'>
                                    <p>13.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Lunsford Act
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider also acknowledges that G.S. § 14-208.18
                                                prohibits anyone required to register as a sex
                                                offender under Article 27A of Chapter 14 of the
                                                General Statutes from knowingly being on the premises
                                                of any school. Provider shall conduct or arrange to
                                                have conducted, at its own expense, sexual offender
                                                registry checks on each of its owners, employees,
                                                agents, subcontractors and independent contractors
                                                (“Contractual Personnel”) who will engage in any
                                                service on or delivery of goods to School System
                                                property or at a School System sponsored event, except
                                                checks shall not be required for individuals who are
                                                solely delivering or picking up equipment, materials,
                                                or supplies at: (1) the administrative office or
                                                loading dock of a school; (2) non-school sites; (3)
                                                schools closed for renovation; or (4) school
                                                construction sites. The checks shall include at a
                                                minimum checks of the State Sex Offender and Public
                                                Protection Registration Program, the State Sexually
                                                Violent Predator Registration Program, and the
                                                National Sex Offender Registry (“the Registries”). For
                                                Provider’s convenience only, all of the required
                                                registry checks may be completed at no cost by
                                                accessing the United States Department of Justice Sex
                                                Offender Public Website at{" "}
                                                <em className='text-blue-500'>
                                                    http://www.nsopw.gov/
                                                </em>
                                                . Provider shall provide certification on the Sexual
                                                Offender Registry Check Certification Form (Exhibit B)
                                                that the registry checks were conducted on each of its
                                                Contractual Personnel providing services or delivering
                                                goods under this Contract prior to the commencement of
                                                such services or the delivery of such goods. Provider
                                                shall conduct a current initial check of the
                                                registries. The sex offender registry checks shall be
                                                conducted within 30 days of Provider’s execution of
                                                the Contract and prior to performing any services on
                                                School System property. In addition, Provider agrees
                                                to conduct the registry checks and provide a
                                                supplemental certification form before any additional
                                                Contractual Personnel are used to deliver goods or
                                                provide services pursuant to this Contract. Provider
                                                further agrees to conduct annual registry checks of
                                                all Contractual Personnel and provide annual
                                                certifications at each anniversary date of this
                                                Contract. Provider shall not assign any individual to
                                                deliver goods or provide services pursuant to this
                                                Contract if said individual appears on any of the
                                                listed registries. Provider agrees that it will
                                                maintain all records and documents necessary to
                                                demonstrate that it has conducted a thorough check of
                                                the registries as to each Contractual Personnel, and
                                                agrees to provide such records and documents to the
                                                School System upon request. Provider specifically
                                                acknowledges that the School System retains the right
                                                to audit these records to ensure compliance with this
                                                section at any time in the School System’s sole
                                                discretion. Failure to comply with the terms of this
                                                provision shall be deemed a material breach of the
                                                Contract.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 14 */}
                                <div className='flex mb-2'>
                                    <p>14.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Criminal Background Checks
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider shall conduct criminal record and background
                                                checks on all Contractual Personnel who will perform
                                                services pursuant to this Contract on School System
                                                property or at School System events. The criminal
                                                background checks shall be conducted within 30 days of
                                                Provider’s execution of the Contract and prior to
                                                performing any services on School System property.
                                                Provider shall provide the results of said checks to
                                                School System within five (5) business days of receipt
                                                and shall not assign any Contractual Personnel to
                                                provide services under the Contract if said worker has
                                                been convicted of or pled nolo contendre to (1) any
                                                felony; (2) any crime, whether misdemeanor or felony,
                                                involving violence, illegal drugs, theft, child abuse,
                                                sexual harassment, sexual abuse, or personal
                                                impropriety of a sexual nature with regard to any
                                                other person; or (3) any other crime or conduct
                                                reasonably indicating that the Contractual Personnel
                                                poses a threat to the safety or well-being of School
                                                System’s students, personnel, or property. In
                                                addition, Provider shall obtain all authorizations
                                                necessary for School System to conduct additional
                                                criminal record and background checks at its sole
                                                expense at any time during the term of this Contract.
                                                If School System chooses to exercise this right,
                                                Provider shall, within five (5) business days of
                                                School System’s request, provide the full name, date
                                                of birth, and state of residency for the past ten
                                                years for all Contractual Personnel providing services
                                                under the Contract, along with any other information
                                                reasonably requested by School System for purposes of
                                                performing criminal record and background checks.
                                                Without modifying or waiving any of Provider’s
                                                obligations under this provision, School System
                                                reserves the right to prohibit any Contractual
                                                Personnel from providing services under this Contract
                                                if the School System determines, in its sole
                                                discretion, that said Contractual Personnel has not
                                                undergone a criminal record and background check in
                                                accordance with this provision or if the results of
                                                such criminal record and background check reasonably
                                                indicate that the said Contractual Personnel may pose
                                                a threat to the safety or well-being of students,
                                                school personnel, or others.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 15 */}
                                <div className='flex mb-2'>
                                    <p>15.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Indemnification
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider shall indemnify and hold harmless the School
                                                System and its agents and employees from and against
                                                all claims, actions, demands, costs, damages, losses,
                                                and/or expenses of any kind whatsoever proximately
                                                resulting from the omission or commission of any act,
                                                lawful or unlawful, by Provider or its agents and/or
                                                employees in providing services pursuant to this
                                                Contract, including but not limited to court costs and
                                                attorney’s fees. The parties agree that this
                                                indemnification clause is an “evidence of
                                                indebtedness” for purpose of N. C. Gen. Stat. §
                                                6-21.2.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 16 */}
                                <div className='flex mb-2'>
                                    <p>16.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Relationship of Parties
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider shall be an independent contractor of the
                                                School System, and nothing herein shall be construed
                                                as creating a partnership or joint venture; nor shall
                                                any employee of Provider be construed as an employee,
                                                agent, or principal of the School System.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 17 */}
                                <div className='flex mb-2'>
                                    <p>17.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Compliance with Applicable Laws
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider shall comply with all applicable laws and
                                                regulations in providing services under this Contract.
                                                In particular, Provider shall not employ any
                                                individuals to provide services to the School System
                                                who are not authorized by federal law to work in the
                                                United States. Provider represents and warrants that
                                                it is aware of and in compliance with the Immigration
                                                Reform and Control Act and North Carolina law (Article
                                                2 of Chapter 64 of the North Carolina General
                                                Statutes) requiring use of the E-Verify system for
                                                employers who employ twenty-five (25) or more
                                                employees and that it is and will remain in compliance
                                                with these laws at all times while providing services
                                                pursuant to this Contract. Provider shall also ensure
                                                that any of its subcontractors (of any tier) will
                                                remain in compliance with these laws at all times
                                                while providing subcontracted services in connection
                                                with this Contract. Provider is responsible for
                                                providing affordable health care coverage to all of
                                                its full-time employees providing services to the
                                                School System. The definitions of “affordable
                                                coverage” and “full-time employee” are governed by the
                                                Affordable Care Act and accompanying IRS and Treasury
                                                Department regulations.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 18 */}
                                <div className='flex mb-2'>
                                    <p>18.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Restricted Companies List
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider represents that as of the date of this
                                                Contract, Provider is not included on the Final
                                                Divestment List created by the North Carolina State
                                                Treasurer pursuant to N.C. Gen. Stat. § 147-86.58.
                                                Provider also represents that as of the date of this
                                                Contract, Provider is not included on the list of
                                                restricted companies determined to be engaged in a
                                                boycott of Israel created by the North Carolina State
                                                Treasurer pursuant to N.C. Gen. Stat. § 147-86.81.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 19 */}
                                <div className='flex mb-2'>
                                    <p>19.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Anti-Nepotism
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider warrants that, to the best of its knowledge
                                                and in the exercise of due diligence, none of its
                                                corporate officers, directors, or trustees and none of
                                                its employees who will directly provide services under
                                                this Contract are immediate family members of any
                                                member of the Durham Public Schools Board of Education
                                                or of any principal or central office staff
                                                administrator employed by the School System. For
                                                purposes of this provision, “immediate family” means
                                                spouse, parent, child, brother, sister, grandparent,
                                                or grandchild, and includes step, half, and in-law
                                                relationships. Should Provider become aware of any
                                                family relationship covered by this provision or
                                                should such a family relationship arise at any time
                                                during the term of this Contract, Provider shall
                                                immediately disclose the family relationship in
                                                writing to the Superintendent of Schools. Unless
                                                formally waived by the School System, the existence of
                                                a family relationship covered by this Contract is
                                                grounds for immediate termination by School System
                                                without further financial liability to Provider.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 20 */}
                                <div className='flex mb-2'>
                                    <p>20.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Applicable School Board of Education Policies
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider acknowledges that the Durham Public Schools
                                                Board of Education has adopted policies governing
                                                conduct on School System property and agrees to abide
                                                by any and all relevant Board policies while on School
                                                System property. The Provider acknowledges that
                                                Board’s policies are available on the School System’s
                                                website.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 21 */}
                                <div className='flex mb-2'>
                                    <p>21.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Assignment
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                Provider shall not assign, subcontract, or otherwise
                                                transfer any interest in this contract without the
                                                prior written approval of the School System.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 22 */}
                                <div className='flex mb-2'>
                                    <p>22.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Contract Modifications
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                This contract may be amended only by written
                                                amendments duly executed by and between the School
                                                System and Provider.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 23 */}
                                <div className='flex mb-2'>
                                    <p>23.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                North Carolina Law
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                North Carolina law will govern the interpretation and
                                                construction of the Contract.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 24 */}
                                <div className='flex mb-2'>
                                    <p>24.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Order of Precedence
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                The Parties do hereby agree that in the event of
                                                conflict between the terms and conditions of this
                                                Contract and the terms and conditions in an agreement
                                                entered into between the parties at the same time as
                                                or prior to this Contract, the terms and conditions of
                                                this Contract shall prevail.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 25 */}
                                <div className='flex mb-2'>
                                    <p>25.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Entire Agreement
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                This Contract, including the purchase order, if any,
                                                used in connection herewith and any other document(s)
                                                expressly incorporated by reference as a part of this
                                                Contract, constitutes and expresses the entire
                                                agreement and understanding between the parties
                                                concerning its subject matter. This Contract
                                                supersedes all prior and contemporaneous discussions,
                                                promises, representations, agreements and
                                                understandings relative to the subject matter of this
                                                contract. To the extent there may be any conflict
                                                between the four corners of this Contract and other
                                                documents incorporated by reference herein, the terms
                                                of this Contract will control.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 26 */}
                                <div>
                                    <div className='flex mb-2'>
                                        <p>26.</p>
                                        <div className=' ml-7'>
                                            <p className='text-justify'>
                                                <span className='underline underline-offset-2'>
                                                    Attached Exhibition
                                                </span>
                                                .{" "}
                                                <span className='ml-1'>
                                                    {" "}
                                                    The following document, if any, are attached as
                                                    Exhibit to this Contract and incorporated by
                                                    reference herein:
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className='ml-5 mb-2'>
                                        Exhibit A: Sexual Registry Check Certification Form
                                    </p>
                                </div>

                                {/* 27 */}
                                <div className='flex mb-2'>
                                    <p>27.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Severability
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                If any provision of this Contract shall be declared
                                                invalid or unenforceable, the remainder of the
                                                Contract shall continue in full force and effect.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 28 */}
                                <div className='flex mb-2'>
                                    <p>28.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Counterparts and Execution
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                This Contract may be executed in any number of
                                                counterparts, each of which will be deemed an original
                                                but all of which together will constitute one and the
                                                same instrument. The Parties agree that computer
                                                scanned and/or faxed signatures or copies of this
                                                Contract will have the same validity and force as an
                                                “original.”
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* 29 */}
                                <div className='flex mb-2'>
                                    <p>29.</p>
                                    <div className=' ml-7'>
                                        <p className='text-justify'>
                                            <span className='underline underline-offset-2'>
                                                Authority to Enter Contract
                                            </span>
                                            .{" "}
                                            <span className='ml-1'>
                                                {" "}
                                                The person(s) executing this Contract on behalf of
                                                Provider have authority to do so as an official,
                                                binding act of Provider.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* React pdf */}
                                {/* <div className='text-center w-full text-red-500 text-base'>
                    <Document file={pdfFile}>
                      <Page pageNumber={3} />
                    </Document>
                  </div> */}
                            </div>

                            {/* Bottom of page5 to page6 */}
                            <div>
                                <p className='mt-2 mb-3'>
                                    IN WITNESS WHEREOF, the parties have hereunto set their
                                    hands and seals the day and year first indicated above.
                                </p>

                                <div className='grid grid-cols-2'>
                                    <div className=' overflow-x-hidden'>
                                        <div className='mb-8'>
                                            <h1 className='font-bold'>DURHAM PUBLIC SCHOOLS</h1>
                                            <h1 className='font-bold'>BOARD OF EDUCATION</h1>
                                        </div>
                                        <p className='mb-0'>
                                            __________________________________________
                                        </p>
                                        <span className=''>{!durham_profile ? '' : durham_profile.chair_board_education}</span>
                                    </div>
                                    <div className=' overflow-x-hidden'>
                                        <div className='mb-[56px]'>
                                            <h1 className='font-bold'>PROVIDER</h1>
                                            <p></p>
                                        </div>
                                        <p className='mb-0'>
                                            __________________________________________
                                        </p>
                                        <span>Authorized Signature</span>
                                    </div>
                                </div>

                                <div className='my-3'>
                                    <div className='mb-5'>
                                        <h1>ATTEST:</h1>
                                    </div>
                                    <p className='mb-0'>
                                        __________________________________________
                                    </p>
                                    <span>Superintendent</span>
                                </div>

                                <p>
                                    This instrument has been pre-audited in the manner required
                                    by the School Budget and Fiscal Control Act
                                </p>

                                <div className='grid grid-cols-2 mt-4'>
                                    <div>
                                        <p className='mb-0'>
                                            _____________________
                                            <span className=''>{!durham_profile ? '' : durham_profile.chief_finance_officer}</span>
                                            _____________________
                                        </p>
                                        <span>School System Finance Officer </span>
                                    </div>
                                    <div>
                                        <p className='mb-0'>
                                            _____<span className=''>{moment(form_fields.signedDate).format(" MMMM Do YYYY ")}</span>_____
                                        </p>
                                        <span>Date</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pages7 */}

                            <div>
                                <p className='font-bold mb-4'>Exhibit A</p>
                                <p className='font-bold mb-4'>
                                    Sexual Offender Registry Check Certification Form
                                </p>
                                <p className='font-bold mb-3'>
                                    <em>
                                        PLEASE SUBMIT THIS FORM TO YOUR SCHOOL SYSTEM’S
                                        REPRESENTATIVE
                                    </em>
                                </p>
                                <p className='mb-4'>
                                    <span>Project Name:</span> _____________
                                    <span className=''>
                                        {!project ? '' : project.name}
                                    </span> ________________ <span> Project No:</span>{" "}
                                    _____________
                                    <span className=''>{!project ? '' : project.number}
                                    </span>
                                    ________________
                                </p>
                                <p className='mb-3'>
                                    Check the appropriate box to indicate the type of check:
                                </p>
                                <div className='flex justify-between mb-4'>
                                    <div className='flex items-center mb-5'>
                                        <input
                                            id='default-radio-1'
                                            type='radio'
                                            value='Initial'
                                            name='type'
                                            checked={form_fields.type === 'Initial'? true: false}
                                            readOnly
                                            className='w-6 h-6 text-gray-600 bg-gray-100 border-gray-300'
                                        />
                                        <label
                                            for='default-radio-1'
                                            className='ml-2 text-base text-gray-900'
                                        >
                                            Initial
                                        </label>
                                    </div>
                                    <div className='flex items-center mb-5'>
                                        <input
                                            id='default-radio-1'
                                            type='radio'
                                            value='Supplimental'
                                            name='type'
                                            checked={form_fields.type === 'Supplemental'? true: false}
                                            readOnly
                                            className='w-6 h-6 text-gray-600 bg-gray-100 border-gray-300'
                                        />
                                        <label
                                            for='default-radio-1'
                                            className='ml-2 text-base text-gray-900'
                                        >
                                            Supplimental
                                        </label>
                                    </div>
                                    <div className='flex items-center mb-5'>
                                        <input
                                            id='default-radio-1'
                                            type='radio'
                                            value='Annual'
                                            name='type'
                                            checked={form_fields.type === 'Annual'? true: false}

                                            className='w-6 h-6 text-gray-600 bg-gray-100 border-gray-300'
                                        />
                                        <label
                                            for='default-radio-1'
                                            className='ml-2 text-base text-gray-900'
                                        >
                                            Annual
                                        </label>
                                    </div>
                    
                                    <p></p>
                                </div>
                                <p className='text-justify mb-4'>
                                    I, <span className=''>{!vendors ? '' : vendors[0].first_name.toUpperCase() + ' ' + vendors[0].last_name.toUpperCase()}</span>, { " "}  
                                     <span className=''> {!vendors ? '' : vendors[0].title.toUpperCase()}</span> of {" "}
                                    <span className=''>{!vendors ? '' : vendors[0].company_name.toUpperCase()}</span> hereby certify that I have performed
                                    all of the required sexual offender registry checks required
                                    under this Contract for all Contractual Personnel
                                    (employees, agents, ownership personnel, or contractors )
                                    who may be used to deliver goods or provide services under
                                    this Contract, including the North Carolina Sex Offender and
                                    Public Protection Registration Program, the North Carolina
                                    Sexually Violent Predator Registration Program, and the
                                    National Sex Offender Registry (
                                    <span className='text-red-500'>
                                        Note: all of the required registry checks may be completed
                                        at no cost by accessing the United States Department of
                                        Justice Sex Offender Public Website at
                                    </span>{" "}
                                    <em className='text-blue-500'>http://www.nsopw.gov/</em>). I
                                    further certify that none of the individuals listed below
                                    appears on any of the above-named registries and that I will
                                    not assign any individual to deliver goods or perform
                                    services under this Contract if said individual appears on
                                    any of the sex offender registries. I agree to maintain all
                                    records and documents associated with these registry checks,
                                    and that I will provide such records and documents to the
                                    school system upon request. I specifically acknowledge that
                                    the school system retains the right to audit these records
                                    to ensure compliance with this section at any time in the
                                    school system’s sole discretion. I acknowledge that I am
                                    required to perform these checks and provide this
                                    certification form before any work is performed under the
                                    Contract (initial check), any time additional Contractual
                                    Personnel may perform work under the Contract (supplemental
                                    check), and at each anniversary date of the Contract (annual
                                    check).
                                </p>

                                <div className='flex justify-between mb-3'>
                                    <div>
                                        <p className='font-bold mb-3'>
                                            Contractual Personnel Names
                                        </p>
                                        <p className=' mb-3'>
                                            <span className='mr-3'>1.</span>
                                            <span>___________________________________</span>
                                        </p>
                                        <p className=' mb-3'>
                                            <span className='mr-3'>2.</span>
                                            <span>___________________________________</span>
                                        </p>
                                        <p className=' mb-3'>
                                            <span className='mr-3'>3.</span>
                                            <span>___________________________________</span>
                                        </p>
                                        <p className=' mb-3'>
                                            <span className='mr-3'>4.</span>
                                            <span>___________________________________</span>
                                        </p>

                                        <p className=' mb-3'>
                                            <span className='mr-3'>5.</span>
                                            <span>___________________________________</span>
                                        </p>
                                        <p className=' mb-3'>
                                            <span className='mr-3'>1.</span>
                                            <span>___________________________________</span>
                                        </p>
                                        <p className=' mb-3'>
                                            <span className='mr-3'>6.</span>
                                            <span>___________________________________</span>
                                        </p>
                                        <p className=''>
                                            <span className='mr-3'>7.</span>
                                            <span>___________________________________</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='font-bold mb-3'>Job Title</p>
                                        <p className=' mb-3'>
                                            ___________________________________
                                        </p>
                                        <p className=' mb-3'>
                                            ___________________________________
                                        </p>
                                        <p className=' mb-3'>
                                            ___________________________________
                                        </p>
                                        <p className=' mb-3'>
                                            ___________________________________
                                        </p>
                                        <p className=' mb-3'>
                                            ___________________________________
                                        </p>
                                        <p className=' mb-3'>
                                            ___________________________________
                                        </p>
                                        <p className=' mb-3'>
                                            ___________________________________
                                        </p>
                                        <p className=''>___________________________________</p>
                                    </div>
                                    <div></div>
                                </div>

                                <p className='mb-4'>
                                    I attest that the forgoing information is true and accurate
                                    to the best of my knowledge.
                                </p>

                                <p className='mb-4'>
                                <span className=''>{!vendors ? '' : vendors[0].first_name.toUpperCase() + " " + vendors[0].last_name.toUpperCase()}</span>
                                </p>
                                <p className='mb-8'>
        _____________________________________________  (signature / date)
                                </p>

                                <small className='text-[11px]'>R2468186</small>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-end gap-4 pr-6 pb-4'>
                        <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={() => dispatch(prevChoiceStep(2))} />
                        <DashboardButton
                            hidden
                            name='CREATE DOCUMENT'
                            type='button'
                            width='w-[198px]'
                            onClick={()=> dispatch(showDownload())}
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
