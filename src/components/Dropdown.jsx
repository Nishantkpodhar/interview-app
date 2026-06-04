import React from "react";

function Dropdown({ options, selectedFile, onChange }) {
  return (
    <select
      value={selectedFile}
      onChange={onChange}
      className="dropdown"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
