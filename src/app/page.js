"use client"
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import React, { useRef } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const popularRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
        
            { threshold: 0.97 }
        );
            
        if (popularRef.current) {
            observer.observe(popularRef.current);
        }
            
        return () => {
            if (popularRef.current) {
                observer.unobserve(popularRef.current);
            }
        };
    }, [isInView]);

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
    <div>
      <Navbar moved={isInView}/>

      <div className="w-full bg-black">
        
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none h-screen z-0">
          <img src="/leather.png" className="w-full h-screen object-cover opacity-70" width={windowWidth} height={windowHeight}/>
        </div>

        {/* Foreground */}
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">
          <div className="flex flex-col gap-4">
            
            {/* <h1 className="text-white text-9xl font-bold z-10 font-serif">eldi</h1> */}
            <img src="/eldilogocropped.png" width={220} height={220} className="py-2"/>
            <h2 className="text-white text-3xl font-bold z-10 font-serif py-3"> Elegant, Timeless, Leather Goods. </h2>

            <button className="w-fit bg-orange-950 font-serif font-bold p-3 hover:bg-orange-900 rounded-md"> View Products </button>

          </div>
        </div>
      </div>

      <div className="w-full bg-stone-100" ref={popularRef}>
        <div className="max-w-screen-xl mx-auto py-30 flex flex-col gap-17 items-center justify-center relative overflow-hidden">
          {/* <div className="flex flex-col gap-3">
            
            <h1 className="text-white text-9xl font-bold z-10 font-serif">eldi</h1>
            <h2 className="text-white text-3xl font-bold z-10 font-serif"> Elegant, Timeless, Leather Goods. </h2>

            <button className="w-fit bg-orange-950 font-serif font-bold p-3 hover:bg-orange-900 rounded-md"> View Products </button>

          </div> */}

          <div>
            <h2 className="text-4xl font-bold font-serif text-black"> Popular Products </h2>
          </div>

          <div className="grid grid-cols-3 gap-13">

            <div className="flex flex-col items-center justify-center gap-5">
              <img src="/bayfullsizewallet.png" className="shadow-xl rounded-md" width={320} height={320}/>
              <p className="text-black text-lg font-serif font-bold"> “Bay” Full Size Wallet </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <img src="/finchcardswallet.png" className="shadow-xl rounded-md" width={320} height={320}/>
              <p className="text-black text-lg font-serif font-bold"> “Finch” Cards Wallet </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <img src="/westqueengothbracelet.png" className="shadow-xl rounded-md" width={320} height={320}/>
              <p className="text-black text-lg font-serif font-bold"> “West Queen” Goth Cuff Bracelet </p>
            </div>
          </div>

          <button className="w-fit bg-neutral-800 font-serif font-bold p-3 hover:bg-neutral-700 rounded-md"> View all </button>

        </div>
      </div>
      
      

    </div>
  );
}
