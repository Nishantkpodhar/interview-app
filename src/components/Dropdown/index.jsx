import React from "react";
import "./Dropdown.css";

function Dropdown({ ariaLabel, disabled = false, options, selectedFile, onChange }) {
  return (
    <select
      value={selectedFile}
      onChange={onChange}
      className="dropdown"
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}{typeof option.count === "number" ? ` (${option.count})` : ""}
        </option>
      ))}
    </select>
  );
}

export default React.memo(Dropdown);
