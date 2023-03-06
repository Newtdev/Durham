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
                <div class= class="uj86 doc-content border border-black"
      style={{ height: "10in", marginBottom: "0.845in" }}>
                  {/* Page 10 */}
                  <div>
                    <ol class='c7 lst-kix_list_43-3d' start='4'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall submit the final Design
                          Development package, meeting minutes, etc. to show how
                          review comments made in Schematic Design have been
                          addressed. &nbsp;It should be clear from the notes
                          where the specific item was incorporated into the
                          Design Development submittal or an explanation if it
                          was not incorporated.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-3e' start='5'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall provide the Owner&#39;s
                          Representative periodically with copies of in-progress
                          Design Development documents during the Design
                          Development Phase. &nbsp;At the end of the Design
                          Development Phase the Design Consultant shall provide
                          the Owner&#39;s Representative with up to four (4)
                          full size complete sets of the drawings and design
                          phase report for approval by the Owner. The documents
                          for this final Design Development Phase submittal
                          shall contain all of the following unless otherwise
                          agreed in writing:
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-4a start' start='1'>
                      <li class='c11 c21 li-bullet-4'>
                        <span class='c3 c13'>Architectural</span>
                        <span class='c5 c3'>&nbsp;</span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0 start' start='1'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Project phasing plan.</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='2'>
                      <li class='c11 c18 li-bullet-13'>
                        <span class='c5 c3'>Building Code Summary Sheet.</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='3'>
                      <li class='c11 c18 li-bullet-7'>
                        <span class='c5 c3'>
                          Life safety plans showing all fire walls and egress
                          calculations.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='4'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Site plan(s) with building located and an overall
                          grading plan with a minimum of 1&rsquo;-0&rdquo;
                          contour lines. &nbsp;All major site development such
                          as orientation, access road paving, walls and outside
                          support buildings, structured parking facilities,
                          programmed play areas, and paved parking lots, along
                          with preliminary stormwater management and erosion
                          control features should be shown.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='5'>
                      <li class='c11 c18 li-bullet-13'>
                        <span class='c5 c3'>
                          Floor plans (at 1/8&quot; scale) with final room
                          locations including all openings.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='6'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Roof plan (at 1/8&rdquo; scale) indicating structural
                          slope, drainage areas and drain locations.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='7'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Wall sections showing final dimensional relationships,
                          materials and component relationships.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='8'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Identification of all fixed and loose equipment,
                          furniture, and furnishings.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='9'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Room inventory data sheets showing locations of
                          furniture and equipment for each room. &nbsp;Owner
                          will provide lists of furniture and equipment and
                          format to Design Consultant. &nbsp;Hard copies and
                          digital formats (if desired) will be provided to the
                          Design Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='10'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Finish schedule identifying all finishes.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='11'>
                      <li class='c11 c25 li-bullet-10'>
                        <span class='c5 c3'>
                          Preliminary door and window and hardware schedule
                          showing final quantity plus type and quality levels.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='12'>
                      <li class='c11 c18 li-bullet-7'>
                        <span class='c5 c3'>
                          Virtually complete site plan including grading and
                          drainage.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='13'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Preliminary development of details, including millwork
                          details and large scale blow-ups.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='14'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Legend showing all symbols used on drawings.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='15'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_12-0' start='16'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Reflective ceiling development including ceiling grid
                          and all devices that penetrate the ceiling (i.e.,
                          light fixtures, sprinkler heads, ceiling register or
                          diffusers, etc.).
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-4b' start='2'>
                      <li class='c11 c21 li-bullet-15'>
                        <span class='c17 c3 c13'>Structural </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
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
