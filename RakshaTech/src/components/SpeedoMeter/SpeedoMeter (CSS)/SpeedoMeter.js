import React, { useState, useEffect } from "react";
import "./SpeedoMeter.css";

const Speedometer = ({
  value,
  minValue,
  maxValue,
  textColor,
  needleHeightRatio,
  needleColor,
  needleTransitionDuration,
  needleTransition,
  needleBasepointColor,
  arcTrackColor,
  size=1,
  tagColor='black'
}) => {
  // Calculate the rotation angle based on the value
  const needleAngle = ((value - minValue) / (maxValue - minValue)) * 180;

  return (
    <div  className="speedometer-Wrapper" style={{  
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
    }}>

    <div className="speedometer-ParentContainer" style={{transform:`scale(${size})`}}>
      <div className="speedometer-OuterContainer">
        <div className="speedometer-container"
                      style={{
                      // boxShadow: "4px 4px 4px 0.2px rgba(0, 0, 0, 0.4)",

                      }}>
          <div
            className="speedometer-ring"
            style={{
               borderColor: arcTrackColor
               

             }}
          >
            <div
              className="speedometer-needle"
              style={{
                transform: `rotate(${needleAngle}deg)`,
                transition: `transform ${needleTransitionDuration}ms 
            ${needleTransition}`,
                height: `${needleHeightRatio * 100}%`,
                // backgroundColor: needleColor,
                borderBottomColor:needleColor
              }}
            />
          </div>
          <div
            className="speedometer-text"
            style={{
              color: textColor,
              backgroundColor: needleBasepointColor,
              padding: "5px",
              borderRadius: "50%",
            }}
          >
            <div style={{ rotate: "90deg", height: "35px", width: "35px" }}>
              {""}
            </div>
          </div>
        </div>
      </div>
      <div className="speedoMeter_tags" style={{color:tagColor}}>
        <span>0</span>
        <span
        style={{
          width:'25px',
          marginLeft:'15px',
          textAlign:'center',
        }}
        >{value}</span>
        <span>100</span>
      </div>
    </div>
    </div>
  );
};

export default Speedometer;
