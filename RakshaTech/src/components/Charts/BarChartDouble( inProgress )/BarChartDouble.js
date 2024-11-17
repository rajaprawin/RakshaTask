import React from "react";
import "./BarChartDouble.css";

function BarChartDouble({
  xAxis = ["A", "B", "C", "D", "E", "F"],
  values1 = [30, 50, 70, 20, 90, 50],
  values2 = [10, 50, 70, 20, 90, 10],
  chartHeight = "150px",
  chartWidth = 300,
  yAxisLabels = [0, 20, 40, 60, 80, 100], // Y-axis labels
  barColor1='#edcf97',
  barColor2='orange',
  barWidth='10px',
  yAxisFontColor='#333',
  xAxisFontColor='#333',
  xAxisFontSize='12px',
  yAxisFontSize='12px',
  chartValueFontSize='13px',
  gap='20px',
  pairGap='2px',

}) {
  const maxValue = Math.max(...values1, ...values2); // Maximum value for scaling

  return (
    <div
  className="barDouble-chart-container"
  style={{
    width: chartWidth < 340 ? '350px' : `${chartWidth}px`,
  }}
>

      <div className="barDouble-chart-wrapper" style={{ height: chartHeight, width: `100%` }}>
        {/* Y-axis */}
        <div className="y-axis">
          {yAxisLabels.map((label, index) => (
            <div key={index} className="y-label" style={{color:yAxisFontColor, fontSize:yAxisFontSize}}>
              {label}
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="barDouble-chart">
          {values1.map((value, index) => (
            <>
            <span
              key={index}
              className="barDouble"
              style={{
                height: `${(value / maxValue) * 100}%`,
                width: barWidth,
                backgroundColor: barColor1,
              }}
            >
              <span className="barDouble-value" style={{fontSize:chartValueFontSize}}>{value}</span>
            </span>
            <span style={{width:`${pairGap}`}}>{" "}</span>
            <span
              key={index}
              className="barDouble"
              style={{
                height: `${(values2[index] / maxValue) * 100}%`,
                width: barWidth,
                backgroundColor: barColor2,
              }}
            >
              <span className="barDouble-value" style={{fontSize:chartValueFontSize}}>&nbsp;&nbsp;{values2[index]}</span>
            </span>
            <span style={{width:`${gap}`}}>{" "}</span>
            </>
          ))}
        </div>
      </div>

      {/* X-axis */}
      <div className="x-axis">
        {xAxis.map((label, index) => (
          <span key={index} className="x-label" style={{color:xAxisFontColor, fontSize: xAxisFontSize}}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BarChartDouble;
