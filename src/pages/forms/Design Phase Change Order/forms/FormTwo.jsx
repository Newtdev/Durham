import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import {
  FormSelect,
  FormInputPlain,
  FormInput,
  FormTextArea,
  SelectDate
} from "../../components";

import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prevStep } from "../reducer";
import { useState } from "react";

const FormTwo = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  const [index, setIndex] = useState(0);
  const [items, setItems] = useState(props.values.mwbeInfo);

  const mwbeNames = [
    { name: "mwbeName 1" },
    { name: "mwbeName 2" },
    { name: "mwbeName 3" },
    { name: "mwbeName 4" },
    { name: "mwbeName 5" },
    { name: "mwbeName 6" },
  ];

  const mwbeCategories = [
    { name: "mwbeCategory 1" },
    { name: "mwbeCategory 2" },
    { name: "mwbeCategory 3" },
    { name: "mwbeCategory 4" },
    { name: "mwbeCategory 5" },
    { name: "mwbeCategory 6" },
  ];

  const ownerRepDate = {
	...props,
	value: props.values.ownerRepDate,
	onChange: props.handleChange,
	name: 'ownerRepDate',
	error: props.errors.ownerRepDate,
	touched: props.touched.ownerRepDate,
	placeholder: 'Select date'
	//    prevPage
}

const ownerRepNames = [
	{ name: 'name 1'},
	{ name: 'name 2'},
	{ name: 'name 3'},
	{ name: 'name 4'},
	{ name: 'name 5'}
]

  const addMoreItems = () => {
    setIndex(index + 1);
    console.log("add more mwbeInfo: ", index);
    props.values.mwbeInfo.push({
      mwbeName: "",
      companyName: "",
      companyNumber: "",
      mwbeCategory: "",
      workDescription: "",
      contractAmount: "",
    });
    setItems([
      ...items,
      {
        mwbeName: "",
        companyName: "",
        companyNumber: "",
        mwbeCategory: "",
        workDescription: "",
        contractAmount: "",
      },
    ]);

    console.log("mwbeInfo: ", props.values.mwbeInfo);
  };

  const removeItem = (index) => {
    console.log("remove item: ", index);
    props.values.mwbeInfo.splice(index, 1);
    var arr = [...items];
    arr.splice(index, 1);
    setItems(arr);
    console.log("items: ", props.values.mwbeInfo);
  };

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
                MWBE Form for Bids
              </h3>
              <p className="text-base text-gray-700">Section II</p>
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

          {/* form */}
          <div className="mx-6 mb-12">
            <div className="mt-3 ml-2 flex flex-col gap-3 ">
              <FormInputContainer name="Original Contract Substantial Completion Date">
                <SelectDate {...ownerRepDate} />
                {props.errors.ownerRepDate && props.touched.ownerRepDate && (
                  <Error message={props.errors.ownerRepDate} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Days Added by Prior Change Order(s)">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="ownerRepTitle"
                  placeholder={"Days Added by Prior Change Order(s)"}
                />
                {props.errors.ownerRepTitle && props.touched.ownerRepTitle && (
                  <Error message={props.errors.ownerRepTitle} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Number of Days Added by this Change Order">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="ownerRepTitle"
                  placeholder={"Number of Days Added by this Change Order"}
                />
                {props.errors.ownerRepTitle && props.touched.ownerRepTitle && (
                  <Error message={props.errors.ownerRepTitle} />
                )}
              </FormInputContainer>

              <FormSelect
                value={props.values.ownerRepName}
                name="Select the Owner's representative"
                id="ownerRepName"
                error={props.errors.ownerRepName}
                touched={props.touched.ownerRepName}
                onChange={props.handleChange}
              >
                <option value="">Select the Owner's representative</option>
                {ownerRepNames?.map((ownerRepName, index) => {
                  return (
                    <option key={index} value={ownerRepName.name}>
                      {ownerRepName.name}
                    </option>
                  );
                })}
              </FormSelect>

              <FormInputContainer name="Owner’s Representative Title">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="ownerRepTitle"
                  placeholder={"Enter Owner’s Representative Title"}
                />
                {props.errors.ownerRepTitle && props.touched.ownerRepTitle && (
                  <Error message={props.errors.ownerRepTitle} />
                )}
              </FormInputContainer>

              <FormInputContainer name="When will the Owner's representative sign this Form?">
                <SelectDate {...ownerRepDate} />
                {props.errors.ownerRepDate && props.touched.ownerRepDate && (
                  <Error message={props.errors.ownerRepDate} />
                )}
              </FormInputContainer>
            </div>
          </div>

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
