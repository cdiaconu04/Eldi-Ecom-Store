"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 pointer-events-none h-screen">
        <img src="/leather.png" className="w-full h-screen object-cover" width={windowWidth} height={windowHeight}/>
        
      </div>


      {/* <p>h</p> */}
    </div>
  );
}
