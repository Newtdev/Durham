import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { OverviewTextarea } from "../../../../Dashboard/Overview-dashboard/OverviewComponents";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate, { FormSelect } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";

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
  const substantialCompletionDate = {
    ...props,
    value: props.values.substantialCompletionDate,
    onChange: props.handleChange,
    name: "substantialCompletionDate",
    error: props.errors.substantialCompletionDate,
    touched: props.touched.substantialCompletionDate,
    placeholder: "Select date",
    //    prevPage
  };

  const conferenceAddress = {
    value: props.values.conferenceAddress,
    onChange: props.handleChange,
    name: "conferenceAddress",
    placeholder: "Street",
    id: "conferenceAddress",
  };

  const amount = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("amount", e.target.value);
      }
    },
    name: "amount",
    error: props.errors.amount,
    value: props.values.amount,
    touched: props.touched.amount,
    placeholder: "Amount",
    //    prevPage
  };
  const substantialAmount = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("substantialAmount", e.target.value);
      }
    },
    name: "substantialAmount",
    error: props.errors.substantialAmount,
    value: props.values.substantialAmount,
    touched: props.touched.substantialAmount,
    placeholder: "Amount",
    //    prevPage
  };
  const finalAmount = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("finalAmount", e.target.value);
      }
    },
    name: "finalAmount",
    error: props.errors.finalAmount,
    value: props.values.finalAmount,
    touched: props.touched.finalAmount,
    placeholder: "Amount",
    //    prevPage
  };
  const percentage = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("percentage", e.target.value);
      }
    },
    name: "percentage",
    error: props.errors.percentage,
    value: props.values.percentage,
    touched: props.touched.percentage,
    placeholder: "percentage",
    //    prevPage
  };

  const projectIntent = {
    value: props.values.projectIntent,
    onChange: props.handleChange,
    error: props.errors.percentage,
    touched: props.touched.percentage,
    name: "projectIntent",
    placeholder: "Use as:",
    id: "projectIntent",
  };
  const Name = {
    value: props.values.Name,
    onChange: props.handleChange,
    name: "Name",
    placeholder: "Names",
    id: "Name",
  };
  const conferenceState = {
    value: props.values.conferenceState,
    name: "",
    id: "conferenceState",
    onChange: props.handleChange,
  };
  const conferenceCity = {
    value: props.values.conferenceCity,
    onChange: props.handleChange,
    name: "",
    id: "conferenceCity",
  };

  const conferenceZipCode = {
    value: props.values.conferenceZipCode,
    name: "",
    id: "conferenceZipCode",
    onChange: props.handleChange,
  };

  function CheckState() {
    if (!props.values.conferenceState) {
      return;
    }
    let stat = Object.values(states)?.find(
      (state) => state.name === props.values.conferenceState
    );

    return Object.keys(stat.cities)?.map((cur, id) => {
      return (
        <option key={id} value={cur}>
          {cur}
        </option>
      );
    });
  }

  function CheckZipCode() {
    if (!props.values.conferenceCity) {
      return;
    }
    const city = Object.values(states)?.filter(
      (state) => state.name === props.values.conferenceState
    );
    const zipcode = city?.find((cities) => cities);
    return zipcode.cities[props.values.conferenceCity]?.map(
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
              <p className="text-base text-gray-700">1/3</p>
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
            <div className="bg-[#2F5461] h-2.5 w-[25%]"></div>
          </div>

          <div className="mx-6 mb-12">
            <div className=" mt-3 ml-2">
              <FormInputContainer name="On what date will the Agreement be made official?">
                <SelectDate {...agreementDate} />
                {props.errors.agreementDate && props.touched.agreementDate && (
                  <Error message={props.errors.agreementDate} />
                )}
              </FormInputContainer>

              <div className="flex flex-col ">
                <label className="text-base text-gray-900 ">
                  What is the project's intended use?
                </label>
                <OverviewTextarea {...projectIntent} />
              </div>
              <FormInputContainer name="Enter the project's substantial completion date.">
                <SelectDate {...substantialCompletionDate} />
                {props.errors.substantialCompletionDate &&
                  props.touched.substantialCompletionDate && (
                    <Error message={props.errors.substantialCompletionDate} />
                  )}
              </FormInputContainer>

              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  What is the project's Guaranteed Maximum Price?
                </p>
                <div className="relative w-full">
                  <input
                    {...amount}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.amount && props.touched.amount && (
                  <Error message={props.errors.amount} />
                )}
              </div>
              <div className="mb-4">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  What percentage of the cost of the work that was added or
                  removed serves as the base for fee adjustments?
                </p>
                <div className="relative w-full">
                  <input
                    {...percentage}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    %
                  </small>
                </div>
                {props.errors.percentage && props.touched.percentage && (
                  <Error message={props.errors.percentage} />
                )}
              </div>
              <div className="w-full font-extrabold font-lg mb-4 pb-4 border-b">
                <h1 className="font-extrabold">
                  Enter the daily amount that the CM is required to pay for
                  liquidated damages.
                </h1>
              </div>

              <div>
                <div className="w-full flex items-center mb-5 mt-2 gap-x-3">
                  <div className="w-full">
                    <label className="text-base text-gray-900 mb-1">
                      Substantial completion
                    </label>
                    <div className="relative w-full">
                      <input
                        {...substantialAmount}
                        className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                      />
                      <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                        $
                      </small>
                    </div>
                    {props.errors.substantialAmount &&
                      props.touched.substantialAmount && (
                        <Error message={props.errors.substantialAmount} />
                      )}
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-base text-gray-900 mb-1">
                      Final completion
                    </label>
                    <div className="relative w-full">
                      <input
                        {...finalAmount}
                        className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                      />
                      <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                        $
                      </small>
                    </div>

                    {props.errors.finalAmount && props.touched.finalAmount && (
                      <Error message={props.errors.finalAmount} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label
                  for="default-radio-1"
                  className="text-base text-gray-900 mb-1"
                >
                  Name
                </label>
                <input
                  {...Name}
                  className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                />
                {props.errors.Name && props.touched.Name && (
                  <Error message={props.errors.Name} />
                )}
              </div>
              <div className="flex flex-col mb-5">
                <label
                  for="default-radio-1"
                  className="text-base text-gray-900 mb-1"
                >
                  Address
                </label>
                <input
                  {...conferenceAddress}
                  className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                />
                {props.errors.conferenceAddress &&
                  props.touched.conferenceAddress && (
                    <Error message={props.errors.conferenceAddress} />
                  )}
              </div>
              <div className="grid grid-cols-3 gap-x-4">
                <FormInputContainer name="">
                  <FormSelect {...conferenceState}>
                    <option value={conferenceState.value}>
                      {conferenceState.value}
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
                  {props.errors.conferenceState &&
                    props.touched.conferenceState && (
                      <Error message={props.errors.conferenceState} />
                    )}
                </FormInputContainer>

                <FormInputContainer name="">
                  <FormSelect {...conferenceCity}>
                    <option value={conferenceCity.value}>
                      {conferenceCity.value}
                    </option>
                    {CheckState()}
                  </FormSelect>

                  {props.errors.conferenceCity &&
                    props.touched.conferenceCity && (
                      <Error message={props.errors.conferenceCity} />
                    )}
                </FormInputContainer>

                <FormInputContainer name="">
                  <FormSelect {...conferenceZipCode}>
                    <option value="">Select zipcode</option>
                    {CheckZipCode()}
                  </FormSelect>

                  {props.errors.conferenceZipCode &&
                    props.touched.conferenceZipCode && (
                      <Error message={props.errors.conferenceZipCode} />
                    )}
                </FormInputContainer>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Previous"
              onClick={() => dispatch(closeModal())}
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

export default FormOne;
