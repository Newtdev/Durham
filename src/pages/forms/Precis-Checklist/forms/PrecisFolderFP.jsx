import React from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { closeModal } from "../../reducer";
import Component from "../Component";

const PrecisFolder = (props) => {
  const dispatch = useDispatch();

  const prices = {
    type: "checkbox",
    onChange: props.handleChange,
    value: "Precis",
    name: "project",
    label: "Precis",
  };
  const bidTab = {
    type: "checkbox",
    onChange: props.handleChange,
    value: "BidTab",
    name: "project",
    label: "Bid Tab (certified if 3rd party led)",
  };
  const contract = {
    type: "checkbox",
    onChange: props.handleChange,
    value: "Contract",
    name: "project",
    label: "Contract(with proposal)",
  };
  const participation = {
    type: "checkbox",
    onChange: props.handleChange,
    value: "Participation",
    name: "project",
    label: "MWBE Participation Sheet (% Form)",
  };
  const affidavits = {
    type: "checkbox",
    onChange: props.handleChange,
    value: "Affidavits",
    name: "project",
    label: "Affidavits(A,C or D)",
  };
  const plan = {
    type: "checkbox",
    onChange: props.handleChange,
    value: "Plan",
    name: "project",
    label: "HUB Plan(If they did not achieve the 10%)",
  };
  const presentation = {
    type: "checkbox",
    onChange: props.handleChange,
    value: "Presentation",
    name: "project",
    label: "Presentation Slides (if required)",
  };

  return (
    <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
      <form
        className="relative w-[600px] bg-white rounded-lg shadow py-4 "
        onSubmit={props.handleSubmit}
      >
        <div className="flex justify-between items-baseline mx-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Precis Checklist
            </h3>
            <p className="text-base text-gray-700">
              Precis Folders for Projects
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
        <hr />
        <div className="mx-6 mb-12">
          <div className=" mt-3 ml-2">
            <label className="text-base text-gray-900 mb-1">
              Enter the quantity of the items
            </label>
            <Component {...prices} />
            <Component {...bidTab} />
            <Component {...contract} />
            <Component {...participation} />
            <Component {...affidavits} />
            <Component {...plan} />
            <Component {...presentation} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-8 pr-4">
          <ButtonWhiteBG
            width="w-[100px]"
            name="Cancel"
            onClick={() => dispatch(closeModal())}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default PrecisFolder;
