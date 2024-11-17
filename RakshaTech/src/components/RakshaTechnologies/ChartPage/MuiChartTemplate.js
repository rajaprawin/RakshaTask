import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import './MuiChartTemplate.css'

function MuiChartTemplate({
  pData,
  uData,
  xLabels,
  color1,
  color2,
  width = "95%",
  height = "95%",
  highest,
  lowest,
  chartName='Name'
}) {
  return (
    
    <div style={{ display:'flex'}} className="MuiChartContainer">
            {/* <h3  className="muiChartHeader">{chartName}</h3> */}
       
        <div style={{margin:'auto'}} className="zoomEft">
          
            <div>
           {highest}
            </div>
            <div>
           {lowest}
            </div>
        </div>
      <BarChart
        width={width}
        height={height}
        series={[
          { data: pData, label: "pv", id: "pvId", color: color1 },
          { data: uData, label: "uv", id: "uvId", color: color2 },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </div>
  );
}

export default MuiChartTemplate;
