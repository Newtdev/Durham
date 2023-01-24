import React from "react";
import { Error } from "../../../ui";

const Component = (props) => {
  const { error, touched, label } = props;

  return (
    <div className="flex flex-col">
      <label className="text-base text-gray-900 mb-1">{label}</label>
      <div className="relative w-full">
        <input
          {...props}
          className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] w-full py-2 pl-8 pr-2 focus:outline-gray-400 "
        />
        <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
          $
        </small>
      </div>
      {error && touched && <Error message={error} />}
    </div>
  );
};

export default Component;
