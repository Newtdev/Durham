import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";
import "./owner.css";

const OwnerDesignMore = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <ModalOverlay show={showModal} close={() => setShowModal(true)}>
        <div>
          {/* Modal content */}
          <div className='relative w-[80%] mx-auto bg-white rounded-lg shadow mt-14'>
            {/* Header */}
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='text-lg font-bold text-gray-900'>
                  Owner and Design Consultant (More than $200,000)
                </h3>
                <p className='text-base text-gray-700'>Preview Document</p>
              </div>
              <button
                type='button'
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
              >
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>

            <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
              <div className='px-20 pt-8 pb-4 text-black font11'>
                <div class='c86 doc-content'>
                  {/* Page 35 */}
                  <div>
                    <div className='ml-[4.2rem] text-justify'>
                      <span className='c5 c3 leading-[1px]'>
                        Design Consultant shall conduct or arrange to have
                        conducted at its own expense sexual offender registry
                        checks on each of its employees, agents, ownership
                        personnel, or subconsultants (&ldquo;contractual
                        personnel&rdquo;) who will engage in any service on or
                        delivery of goods to school system property or at a
                        school-system sponsored event, except checks shall not
                        be required for individuals who are solely delivering or
                        picking up equipment, materials, or supplies at: (1) the
                        administrative office or loading dock of a school; (2)
                        non-school sites; (3) schools closed for renovation; or
                        (4) school construction sites. &nbsp;The checks shall
                        include at a minimum checks of the State Sex Offender
                        and Public Protection Registration Program, the State
                        Sexually Violent Predator Registration Program, and the
                        National Sex Offender Registry (&ldquo;the
                        Registries&rdquo;). &nbsp;For the Design
                        Consultant&rsquo;s convenience only, all of the required
                        registry checks may be completed at no cost by accessing
                        the United States Department of Justice Sex Offender
                        Public Website at{" "}
                        <span class='c3 c88'>http://www.nsopw.gov/</span>
                        <span class='c5 c3'>
                          . &nbsp;The Design Consultant shall provide
                          certification on the Owner&rsquo;s Sexual Offender
                          Registry Check Certification Form (attached as Exhibit
                          F) that the registry checks were conducted on each of
                          its contractual personnel providing services or
                          delivering goods under this Agreement prior to the
                          commencement of such services or the delivery of such
                          goods. &nbsp;The Design Consultant shall conduct a
                          current initial check of the registries (a check done
                          more than thirty (30) days prior to the date of this
                          Agreement shall not satisfy this contractual
                          obligation). &nbsp;In addition, the Design Consultant
                          agrees to conduct the registry checks and provide a
                          supplemental certification form before any additional
                          contractual personnel are used to deliver goods or
                          provide services pursuant to this Agreement. &nbsp;The
                          Design Consultant further agrees to conduct annual
                          registry checks of all contractual personnel and
                          provide annual certifications at each anniversary date
                          of this Agreement. &nbsp;The Design Consultant shall
                          not assign any individual to deliver goods or provide
                          services pursuant to this Agreement if said individual
                          appears on any of the listed registries. &nbsp;The
                          Design Consultant agrees that it will maintain all
                          records and documents necessary to demonstrate that it
                          has conducted a thorough check of the registries as to
                          each contractual personnel, and agrees to provide such
                          records and documents to the Owner upon request.
                          &nbsp;The Design Consultant specifically acknowledges
                          that the Owner retains the right to audit these
                          records to ensure compliance with this section at any
                          time in the Owner&rsquo;s sole discretion.
                          &nbsp;Failure to comply with the terms of this
                          provision shall be deemed a material breach of the
                          Agreement. &nbsp;In addition, the Owner may conduct
                          additional criminal records checks at the
                          Owner&rsquo;s expense. &nbsp;If the Owner exercises
                          this right to conduct additional criminal records
                          checks, the Design Consultant agrees to provide within
                          seven (7) days of request the full name, date of
                          birth, state of residency for the past ten years, and
                          any additional information requested by the Owner for
                          all contractual personnel who may deliver goods or
                          perform services under this Agreement. &nbsp;The
                          Design Consultant further agrees that it has an
                          ongoing obligation to provide the Owner with the name
                          of any new contractual personnel who may deliver goods
                          or provide services under the Agreement. &nbsp;The
                          Owner reserves the right to prohibit any contractual
                          personnel of the Design Consultant from delivering
                          goods or providing services under this Agreement if
                          the Owner determines, in its sole discretion, that
                          such contractual personnel may pose a threat to the
                          safety or well-being of students, school personnel or
                          others.
                        </span>
                      </span>
                    </div>

                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2e' start='5'>
                      <li class='c6 li-bullet-64'>
                        <span class='c5 c3'>
                          &nbsp; Restricted Companies Lists.&nbsp; Design
                          Consultant represents that as of the date of this
                          Agreement, Design Consultant is not included on the
                          Final Divestment List created by the North Carolina
                          State Treasurer pursuant to N.C. Gen. Stat. &sect;
                          147-86.58.&nbsp; &nbsp;Design Consultant also
                          represents that as of the date of this Agreement,
                          Design Consultant is not included on the list of
                          restricted companies determined to be engaged in a
                          boycott of Israel created by the North Carolina State
                          Treasurer pursuant to N.C. Gen. Stat. &sect;
                          147-86.81. &nbsp;
                        </span>
                      </li>
                    </ol>
                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c12 c79'>
                      <span class='c5 c3'>
                        <span className='mr-[2rem]'>13.2.5</span>Anti-Nepotism.
                        &nbsp;Design Consultant warrants that, to the best of
                        its knowledge and in the exercise of due diligence, none
                        of its corporate officers, directors, or trustees and
                        none of its employees who will directly provide services
                        under this Agreement are immediate family members of any
                        member of the Owner&rsquo;s Board of Education or of any
                        principal or central office staff administrator employed
                        by the Owner. &nbsp;For purposes of this provision,
                        &ldquo;immediate family&rdquo; means spouse, parent,
                        child, brother, sister, grandparent, or grandchild, and
                        includes step, half, and in-law relationships.&nbsp;
                        Should Design Consultant become aware of any family
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' />
              <DashboardButton
                hidden
                name='CREATE DOCUMENT'
                type='submit'
                width='w-[198px]'
              />
            </div>
          </div>
        </div>
      </ModalOverlay>
    </div>
  );
};

export default OwnerDesignMore;
