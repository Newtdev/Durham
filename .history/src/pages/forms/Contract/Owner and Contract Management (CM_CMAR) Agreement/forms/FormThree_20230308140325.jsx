import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

const FormThree = (props) => {
  const dispatch = useDispatch();

  const constructionAmount = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("constructionAmount", e.target.value);
      }
    },
    name: "constructionAmount",
    error: props.errors.constructionAmount,
    value: props.values.constructionAmount,
    touched: props.touched.constructionAmount,
    placeholder: "Amount",
    //    prevPage
  };
  const procurementAmount = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("procurementAmount", e.target.value);
      }
    },
    name: "procurementAmount",
    error: props.errors.procurementAmount,
    value: props.values.procurementAmount,
    touched: props.touched.procurementAmount,
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
            <div className="bg-[#2F5461] h-2.5 w-[75%]"></div>
          </div>

          <div className="mx-6 mb-12">
            <div className=" mt-3 ml-2">
              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  Pre-design phase, Design phase and the Procurement phase
                </p>
                <div className="relative w-full">
                  <input
                    {...procurementAmount}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.procurementAmount &&
                  props.touched.procurementAmount && (
                    <Error message={props.errors.procurementAmount} />
                  )}
              </div>
              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  Construction phase and Post-construction phase
                </p>
                <div className="relative w-full">
                  <input
                    {...constructionAmount}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                {props.errors.constructionAmount &&
                  props.touched.constructionAmount && (
                    <Error message={props.errors.constructionAmount} />
                  )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Previous"
              onClick={() => dispatch(prevStep(2))}
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

export default FormThree;
