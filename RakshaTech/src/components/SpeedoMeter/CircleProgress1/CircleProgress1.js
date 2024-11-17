import React from "react";

function CircleProgress1({
    progress=50,
    containerWidth='200px',
    containerHeight='200px',
    imageWidth=70,
    imageHeight=70,
    trackColor='pink',
    progressColor='hotpink',
    centerImage
}) {

  const style = {
    container: {
      width: containerWidth,
      height: containerHeight,
      borderRadius: "50%",
      background: `
          radial-gradient(closest-side, white 79%, transparent 80% 100%),
          conic-gradient(${progressColor} ${progress}%, ${trackColor} 0)
        `,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // border:'2px solid red',
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",

      margin:'auto'
    },

    image: {
      width: imageWidth,
      height: imageHeight,
      borderRadius: "50%",
      padding:'0',
      border:'none'
    },
  };

  return (
    <div  >
      {/* <h2>CircleProgress1</h2> */}
      <div style={style.container}>
        <span style={{borderRadius:style.image.borderRadius, border:style.image.border}}>
          <img src={centerImage} 
          height={style.image.height} 
          width={style.image.width} 
          style={{borderRadius:style.image.borderRadius,
            
          }}/>
        </span>
      </div>
    </div>
  );
}

export default CircleProgress1;
