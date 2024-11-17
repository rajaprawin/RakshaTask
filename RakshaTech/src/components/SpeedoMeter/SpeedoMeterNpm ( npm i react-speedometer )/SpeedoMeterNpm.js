import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer/slim";

// npm i react-d3-speedometer
const SpeedoMeterNpm = () => {
  return (
    <div className="meter-container"  style={{border:'2px solid red'}}>
      <ReactSpeedometer
        value="50"
        minValue="0"
        maxValue="100"
        segments={1}
        segmentColors={["green"]}
        textColor="black"
        labelFontSize="10px" // readings
        forceRender={true}
        needleHeightRatio={0.7}
        needleColor="steelblue"
        needleTransitionDuration={4000}
        needleTransition="easeElastic"
        ringWidth="20"
        currentValueText="50"
        // customSegmentLabels={[
        //   {
        //     text: "Very Bad",
        //     position: "INSIDE",
        //     color: "white",
        //   }
        // ]}
      />
    </div>
  );
};

export default SpeedoMeterNpm;

// npm i react-speedometer
