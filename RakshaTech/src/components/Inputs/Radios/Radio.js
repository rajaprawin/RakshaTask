import React from "react";
import "./Radio.css";

function Radio({ name = "name", isSelected, onChange }) {
  return (
    <div >
      <label className="containerRadio" >
        {/* {name} */}
{isSelected ? <span className="selectedRadioOption">{name}</span>:<>{name}</>}
        <input
          type="radio"
          checked={isSelected}
          onChange={onChange}
          name="radio"
          
        />
        <span className="checkmark" ></span>
      </label>
    </div>
  );
}

export default Radio;
