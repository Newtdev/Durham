import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { FormInputPlain } from "../../components";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";
import { FieldArray } from "formik";
import { Fragment } from "react";

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

const FormSix = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  const signDate = {
    ...props,
    value: props.values.signDate,
    onChange: props.handleChange,
    name: "signDate",
    error: props.errors.signDate,
    touched: props.touched.signDate,
    placeholder: "Select date",
    //    prevPage
  };

  const approveDate = {
    ...props,
    value: props.values.approveDate,
    onChange: props.handleChange,
    name: "approveDate",
    error: props.errors.approveDate,
    touched: props.touched.approveDate,
    placeholder: "Select date",
    //    prevPage
  };

  const notarySealDate = {
    ...props,
    value: props.values.notarySealDate,
    onChange: props.handleChange,
    name: "notarySealDate",
    error: props.errors.notarySealDate,
    touched: props.touched.notarySealDate,
    placeholder: "Select date",
  };

  const handler = (e, push) => {
    if (e.key === "Enter") {
      push({
        service: e.target.value,
      });
      e.target.value = "";
    }
  };

  return (
    <div>
      <div
        className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <form className="relative w-[600px] bg-white rounded-lg shadow py-4">
          <div className="flex items-baseline justify-between mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Owner and Design Consultant (more $200,000)
              </h3>
              <p className="text-base text-gray-700">Other requirements</p>
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
            {/* <div className="mt-3 ml-2 flex flex-col gap-3 ">
              <FieldArray
                name="services"
                render={({ remove, push }) => (
                  <>
                    <div className="flex flex-col gap-3 mt-5">
                      <div className="flex flex-col my-4">
                        <label className="text-base text-gray-900 mb-1">
                          Enter any services the owner provides.
                        </label>
                        <input
                          onKeyDown={(e) => handler(e, push)}
                          id="service"
                          placeholder="Services"
                          className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                      </div>
                      {props.errors.service && props.touched.service && (
                        <Error message={props.errors.service} />
                      )}
                    </div>
                    <div className="flex gap-2 justify-start">
                      {props?.values?.services?.map(({ service }, index) => (
                        <Fragment key={index}>
                          {service === "" ? (
                            <div></div>
                          ) : (
                            <div
                              className="flex rounded-md px-2 py-1 w-fit justify-center items-center bg-[#89A5AF] cursor-pointer"
                              onClick={() => remove(index)}
                            >
                              {service}
                            </div>
                          )}
                        </Fragment>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
                      onClick={() => push({ service: "" })}
                      disabled={
                        props?.values?.services?.length > 4 ? true : false
                      }
                    >
                      ADD SERVICES
                    </button>
                  </>
                )}
              />

              <FormInputContainer name="When does the Chief Financial Officer sign the document?">
                <SelectDate {...signDate} />
                {props.errors.signDate && props.touched.signDate && (
                  <Error message={props.errors.signDate} />
                )}
              </FormInputContainer>

              <FormInputContainer name="What day will the board approve the document?">
                <SelectDate {...approveDate} />
                {props.errors.approveDate && props.touched.approveDate && (
                  <Error message={props.errors.approveDate} />
                )}
              </FormInputContainer>

              <FormInputContainer name="When will the document be notarized? (Notary Seal Date)">
                <SelectDate {...notarySealDate} />
                {props.errors.notarySealDate &&
                  props.touched.notarySealDate && (
                    <Error message={props.errors.notarySealDate} />
                  )}
              </FormInputContainer>
            </div> */}
            <FieldArray
              name="services"
              render={({ remove, push }) => (
                <>
                  <div className="mt-4">
                    <h2 className="font-bold border-b w-full border-b-gray-400 pb-1 mb-2">
                      Enter any services the owner provides.
                    </h2>
                  </div>
                  <div>
                    {props?.values?.services?.map((service, index) => (
                      <Fragment key={index}>
                        <FormInputContainer>
                          <div
                            className="w-10 ml-auto mt-1 cursor-pointer"
                            onClick={() => remove(index)}
                          >
                            <CloseIcon />
                          </div>
                          <FormInputPlain
                            type={"text"}
                            onChange={props.handleChange}
                            name={`services[${index}].service`}
                            id={`services[${index}].service`}
                            value={props?.values?.services[index].service}
                            placeholder={`Item ${index + 1}`}
                          />
                        </FormInputContainer>
                      </Fragment>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
                    onClick={() => push({ service: "" })}
                    disabled={
                      props?.values?.services?.length > 9 ? true : false
                    }
                  >
                    ADD SERVICES
                  </button>
                </>
              )}
            ></FieldArray>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Back"
              onClick={() => dispatch(prevStep(5))}
            />
            <DashboardButton
              hidden
              name="NEXT"
              type="button"
              width="w-[77px]"
              loading={props.isLoading}
              onClick={() => props.handleSubmit()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSix;
