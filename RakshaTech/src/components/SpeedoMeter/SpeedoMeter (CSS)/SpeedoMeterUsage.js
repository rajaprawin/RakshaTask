import React, { useState } from "react";
import Speedometer from "./SpeedoMeter";

function SpeedoMeterUsage() {
  const[speed, setSpeed] =useState(25);
  return (
    <>
    <input type="number" value={speed} onChange={(e)=>setSpeed(e.target.value)}/>
    <Speedometer
      value={speed}
      minValue={0}
      maxValue={100}
      labelFontSize="100px" // ok
      needleHeightRatio={0.55}
      needleTransitionDuration={2000}
      needleTransition="ease-in-out"
      needleColor="darkblue"
      needleBasepointColor="gray"
      arcTrackColor="#77f7f7"
      tagColor="red"
      size={1.0}
      
    />
    </>
  );
}

export default SpeedoMeterUsage;
