import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import Component from "../Component";
import { prevChoiceStep } from "../reducer";

const Estimate = (props) => {
  const [total, setTotal] = useState(0.0);
  const dispatch = useDispatch();

  const purchase = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        props.setFieldValue("purchase", e.target.value);
      }
    },
    value: props.values.purchase,
    name: "purchase",
    touched: props.touched.purchase,
    error: props.errors.purchase,
    placeholder: "0.00",
    label: "Land Purchase",
  };
  const design = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        props.setFieldValue("design", e.target.value);
      }
    },
    value: props.values.design,
    name: "design",
    touched: props.touched.design,
    error: props.errors.design,
    placeholder: "0.00",
    label: "Planning/Design",
  };
  // console.log(props.values.design);

  const construction = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        props.setFieldValue("construction", e.target.value);
      }
    },
    value: props.values.construction,
    name: "construction",
    touched: props.touched.construction,
    error: props.errors.construction,
    placeholder: "0.00",
    label: "New Construction/Addition(s)",
  };

  const renovation = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        props.setFieldValue("renovation", e.target.value);
      }
    },
    value: props.values.renovation,
    name: "renovation",
    touched: props.touched.renovation,
    error: props.errors.renovation,
    placeholder: "0.00",
    label: "Renovation/Upfit",
  };
  const repair = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        props.setFieldValue("repair", e.target.value);
      }
    },
    value: props.values.repair,
    name: "repair",
    touched: props.touched.repair,
    error: props.errors.repair,
    placeholder: "0.00",
    label: "Repair",
  };
  const furniture = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        props.setFieldValue("furniture", e.target.value);
      }
    },
    value: props.values.furniture,
    name: "furniture",
    touched: props.touched.furniture,
    error: props.errors.furniture,
    placeholder: "0.00",
    label: "Furniture/Equipment",
  };
  // // console.log(typeof props.values.repair);

  // console.log(Number(props.values.furniture) + Number(props.values.repair));

  const pur = Number(props.values.purchase);
  const des = Number(props.values.design);
  const con = Number(props.values.construction);
  const ren = Number(props.values.renovation);
  const rep = Number(props.values.repair);
  const fur = Number(props.values.furniture);

  useEffect(() => {
    const val = pur + des + con + ren + rep + fur;
    setTotal(val);
  }, [props.values]);
  return (
    <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
      <form
        className="relative w-[600px] bg-white rounded-lg shadow py-4 "
        onSubmit={props.handleSubmit}
      >
        <div className="flex justify-between items-baseline mx-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Capital Project Request Form
            </h3>
            <p className="text-base text-gray-700">
              Enter the estimated cost(s) for the following items((Budget
              estimates include contingencies):
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
          <div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
        </div>

        <div className="mx-6 mb-12">
          <div className=" mt-3 ml-2">
            <div className="mb-4">
              <Component {...purchase} />
            </div>
            <div className="mb-4">
              <Component {...design} />
            </div>
            <div className="mb-4">
              <Component {...construction} />
            </div>
            <div className="mb-4">
              <Component {...renovation} />
            </div>
            <div className="mb-4">
              <Component {...repair} />
            </div>
            <div className="mb-4">
              <Component {...furniture} />
            </div>
            <div className="bg-[#F3F4F6] flex flex-col items-start gap-1 rounded-lg p-2">
              <small className="text-[#111827] font-normal">Total Amount</small>
              <p className="text-[#693B79] font-semibold">{`$ ${total}`}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-8 pr-4">
          <ButtonWhiteBG
            width="w-[100px]"
            name="Cancel"
            onClick={() => dispatch(prevChoiceStep(0))}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default Estimate;
