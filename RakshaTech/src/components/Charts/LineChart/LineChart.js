import React from "react";

const LineChart = ({
  containerHeight = "90%",
  containerWidth = containerHeight,
  gridColor = "green",
  containerBorderColor = "gray",
  progressLinecolor = "green",
  chartBackgroundFill='url(#grid)',
  xAxisFontSize = 4,
  yAxisFontSize = 4,

  xAxisLabels = [1, 2, 3, 4, 5, 6, 7],
  yAxisValues = [1, 2, 3, 4, 5, 6, 7],
  value = [2, 3, 6, 6, 6, 6, 6],

  xAxisTextColor = "black",
  yAxisTextColor = xAxisTextColor,

  dotPointColor = "blue",
  dotPointRadius = 2, // 1,2,2.5 , ...
  pointTextColor = "black",
  pointTextsize = 4.2,
}) => {
  
  // DataPoint Backup

  //   const dataPoints = [
  //     { xIndex: 0, yIndex: 2, value: 25 }, // Start, 50
  //     { xIndex: 1, yIndex: 2, value: 8.1 }, // Q1, 100
  //     { xIndex: 2, yIndex: 1, value: 7.7 }, // Q2, 50
  //     { xIndex: 3, yIndex: 4, value: 6.8 }, // Q3, 200
  //     { xIndex: 4, yIndex: 2, value: 6.7 }, // Q4, 100
  //     { xIndex: 5, yIndex: 2, value: 6.7 }, // Q5, 100
  //     { xIndex: 6, yIndex: 3, value: 6.7 }, // Q6, 150
  //   ];

  // Dynamically generate data points (intersections)
  const dataPoints = value.map((val, index) => {
    const yIndex = yAxisValues.findIndex((y) => y === Math.round(val)); // Round the value to match an integer in yAxisValues

    return {
      xIndex: index, // xIndex corresponds to the position in the xAxisLabels array
      yIndex: yIndex >= 0 ? yIndex : 0, // Ensure the yIndex is valid
      value: val,
    };
  });

  // Chart dimensions and spacing
  const chartWidth = 90;
  const chartHeight = 90;
  const offset = 10;
  const xSpacing = chartWidth / (xAxisLabels.length - 1);
  const ySpacing = chartHeight / (yAxisValues.length - 1);

  return (
    <div
      style={{
        // padding: "20px",
        width: containerWidth,
        height: containerHeight,
      }}
    >
      <svg
        version="1.2"
        // xmlns="http://www.w3.org/2000/svg"
        // xmlnsXlink="http://www.w3.org/1999/xlink"
        // className="quiz-graph"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMinYMin meet"
        style={{ width: "100%", height: "auto" ,
        }}
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke={gridColor}
              strokeWidth="0.1"
            />
          </pattern>
        </defs>

        {/* Background Grid */}
        <rect
          x={offset}
          y={0}
          width={chartWidth}
          height={chartHeight}
          fill={chartBackgroundFill}
          stroke={containerBorderColor}
        />

        {/* X-axis Labels */}
        <g className="">
          {xAxisLabels.map((label, index) => (
            <text
              key={index}
              x={offset + index * xSpacing}
              y={chartHeight + 5}
              fontSize={xAxisFontSize}
              textAnchor="start"
              fill={xAxisTextColor}
            >
              {label}
            </text>
          ))}
        </g>

        {/* Y-axis Labels */}
        <g className="y-labels">
          {yAxisValues.map((value, index) => (
            <text
              key={index}
              x={offset - 2}
              y={chartHeight - index * ySpacing}
              fontSize={yAxisFontSize}
              textAnchor="end"
              fill={yAxisTextColor}
            >
              {value}
            </text>
          ))}
        </g>

        {/* Graph Line */}
        <polyline
          fill="none"
          stroke={progressLinecolor}
          strokeWidth="0.5"
          points={dataPoints
            .map(
              (point) =>
                `${offset + point.xIndex * xSpacing},${
                  chartHeight - point.yIndex * ySpacing
                }`
            )
            .join(" ")}
        />

        {/* Data Points */}
        {dataPoints.map((point, index) => (
          <g key={index}>
            {/* Circle for the point */}
            <circle
              cx={offset + point.xIndex * xSpacing}
              cy={chartHeight - point.yIndex * ySpacing}
              r={dotPointRadius}
              fill={dotPointColor}
            />
            {/* Text label for the point */}
            <text
              x={offset + point.xIndex * xSpacing}
              y={chartHeight - point.yIndex * ySpacing - 2}
              fontSize={pointTextsize}
              textAnchor="middle"
              fill={pointTextColor}
            >
              {point.value}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default LineChart;
