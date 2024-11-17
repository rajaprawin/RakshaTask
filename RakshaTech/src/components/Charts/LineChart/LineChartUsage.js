import React from "react";
import LineChart from "./LineChart";

function LineChartUsage() {
  return (
    <div>
      <LineChart
        containerHeight="20%"
        containerWidth="20%"
        gridColor="green"
        containerBorderColor="gray"
        progressLinecolor="green"
        chartBackgroundFill="url(#grid)"
        xAxisFontSize={4}
        yAxisFontSize={4}
        xAxisLabels={[1, 2, 3, 4, 5, 6, 7]}
        yAxisValues={[1, 2, 3, 4, 5, 6, 7]}
        value={[2, 3, 6, 6, 6, 6, 6]}
        xAxisTextColor="black"
        yAxisTextColor="black"
        dotPointColor={"blue"}
        dotPointRadius={2} // 1,2,2.5 , ...
        pointTextColor={"black"}
        pointTextsize={4.2}
      />
    </div>
  );
}

export default LineChartUsage;
