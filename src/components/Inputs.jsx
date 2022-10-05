import React from "react";

const Input = ({ onChange, label, name, type, id, value, min, max }) => {
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input
        required
        name={name}
        className="input"
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        min={min}
        max={max}
        step="any"
      />
    </div>
  );
};

export default Input;
