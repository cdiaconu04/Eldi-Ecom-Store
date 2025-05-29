"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 pointer-events-none h-screen">
        <img src="/leather.png" className="w-full h-screen object-cover" width={windowWidth} height={windowHeight}/>
        
      </div>

      <div>
        
      </div>

    </div>
  );
}
