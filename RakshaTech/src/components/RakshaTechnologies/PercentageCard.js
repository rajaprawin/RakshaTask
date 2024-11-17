import React from "react";
import "./RDashboard.css";
import green from "./DashboardImages/green2.png";
import yellow from "./DashboardImages/yellow.png";
import red from "./DashboardImages/red.png";

function PercentageCard({name, percentage}) {
  return (
    <div
      className="col2Cards zoomEft"
      style={{
        color: "",
        backgroundColor:
        percentage > 70
            ? "#a4f695ea"
            : percentage > 30
            ? "#eeed8c7e"
            : "#f9ae7f7e",
      }}
    >
      <div className="rSmiley">
        <img
          src={
            percentage > 70
              ? green
              : percentage > 30
              ? yellow
              : red
          }
          width={80}
          height={80}
        />
      </div>
      <div className="rPercentage">
       <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }}>
   <span  style={{
        color: 
        percentage > 70
            ? "green"
            : percentage > 30
            ? "orange"
            : "red",
            fontWeight:'bold',
            fontSize:'26px'
      }}> {percentage} % </span>  
    <br/>
   <span  style={{
        color:
        percentage > 70
        ? "green"
        : percentage > 30
        ? "orange"
        : "red",
      }}> {name} </span> </div>
        </div>
    </div>
  );
}

export default PercentageCard;
