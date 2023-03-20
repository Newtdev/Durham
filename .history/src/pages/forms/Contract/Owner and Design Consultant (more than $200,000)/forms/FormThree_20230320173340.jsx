import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormSelect } from "../../../components";
import { FieldArray } from "formik";
import { prevStep } from "../reducer";
import { Fragment } from "react";

const FormThree = (props) => {
  const dispatch = useDispatch();

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
                Requirements for the project
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
            <div className="bg-[#2F5461] h-2.5 w-3/6"></div>
          </div>

          <div className="mx-6 mb-12 ">
            <div className="mt-3 ml-2 flex flex-col gap-3 ">
              <FieldArray
                name="consultants"
                render={({ remove, push }) => (
                  <>
                    <div className="flex flex-col gap-3 mt-5">
                      {props?.values?.consultants?.map((consultant, index) => (
                        <Fragment key={index}>
                          <div className="flex flex-col w-full">
                            <div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
                              <h2>{`Consultants Hired (${index + 1})`}</h2>
                              {index !== 0 && (
                                <button
                                  onClick={() => remove(index)}
                                  type="button"
                                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                  data-modal-toggle="small-modal"
                                >
                                  <Close />
                                </button>
                              )}
                            </div>
                            <div className="flex flex-col gap-4 px-3 pt-3 border border-[#9CA3AF]">
                              <FormSelect
                                value={
                                  props?.values?.consultants[index]
                                    .consultantHired
                                }
                                name="Select the consultants hired at the Design Consultant' s expense."
                                id={`consultants[${index}].consultantHired`}
                                error={props.errors.consultantHired}
                                touched={props.touched.consultantHired}
                                onChange={props.handleChange}
                              >
                                <option
                                  value={
                                    props?.values?.consultants[index]
                                      .consultantHired
                                  }
                                >
                                  {props?.values?.consultants[index]
                                    .consultantHired || "Select Consultant"}
                                </option>
                                <option value="Structural">Structural</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Civil">Civil</option>
                                <option value="Landscape">Landscape</option>
                                <option value="Other">Other</option>
                              </FormSelect>
                              <FormInputContainer
                                name={`Enter the ${props?.values?.consultants[index].consultantHired}’s name`}
                              >
                                <FormInputPlain
                                  type={"text"}
                                  value={
                                    props?.values?.consultants[index]
                                      .selectedField
                                  }
                                  onChange={props.handleChange}
                                  name={`consultants[${index}].selectedField`}
                                  placeholder={"Enter selected Field"}
                                />
                                {props.errors.selectedField &&
                                  props.touched.selectedField && (
                                    <Error
                                      message={props.errors.selectedField}
                                    />
                                  )}
                              </FormInputContainer>
                            </div>
                          </div>
                        </Fragment>
                      ))}
                      <div className="mt-4">
                        <button
                          type="button"
                          className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
                          onClick={() =>
                            push({
                              consultantHired: "",
                              selectedField: "",
                            })
                          }
                        >
                          ADD MORE ITEMS
                        </button>
                      </div>
                    </div>
                  </>
                )}
              ></FieldArray>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Back"
              onClick={() => dispatch(prevStep(2))}
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

export default FormThree;
