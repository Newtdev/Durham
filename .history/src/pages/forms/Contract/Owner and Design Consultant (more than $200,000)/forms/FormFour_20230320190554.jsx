import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormInput } from "../../../components";
import { prevStep } from "../reducer";

const FormFour = (props) => {
  const dispatch = useDispatch();

  const ownerDeadline = {
    ...props,
    value: props.values.ownerDeadline,
    onChange: props.handleChange,
    name: "ownerDeadline",
    error: props.errors.ownerDeadline,
    touched: props.touched.ownerDeadline,
    placeholder: "Select date",
    //    prevPage
  };

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
                Agreement and Project details.
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
            <div className="bg-[#2F5461] h-2.5 w-4/6"></div>
          </div>

          <div className="mx-6 mb-12">
            <div className="mt-3 ml-2 flex flex-col gap-3 ">
              <div className="flex flex-col my-4">
                <label className="text-base text-gray-900 mb-1">
                  Enter the Design, Construction, and Equipment Budget.
                </label>
                <div className="relative w-full">
                  <input
                    value={props.values.ccap}
                    id="ccap"
                    onChange={(e) => {
                      if (isNaN(e.target.value)) {
                        return;
                      } else {
                        props.setFieldValue("ccap", e.target.value);
                      }
                    }}
                    placeholder="CCAP"
                    className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 pl-8 flex items-center "
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.ccap && props.touched.ccap && (
                  <Error message={props.errors.ccap} />
                )}
              </div>

              <FormInputContainer name="Based on the date of the bid, enter the owner's deadline for ordering drawings and specifications.">
                <SelectDate {...ownerDeadline} />
                {props.errors.ownerDeadline && props.touched.ownerDeadline && (
                  <Error message={props.errors.ownerDeadline} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Enter the percentage of the said price for the in-progress contingency fund.">
                <FormInputPlain
                  value={props?.values?.percentage}
                  onChange={(e) => {
                    if (isNaN(e.target.value)) {
                      return;
                    } else {
                      props.setFieldValue("percentage", e.target.value);
                    }
                  }}
                  name="percentage"
                  placeholder="Percentage"
                />
                {props.errors.percentage && props.touched.percentage && (
                  <Error message={props.errors.percentage} />
                )}
              </FormInputContainer>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Back"
              onClick={() => dispatch(prevStep(3))}
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

export default FormFour;
