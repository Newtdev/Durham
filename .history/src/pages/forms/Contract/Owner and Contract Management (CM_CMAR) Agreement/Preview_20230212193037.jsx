import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import DownLoadForm from "../../Lundsford/Download";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";

const Preview = () => {
    const show = useSelector(openDownload);
    const dispatch = useDispatch()
    const downloadComponent = useRef();
    const props = {
        component: downloadComponent,
        name: 'Owner and Contract Management (CM & CMAR) Agreement',
        show: show ? 'block' : 'hidden',
        stepDefault: stepDefault
    }

    return (
        <div>
            <DownLoadForm {...props} />

                <div>
                    {/* Modal content */}
                <div className={`${show ? "hidden" : "block"} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
                        {/* Header */}
                        <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
                            <div className='ml-6'>
                                <h3 className='text-lg font-bold text-gray-900'>
                                    Owner and Contract Management (CM_CMAR) Agreement
                                </h3>
                                <p className='text-base text-gray-700'>Preview Document</p>
                            </div>
                        <button
                            onClick={() => dispatch(closeModal())}
                                type='button'
                                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                                data-modal-toggle='small-modal'
                            >
                            <Close />
                            </button>
                        </div>

                        <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
                            <div className='px-20 pt-8 pb-4 text-black'>
                                <div>
                                    {/* Page 1 */}
                                    <div className='mb-52'>
                                        <div className='text-center font-bold mb-6'>
                                            <p>Agreement Between</p>
                                            <p>Owner and Construction Manager at Risk</p>
                                        </div>

                                        <div>
                                            <p>AGREEMENT</p>
                                            <p className='mb-4'>
                                                Made this <span className='bg-yellow-500'>F1</span> day
                                                of
                                                <span className='bg-yellow-500'>F2</span> in the year of
                                                Two Thousand and{" "}
                                                <span className='bg-yellow-500'>F3</span>
                                            </p>

                                            <p className='mb-3'>
                                                BETWEEN The Owner: Durham Public Schools Board of
                                                Education
                                            </p>
                                            <p className='mb-3'>
                                                And the Construction Manager (hereinafter referred to as
                                                the “CM”): <span className='bg-yellow-500'>F4</span>
                                            </p>
                                            <p className='mb-0'>
                                                For services in connection with the Project known as:
                                            </p>
                                            <p className='mb-3'>
                                                <span className='bg-yellow-500'>F5</span>
                                            </p>
                                            <p className='mb-3'>
                                                <span className='p-1 bg-pink-300 rounded-lg'>
                                                    As further described in Article 2:
                                                </span>
                                            </p>
                                            <p className='mb-3'>
                                                <span className='bg-yellow-500'>F6</span>
                                            </p>
                                            <p className='mb-3'>Design Consultant:</p>
                                            <p className='mb-5'>
                                                <span className='bg-yellow-500'>F7</span>
                                            </p>
                                            <p>
                                                The Owner and CM, in consideration of their mutual
                                                covenants herein, agree as set forth below:
                                            </p>
                                        </div>
                                    </div>

                                    {/* Page 4 */}
                                    <div className='mb-20'>
                                        {/* Article 2 */}
                                        <div className='mb-8'>
                                            <div className='text-center'>
                                                <p className='font-bold'>ARTICLE 2</p>
                                                <p>PROJECT DEFINITION</p>
                                                <p className='w-64 h-[2px] my-4 m-auto bg-black'></p>
                                            </div>

                                            <div>
                                                <p className='mb-4 text-justify'>
                                                    <span className='ml-12'>The</span> term “Project” when
                                                    used in the Agreement shall mean the total
                                                    construction of which the Work may be a whole or part
                                                    of the Project. The term “Work” required for the
                                                    “Project” used in this Agreement shall mean the
                                                    various parts of total construction to be performed
                                                    under this Agreement.
                                                </p>

                                                <div className='ml-12'>
                                                    <p>The Project name and locations are as follows:</p>
                                                    <p className='mb-4'>
                                                        <span className='bg-yellow-500'>F8</span>
                                                    </p>
                                                    <p className='mb-4'>
                                                        The Project is intended for use as:
                                                    </p>
                                                    <p>
                                                        <span className='bg-yellow-500'>F9</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Article 3 */}
                                        <div>
                                            <div className='text-center'>
                                                <p className='font-bold'>ARTICLE 3</p>
                                                <p>CONSTRUCTION MANAGER’S BASIC SERVICES</p>
                                                <p className='w-64 h-[2px] my-4 m-auto bg-black'></p>
                                            </div>

                                            <div>
                                                <div className='flex gap-8 mb-3'>
                                                    <p>3.1</p>
                                                    <p>CM Basic Services</p>
                                                </div>

                                                <p className='mb-3 text-justify'>
                                                    <span className='ml-[3.5rem]'>The</span> CM shall
                                                    perform the Basic Services described herein. It is not
                                                    required that the Basic Services be performed in the
                                                    sequence in which they are described.
                                                </p>

                                                <div className='flex gap-8 mb-3'>
                                                    <p>3.2</p>
                                                    <p>Design Phase - Project Management</p>
                                                </div>

                                                <div className='flex gap-[1.2rem] mb-3'>
                                                    <p>3.2.1</p>
                                                    <p>Project Management</p>
                                                </div>

                                                <div className='flex gap-[0.4rem] mb-3'>
                                                    <p>3.2.1.1</p>
                                                    <p>Construction Management Plan</p>
                                                </div>

                                                <p className='mb-3 text-justify'>
                                                    <span className='ml-[3.5rem]'>The</span> CM shall
                                                    prepare a Construction Management Plan for the Project
                                                    within the time mutually established by the Owner and
                                                    CM and shall make recommendations for revisions to the
                                                    plan throughout the duration of the Project, as may be
                                                    appropriate. In preparing the Construction Management
                                                    Plan, the CM shall consider the Owner’s schedule,
                                                    budget, and design requirements for the Project. The
                                                    CM shall then develop various alternatives for the
                                                    sequencing and management of the Project and shall
                                                    make recommendations to the Owner. The Construction
                                                    Management Plan shall also include a description of
                                                    the various bid packages recommended for the Project.
                                                    The Construction Management Plan shall be presented to
                                                    the Owner for acceptance. The CM shall develop a
                                                    Master Schedule for the Project. The CM shall
                                                    determine the appropriate bid packages based on the
                                                    available resources. The CM shall familiarize itself
                                                    with all available Project funding and work with the
                                                    Owner and Design Consultant to maximize the scope and
                                                    quality of the Project based upon the available funds.
                                                    The CM shall make recommendations regarding
                                                    communication among the parties in an effort to ensure
                                                    the prompt and proper flow of Project information. The
                                                    CM shall outline its plan for minority business
                                                    enterprise participation goals required by state law
                                                    and the Owner, including reporting all information
                                                    required by state law on behalf of the Owner to the
                                                    North Carolina Department of Administration, Office of
                                                    Historically Underutilized Businesses. The CM shall
                                                    include a Project safety plan covering all critical
                                                    areas of the Project.
                                                </p>

                                                <div className='flex gap-[1.2rem] mb-3'>
                                                    <p>3.2.2</p>
                                                    <p>Time Management</p>
                                                </div>

                                                <div className='flex gap-[0.4rem] mb-3'>
                                                    <p>3.2.2.1</p>
                                                    <p>Master Schedule</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Page 22 */}
                                    <div className='mb-20'>
                                        {/* Article 4 */}
                                        <div>
                                            <div className='text-center'>
                                                <p className='font-bold'>ARTICLE 4</p>
                                                <p>DURATION OF THE CONSTRUCTION MANAGER’S SERVICES</p>
                                                <p className='w-64 h-[2px] my-4 m-auto bg-black'></p>
                                            </div>

                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>4.1</span>The duration of the
                                                    CM’s Basic services under this Agreement shall be from
                                                    the date of this Agreement through the issuance of
                                                    final payment. The CM shall provide any warranty phase
                                                    services at no additional cost to the Owner.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>4.1.1</span>The
                                                    commencement date for the CM’s Basic Services shall be
                                                    the date of execution of this Agreement by the Owner
                                                    as stated herein or the date on which the Owner issues
                                                    to the CM a written instruction to proceed with Basic
                                                    Services, whichever is earlier.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>4.1.2</span>The CM’s
                                                    Basic Services shall be performed for the periods of
                                                    time indicated in this Agreement. If portions of
                                                    design and construction occur simultaneously, some of
                                                    the phase durations may overlap.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>4.1.2.1</span>The CM’s
                                                    Basic Services during the Pre-Design Phase shall be
                                                    performed as required during the pre-design phase.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>4.1.2.2</span>The CM’s
                                                    Basic Services during the Design Phase shall be
                                                    performed as required during the design phase.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>4.1.2.3</span>The CM’s
                                                    Basic Services during the Procurement Phase shall be
                                                    performed as required during the procurement phase.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>4.1.2.4</span>The CM
                                                    shall achieve substantial completion of the Project on
                                                    or before <span className='bg-yellow-500'>F10</span>,
                                                    unless the Owner and CM agree to a different date in
                                                    writing. The date for final completion shall be thirty
                                                    (30) days after substantial completion.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>4.2</span> Delays and
                                                    Extensions of Time
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>4.2.1</span>The time
                                                    during which the CM or any of the contractors is
                                                    delayed in the performance of the work by the issuance
                                                    of any required permits, acts of god, excessive
                                                    inclement weather, fires, floods, epidemics,
                                                    quarantine restrictions, strikes, riots, civil
                                                    commotions or freight embargoes, or other conditions
                                                    beyond the CM’s or the contractors’ control and which
                                                    the CM or the contractors could not reasonably have
                                                    foreseen and provided against, except for delays
                                                    caused solely by the Owner, Design Consultant or their
                                                    consultants, shall be added to the time for completion
                                                    of the work stated in the Agreement. Neither the Owner
                                                    nor the Design Consultant shall be obligated or liable
                                                    to the CM or the contractors for indirect or direct
                                                    damages, costs or expenses of any nature which the CM,
                                                    the contractors, or any other person may incur as a
                                                    result of any of the delays, interferences, or changes
                                                    in sequence in the work included in this section
                                                    4.2.1. The CM hereby expressly waives any claims
                                                    against the Owner and the Design Consultant on account
                                                    of any indirect or direct damages, lost profits, costs
                                                    or expenses of any nature which the CM, the
                                                    contractors or any other person may incur as a result
                                                    of any delays, interferences, changes in sequence or
                                                    the like, and it is understood and agreed that the
                                                    CM’s sole and exclusive remedy in any such events
                                                    shall be an extension of the contract time in
                                                    accordance with the contract documents
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>4.2.2</span>In the event
                                                    Project delays arise from or out of any act or
                                                    omission of the Owner, Design Consultant or their
                                                    consultants, the time during which the Project is
                                                    delayed shall be added to the Agreement and the
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Page 32 */}
                                    <div className='mb-20'>
                                        <div>
                                            <p className='mb-3 text-justify'>
                                                <span className='mr-8'>6.12</span>The Owner shall
                                                furnish evidence satisfactory to the CM that sufficient
                                                funds are available and committed for the entire cost of
                                                the Project. The Owner may authorize the CM to proceed
                                                with the work on the Project in discrete phases if all
                                                of the funds required for the entire Project are not
                                                identified at the time this Agreement is executed by the
                                                parties.
                                            </p>

                                            <p className='mb-3 text-justify'>
                                                <span className='mr-8'>6.13</span>The Owner, its
                                                representatives and consultants, including Design
                                                Consultants, shall endeavor to communicate with the
                                                Contractors only through the CM.
                                            </p>

                                            <p className='mb-3 text-justify'>
                                                <span className='mr-8'>6.14</span>The Owner shall send
                                                to the CM and shall require the Design Consultant to
                                                send the CM copies of all notices and communications
                                                sent to or received by the Owner or Design Consultant
                                                relating to the Project.
                                            </p>

                                            <p className='mb-3 text-justify'>
                                                <span className='mr-8'>6.15</span>The Owner shall
                                                designate, in writing, an officer, employee or other
                                                authorized representatives to act in the Owner’s behalf
                                                with respect to the Project. This representative shall
                                                be available during working hours and as often as may be
                                                required to render decisions and furnish information so
                                                as not to delay the Project. The CM acknowledges that
                                                some changes in the scope of the Project may require
                                                approval by the Board of Education. The CM shall notify
                                                the Owner in writing of any deadlines for responses and
                                                how the Owner’s failure to respond by the stated
                                                deadline will impact the Project schedule.
                                            </p>

                                            <p className='mb-3 text-justify'>
                                                <span className='mr-8'>6.16</span>The Owner shall make
                                                payments to the CM on the basis of the Contractors’
                                                payment applications that are certified by the CM and on
                                                the basis of the CM’s invoices for its services
                                                performed. Prior to payment by the Owner, the Design
                                                Consultant shall review and approve the contractors’ pay
                                                applications in accordance with Paragraphs 3.5.3.5 and
                                                3.5.3.6.
                                            </p>
                                        </div>

                                        {/* Article 7 */}
                                        <div>
                                            <div className='text-center'>
                                                <p className='font-bold'>ARTICLE 7</p>
                                                <p>COMPENSATION FOR CM SERVICES AND PAYMENT</p>
                                                <p className='w-64 h-[2px] my-4 m-auto bg-black'></p>
                                            </div>

                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>7.1</span>Guaranteed Maximum
                                                    Price
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.1.1</span>The Owner
                                                    and CM agree that the Guaranteed Maximum Price shall
                                                    be <span className='bg-yellow-500'>F11</span> dollars
                                                    ($<span className='bg-yellow-500'>F12</span>) for this
                                                    Project. The parties further agree that in the event
                                                    the bids received by the CM for the work, including
                                                    all of the alternates accepted by the Owner, pursuant
                                                    to Article 3.4 of this Agreement exceed the line item
                                                    in the GMP for the cost of the work, the CM shall be
                                                    solely responsible for the additional cost of the
                                                    work, unless this Agreement is terminated by the CM
                                                    pursuant to Paragraph 7.1.1.1. In the event that the
                                                    bids received by the CM for the work, including all
                                                    alternatives accepted by the Owner, are less than the
                                                    line item in the GMP for the cost of the work, the
                                                    remaining funds shall be added to the Owner’s
                                                    contingency. The scope of work included in the bid
                                                    documents, including any alternates accepted by the
                                                    Owner, shall form the basis of the work to be
                                                    performed by the CM. The CM and Owner agree that the
                                                    line items in the GMP shall consist of the cost of the
                                                    work, CM’s contingency, and general conditions, CM’s
                                                    fee. The CM and Owner further agree that the dollar
                                                    values for the line items in the GMP stated above
                                                    consist of the:
                                                </p>

                                                <div className='border border-black w-[500px] m-auto'>
                                                    <div className='flex border-b border-b-black'>
                                                        <p className='p-1 w-[70%] border-r border-r-black'>
                                                            Cost of Work
                                                        </p>
                                                        <p className='p-1'>
                                                            $<span className='bg-yellow-500'>F13</span>
                                                        </p>
                                                    </div>
                                                    <div className='flex border-b border-b-black'>
                                                        <p className='p-1 w-[70%] border-r border-r-black'>
                                                            CM construction contingency
                                                        </p>
                                                        <p className='p-1'>
                                                            $<span className='bg-yellow-500'>F14</span>
                                                        </p>
                                                    </div>
                                                    <div className='flex border-b border-b-black'>
                                                        <p className='p-1 w-[70%] border-r border-r-black'>
                                                            General Conditions
                                                        </p>
                                                        <p className='p-1'>
                                                            $<span className='bg-yellow-500'>F15</span>
                                                        </p>
                                                    </div>
                                                    <div className='flex border-b border-b-black'>
                                                        <p className='p-1 w-[70%] border-r border-r-black'>
                                                            CM’s fee for preconstruction services
                                                        </p>
                                                        <p className='p-1'>
                                                            $<span className='bg-yellow-500'>F16</span>
                                                        </p>
                                                    </div>
                                                    <div className='flex border-b border-b-black'>
                                                        <p className='p-1 w-[70%] border-r border-r-black'>
                                                            Construction and post-construction services
                                                        </p>
                                                        <p className='p-1'>
                                                            $<span className='bg-yellow-500'>F17</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.1.1</span>The
                                                    parties agree that in the event the bids received by
                                                    the CM for the work, including all of the alternates
                                                    accepted by the Owner, pursuant to Article 3.4 of this
                                                    Agreement exceed the line item in the GMP for the cost
                                                    of the work, then the CM shall have the right to
                                                    terminate this Agreement. The CM shall provide the
                                                    Owner with notice of intent to terminate pursuant to
                                                    this provision within fifteen (15) days of the CM’s
                                                    receipt of bids for the Project. Prior to a
                                                    termination pursuant to this provision becoming
                                                    effective, the Owner and CM will review the list of
                                                    alternates, other modifications or value engineering
                                                    requests in order to determine whether an Agreement
                                                    can be reached between the Owner and CM regarding a
                                                    modified scope of
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pages 36 to 38 */}
                                    <div className='mb-20'>
                                        <div>
                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.3.3</span>Should
                                                    concealed or unknown physical conditions be
                                                    encountered that differ materially from those
                                                    identified in the drawings or specifications, the
                                                    Guaranteed Maximum Price may be adjusted by change
                                                    order in accordance with Paragraph 5.2.2.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.3.4</span>The Design
                                                    Consultant shall have the authority to order minor
                                                    changes in the Project consistent with the intent of
                                                    the drawings and specifications and not involving an
                                                    adjustment in the Guaranteed Maximum Price or change
                                                    of the construction completion date. Such changes may
                                                    be affected by written order only and shall be signed
                                                    by the Owner and the CM prior to the work being
                                                    performed.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.3.5</span>In the
                                                    event that the bids for the construction of the
                                                    Project are less than the line item(s) in the GMP for
                                                    the construction of the Project, the GMP shall be
                                                    reduced dollar for dollar to reflect the savings. The
                                                    parties agree that any savings based upon the receipt
                                                    of bids shall be retained solely by the Owner.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.1.4</span>Unused Funds
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.4.1</span>In the
                                                    event that there are any funds remaining in any
                                                    contingency, those funds shall be retained solely by
                                                    the Owner.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.4.2</span>In the
                                                    event that all of the funds allocated for the CM’s
                                                    general conditions are not used, the Owner shall
                                                    retain all of those funds.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.4.3</span>In the
                                                    event that there are unused allowances or other cost
                                                    of work funds, all of those funds, plus the associated
                                                    CM fee, shall be retained by the Owner.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.1.4.4</span>In the
                                                    event that the bids for the construction of the
                                                    Project are less than the line item(s) in the GMP for
                                                    the construction of the Project, the Owner’s
                                                    contingency shall be increased dollar for dollar to
                                                    reflect the savings. The parties agree that any
                                                    savings based upon the receipt of bids shall be
                                                    retained solely by the Owner
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>7.4</span>Lump Sum
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='ml-[3.5rem]'>The</span>Owner shall
                                                    compensate the CM for Basic Services on the basis of a
                                                    Lump Sum in accordance with the terms and conditions
                                                    of this Agreement as follows:
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.4.1</span>Compensation
                                                    for Basic Services
                                                </p>
                                            </div>

                                            {/* F18 */}
                                            <p className='mb-3 text-justify'>
                                                <span className='ml-[3.5rem]'>The</span> CM shall be
                                                compensated for performing Basic Services described in
                                                the pre-design phase (Paragraph 3.2), design phase
                                                (Paragraph 3.3) and the procurement phase (Paragraph
                                                3.4) for a total lump sum in the amount of
                                                <span className='bg-yellow-500'>F18</span> dollars ($
                                                <span className='bg-yellow-500'>F19</span>) that shall
                                                be divided by the number of months scheduled for the
                                                basic services in Paragraphs 3.2, 3.3 and 3.4 and paid
                                                in equal monthly installments as the services are
                                                performed. The CM shall be compensated for performing
                                                basic services described in the construction phase
                                                (Paragraph 3.5) and post-construction phase (Paragraph
                                                3.6) for a total lump sum in the amount of{" "}
                                                <span className='bg-yellow-500'>F20</span> dollars ($
                                                <span className='bg-yellow-500'>F21</span>). In the
                                                event there are changes in the work that require an
                                                adjustment in the CM’s construction/post-construction
                                                fee, the fee adjustment shall be based upon{" "}
                                                <span className='bg-yellow-500'>F22</span>% of the cost
                                                of the work added or deleted from the Project. The fee
                                                for these phases shall be paid in proportion to the
                                                percentage of the actual cost of the work paid by the
                                                Owner. The cost of the work as used in this section
                                                shall be the total dollar amount of the construction
                                                contracts awarded by the CM to contractors for the
                                                performance of the work, minus any unused allowances or
                                                other deductive change orders. The CM’s contingency
                                                shall not be included in the calculation or payment of
                                                the CM’s fee. Progress payments for the work performed
                                                by the contractors shall be paid as the work is
                                                performed and approved in accordance with this
                                                Agreement. The CM acknowledges that the Owner only has
                                                funds for the basic services in Paragraphs 3.2, 3.3, and
                                                3.4 at the time this Agreement is being executed and
                                                that the CM is not authorized to perform any services in
                                                Paragraphs 3.5 and 3.6 or any other provisions of this
                                                Agreement without the express written permission of the
                                                Owner.
                                            </p>

                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.4.2</span>Payments
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='ml-[3.5rem]'>Payments</span>to the CM
                                                    shall be made monthly, not later than forty-five (45)
                                                    days after receipt of the CM’s Invoice by the Owner.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[0.4rem]'>7.4.2.2</span> Payments
                                                    due to the CM that are unpaid for more than forty-five
                                                    (45) days from the due date of the CM’s invoice shall
                                                    not bear interest from the due date.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.4.3</span>Compensation
                                                    for Additional Services
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='ml-[3.5rem]'>The</span>CM shall be
                                                    compensated, and payments shall be made for performing
                                                    Additional Services in an amount and on terms mutually
                                                    agreeable between the Owner and CM.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.4.4</span>Auditing
                                                    Rights
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='ml-[3.5rem]'>The</span>CM shall keep
                                                    all records and supporting documentation which concern
                                                    or relate to the work, general conditions, or other
                                                    monies paid hereunder for a minimum of three (3) years
                                                    from the date of termination of this Agreement or the
                                                    date the Project achieves final completion. The CM
                                                    shall require all of its subcontractors to likewise
                                                    retain all of their Project records and supporting
                                                    documentation. The Owner, and any duly authorized
                                                    agents or representatives of the Owner, shall be
                                                    provided access to all such records and supporting
                                                    documentation during normal business hours upon
                                                    reasonable request by the Owner. Further, the Owner,
                                                    and any duly authorized agents or representatives of
                                                    the Owner, shall have the right to audit, inspect and
                                                    copy all of the CM’s and any contractor’s Project
                                                    records and documentation. The access, inspection,
                                                    copying and auditing rights shall survive the
                                                    termination of this Agreement.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>7.5</span>Adjustments to the
                                                    CM’s Compensation
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='ml-[3.5rem]'>The</span>CM shall
                                                    notify the Owner as specified in this Agreement when
                                                    material changes to the scope of the Project or a part
                                                    thereof or when delays caused in whole or in part by
                                                    the Owner or Design Consultant are expected to
                                                    increase or extend the Project’s critical path or the
                                                    scope or duration of the CM’s services. If the change
                                                    results in a delay to the Project’s critical path or a
                                                    material increase in the Project’s scope, the CM shall
                                                    be entitled to receive an increase in the duration of
                                                    this Agreement and/or additional compensation for the
                                                    change in accordance with this Agreement.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>7.6</span>Liquidated Damages
                                                </p>
                                            </div>

                                            {/* F23 */}
                                            <p className='mb-3 text-justify'>
                                                <span className='mr-[1.2rem]'>7.6.1</span>Should the CM
                                                fail to substantially complete the Project or phase on
                                                or before the date stipulated for substantial completion
                                                of the Project (or such later date as may result from
                                                extension of time granted by Owner), the CM shall pay or
                                                the Owner may retain from the funds otherwise to be paid
                                                to the CM the sum of $
                                                <span className='bg-yellow-500'>F23</span> as
                                                substantial completion liquidated damages for each
                                                consecutive calendar day beyond the date established in
                                                this Agreement that Project fails to achieve substantial
                                                completion as defined in this Agreement, which sum is
                                                agreed upon as a reasonable and proper measure of
                                                damages which the Owner will sustain per day by failure
                                                of the CM to complete work within time as stipulated; it
                                                being recognized by the Owner and the CM that the injury
                                                to the Owner which could result from a failure of the CM
                                                to complete on schedule is uncertain and cannot be
                                                computed exactly. This amount is the minimum measure of
                                                damages the Owner will sustain due to delay in the
                                                completion of the work, which shall include but not be
                                                limited to the loss of use of the facilities, the
                                                relocation of students and services, the cost of Owner’s
                                                time and resources, damage to Owner’s reputation, and
                                                storage of furniture and other materials. The inability
                                                of the Owner to quantify actual damages shall not
                                                prevent the recovery of liquidated damages.
                                            </p>

                                            {/* F24 */}
                                            <p className='mb-3 text-justify'>
                                                <span className='mr-[1.2rem]'>7.6.2</span>For each
                                                consecutive calendar day that the work remains
                                                incomplete after the date established for final
                                                completion of the Project, the CM shall pay or Owner
                                                will retain from the compensation otherwise to be paid
                                                to the CM the sum of $
                                                <span className='bg-yellow-500'>F24</span> as final
                                                completion liquidated damages. This amount is agreed
                                                upon as a reasonable and proper measure of damages the
                                                Owner will sustain due to the delay in the completion of
                                                all remedial work, the delay in the correction of the
                                                deficient work, the disruption to the school and the
                                                learning environment, the cost of Owner’s time and
                                                resources, damage to Owner’s reputation, and the
                                                inability to use the facilities fully. This amount is in
                                                addition to the liquidated damages prescribed above for
                                                substantial completion.
                                            </p>

                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.6.3</span>The amount
                                                    of liquidated damages set forth in Paragraphs 7.6.1
                                                    and 7.6.2 hereinabove shall be assessed cumulatively.
                                                    The items of cost included in the assessment of
                                                    liquidated damages are defined above. This provision
                                                    of liquidated damages does not bar Owner’s right to
                                                    enforce other rights and remedies against CM,
                                                    including but not limited to, specific performance or
                                                    injunctive relief. In no way shall costs for
                                                    liquidated damages be construed as a penalty to the
                                                    CM.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.6.4</span>
                                                    Notwithstanding any other provisions of the Agreement,
                                                    if there is concurrent delay in the completion of the
                                                    work, the CM shall be liable for liquidated damages as
                                                    specified in this Agreement during such period of
                                                    concurrent delay. For the purpose of this section 7.6,
                                                    concurrent delay means (a) a delay event caused in
                                                    part by the Owner or its agent and in part by the CM
                                                    or its contractors, subcontractors, sub-subcontractos,
                                                    or (b) one or more delay event caused solely by the
                                                    Owner, its agents, or the Design Consultant, and one
                                                    or more delay event caused in part by the CM,
                                                    subcontractors, sub-subcontractors or agents, each of
                                                    which would have resulted in a delay without the other
                                                    and which delays run concurrently, or at the same
                                                    time. In the event that the foregoing provision making
                                                    the CM liable for liquidated damages during a period
                                                    of concurrent delay is found to be unenforcable, then
                                                    the parties agree that in the event of a concurrent
                                                    delay, the extent of the delay will be apportioned
                                                    between the Owner and the CM, and the CM will be
                                                    responsible for liquidated damages as set forth in the
                                                    section 7.6 for those portions of the delay which are
                                                    apportioned to the CM, its subconctractors,
                                                    sub-subcontractors, agents or material suppliers.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>7.6.5</span>The amount
                                                    of liquidated damages set forth in Paragraphs 7.6.1
                                                    and 7.6.2 hereinabove shall not include additional
                                                    legal or design professional costs that may result
                                                    from the CM’s default. If such legal or design
                                                    professional costs are incurred by the Owner, the CM
                                                    shall be liable to the Owner for those costs in
                                                    addition to the liquidated damages amount set forth
                                                    hereinabove and in 7.7 Summary of Monetary Amounts.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>7.7</span>The following summary
                                                    is intended to provide a single location for all
                                                    relevant monetary amounts included in this Agreement
                                                    as of the date of execution of the Agreement. The
                                                    following list shall take precedence over any
                                                    inconsistencies in the amounts otherwise incorporated
                                                    into this Agreement. The amounts in this Agreement
                                                    shall only be revised by written agreement between the
                                                    parties. The monetary amounts follow:
                                                </p>
                                            </div>

                                            {/* F25 */}
                                            <div className='ml-20 grid grid-cols-2'>
                                                <div>
                                                    <p>GMP</p>
                                                    <p>Cost of Work</p>
                                                    <p>CM Preconstruction Fee</p>
                                                    <p>CM Construction Fee</p>
                                                    <p>CM Construction Contingency</p>
                                                    <p>Owner Contingency</p>
                                                    <p>General Conditions</p>
                                                    <p>Liquidated Damages-Substantial</p>
                                                    <p>Liquidated Damages - Final</p>
                                                </div>

                                                <div>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F25</span>
                                                    </p>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F26</span>
                                                    </p>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F27</span>
                                                    </p>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F28</span>
                                                    </p>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F29</span>
                                                    </p>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F30</span>
                                                    </p>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F31</span>
                                                    </p>
                                                    <p>
                                                        $<span className='bg-yellow-500'>F32</span>/Day
                                                    </p>

                                                    <p>
                                                        $<span className='bg-yellow-500'>F33</span>/day
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Article 8 */}
                                        <div className='mt-6'>
                                            <div className='text-center'>
                                                <p className='font-bold'>ARTICLE 8</p>
                                                <p>INSURANCE AND MUTUAL INDEMNITY</p>
                                                <p className='w-64 h-[2px] my-4 m-auto bg-black'></p>
                                            </div>

                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>8.1</span>CM's Liability
                                                    Insurance
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>8.1.1</span>The CM shall
                                                    purchase at their own expense and maintain in
                                                    companies properly licensed by the department of
                                                    insurance of the State of North Carolina and rated “a”
                                                    or better by a.m. best company as will protect it, the
                                                    Owner, the Design Consultant and their agents,
                                                    representatives, and employees from claims as set
                                                    forth below which may arise out of or result from the
                                                    CM’s operations under the Agreement, whether such
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Page 49 */}
                                    <div>
                                        <p className='text-justify'>
                                            to negotiate and review the terms and provisions of this
                                            Agreement and to contribute to its substance and form.
                                        </p>

                                        <div>
                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>11.4</span>Severability
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>11.4.1</span>If any
                                                    provision of this Agreement is held as a matter of law
                                                    to be unenforceable, the remainder of this Agreement
                                                    shall be enforceable without such provision.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>11.5</span>Meaning of Terms
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>11.5.1</span>References
                                                    made in the singular shall include the plural and the
                                                    masculine shall include the feminine or neuter.
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>11.6</span>Notices
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>11.6.1</span>Whenever
                                                    any provision of the Contract Documents requires the
                                                    giving of written notice, it shall be deemed to have
                                                    been validly given if delivered in person to the
                                                    individual or to a member of the firm or to an officer
                                                    of the corporation for whom it is intended or if
                                                    delivered or sent by registered or certified mail,
                                                    postage prepaid, or by facsimile, addressed as
                                                    follows:
                                                </p>
                                            </div>

                                            {/* F34 */}
                                            <div className='mb-20'>
                                                <div className='mb-3'>
                                                    <p>
                                                        <span className='p-1 rounded-lg bg-pink-300'>
                                                            To the Owner:
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className='bg-yellow-500'>F34</span>
                                                    </p>
                                                </div>

                                                <div className='mb-3'>
                                                    <p>With a copy to:</p>
                                                    <p>
                                                        <span className='bg-yellow-500'>F35</span>
                                                    </p>
                                                </div>

                                                <div className='mb-3'>
                                                    <p>To the CM:</p>
                                                    <p>
                                                        <span className='bg-yellow-500'>F36</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-8'>11.7</span>Compliance with
                                                    Board Policies and Procedures
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>11.7.1</span>The CM
                                                    acknowledges that the Owner’s policies governing
                                                    conduct on the Owner’s property are available for
                                                    review on the Owner’s website at{" "}
                                                    <a href='www.dpsnc.net' className='text-blue-500'>
                                                        www.dpsnc.net
                                                    </a>{" "}
                                                    In addition to complying with the Owner’s policies,
                                                    the CM agrees to comply with the following:
                                                </p>

                                                <p className='mb-3 text-justify'>
                                                    <span className='mr-[1.2rem]'>11.7.2</span>The CM, the
                                                    contractors and their employees shall not possess or
                                                    carry, whether openly or concealed, any gun, rifle,
                                                    pistol, or explosive on any property owned by the
                                                    Owner. This includes firearms locked in containers,
                                                    vehicles or firearm racks within vehicles. The CM, the
                                                    contractors and their employees shall not cause,
                                                    encourage or aid a minor, who is less than 18 years
                                                    old to possess or carry, whether openly or concealed,
                                                    any weapons on any property owned by the Owner.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Page 51 */}
                                    <div className='mt-28'>
                                        <p className='ml-12 mb-12'>
                                            This Agreement is executed the day and year first written
                                            above.
                                        </p>

                                        <div className='grid grid-cols-2 gap-8 mb-12'>
                                            <div>
                                                <p className='mb-4 font-bold'>OWNER:</p>
                                                <p className='mb-4 font-bold'>
                                                    DURHAM PUBLIC SCHOOLS BOARD <br /> EDUCATION
                                                </p>
                                                <div className='mb-4'>
                                                    <p>_______________________________________</p>
                                                    <p>
                                                        <span className='bg-yellow-500'>F38</span>, Chair
                                                    </p>
                                                </div>
                                                <p className='mb-4'>Attest:</p>
                                                <div className='mb-12'>
                                                    <p>_______________________________________</p>
                                                    <p>[Corporate Seal]</p>
                                                </div>

                                                <p className='mb-8 text-justify'>
                                                    This instrument has been pre-audited in the manner
                                                    required by the School Budget and Fiscal Control Act.
                                                </p>

                                                <div>
                                                    <p>
                                                        <span className='bg-yellow-500'>F40</span>
                                                    </p>
                                                    <p>___________________, Finance Officer</p>
                                                </div>
                                            </div>

                                            <div>
                                                <p className='mb-4 font-bold'>CONSTRUCTION MANAGER:</p>
                                                <p className='mb-4'>
                                                    <span className='bg-yellow-500'>F37</span>
                                                </p>
                                                <div className='mb-4'>
                                                    <p>_______________________________________</p>
                                                    <p>
                                                        <span className='bg-yellow-500'>F39</span>,
                                                        President
                                                    </p>
                                                </div>
                                                <p className='mb-4'>Attest:</p>
                                                <div>
                                                    <p>_______________________________________</p>
                                                    <p className='mb-3'>Corporate Secretary</p>
                                                    <p>[Corporate Seal]</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-end gap-4 pr-6 pb-4'>
                        <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={() => dispatch(prevStep(4))} />
                            <DashboardButton
                                hidden
                                name='CREATE DOCUMENT'
                                type='submit'
                                width='w-[198px]'
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Preview;
