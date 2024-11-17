import React, { useState } from "react";
import "./RDashboard.css";
import Radio from "../Inputs/Radios/Radio";
import CircleProgress1 from "../SpeedoMeter/CircleProgress1/CircleProgress1";
import Speedometer from "../SpeedoMeter/SpeedoMeter (CSS)/SpeedoMeter";
import BarChartSingle from "../Charts/BarChartSingle/BarChartSingle";
import LineChart from "../Charts/LineChart/LineChart";
import maruthi from "./DashboardImages/Maruthi.webp";
import hyundai from "./DashboardImages/hyundaiRed.png";
import red from "./DashboardImages/red.png";
import green from "./DashboardImages/green2.png";
import yellow from "./DashboardImages/yellow.png";
import PercentageCard from "./PercentageCard";





function RDashboard() {
  const teamData = {
    "Hyundai": {
      productName: "Hyundai",
      productID: "Hyu-01",
      lastMonthResponse: 10,
      currentMonthResponse: 20,
      lastMonthSalesPercentage: 80,
      CurrentMonthSalesPercentage: 50,
      customerStatisfactionScore: 40,
      customerEffortScore: 90,
      netPromoterScore: 60,
      promotersPercentage: 71,
      passivesPercentage: 45,
      detractorsPercentage: 30,
      logo: hyundai,
      xAxis: ["A", "B", "C", "D", "E", "F"],
      values: [10, 20, 30, 40, 50, 60],
      yAxisLabels: [0, 20, 40, 60, 80, 100],
    },
    "Maruthi": {
      productName: "Maruthi",
      productID: "Mar-02",
      lastMonthResponse: 10,
      currentMonthResponse: 5,
      lastMonthSalesPercentage: 30,
      CurrentMonthSalesPercentage: 90,
      customerStatisfactionScore: 70,
      customerEffortScore: 50,
      netPromoterScore: 80,
      promotersPercentage: 40,
      passivesPercentage: 30,
      detractorsPercentage: 20,
      logo: maruthi,
      xAxis: ["A", "B", "C", "D", "E", "F"],
      values: [60, 50, 40, 30, 20, 10],
      yAxisLabels: [0, 20, 40, 60, 80, 100],
    },
  };

  const [selectedTeam, setSelectedTeam] = useState("Maruthi");

  const {
    productName,
    productID,
    lastMonthResponse,
    currentMonthResponse,
    lastMonthSalesPercentage,
    CurrentMonthSalesPercentage,
    customerStatisfactionScore,
    customerEffortScore,
    netPromoterScore,
    promotersPercentage,
    passivesPercentage,
    detractorsPercentage,
    logo,
    xAxis,
    values,
    yAxisLabels,
  } = teamData[selectedTeam];

  return (
    <div className="RDashboardPage">
      <span className="navBtn" ><a href='/Rchart'>Go To Charts</a></span>
      <div className="dashHeader">
        <h3>
          Support Team Slide Dashboard -
          <span className="teamAtHeader">{selectedTeam}</span>
        </h3>
        <div className="">
          <div className="rads">
            <Radio
              name="Maruthi"
              isSelected={selectedTeam === "Maruthi"}
              onChange={() => setSelectedTeam("Maruthi")}
            />
          </div>
          <div className="rads">
            <Radio
              name="Hyundai"
              isSelected={selectedTeam === "Hyundai"}
              onChange={() => setSelectedTeam("Hyundai")}
            />
          </div>
        </div>
      </div>
      <div className="meterAndPercentContainer">
        {/* ____________ Col 1 _____________ */}

        <div className="cardCol1">
          {/* ____________ Row 1 _____________ */}
          <div className="cardsContainerRow1">
            <div className="myCard zoomEft">
              <h4>Customer Statisfaction Score</h4>

              <div className="prodDetails">{productName}</div>
              <div className="prodDetails">{productID}</div>
            </div>
            <div className="myCard zoomEft">
              <h4>Average Response Time</h4>
              <div style={{ display: "flex" }}>
                <div style={{ width: "60%" }}>
                  <div>{lastMonthResponse} </div>
                  <p>Last Month</p>
                  <div style={{color: ` ${
                        lastMonthResponse < currentMonthResponse
                          ? "red"
                          : "green"
                      }`, fontWeight:'bold'}}>{currentMonthResponse}

                  <p>Current Month</p>
                  </div>
                </div>
                <div style={{ width: "40%" }}>
                  <div
                    style={{
                      border: `5px solid ${
                        lastMonthResponse < currentMonthResponse
                          ? "red"
                          : "green"
                      }`,
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",

                      color: ` ${
                        lastMonthResponse < currentMonthResponse
                          ? "red"
                          : "green"
                      }`,
                      height: "80%",
                      alignContent: "center",
                      textAlign: "center",
                      borderRadius: "15px",
                    }}
                  >
                    {lastMonthResponse - currentMonthResponse < 0
                      ? (lastMonthResponse - currentMonthResponse) * -1
                      : lastMonthResponse - currentMonthResponse}
                  </div>
                </div>
              </div>
            </div>
            <div className="myCard zoomEft">
              <h4>Customer Statisfaction Score</h4>
              <div style={{ display: "flex" }}>
                <div style={{ width: "60%" }}>
                  <div>{lastMonthSalesPercentage} </div>
                  <p>Last Month</p>
                  <div
                  style={{color: ` ${
                    lastMonthSalesPercentage < CurrentMonthSalesPercentage
                      ? "red"
                      : "green"
                  }`, fontWeight:'bold'}}
                  >{CurrentMonthSalesPercentage}

                  <p>Current Month</p>
                  </div>
                </div>
                <div style={{ width: "40%" }}>
                  <div
                    style={{
                      border: `5px solid ${
                        lastMonthSalesPercentage < CurrentMonthSalesPercentage
                          ? "red"
                          : "green"
                      }`,
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                      color: ` ${
                        lastMonthSalesPercentage < CurrentMonthSalesPercentage
                          ? "red"
                          : "green"
                      }`,
                      height: "80%",
                      alignContent: "center",
                      textAlign: "center",
                      borderRadius: "15px",
                    }}
                  >
                    {lastMonthSalesPercentage - CurrentMonthSalesPercentage < 0
                      ? (lastMonthSalesPercentage -
                          CurrentMonthSalesPercentage) *
                        -1
                      : lastMonthSalesPercentage - CurrentMonthSalesPercentage}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ____________ Row 2 _____________ */}
          <div className="cardsContainerRow1">
            <div className="myCard zoomEft">
              <h4>Customer Statisfaction Score</h4>

              <div>
                <CircleProgress1
                  progress={customerStatisfactionScore}
                  containerWidth="100px"
                  containerHeight="100px"
                  imageWidth={50}
                  imageHeight={50}
                  trackColor="#bdc9f5"
                  progressColor={
                    customerStatisfactionScore < 50
                      ? "#f7c477"
                      : customerStatisfactionScore < 70
                      ? "#e0f777"
                      : customerStatisfactionScore < 90
                      ? "#77f7a6"
                      : ""
                  }
                  centerImage={logo}
                />
              </div>
              <div>score= {customerStatisfactionScore}</div>
            </div>
            <div className="myCard zoomEft">
              <h4>Customer Effort Score {customerEffortScore}</h4>
              <Speedometer
                value={customerEffortScore}
                minValue={0}
                maxValue={100}
                labelFontSize="100px" // ok
                needleHeightRatio={0.55}
                needleTransitionDuration={2000}
                needleTransition="ease-in-out"
                needleColor="darkblue"
                needleBasepointColor="darkblue"
                arcTrackColor={
                  customerEffortScore < 50
                    ? "#f7c477"
                    : customerEffortScore < 70
                    ? "#e0f777"
                    : customerEffortScore < 90
                    ? "#77f7a6"
                    : "green"
                }
                tagColor="gray"
                size={0.8}
              />
            </div>
            <div className="myCard zoomEft">
              <h4>Net Promoter Score</h4>
              <Speedometer
                value={netPromoterScore}
                minValue={0}
                maxValue={100}
                labelFontSize="100px" // ok
                needleHeightRatio={0.55}
                needleTransitionDuration={2000}
                needleTransition="ease-in-out"
                needleColor="darkblue"
                needleBasepointColor="darkblue"
                arcTrackColor={
                  netPromoterScore < 50
                    ? "#f7c477"
                    : netPromoterScore < 70
                    ? "#e0f777"
                    : netPromoterScore < 90
                    ? "#77f7a6"
                    : "green"
                }
                tagColor="gray"
                size={0.8}
              />
            </div>
          </div>
        </div>
        {/* min-width: 300px; */}
        {/* ____________ Col 2 _____________ */}
        <div className="cardCol2">
          <div className="cardCol2Inner" style={{justifyContent:'space-around',minWidth:'250px'}}>
            <PercentageCard name="Promoters" percentage={promotersPercentage} />
            {/* <hr /> */}
            <PercentageCard name="Passives" percentage={passivesPercentage} />
            {/* <hr /> */}
            <PercentageCard
              name="Decorators"
              percentage={detractorsPercentage}
            />
          </div>
        </div>
      </div>

      <div className="graphChartContainer">
        <div className="rChart1 zoomEft">
          <BarChartSingle
            chartHeight="180px"
            chartWidth="250px"
            xAxis={xAxis}
            values={values}
            yAxisLabels={yAxisLabels}
          />
        </div>
        <div className="rChart1 zoomEft">
          <LineChart containerHeight="250px" containerWidth="250px" />
        </div>
        <div className="rChart1 zoomEft">
          <BarChartSingle
            chartHeight="180px"
            chartWidth="250px"
            xAxis={xAxis}
            values={values}
            yAxisLabels={yAxisLabels}
          />
        </div>
      </div>
    </div>
  );
}

export default RDashboard;
