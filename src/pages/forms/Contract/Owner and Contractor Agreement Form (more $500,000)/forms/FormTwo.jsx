import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain } from "../../../components";

const FormTwo = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  const projectDate = {
    ...props,
    value: props.values.projectDate,
    onChange: props.handleChange,
    name: "projectDate",
    error: props.errors.projectDate,
    touched: props.touched.projectDate,
    placeholder: "Select date",
  };

  return (
    <div>
      <div
        className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <form
          className="relative w-[600px] bg-white rounded-lg shadow py-4"
          onSubmit={props.handleSubmit}
        >
          <div className="flex items-baseline justify-between mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Owner and Contractor Agreement Form (more $500,000)
              </h3>
              <p className="text-base text-gray-700">Statement of Work</p>
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
            <div className="bg-[#2F5461] h-2.5 w-1/2"></div>
          </div>

          <div className="mx-6 mb-12">
            <div className="mt-3 ml-2 flex flex-col gap-3 ">
              <FormInputContainer name="Who prepares the work or project?">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="project"
                  placeholder="Who prepares the work or project?"
                />
                {props.errors.project && props.touched.project && (
                  <Error message={props.errors.project} />
                )}
              </FormInputContainer>

              <FormInputContainer name="When is the work or project prepared?">
                <SelectDate {...projectDate} />
                {props.errors.projectDate && props.touched.projectDate && (
                  <Error message={props.errors.projectDate} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Enter the addenda to this project.">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="projectAgenda"
                  placeholder="Enter the addenda to this project."
                />
                {props.errors.projectAgenda && props.touched.projectAgenda && (
                  <Error message={props.errors.projectAgenda} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Enter the alternates to this project.">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="projectAlternates"
                  placeholder="Enter the alternates to this project."
                />
                {props.errors.projectAlternates &&
                  props.touched.projectAlternates && (
                    <Error message={props.errors.projectAlternates} />
                  )}
              </FormInputContainer>

              <h2 className="font-bold border-b w-full border-b-gray-400 pb-1">
                Enter the modifications to the Project’s plans and
                specifications including any noted value engineering items, if
                applicable.
              </h2>

              <FormInputContainer name="Modifications">
                <FormInputPlain
                  type={"text"}
                  onChange={props.handleChange}
                  name="modification"
                  placeholder="Modifications"
                />
                {props.errors.modification && props.touched.modification && (
                  <Error message={props.errors.modification} />
                )}
              </FormInputContainer>

              <FormInputContainer name="Total Amount for Modifications">
                <FormInputPlain
                  type={"number"}
                  onChange={props.handleChange}
                  name="modificationAmount"
                  placeholder="Hereinafter referred to as the 'Project' or 'Work'"
                />
                {props.errors.modificationAmount &&
                  props.touched.modificationAmount && (
                    <Error message={props.errors.modificationAmount} />
                  )}
              </FormInputContainer>
            </div>
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
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
