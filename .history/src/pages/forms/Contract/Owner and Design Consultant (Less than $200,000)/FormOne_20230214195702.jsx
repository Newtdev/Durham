import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain } from "../../components";
import { SelectDate } from "../../components";

const FormOne = (props) => {
  const dispatch = useDispatch();

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

  const sustainaibilityDate = {
    ...props,
    value: props.values.sustainaibilityDate,
    onChange: props.handleChange,
    name: "sustainaibilityDate",
    error: props.errors.sustainaibilityDate,
    touched: props.touched.sustainaibilityDate,
    placeholder: "Select date",
  };

  const financialOfficerSignDate = {
    ...props,
    value: props.values.financialOfficerSignDate,
    onChange: props.handleChange,
    name: "financialOfficerSignDate",
    error: props.errors.financialOfficerSignDate,
    touched: props.touched.financialOfficerSignDate,
    placeholder: "Select date",
  };

  const notarizedDate = {
    ...props,
    value: props.values.notarizedDate,
    onChange: props.handleChange,
    name: "notarizedDate",
    error: props.errors.notarizedDate,
    touched: props.touched.notarizedDate,
  };

  return (
    <div>
      <div className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14">
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
              <FormInputContainer name="On what date will the Agreement be made official?">
                <SelectDate {...agreementDate} />
                {props.errors.agreementDate && props.touched.agreementDate && (
                  <Error message={props.errors.agreementDate} />
                )}
              </FormInputContainer>

              <FormInputContainer name="When does the Director of Construction and Sustainability sign the document?">
                <SelectDate {...sustainaibilityDate} />
                {props.errors.sustainaibilityDate &&
                  props.touched.sustainaibilityDate && (
                    <Error message={props.errors.sustainaibilityDate} />
                  )}
              </FormInputContainer>
              <FormInputContainer name="When does the Chief Financial Officer sign the document?">
                <SelectDate {...financialOfficerSignDate} />
                {props.errors.financialOfficerSignDate &&
                  props.touched.financialOfficerSignDate && (
                    <Error message={props.errors.financialOfficerSignDate} />
                  )}
              </FormInputContainer>
              <FormInputContainer name="When will the document be notarized? (Notary Seal Date)">
                <SelectDate {...notarizedDate} />
                {props.errors.notarizedDate && props.touched.notarizedDate && (
                  <Error message={props.errors.notarizedDate} />
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

export default FormOne;
