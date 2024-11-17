import * as React from "react";
import MuiChartTemplate from "./MuiChartTemplate";
import StackedBarChart from "./MuiStackChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["A", "B", "C", "D", "E", "F", "G"];

// Utility function to get highest and lowest
const getMinMax = (data) => ({
  highest: Math.max(...data),
  lowest: Math.min(...data),
});

export default function RchartPage() {
  const uMinMax = getMinMax(uData);
  const pMinMax = getMinMax(pData);

  return (
    <div>
      <a href="/RDashboard">
        <span className="navBtn2">Go To Home</span>
      </a>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <MuiChartTemplate
          pData={pData}
          uData={uData}
          xLabels={xLabels}
          color1={"#f3bff6"}
          color2={"#ec62f3"}
          width="500"
          height="300"
          highest={`Highest: ${uMinMax.highest}`}
          lowest={`Lowest: ${uMinMax.lowest}`}
        />
        <MuiChartTemplate
          pData={pData}
          uData={uData}
          xLabels={xLabels}
          color1={"green"}
          color2={"blue"}
          width="500"
          height="300"
          highest={`Highest: ${pMinMax.highest}`}
          lowest={`Lowest: ${pMinMax.lowest}`}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <MuiChartTemplate
          pData={pData}
          uData={uData}
          xLabels={xLabels}
          color1={"#f5de9b"}
          color2={"orange"}
          width="500"
          height="300"
          highest={`Highest: ${pMinMax.highest}`}
          lowest={`Lowest: ${pMinMax.lowest}`}
        />

        <StackedBarChart />
      </div>

      
    </div>
  );
}
