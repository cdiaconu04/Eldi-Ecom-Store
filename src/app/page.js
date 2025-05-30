"use client"
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';

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
    <div className="w-full bg-black">

      <Navbar/>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none h-screen z-0">
        <img src="/leather.png" className="w-full h-screen object-cover opacity-70" width={windowWidth} height={windowHeight}/>
      </div>

      {/* Foreground */}
      

      <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">
        <div className="flex flex-col gap-3">
          
          <h1 className="text-white text-9xl font-bold z-10 font-serif">eldi</h1>
          <h2 className="text-white text-3xl font-bold z-10 font-serif"> Elegant, Timeless, Leather Goods. </h2>

          <button className="w-fit bg-orange-950 font-serif font-bold p-3 hover:bg-orange-900 rounded-md"> View Products </button>

        </div>
      </div>

    </div>
  );
}
