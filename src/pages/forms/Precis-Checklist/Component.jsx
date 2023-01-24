import React from "react";

const Component = ({ type, onChange, value, name, label }) => {
  return (
    <div className="flex items-center mb-5 ml-2 mt-2">
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
      />
      <label for="default-radio-1" className="ml-2 text-base text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Component;
