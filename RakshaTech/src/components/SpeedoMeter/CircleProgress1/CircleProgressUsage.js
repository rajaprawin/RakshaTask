import React, { useState } from "react";
import CircleProgress1 from "./CircleProgress1";
import a from './SpeedImages/1.webp'
import b from './SpeedImages/Engine.jpg'

function CircleProgressUsage() {
  const [progress, setProgress] = useState(50);
  return (
    <>
      <CircleProgress1
        progress={progress}
        containerWidth="200px"
        containerHeight="200px"
        imageWidth={105}
        imageHeight={105}
        trackColor="lightblue"
        progressColor="blue"
        centerImage={b}
      />
      <input
        type="number"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
    </>
  );
}

export default CircleProgressUsage;
