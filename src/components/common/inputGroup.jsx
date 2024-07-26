import React from "react";

const InputField = (props) => {
  const { label, type, value, onChange, onFocus, onBlur, onKeyDown } = props;

  return (
    <div className="flex flex-col py-2">
      <label>{label}</label>

      <input
        className="border border-[#BCD6E5] rounded-md px-3 py-1 mr-2 drop-shadow-[0_5px_1px_rgba(0,0,0,0.06)]"
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        required
      />
    </div>
  );
};
export default InputField;
