import React from "react";
import InputRangeBetweenUsage from "./SliderRangeBetween/InputRangeBetweenUsage";
import ToggleSwitch from "./Switch/ToggleSwitch";
import LoginEye from "./LoginEye";
import DatesInput from "./Dates/DatesInput";
import InputsRange from "./SliderRange/InputsRange";
import FileInput from "./FileInput_Drag_&_Drop/FileInput_Drag_&_Drop";
import FileInput_Click from "./FileInput_Click/FileInput_Click";
import SelectSingle from "./SelectSingle/SelectSingle";
import SelectMultiple from "./SelectMultiple/SelectMultiple";
import InputRangeUsage from "./SliderRange/InputRangeUsage";

function InputHome() {
  return (
    <div style={{margin:'50px'}}>
      <div style={{backgroundColor:'yellow'}}>Date w/o time </div>
      <hr /><br />
      {/* <InputsRange /> */}
      <br/>
      <InputRangeUsage/>
      <hr /><br />
      <InputRangeBetweenUsage />
      <hr /><br />
      <ToggleSwitch />
      <hr /><br />
      <LoginEye />
      <hr /><br />
      <DatesInput />
      <hr /><br />
      <SelectSingle/>
       <hr /><br />
      <SelectMultiple/>
      
      <hr /><br />
      <FileInput_Click/>
    </div>
  );
}

export default InputHome;
