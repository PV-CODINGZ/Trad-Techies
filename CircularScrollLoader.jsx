import React, { useState, useEffect } from "react";

const CircularScrollLoader = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // SVG Circle Properties
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (scrollPercentage / 100) * circumference;

  return (
    <div className="fixed bottom-10 right-5 w-16 h-16 ">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="gray"
          strokeWidth="6"
          fill="black"
          opacity="0.3"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="cyan-blue"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
        {Math.round(scrollPercentage)}%
      </div>
    </div>
  );
};

export default CircularScrollLoader;
