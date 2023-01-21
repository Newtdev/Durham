import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Calender, Error, Time } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { closeModal } from "../reducer";

export const FormInputBigContainer = ({ name, children, close }) => {
  return (
    <div className="flex flex-col">
      <label className="text-base font-semibold mb-1 py-4 px-2 bg-[#89A5AF] rounded-t-md flex items-center justify-between">
        {name}
        {close}
      </label>
      {children}
    </div>
  );
};
export const FormInputContainer = ({ name, children, pt }) => {
  return (
    <div className={pt ? "flex flex-col pt-7" : "flex flex-col mb-5"}>
      <label for="default-radio-1" className="text-base text-gray-900 mb-1">
        {name}
      </label>
      {children}
    </div>
  );
};

const SelectDate = (props) => {
  const { value, setFieldValue, name } = props;
  return (
    <label className="bg-gray-50 border flex items-center justify-between border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979]  w-full pr-2">
      <DatePicker
        // {...field}
        {...props}
        selected={value}
        name="date"
        onChange={(e) => setFieldValue(name, e)}
        className="w-full p-2.5 bg-gray-50"
        placeholderText="Select Date"
      />
      <Calender />
    </label>
  );
};
export const SelectTime = (props) => {
  const { value, setFieldValue, name } = props;

  return (
    <>
      <label className="bg-gray-50 border flex items-center justify-between border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979]  w-full pr-2">
        <DatePicker
          // {...field}
          {...props}
          selected={value}
          name="time"
          onChange={(e) => setFieldValue(name, e)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          className="w-full p-2.5 bg-gray-50"
          placeholderText="Select Time"
        />
        <Time />
      </label>
    </>
  );
};

const NoticeForm = (props) => {
  console.log(props.isLoading);

  const dispatch = useDispatch();

  const creationDate = {
    ...props,
    value: props.values.creationDate,
    onChange: props.handleChange,
    name: "creationDate",
    error: props.errors.creationDate,
    touched: props.touched.creationDate,
    //    prevPage
  };
  const startDate = {
    ...props,
    value: props.values.startDate,
    onChange: props.handleChange,
    name: "startDate",
    error: props.errors.startDate,
    touched: props.touched.startDate,
    //    prevPage
  };
  const startTime = {
    ...props,
    value: props.values.startTime,
    onChange: props.handleChange,
    name: "startTime",
    error: props.errors.startTime,
    touched: props.touched.startTime,
    //    prevPage
  };

  const deliveryDate = {
    ...props,
    value: props.values.deliveryDate,
    onChange: props.handleChange,
    error: props.errors.deliveryDate,
    touched: props.touched.deliveryDate,
    name: "deliveryDate",
  };

  return (
    <div>
      <div
        className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}

        <form
          onSubmit={props.handleSubmit}
          className="relative w-[600px] bg-white rounded-lg shadow py-4"
        >
          <div className="flex justify-between items-baseline mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Notice to Proceed - Contractor
              </h3>
              <p className="text-base text-gray-700"></p>
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
            <div className=" mt-3 ml-2">
              <FormInputContainer name="On what day are you creating this letter?">
                <SelectDate {...creationDate} />
                {props.errors.creationDate && props.touched.creationDate && (
                  <Error message={props.errors.creationDate} />
                )}
              </FormInputContainer>

              <FormInputContainer name="What time and date does the project go into effect?">
                <div className="grid grid-cols-2 gap-x-4">
                  <SelectDate {...startDate} />
                  <SelectTime {...startTime} />
                </div>
                <div className="flex justify-between">
                  {props.errors.startDate && props.touched.startDate && (
                    <Error message={props.errors.startDate} />
                  )}{" "}
                  {props.errors.startTime && props.touched.startTime && (
                    <Error message={props.errors.startTime} />
                  )}
                </div>
              </FormInputContainer>
              <FormInputContainer name="What is the substantial completion date of this project?">
                <SelectDate {...deliveryDate} />
                {props.errors.deliveryDate && props.touched.deliveryDate && (
                  <Error message={props.errors.deliveryDate} />
                )}
              </FormInputContainer>
            </div>
            {/* {error && touched && <Error message={error} />} */}
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
              loading={props.isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoticeForm;
