import { FieldArray } from "formik";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../components";
import {
  FormInputBigContainer,
  FormInputContainer,
} from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const MultiVendors = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  const selectVendor = {
    ...props,
    value: props.values.selectVendor,
    onChange: props.handleChange,
    name: "Select Vendor",
  };

  // const removeItem = (vendor) => {
  //   const newForm = [...vendors];
  //   newForm.splice(vendor, 1);
  //   setVendors(newForm);
  // };

  function CheckState(index) {
    if (!props.values.information[index].projectState) {
      return;
    }
    let stat = Object.values(states)?.find(
      (state) => state.name === props.values.information[index].projectState
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
    if (!props.values.information[index].projectCity) {
      return;
    }
    const city = Object.values(states)?.filter(
      (state) => state.name === props.values.information[index].projectState
    );
    const zipcode = city?.find((cities) => cities);
    return zipcode.cities[props.values.information[index].projectCity]?.map(
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
    <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
      <form
        className="relative w-[600px] bg-white rounded-lg shadow py-4 "
        onSubmit={props.handleSubmit}
      >
        <div className="flex justify-between items-baseline mx-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">3 bids</h3>
            <p className="text-base text-gray-700">Vendors Information</p>
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
        <div className="mx-6 mb-3">
          <p className="text-base text-[#693B79]">
            3 vendors are required to generate this form
          </p>
          <div className=" mt-3">
            <FieldArray
              name="information"
              render={({ remove, push }) => (
                <>
                  <div className="mt-5">
                    {props?.values?.information.map((cur, index) => (
                      <Fragment key={index}>
                        <div className=" mb-3">
                          <div className=" border-spacing-10 bg-gray-50 rounded-md p-1">
                            <FormInputBigContainer
                              name={`Vendor Information (${index + 1})`}
                              close={
                                <button
                                  onClick={() => remove(index)}
                                  type="button"
                                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                  data-modal-toggle="small-modal"
                                >
                                  <Close />
                                </button>
                              }
                            >
                              <div className="flex flex-col rounded-md bg-white px-1">
                                <FormSelect {...selectVendor}>
                                  <option value="">Add New Vendor</option>
                                  {/* {CheckZipCode()} */}
                                </FormSelect>
                                {props.errors.addVendor &&
                                  props.touched.addVendor && (
                                    <Error message={props.errors.addVendor} />
                                  )}
                                <div className="flex flex-col my-5">
                                  <label className="text-base text-gray-900 mb-1">
                                    Company Name
                                  </label>
                                  <input
                                    value={
                                      props.values.information[index]
                                        .companyName
                                    }
                                    name={`information.${[index]}.companyName`}
                                    onChange={props.handleChange}
                                    type="text"
                                    placeholder="Company Name"
                                    className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                                  />
                                  {props.errors.companyName &&
                                    props.touched.companyName && (
                                      <Error
                                        message={props.errors.companyName}
                                      />
                                    )}
                                </div>
                                <div className="flex flex-col mb-5">
                                  <label className="text-base text-gray-900 mb-1">
                                    Address
                                  </label>
                                  <input
                                    value={
                                      props.values.information[index].address
                                    }
                                    name={`information.${[index]}.address`}
                                    onChange={props.handleChange}
                                    type="text"
                                    placeholder="Address"
                                    className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                                  />
                                  {props.errors.address &&
                                    props.touched.address && (
                                      <Error message={props.errors.address} />
                                    )}
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex-1">
                                    <FormSelect hidden>
                                      value=
                                      {
                                        props.values.information[index]
                                          .projectState
                                      }
                                      name=
                                      {`information.${[index]}.projectState`}
                                      onChange={props.handleChange}
                                      <option value="">Select State</option>
                                      {!states
                                        ? null
                                        : Object.entries(states).map(
                                            (cur, index) => {
                                              return (
                                                <option
                                                  key={index}
                                                  value={cur[1].name}
                                                >
                                                  {cur[1].name}
                                                </option>
                                              );
                                            }
                                          )}
                                    </FormSelect>
                                    {props.errors.projectState &&
                                      props.touched.projectState && (
                                        <Error
                                          message={props.errors.projectState}
                                        />
                                      )}
                                  </div>
                                  <div className="flex-1">
                                    <FormSelect hidden>
                                      value=
                                      {
                                        props.values.information[index]
                                          .projectCity
                                      }
                                      name=
                                      {`information.${[index]}.projectCity`}
                                      onChange={props.handleChange}
                                      <option value="">Select City</option>
                                      {CheckState(index)}
                                    </FormSelect>

                                    {props.errors.projectCity &&
                                      props.touched.projectCity && (
                                        <Error
                                          message={props.errors.projectCity}
                                        />
                                      )}
                                  </div>
                                  <div className="flex-1">
                                    <FormSelect hidden>
                                      value=
                                      {
                                        props.values.information[index]
                                          .projectZipCode
                                      }
                                      name=
                                      {`information.${[index]}.projectZipCode`}
                                      onChange={props.handleChange}
                                      <option value="">Zip Code</option>
                                      {CheckZipCode(index)}
                                    </FormSelect>

                                    {props.errors.projectZipCode &&
                                      props.touched.projectZipCode && (
                                        <Error
                                          message={props.errors.projectZipCode}
                                        />
                                      )}
                                    {/* <input
                                      {...zipCode}
                                      className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                                    />
                                    {props.errors.zipCode &&
                                      props.touched.zipCode && (
                                        <Error message={props.errors.zipCode} />
                                      )} */}
                                  </div>
                                </div>
                                <FormInputContainer
                                  name="Enter the price that the vendor has quoted."
                                  pt
                                >
                                  <div className="flex justify-center gap-4 items-center">
                                    <div className="flex mb-1">
                                      <input
                                        onChange={(e) => {
                                          if (isNaN(e.target.value)) {
                                            return "";
                                          } else {
                                            props.setFieldValue(
                                              "unitPrice",
                                              e.target.value
                                            );
                                          }
                                        }}
                                        value={
                                          props.values.information[index]
                                            .unitPrice
                                        }
                                        name={`information.${[
                                          index,
                                        ]}.unitPrice`}
                                        placeholder="Unit Price"
                                        className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                                      />
                                      {props.errors.unitPrice &&
                                        props.touched.unitPrice && (
                                          <Error
                                            message={props.errors.unitPrice}
                                          />
                                        )}
                                    </div>
                                    <div className="flex mb-1">
                                      <input
                                        onChange={(e) => {
                                          if (isNaN(e.target.value)) {
                                            return "";
                                          } else {
                                            props.setFieldValue(
                                              "totalPrice",
                                              e.target.value
                                            );
                                          }
                                        }}
                                        value={
                                          props.values.information[index]
                                            .totalPrice
                                        }
                                        name={`information.${[
                                          index,
                                        ]}.totalPrice`}
                                        placeholder="Total Price"
                                        className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                                      />
                                      {props.errors.totalPrice &&
                                        props.touched.totalPrice && (
                                          <Error
                                            message={props.errors.totalPrice}
                                          />
                                        )}
                                    </div>
                                    <div className="flex mb-1">
                                      <input
                                        onChange={(e) => {
                                          if (isNaN(e.target.value)) {
                                            return "";
                                          } else {
                                            props.setFieldValue(
                                              "shippingPrice",
                                              e.target.value
                                            );
                                          }
                                        }}
                                        value={
                                          props.values.information[index]
                                            .shippingPrice
                                        }
                                        name={`information.${[
                                          index,
                                        ]}.shippingPrice`}
                                        placeholder="Shipping Price"
                                        className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                                      />
                                      {props.errors.shippingPrice &&
                                        props.touched.shippingPrice && (
                                          <Error
                                            message={props.errors.shippingPrice}
                                          />
                                        )}
                                    </div>
                                  </div>
                                </FormInputContainer>
                              </div>
                            </FormInputBigContainer>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                    <div className="m-4">
                      <DashboardButton
                        type="button"
                        hidden
                        color
                        name="ADD VENDOR"
                        onClick={() =>
                          push({
                            companyName: "",
                            address: "",
                            projectState: "",
                            projectCity: "",
                            projectZipCode: "",
                            shippingPrice: "",
                            totalPrice: "",
                            unitPrice: "",
                          })
                        }
                        width="w-fit"
                      />
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
            name="Cancel"
            onClick={() => dispatch(prevChoiceStep(2))}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default MultiVendors;
