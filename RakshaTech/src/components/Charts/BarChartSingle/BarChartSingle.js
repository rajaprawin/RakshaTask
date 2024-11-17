import React from "react";
import "./BarChartSingle.css";

function BarChartSingle({
  xAxis = ["A", "B", "C", "D", "E", "F"],
  values = [30, 50, 70, 20, 90, 50],
  yAxisLabels = [0, 20, 40, 60, 80, 100], // Y-axis labels
  containerBorderRadius='20px',
  chartHeight = "100%",
  chartWidth = "100%",
  barColor='blue',
  barWidth='20px',
  yAxisFontColor='#333',
  xAxisFontColor='#333',
  axisLineColor='#333',
  axisLineThickness=3,

}) {
  const maxValue = Math.max(...values); // Maximum value for scaling

  return (
    <div className="bar-chart-container" style={{ width: chartWidth}}>
      <div className="bar-chart-wrapper" style={{ height:chartHeight}}>
        {/* Y-axis */}
        <div className="y-axis" >
          {yAxisLabels.map((label, index) => (
            <div key={index} className="y-label" style={{color:yAxisFontColor}}>
              {label}
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="bar-chart" style={{
          borderLeft:`${axisLineThickness}px solid ${axisLineColor}`,
          borderBottom:`${axisLineThickness}px solid ${axisLineColor}`,
          
          
        }}>
          {values.map((value, index) => (
            <>
            
            <div
              key={index}
              className="bar"
              style={{
                height: `${(value / maxValue) * 100}%`,
                width: barWidth,
                backgroundColor: barColor,
                borderTopLeftRadius:'5px',
                borderTopRightRadius:'5px',
                
                boxShadow: "3px 3px 3px 0.2px rgba(0, 0, 0, 0.4)",

               
              }}
            >
              <div>

              <span className="bar-value">{value}</span>
              </div>
            </div>
            </>
          ))}
        </div>
      </div>

      {/* X-axis */}
      <div className="x-axis" style={{marginLeft:'30px'}}>
        {xAxis.map((label, index) => (
          <span key={index} className="x-label" style={{color:xAxisFontColor}}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BarChartSingle;
