import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const FormTwo = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  function CheckState(index) {
    if (!props.values.location[index].projectState) {
      return;
    }
    let stat = Object.values(states)?.find(
      (state) => state.name === props.values.location[index].projectState
    );

    return Object.keys(stat.cities)?.map((cur, id) => {
      return (
        <option key={id} value={cur}>
          {cur}
        </option>
      );
    });
  }

  function CheckZipCode(index) {
    if (!props.values.location[index].projectCity) {
      return;
    }
    const city = Object.values(states)?.filter(
      (state) => state.name === props.values.location[index].projectState
    );
    const zipcode = city?.find((cities) => cities);
    return zipcode.cities[props.values.location[index].projectCity]?.map(
      (zipcode, index) => {
        return (
          <option key={index} value={zipcode}>
            {zipcode}
          </option>
        );
      }
    );
  }

  return (
    <div>
      <div
        className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}

        <div className="relative w-[600px] bg-white rounded-lg shadow py-4">
          <div className="flex justify-between items-baseline mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Owner and Contract Management (CM & CMAR) Agreement
              </h3>
              <p className="text-base text-gray-700">
                Refer Article 2 and enter the project name and locations
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
            <div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
          </div>

          <div className="mx-6 mb-12">
            {/* Header */}
            {/* awardee Input */}
            <FieldArray
              name="location"
              render={(arrayHelpers) => (
                <>
                  <div className="flex flex-col mb-5">
                    <label
                      for="default-radio-1"
                      className="text-base text-gray-900 mb-1"
                    >
                      Project Name
                    </label>
                    {}
                    <input
                      // {...projectName}
                      value={props.values.projectName}
                      onChange={props.handleChange}
                      name="projectName"
                      placeholder="Project Name"
                      id="projectName"
                      className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                    />
                    {props.errors.projectName && props.touched.projectName && (
                      <Error message={props.errors.projectName} />
                    )}
                  </div>

                  {props?.values?.location?.map((cur, index) => (
                    <Fragment key={index}>
                      <div className="">
                        <p className="text-gray-600 font-bold text-lg mb-1">
                          Location ({index + 1})
                        </p>
                        <hr />
                      </div>

                      <div>
                        <div>
                          <div
                            className="w-10 ml-auto mt-1 cursor-pointer"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <CloseIcon />
                          </div>

                          <div className="flex flex-col my-5">
                            <label className="text-sm text-gray-900 mb-1">
                              Address
                            </label>
                            <input
                              value={
                                props?.values?.location[index]?.projectAddress
                              }
                              name="projectAddress"
                              id={`location.${[index]}.projectAddress`}
                              onChange={props.handleChange}
                              type="text"
                              placeholder="Street"
                              className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-x-4">
                            <FormInputContainer name="">
                              <FormSelect
                                value={
                                  props.values.location[index].projectState
                                }
                                name="projectState"
                                id={`location.${[index]}.projectState`}
                                onChange={props.handleChange}
                              >
                                <option
                                  value={
                                    props.values.location[index].projectState
                                  }
                                >
                                  {props.values.location[index].projectState ||
                                    "Select State"}
                                </option>
                                {!states
                                  ? null
                                  : Object.entries(states).map((cur, index) => {
                                      return (
                                        <option key={index} value={cur[1].name}>
                                          {cur[1].name}
                                        </option>
                                      );
                                    })}
                              </FormSelect>
                              {props.errors.projectState &&
                                props.touched.projectState && (
                                  <Error message={props.errors.projectState} />
                                )}
                            </FormInputContainer>

                            <FormInputContainer name="">
                              <FormSelect
                                value={props.values.location[index].projectCity}
                                name="projectCity"
                                id={`location.${[index]}.projectCity`}
                                onChange={props.handleChange}
                              >
                                <option
                                  value={
                                    props.values.location[index].projectCity
                                  }
                                >
                                  {props.values.location[index].projectCity ||
                                    "Select City"}
                                </option>
                                {CheckState(index)}
                              </FormSelect>

                              {props.errors.projectCity &&
                                props.touched.projectCity && (
                                  <Error message={props.errors.projectCity} />
                                )}
                            </FormInputContainer>

                            <FormInputContainer name="">
                              <FormSelect
                                value={
                                  props.values.location[index].projectZipCode
                                }
                                name="projectZipCode"
                                id={`location.${[index]}.projectZipCode`}
                                onChange={props.handleChange}
                              >
                                <option
                                  value={
                                    props.values.location[index].projectZipCode
                                  }
                                >
                                  {props.values.location[index]
                                    .projectZipCode || "Select Zip Code"}
                                </option>
                                {CheckZipCode(index)}
                              </FormSelect>

                              {props.errors.projectZipCode &&
                                props.touched.projectZipCode && (
                                  <Error
                                    message={props.errors.projectZipCode}
                                  />
                                )}
                            </FormInputContainer>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))}

                  <div className="">
                    <button
                      onClick={() =>
                        arrayHelpers.push({
                          projectState: "",
                          projectCity: "",
                          projectZipCode: "",
                          projectAddress: "",
                        })
                      }
                      className={`text-white text-sm font-semibold px-4 hover:bg-blue-800 bg-[#693B79] transition-all focus:outline-none text-center rounded h-8`}
                      type="button"
                      disabled={props?.values?.location?.length >= 5}
                    >
                      ADD MORE LOCATION
                    </button>
                  </div>
                </>
              )}
            ></FieldArray>

            {/* Company Rep Input */}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Back"
              onClick={() => dispatch(prevStep(1))}
            />
            <DashboardButton
              hidden
              name="NEXT"
              type="submit"
              width="w-[77px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
