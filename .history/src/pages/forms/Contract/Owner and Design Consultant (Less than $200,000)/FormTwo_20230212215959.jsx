import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { SelectTime } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { FormSelect } from "../Components";
import { getList, prevChoiceStep } from "../reducer";

const FormTwo = (props) => {
  const states = useSelector(getList);

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
                Owner and Design Consultant Agreement (less than $200,000)
              </h3>
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
            <div className="bg-[#2F5461] h-2.5 w-full"></div>
          </div>
          <div className="mx-6 mb-12">
            <div className="mt-3 ml-2 flex flex-col gap-3 ">
              {/* <FormInputContainer name="On what date will the Agreement be made official?">
        <SelectDate {...agreementDate} />
        {props.errors.agreementDate && props.touched.agreementDate && (
          <Error message={props.errors.agreementDate} />
        )}
      </FormInputContainer> */}
              <FormInputContainer name="To specify the type of check, check the relevant box.">
                <div className=" mt-3 ml-2">
                  <div className="flex items-center mb-5">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="Initial"
                      name="sexualOffenderOption"
                      onChange={props.handleChange}
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-2 text-base text-gray-900"
                    >
                      Initial{" "}
                    </label>
                  </div>
                  <div className="flex items-center mb-5">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="Supplemental"
                      name="sexualOffenderOption"
                      onChange={props.handleChange}
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-2 text-base text-gray-900"
                    >
                      Supplemental
                    </label>
                  </div>
                </div>
                {props.errors.presenceOfBiders &&
                  props.touched.presenceOfBiders && (
                    <Error message={props.errors.presenceOfBiders} />
                  )}
              </FormInputContainer>
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

export default FormTwo;
