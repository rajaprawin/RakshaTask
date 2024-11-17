import "./App.css";
import Header from "./components/Common/Header";


import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";

import Login from "./components/RakshaTechnologies/Login";
import SpeedoMeterNpm from "./components/SpeedoMeter/SpeedoMeterNpm ( npm i react-speedometer )/SpeedoMeterNpm";
import SpeedoMeterUsage from "./components/SpeedoMeter/SpeedoMeter (CSS)/SpeedoMeterUsage";
import CircleProgressUsage from "./components/SpeedoMeter/CircleProgress1/CircleProgressUsage";
import LineChartUsage from "./components/Charts/LineChart/LineChartUsage";
import BarChartSingle from "./components/Charts/BarChartSingle/BarChartSingle";
import BarChartDouble from "./components/Charts/BarChartDouble( inProgress )/BarChartDouble";
import RDashboard from "./components/RakshaTechnologies/RDashboard";
import RchartPage from "./components/RakshaTechnologies/ChartPage/RchartPage";

function App() {
  return (
    <div className="Appcover">
     
        
          <Router>
            <HeaderWrapper />
            <Routes>
            
             
              <Route path="/RLogin" element={<Login />} />
              <Route path="/RDashboard" element={<RDashboard />} />
              <Route path="/Rchart" element={<RchartPage/>} />
              
            
            </Routes>
          </Router>
        
    </div>
  );
}

// Wrapper component for conditional rendering of Header
function HeaderWrapper() {
  const location = useLocation();
  const hideHeaderOnPaths = ["/flipkart", "/RDashboard", "/Rchart"]; // Add more paths if needed

  return !hideHeaderOnPaths.includes(location.pathname) ? <Header /> : null;
}

export default App;
