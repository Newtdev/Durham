import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetVendorsQuery } from "../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const FormSix = (props) => {
  const dispatch = useDispatch();
  const vendors = useGetVendorsQuery({ queryValue: "" });
  const states = useSelector(getList);
  const [focus, setValue] = useState();
  const vendorData = !vendors?.data ? [] : vendors?.currentData?.data?.data;

  useEffect(() => {
    if (!focus) {
    } else {
      vendorData?.forEach((cur) => {
        if (cur.company_name === props.values.lesseeD) {
          props.values.companyNameD = cur.company_name;
          props.values.companyAddressD = cur.street;
          props.values.conferenceCityD = cur.city;
          props.values.conferenceStateD = cur.state;
          props.values.conferenceZipCodeD = cur.zip_code;
        } else {
          return (
            props.values.companyNameD,
            props.values.companyAddressD,
            props.values.conferenceCityD,
            props.values.conferenceStateD,
            props.values.conferenceZipCodeD
          );
        }
      });
    }
  }, [props.values, vendorData, focus]);

  function CheckState() {
    if (!props.values.conferenceStateD) {
      return;
    }
    let stat = Object.values(states)?.find(
      (state) => state.name === props.values.conferenceStateD
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
    if (!props.values.conferenceCityD) {
      return;
    }
    const city = Object.values(states)?.filter(
      (state) => state.name === props.values.conferenceStateD
    );
    const zipcode = city?.find((cities) => cities);
    return zipcode.cities[props.values.conferenceCityD]?.map(
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
            <h3 className="text-lg font-bold text-gray-900">
              E-589CI Affidavit of Capital Improvement
            </h3>
            <p className="text-base text-gray-700">Box D</p>
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
            <FormInputContainer name="Select Real Property Contractor or Subcontractor">
              <FormSelect
                value={props.values.lesseeD}
                onChange={(e) => {
                  setValue(true);
                  props.setFieldValue(`lesseeD`, e.target.value);
                }}
                id="lesseeD"
                name=""
              >
                <option>Selct Company</option>;
                <option value="NewCompany">Add New Company</option>;
                {vendorData?.map((cur) => {
                  return (
                    <option value={cur.company_name}>{cur.company_name}</option>
                  );
                })}
              </FormSelect>

              {props.errors.lesseeD && props.touched.lesseeD && (
                <Error message={props.errors.lesseeD} />
              )}
            </FormInputContainer>
            <p className="text-base text-gray-700 my-2">
              Enter Real Property Contractor or Subcontractor details
            </p>
            <hr />
            <div className="flex flex-col my-5">
              <label className="text-sm text-gray-900 mb-1">Company Name</label>
              <input
                value={props.values.companyNameD}
                onChange={props.handleChange}
                type="text"
                name="companyNameD"
                id="companyNameD"
                placeholder="Company Name"
                className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
              />
            </div>
            <div className="flex flex-col my-5">
              <label className="text-sm text-gray-900 mb-1">
                Company Address
              </label>
              <input
                value={props.values.companyAddressD}
                name="companyAddressD"
                id="companyAddressD"
                onChange={props.handleChange}
                type="text"
                placeholder="Street"
                className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <FormSelect
                  value={props.values.conferenceStateD}
                  id="conferenceStateD"
                  onChange={props.handleChange}
                >
                  {props.values.conferenceStateD ? (
                    <option value={props.values.conferenceStateD}>
                      {props.values.conferenceStateD}
                    </option>
                  ) : (
                    <option value="">Select State</option>
                  )}
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
                {props.errors.conferenceStateD &&
                  props.touched.conferenceStateD && (
                    <Error message={props.errors.conferenceStateD} />
                  )}
              </div>
              <div className="flex-1">
                <FormSelect
                  value={props.values.conferenceCityD}
                  id="conferenceCityD"
                  onChange={props.handleChange}
                >
                  {props.values.conferenceCityD ? (
                    <option value={props.values.conferenceCityD}>
                      {props.values.conferenceCityD}
                    </option>
                  ) : (
                    <option value="">Select City</option>
                  )}
                  {CheckState()}
                </FormSelect>

                {props.errors.conferenceCityD &&
                  props.touched.conferenceCityD && (
                    <Error message={props.errors.conferenceCityD} />
                  )}
              </div>
              <div className="flex-1">
                <FormSelect
                  value={props.values.conferenceZipCodeD}
                  id="conferenceZipCodeD"
                  onChange={props.handleChange}
                >
                  {props.values.conferenceZipCodeD ? (
                    <option value={props.values.conferenceZipCodeD}>
                      {props.values.conferenceZipCodeD}
                    </option>
                  ) : (
                    <option value="">Zip Code</option>
                  )}
                  {CheckZipCode()}
                </FormSelect>

                {props.errors.conferenceZipCodeD &&
                  props.touched.conferenceZipCodeD && (
                    <Error message={props.errors.conferenceZipCodeD} />
                  )}
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-8 pr-4">
          <ButtonWhiteBG
            width="w-[100px]"
            name="Cancel"
            onClick={() => dispatch(prevChoiceStep(5))}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default FormSix;
