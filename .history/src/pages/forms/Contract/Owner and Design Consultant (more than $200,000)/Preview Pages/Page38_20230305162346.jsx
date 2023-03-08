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
                  {/* Page 38 */}
                  <div>
                    <p class='c11'>
                      <span class='c5 c3'>
                        In witness whereof, each individual executing this
                        agreement acknowledges that he/she/it is authorized to
                        execute this agreement and further acknowledges the
                        execution of this agreement the day and year first
                        written above.
                      </span>
                    </p>
                    <p class='c28'>
                      <span class='c5 c49'></span>
                    </p>
                    <p class='c34 c44'>
                      <span class='c49'>IN WITNESS WHEREOF</span>
                      <span class='c5 c3'>
                        &nbsp;the Owner and the Design Consultant have executed
                        this contract, the day and year first above written.
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c64'></span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c44 c41 c83'>
                      <span class='c5 c3'></span>
                    </p>
                    {/* <a id='t.4cb4a8dba198e5122890a5eb45341756a45443da'></a>
                    <a id='t.0'></a> */}
                    <table class='c60'>
                      <tr class='c50'>
                        <td class='c43' colspan='1' rowspan='1'>
                          <p class='c62'>
                            <span class='c3 c51'>
                              Mike Lee, Chair, Durham Public Schools Board of
                              Education
                            </span>
                          </p>
                        </td>
                        <td class='c58' colspan='1' rowspan='1'>
                          <p class='c39'>
                            <span class='c17 c3 c13'></span>
                          </p>
                        </td>
                        <td class='c92' colspan='1' rowspan='1'>
                          <p class='c79'>
                            <span class='c5 c3'>Date</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                    <p class='c55 c44 c41'>
                      <span class='c5 c49'></span>
                    </p>
                    <p class='c34 c44 c77'>
                      <span class='c3'>
                        This instrument has been pre-audited in the manner
                        required by the School Budget and Fiscal Control Act.
                      </span>
                    </p>
                    <p class='c28'>
                      <span class='c5 c49'></span>
                    </p>
                    <p class='c28'>
                      <span class='c5 c49'></span>
                    </p>
                    <p class='c44 c41 c81'>
                      <span class='c5 c49'></span>
                    </p>
                    {/* <a id='t.5339143a490a30504eaa05f479b5cf4625efa405'></a>
                    <a id='t.1'></a> */}
                    <table class='c60'>
                      <tr class='c50'>
                        <td class='c43' colspan='1' rowspan='1'>
                          <p class='c34 c72'>
                            <span class='c5 c3'>
                              Paul LeSieur, Chief Finance Officer, Durham Public
                              Schools
                            </span>
                          </p>
                        </td>
                        <td class='c75' colspan='1' rowspan='1'>
                          <p class='c34 c41'>
                            <span class='c5 c3'></span>
                          </p>
                        </td>
                        <td class='c80' colspan='1' rowspan='1'>
                          <p class='c34'>
                            <span class='c5 c3'>Date</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                    <p class='c44 c55'>
                      <span class='c5 c49'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </p>
                    <p class='c15'>
                      <span class='c5 c3'>
                        Endorsement:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______________________
                      </span>
                    </p>
                    <p class='c15'>
                      <span class='c5 c3'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Executive Director
                        &nbsp;
                      </span>
                    </p>
                    <p class='c15' id='h.2et92p0'>
                      <span class='c5 c3'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durham
                        Public Schools &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp; &nbsp; &nbsp;Building Services
                      </span>
                    </p>
                    <p class='c81 c44 c41'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c44 c41 c53'>
                      <span class='c5 c49'></span>
                    </p>
                    <p class='c44 c41 c85'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c3 c51'>
                        This contract was approved by the Board on the{" "}
                      </span>
                      <span class='c49 c51 c8'>xxth day of Month Year</span>
                      <span class='c3 c51'>.</span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c49 c8'></span>
                    </p>
                    <p class='c11'>
                      <span class='c49 c51 c8'>
                        INSERT CONSULTANT / COMPANY NAME
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c3 c51'>
                        By:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span class='c3'>
                        _______________________________________________________
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c34 c44'>
                      <span class='c5 c3'>
                        Name/Title: &nbsp;
                        _______________________________________________________
                      </span>
                    </p>
                    <p class='c28'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c34 c44'>
                      <span class='c5 c3'>STATE OF NORTH CAROLINA</span>
                    </p>
                    <p class='c34 c44'>
                      <span class='c5 c3'>COUNTY OF DURHAM</span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c44 c65'>
                      <span class='c3'>
                        I, a Notary Public in and for the aforesaid County and
                        State, do hereby certify that ____________________
                        personally appeared before me this day and acknowledged
                        that he/she is _____________ of
                        _________________________., a _________________ (state
                        of incorporation) corporation, duly authorized to do
                        business in the state of North Carolina, and that by
                        authority duly given and as the act of the corporation,
                        the foregoing instrument was signed in its name by its{" "}
                      </span>
                      <span class='c3 c13'>________ ,</span>
                      <span class='c5 c3'>
                        &nbsp;sealed with its corporate seal and attested by
                        ___________________ as its Corporate Secretary.
                      </span>
                    </p>
                    <p class='c28 c78'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c34 c44'>
                      <span class='c3'>
                        Witness my hand and notarial seal this{" "}
                      </span>
                      <span class='c3 c13'>&nbsp; &nbsp; &nbsp; </span>
                      <span class='c3'>&nbsp;day of </span>
                      <span class='c3 c13'>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;{" "}
                      </span>
                      <span class='c5 c3'>
                        ,
                        20_____.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </p>
                    <p class='c28'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c34 c44'>
                      <span class='c5 c3'>
                        ____________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(SEAL/STAMP)
                      </span>
                    </p>
                    <p class='c34 c44 c61'>
                      <span class='c5 c3'>Notary Public</span>
                    </p>
                    <p class='c28 c61'>
                      <span class='c5 c3'></span>
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
