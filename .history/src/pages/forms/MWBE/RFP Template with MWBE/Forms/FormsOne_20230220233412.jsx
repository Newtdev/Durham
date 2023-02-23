import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { OverviewTextarea } from "../../../../Dashboard/Overview-dashboard/OverviewComponents";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain } from "../../../components";

const FormOne = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  const bidderName = {
    value: props.values.bidderName,
    onChange: props.handleChange,
    name: "bidderName",
    placeholder: "NbidderName",
    id: "bidderName",
  };

  const rfpNumber = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("rfpNumber", e.target.value);
      }
    },
    name: "rfpNumber",
    error: props.errors.rfpNumber,
    value: props.values.rfpNumber,
    touched: props.touched.rfpNumber,
    placeholder: "rfpNumber",
    //    prevPage
  };

  const personName = {
    value: props.values.personName,
    onChange: props.handleChange,
    name: "personName",
    placeholder: "NpersonName",
    id: "personName",
  };

  const contractType = {
    value: props.values.contractType,
    onChange: props.handleChange,
    name: "contractType",
    placeholder: "contractType",
    id: "contractType",
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
                RFP Template with MWBE
              </h3>
              <p className="text-base text-gray-700">RFP Details</p>
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
            <div className="bg-[#2F5461] h-2.5 w-1/3"></div>
          </div>

          <div className="mx-6 mb-12">
            <div className="mt-3 ml-2 ">
              <FormInputContainer name="Enter the Bidder's Name.">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="bidderName"
                  placeholder={"Name"}
                />
                {props.errors.bidderName && props.touched.bidderName && (
                  <Error message={props.errors.bidderName} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Enter the RFP Number">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="rfpNumber"
                  placeholder={"Number"}
                />
                {props.errors.rfpNumber && props.touched.rfpNumber && (
                  <Error message={props.errors.rfpNumber} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Enter the person's name for the 'ATTN' field.">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="personName"
                  placeholder={"Name"}
                />
                {props.errors.personName && props.touched.personName && (
                  <Error message={props.errors.personName} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Enter the contract type.">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="contractType"
                  placeholder={"Contract type"}
                />
                {props.errors.contractType && props.touched.contractType && (
                  <Error message={props.errors.contractType} />
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
