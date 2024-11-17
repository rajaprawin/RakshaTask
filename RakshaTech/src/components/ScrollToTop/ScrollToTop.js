// call the component to app.js
import React from 'react'
import { useEffect, useState } from "react";
import './ScrollToTop.css';
import scrollIcon from './Scroll_Icon.png';
function ScrollToTop() {
    
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // -----------------------------------
    // Function to handle scroll events
    // -----------------------------------
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      setShowScrollToTop(scrollTop > 0);
    };
  
    // -----------------------------------------------
    // Function triggers to show up arrow to go Top
    // -----------------------------------------------
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    
  return (
    <div>
       {showScrollToTop && (
        <div>
          <span  className="scrolltoTopContainer " onClick={scrollToTop}>
            {/* <span className="gototopArrow">&#129033;</span> */}
            <img src={scrollIcon}  height={40} width={40}/>
          </span >
        </div>
      )}

    </div>
  )
}

export default ScrollToTop
