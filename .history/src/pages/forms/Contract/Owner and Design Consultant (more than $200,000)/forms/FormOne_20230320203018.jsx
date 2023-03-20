import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate, { FormTextArea } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormSelect } from "../../../components";
import { useGetVendorsQuery } from "../../../../../features/services/api";
import {
  DataListComponent,
  GetState,
} from "../../../E-589C Affidavit Of Capital Improvement/Affidavit";

const FormOne = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  const agreementDate = {
    ...props,
    value: props.values.agreementDate,
    onChange: props.handleChange,
    name: "agreementDate",
    error: props.errors.agreementDate,
    touched: props.touched.agreementDate,
    placeholder: "Select date",
    //    prevPage
  };

  function CheckState() {
    if (!props.values.state) {
      return;
    }
    if (!states) {
      return;
    }
    let stat = Object.values(states)?.find(
      (state) => state.name === props.values.state
    );
    if (!stat) {
      return;
    }

    return Object.keys(stat?.cities)?.map((cur, id) => {
      return (
        <option key={id} value={cur}>
          {cur}
        </option>
      );
    });
  }

  function CheckZipCode() {
    if (!props.values.city) {
      return;
    }
    if (!states) {
      return;
    }
    const city = Object.values(states)?.filter(
      (state) => state.name === props.values.state
    );

    const zipcode = city?.find((cities) => cities);
    return zipcode?.cities[props.values.city]?.map((zipcode, index) => {
      return (
        <option key={index} value={zipcode}>
          {zipcode}
        </option>
      );
    });
  }

  return (
    <div>
      <div
        className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <form
          className="relative w-[600px] bg-white rounded-lg shadow py-4"
          onSubmit={props.handleSubmit}
        >
          <div className="flex items-baseline justify-between mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Owner and Design Consultant (more $200,000)
              </h3>
              <p className="text-base text-gray-700">
                Agreement and Project details
              </p>
            </div>
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal"
            >
              <Close />
            </button>
          </div>

          {/* Progress */}
          <div className="w-full bg-[#89A5AF] h-2.5 my-4">
            <div className="bg-[#2F5461] h-2.5 w-1/6"></div>
          </div>

          <div className="mx-6 mb-12">
            <div className="mt-3 ml-2 flex flex-col gap-3 ">
              <FormInputContainer name="On what date will the Agreement be made official?">
                <SelectDate {...agreementDate} />
                {props.errors.agreementDate && props.touched.agreementDate && (
                  <Error message={props.errors.agreementDate} />
                )}
              </FormInputContainer>

              <div classNAme="">
                <FormTextArea
                  type={"text"}
                  onChange={props.handleChange}
                  value={props?.values?.projectObjective}
                  name="Enter the project's objectives"
                  id="projectObjective"
                  placeholder="Project objective upto 350 characters"
                  limit="350"
                />
                {props.errors.projectObjective &&
                  props.touched.projectObjective && (
                    <Error message={props.errors.projectObjective} />
                  )}
              </div>

              <div className="p-2 flex flex-col gap-2">
                <h2 className="text-base text-gray-600">
                  Is this project for a new school
                </h2>
                <div className="flex flex-col">
                  <div className="flex items-center mb-5">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="Yes"
                      checked={props.values.newSchool === "Yes" ? true : false}
                      name="newSchool"
                      onChange={props.handleChange}
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-2 text-base text-gray-900"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="No"
                      checked={props.values.newSchool === "No" ? true : false}
                      name="newSchool"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={props.handleChange}
                    />
                    <label
                      for="default-radio-2"
                      className="ml-2 text-base text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
                {props.errors.newSchool && props.touched.newSchool && (
                  <Error message={props.errors.newSchool} />
                )}
              </div>
              {props.values.newSchool === "Yes" && (
                <>
                  <FormInputContainer name="School Name">
                    <FormInputPlain
                      type={"text"}
                      onChange={props.handleChange}
                      value={props?.values?.schoolName}
                      name="schoolName"
                      placeholder="Enter School Name"
                    />
                    {props.errors.schoolName && props.touched.schoolName && (
                      <Error message={props.errors.schoolName} />
                    )}
                  </FormInputContainer>

                  <FormInputContainer name="How many Students have enrolled in the School?">
                    <FormInputPlain
                      type={"number"}
                      onChange={props.handleChange}
                      name="studentNumber"
                      value={props?.values?.studentNumber}
                      placeholder="Input Text"
                    />
                    {props.errors.studentNumber &&
                      props.touched.studentNumber && (
                        <Error message={props.errors.studentNumber} />
                      )}
                  </FormInputContainer>

                  <FormInputContainer name="Approximate maximum square footage for the facility">
                    <FormInputPlain
                      type={"text"}
                      onChange={props.handleChange}
                      name="squareFootage"
                      value={
                        props?.values?.newSchool === "Yes"
                          ? props?.values?.squareFootage
                          : ""
                      }
                      placeholder="Square Feet"
                    />
                    {props.errors.squareFootage &&
                      props.touched.squareFootage && (
                        <Error message={props.errors.squareFootage} />
                      )}
                  </FormInputContainer>

                  <FormInputContainer name="The school designed can accomodate students upto">
                    <FormInputPlain
                      type={"text"}
                      onChange={props.handleChange}
                      value={
                        props?.values?.newSchool === "Yes"
                          ? props?.values?.accomodateNumber
                          : ""
                      }
                      name="accomodateNumber"
                      placeholder="Input Text"
                    />
                    {props.errors.accomodateNumber &&
                      props.touched.accomodateNumber && (
                        <Error message={props.errors.accomodateNumber} />
                      )}
                  </FormInputContainer>

                  <div className="flex flex-col px-3 py-3 border border-[#9CA3AF]">
                    <div className="flex flex-col mb-5">
                      <label
                        for="default-radio-1"
                        className="text-base text-gray-900 mb-1"
                      >
                        Where is the school built?
                      </label>
                      <input
                        type={"text"}
                        onChange={props.handleChange}
                        name="street"
                        placeholder={"Street"}
                        value={
                          props?.values?.newSchool === "Yes"
                            ? props?.values?.street
                            : ""
                        }
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                      />
                      {props.errors.street && props.touched.street && (
                        <Error message={props.errors.street} />
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <DataListComponent
                          name="State"
                          inputname="state"
                          value={
                            props?.values?.newSchool === "Yes"
                              ? props?.values?.state
                              : ""
                          }
                          handleChange={props.handleChange}
                          fn={() => GetState(states)}
                          placeholder="State"
                        />
                      </div>
                      <div className="flex-1">
                        <DataListComponent
                          name="City"
                          inputname="city"
                          value={
                            props?.values?.newSchool === "Yes"
                              ? props?.values?.city
                              : ""
                          }
                          handleChange={props.handleChange}
                          placeholder="City"
                          fn={() => CheckState()}
                        />
                      </div>
                      <div className="flex-1">
                        <DataListComponent
                          name="Zip code"
                          inputname="zipCode"
                          value={
                            props?.values?.newSchool === "Yes"
                              ? props?.values?.zipCode
                              : ""
                          }
                          handleChange={props.handleChange}
                          placeholder="Zip code"
                          fn={() => CheckZipCode()}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Cancel"
              onClick={() => dispatch(closeModal())}
            />
            <DashboardButton
              hidden
              name="NEXT"
              type="submit"
              width="w-[77px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOne;
