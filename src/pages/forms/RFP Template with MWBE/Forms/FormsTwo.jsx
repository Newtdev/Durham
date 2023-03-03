import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate, { FormInputPlain, FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { SelectTime } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevStep } from "../reducer";

const FormTwo = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  // function CheckState(index) {
  //   if (!props.values.location[index].projectState) {
  //     return;
  //   }
  //   let stat = Object.values(states)?.find(
  //     (state) => state.name === props.values.location[index].projectState
  //   );

  //   if (!stat) {
  //     return;
  //   }
  //   return Object.keys(stat.cities)?.map((cur, id) => {
  //     return (
  //       <option key={id} value={cur}>
  //         {cur}
  //       </option>
  //     );
  //   });
  // }

  // function CheckZipCode(index) {
  //   if (!props.values.location[index].projectCity) {
  //     return;
  //   }
  //   const city = Object.values(states)?.filter(
  //     (state) => state.name === props.values.location[index].projectState
  //   );
  //   const zipcode = city?.find((cities) => cities);
  //   return zipcode.cities[props.values.location[index].projectCity]?.map(
  //     (zipcode, index) => {
  //       return (
  //         <option key={index} value={zipcode}>
  //           {zipcode}
  //         </option>
  //       );
  //     }
  //   );
  // }

  const issueDate = {
    ...props,
    value: props.values.issueDate,
    onChange: props.handleChange,
    name: "issueDate",
    error: props.errors.issueDate,
    touched: props.touched.issueDate,
    placeholder: "Select date",
    //    prevPage
  };

  const proposalDate = {
    ...props,
    value: props.values.proposalDate,
    onChange: props.handleChange,
    name: "proposalDate",
    error: props.errors.proposalDate,
    touched: props.touched.proposalDate,
    placeholder: "Select date",
    //    prevPage
  };

  const submissionDate = {
    ...props,
    value: props.values.submissionDate,
    onChange: props.handleChange,
    name: "submissionDate",
    error: props.errors.submissionDate,
    touched: props.touched.submissionDate,
    placeholder: "Select date",
    //    prevPage
  };

  const answerDate = {
    ...props,
    value: props.values.answerDate,
    onChange: props.handleChange,
    name: "answerDate",
    error: props.errors.answerDate,
    touched: props.touched.answerDate,
    placeholder: "Select date",
    //    prevPage
  };

  const bidOpeningDate = {
    ...props,
    value: props.values.bidOpeningDate,
    onChange: props.handleChange,
    name: "bidOpeningDate",
    error: props.errors.bidOpeningDate,
    touched: props.touched.bidOpeningDate,
    placeholder: "Select date",
    //    prevPage
  };

  const proposalSubmissionDate = {
    ...props,
    value: props.values.proposalSubmissionDate,
    onChange: props.handleChange,
    name: "proposalSubmissionDate",
    error: props.errors.proposalSubmissionDate,
    touched: props.touched.proposalSubmissionDate,
    placeholder: "Select date",
    //    prevPage
  };

  const proposalTime = {
    ...props,
    value: props.values.proposalTime,
    onChange: props.handleChange,
    name: "proposalTime",
    error: props.errors.proposalTime,
    touched: props.touched.proposalTime,
    placeholder: "Select time",
    //    prevPage
  };

  const conferenceTime = {
    ...props,
    value: props.values.conferenceTime,
    onChange: props.handleChange,
    name: "conferenceTime",
    placeholder: "Conference Time",
  };

  const submissionTime = {
    ...props,
    value: props.values.submissionTime,
    onChange: props.handleChange,
    name: "submissionTime",
    error: props.errors.submissionTime,
    touched: props.touched.submissionTime,
    placeholder: "Select time",
    //    prevPage
  };

  const answerTime = {
    ...props,
    value: props.values.answerTime,
    onChange: props.handleChange,
    name: "answerTime",
    error: props.errors.answerTime,
    touched: props.touched.answerTime,
    placeholder: "Select time",
    //    prevPage
  };

  const bidOpeningTime = {
    ...props,
    value: props.values.bidOpeningTime,
    onChange: props.handleChange,
    name: "bidOpeningTime",
    error: props.errors.bidOpeningTime,
    touched: props.touched.bidOpeningTime,
    placeholder: "Select time",
    //    prevPage
  };

  const proposalSubmissionTime = {
    ...props,
    value: props.values.proposalSubmissionTime,
    onChange: props.handleChange,
    name: "proposalSubmissionTime",
    error: props.errors.proposalSubmissionTime,
    touched: props.touched.proposalSubmissionTime,
    placeholder: "Select time",
    //    prevPage
  };

  const date = {
    ...props,
    value: props.values.date,
    onChange: props.handleChange,
    name: "date",
    error: props.errors.date,
    touched: props.touched.date,
    placeholder: "Select date",
    //    prevPage
  };

  const time = {
    ...props,
    value: props.values.time,
    onChange: props.handleChange,
    name: "time",
    error: props.errors.time,
    touched: props.touched.time,
    placeholder: "Select time",
    //    prevPage
  };

  // const state = [
  //   { name: "Alabama" },
  //   { name: "Alaska" },
  //   { name: "Arizona" },
  //   { name: "Arkansas" },
  //   { name: "California" },
  //   { name: "Colorado" },
  //   { name: "Connecticut" },
  //   { name: "Deleware" },
  //   { name: "Florida" },
  //   { name: "Georgia" },
  //   { name: "Florida" },
  //   { name: "Georgia" },
  //   { name: "Hawaii" },
  //   { name: "Idaho" },
  //   { name: "Illinois" },
  //   { name: "Indiana" },
  //   { name: "Lowa" },
  //   { name: "Kandas" },
  //   { name: "Kentucky" },
  //   { name: "Louisiana" },
  //   { name: "Maine" },
  //   { name: "Maryland" },
  //   { name: "Massachusetts" },
  //   { name: "Michigan" },
  //   { name: "Minnesota" },
  //   { name: "Mississippi" }
  // ];

  // const city = [
  //   { name: "New York" },
  //   { name: "Los Angeles" },
  //   { name: "Chicago" },
  //   { name: "Houston" },
  //   { name: "Philadelphia" },
  //   { name: "Phoenix" },
  // ];

  const state = {
    value: props.values.state,
    name: "",
    id: "state",
    onChange: props.handleChange,
  };
  const city = {
    value: props.values.city,
    onChange: props.handleChange,
    name: "",
    id: "city",
  };

  const zipCode = {
    value: props.values.zipCode,
    name: "",
    id: "zipCode",
    onChange: props.handleChange,
  };

  function CheckState() {
    if (!props.values.state) {
      return;
    }
    let stat = Object.values(states)?.find(
      (state) => state.name === props.values.state
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
    if (!props.values.city) {
      return;
    }
    const city = Object.values(states)?.filter(
      (state) => state.name === props.values.state
    );
    const zipcode = city?.find((cities) => cities);
    return zipcode.cities[props.values.city]?.map((zipcode, index) => {
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
        className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}

        <form
          className="relative w-[600px] bg-white rounded-lg shadow py-4"
          onSubmit={props.handleSubmit}
        >
          <div className="flex justify-between items-baseline mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                RFP Template with MWBE
              </h3>
              <p className="text-base text-gray-700">
                Proposal Schedule details
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
            <div className="bg-[#2F5461] h-2.5 w-2/3"></div>
          </div>

          {/* form */}
          <div className="flex flex-col mx-6 mb-12">
            <FormInputContainer name="Enter the Issue of RFP Date">
              <SelectDate {...issueDate} />
              {props.errors.issueDate && props.touched.issueDate && (
                <Error message={props.errors.issueDate} />
              )}
            </FormInputContainer>

            <FormInputContainer name="Enter the Proposal Due Date and Time">
              <div className="flex gap-2 justify-center w-full items-end">
                <div className="w-full">
                  <SelectDate {...proposalDate} />
                  {props.errors.proposalDate && props.touched.proposalDate && (
                    <Error message={props.errors.proposalDate} />
                  )}
                </div>
                <div className="w-full">
                  <SelectTime {...proposalTime} />
                </div>
              </div>
            </FormInputContainer>

            <FormInputContainer name="By what date and time must the questions be submitted?">
              <div className="flex gap-2 justify-center w-full items-end">
                <div className="w-full">
                  <SelectDate {...submissionDate} />
                  {props.errors.submissionDate &&
                    props.touched.submissionDate && (
                      <Error message={props.errors.submissionDate} />
                    )}
                </div>
                <div className="w-full">
                  <SelectTime {...submissionTime} />
                </div>
              </div>
            </FormInputContainer>

            <FormInputContainer name="When will the answers to the questions be provided?">
              <div className="flex gap-2 justify-center w-full items-end">
                <div className="w-full">
                  <SelectDate {...answerDate} />
                  {props.errors.answerDate && props.touched.answerDate && (
                    <Error message={props.errors.answerDate} />
                  )}
                </div>
                <div className="w-full">
                  <SelectTime {...answerTime} />
                </div>
              </div>
            </FormInputContainer>

            <FormInputContainer name="Enter the Bid Opening Date and Time">
              <div className="flex gap-2 justify-center w-full items-end">
                <div className="w-full">
                  <SelectDate {...bidOpeningDate} />
                  {props.errors.bidOpeningDate &&
                    props.touched.bidOpeningDate && (
                      <Error message={props.errors.bidOpeningDate} />
                    )}
                </div>
                <div className="w-full">
                  <SelectTime {...bidOpeningTime} />
                </div>
              </div>
            </FormInputContainer>

            <FormInputContainer name="By what date and time must the sealed and online(IPS) proposals be submitted?">
              <div className="flex gap-2 justify-center w-full items-end">
                <div className="w-full">
                  <SelectDate {...proposalSubmissionDate} />
                  {props.errors.proposalSubmissionDate &&
                    props.touched.proposalSubmissionDate && (
                      <Error message={props.errors.proposalSubmissionDate} />
                    )}
                </div>
                <div className="w-full">
                  <SelectTime {...proposalSubmissionTime} />
                </div>
              </div>
            </FormInputContainer>

            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
                <h2>Enter the Pre-Bid Meeting details</h2>
              </div>
              <div className="flex flex-col px-3 py-3 border border-[#9CA3AF]">
                <FormInputContainer name="Location">
                  <FormInputPlain
                    type={"text"}
                    onChange={props.handleChange}
                    name="street"
                    placeholder={"Street"}
                  />
                  {props.errors.street && props.touched.street && (
                    <Error message={props.errors.street} />
                  )}
                </FormInputContainer>

                {/* <div className="flex gap-2 justify-center items-end">
                  <FormSelect
                    value={props.values.state}
                    id="state"
                    error={props.errors.state}
                    touched={props.touched.state}
                    onChange={props.handleChange}
                  >
                    <option value="">Select State</option>
                    {state?.map((state, index) => {
                      return (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })}
                  </FormSelect>

                  <FormSelect
                    value={props.values.city}
                    id="city"
                    error={props.errors.city}
                    touched={props.touched.city}
                    onChange={props.handleChange}
                  >
                    <option value="">Select City</option>
                    {city?.map((city, index) => {
                      return (
                        <option key={index} value={city.name}>
                          {city.name}
                        </option>
                      );
                    })}
                  </FormSelect>

                  <div className="flex flex-col w-full">
                    <FormInputPlain
                      type={"text"}
                      onChange={props.handleChange}
                      name="zipCode"
                      placeholder={"Zip Code"}
                    />
                    {props.errors.zipCode && props.touched.zipCode && (
                      <Error message={props.errors.zipCode} />
                    )}
                  </div>
                </div> */}
                 <div className="grid grid-cols-3 gap-x-4">
                <FormInputContainer name="">
                  <FormSelect {...state}>
                    <option value="">Select State</option>
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
                  {props.errors.state &&
                    props.touched.state && (
                      <Error message={props.errors.state} />
                    )}
                </FormInputContainer>

                <FormInputContainer name="">
                  <FormSelect {...city}>
                    <option value="">Select City</option>
                    {CheckState()}
                  </FormSelect>

                  {props.errors.city &&
                    props.touched.city && (
                      <Error message={props.errors.city} />
                    )}
                </FormInputContainer>

                <FormInputContainer name="">
                  <FormSelect {...zipCode}>
                    <option value="">Select zipcode</option>
                    {CheckZipCode()}
                  </FormSelect>

                  {props.errors.zipCode &&
                    props.touched.zipCode && (
                      <Error message={props.errors.zipCode} />
                    )}
                </FormInputContainer>
              </div>

                <div className="flex gap-2 mt-3 justify-center w-full items-end">
                  <div className="w-full">
                    <SelectDate {...date} />
                    {props.errors.date && props.touched.date && (
                      <Error message={props.errors.date} />
                    )}
                  </div>
                  <div className="w-full">
                    <SelectTime {...time} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RFP-Template-with-MWBE */}
          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Previous"
              onClick={() => dispatch(prevStep(1))}
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
