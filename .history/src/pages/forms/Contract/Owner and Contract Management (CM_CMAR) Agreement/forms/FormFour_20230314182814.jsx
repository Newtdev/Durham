import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

const FormFour = (props) => {
  const dispatch = useDispatch();

  const ocmcostOfWork = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return;
      } else {
        // return e.target.value
        props.setFieldValue("ocmcostOfWork", e.target.value);
      }
    },
    name: "ocmcostOfWork",
    error: props.errors.ocmcostOfWork,
    value: props.values.ocmcostOfWork,
    touched: props.touched.ocmcostOfWork,
    placeholder: "Amount",
    //    prevPage
  };
  const ocmCMContingency = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("ocmCMContingency", e.target.value);
      }
    },
    name: "ocmCMContingency",
    error: props.errors.ocmCMContingency,
    value: props.values.ocmCMContingency,
    touched: props.touched.ocmCMContingency,
    placeholder: "Amount",
    //    prevPage
  };
  const ocmgeneralConditions = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("ocmgeneralConditions", e.target.value);
      }
    },
    name: "ocmgeneralConditions",
    error: props.errors.ocmgeneralConditions,
    value: props.values.ocmgeneralConditions,
    touched: props.touched.ocmgeneralConditions,
    placeholder: "Amount",
    //    prevPage
  };
  const ocmfees = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("ocmfees", e.target.value);
      }
    },
    name: "ocmfees",
    error: props.errors.ocmfees,
    value: props.values.ocmfees,
    touched: props.touched.ocmfees,
    placeholder: "Amount",
    //    prevPage
  };
  const CMContigency = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("CMContigency", e.target.value);
      }
    },
    name: "CMContigency",
    error: props.errors.CMContigency,
    value: props.values.CMContigency,
    touched: props.touched.CMContigency,
    placeholder: "Amount",
    //    prevPage
  };
  const ocmpreConstruction = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("ocmpreConstruction", e.target.value);
      }
    },
    name: "ocmpreConstruction",
    error: props.errors.ocmpreConstruction,
    value: props.values.ocmpreConstruction,
    touched: props.touched.ocmpreConstruction,
    placeholder: "Amount",
    //    prevPage
  };

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
              <p className="text-base text-gray-700">
                For the items below, enter the agreed-upon dollar amounts.
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
            <div className="bg-[#2F5461] h-2.5 w-[100%]"></div>
          </div>

          <div className="mx-6 mb-12">
            <div className=" mt-3 ml-2">
              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  Cost of Work
                </p>
                <div className="relative w-full">
                  <input
                    {...ocmcostOfWork}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.ocmprocurementAmount &&
                  props.touched.ocmprocurementAmount && (
                    <Error message={props.errors.ocmprocurementAmount} />
                  )}
              </div>
              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  CM construction contingency
                </p>
                <div className="relative w-full">
                  <input
                    {...ocmCMContingency}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.ocmCMContingency &&
                  props.touched.ocmCMContingency && (
                    <Error message={props.errors.ocmCMContingency} />
                  )}
              </div>
              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  General Conditions
                </p>
                <div className="relative w-full">
                  <input
                    {...ocmgeneralConditions}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.ocmgeneralConditions &&
                  props.touched.ocmgeneralConditions && (
                    <Error message={props.errors.ocmgeneralConditions} />
                  )}
              </div>

              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  Owner Contigency
                </p>
                <div className="relative w-full">
                  <input
                    {...CMContigency}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.CMContigency && props.touched.CMContigency && (
                  <Error message={props.errors.CMContigency} />
                )}
              </div>

              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  CM’s fee for preconstruction services
                </p>
                <div className="relative w-full">
                  <input
                    {...ocmfees}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.ocmfees && props.touchedocm.fees && (
                  <Error message={props.errors.ocmfees} />
                )}
              </div>
              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  Construction and post-construction services
                </p>
                <div className="relative w-full">
                  <input
                    {...ocmpreConstruction}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.ocmpreConstruction &&
                  props.touched.ocmpreConstruction && (
                    <Error message={props.errors.ocmpreConstruction} />
                  )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Back"
              onClick={() => dispatch(prevStep(3))}
            />
            <DashboardButton
              hidden
              loading={props.isLoading}
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

export default FormFour;
