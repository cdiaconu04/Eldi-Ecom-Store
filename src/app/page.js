"use client"
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React, { useRef } from "react";
import { motion } from "motion/react"
import { products } from '../data/products.js';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const popularRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const [featuredFilter, setFeaturedFilter] = useState(true);
  const featuredProducts = products.filter(product => product.featured === true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(false);
        } else {
          setIsInView(true);
        }
      },
        
      { threshold: 0.12 }
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
      {/* <Navbar moved={isInView}/> */}
      <Navbar moved={isInView}/>

      {/* Intro section */}
      <div className="w-full bg-black" ref={popularRef}>
        
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
            
            <a href="/products">
              <button className="w-fit bg-orange-950 font-serif font-bold p-3 hover:bg-orange-900 rounded-md"> View Products </button>
            </a>
            

          </div>
        </div>
      </div>

      {/* Popular products */}
      <div className="w-full bg-stone-100">
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-17 items-center justify-center relative overflow-hidden">
          
          <div>
            <h2 className="text-4xl font-bold font-serif text-black"> Featured Products </h2>
          </div>

          <div className="grid grid-cols-3 gap-10">

            <motion.div className="flex flex-col items-center justify-center gap-5 hover:bg-white hover:rounded-xl p-5 hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.02 }}>
              <img src="/products/bayfullsizewallet/pic1.png" className="shadow-xl rounded-md" width={320} height={320}/>

              <div className="flex flex-col">
                <p className="text-gray-950 text-lg font-serif"> “Bay” Full Size Wallet </p>
                <p className="text-gray-950 text-md font-serif font-bold text-center"> CAD $100 </p>
              </div>
              
            </motion.div>

            <motion.div className="flex flex-col items-center justify-center gap-5 hover:bg-white hover:rounded-xl p-5 hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.02 }}>
              <img src="/products/finchcardswallet/pic1.png" className="shadow-xl rounded-md" width={320} height={320}/>

              <div className="flex flex-col">
                <p className="text-gray-950 text-lg font-serif"> “Finch” Cards Wallet </p>
                <p className="text-gray-950 text-md font-serif font-bold text-center"> CAD $100 </p>
              </div>
              
            </motion.div>

            <motion.div className="flex flex-col items-center justify-center gap-5 hover:bg-white hover:rounded-xl p-5 hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.02 }}>
              <img src="/products/westqueengothbracelet/pic1.png" className="shadow-xl rounded-md" width={320} height={320}/>

              <div className="flex flex-col">
                <p className="text-gray-950 text-lg font-serif"> “West Queen” Goth Cuff Bracelet </p>
                <p className="text-gray-950 text-md font-serif font-bold text-center"> CAD $100 </p>
              </div>
              
            </motion.div>
          </div>

          
          <a href="/products">
            <button className="w-fit bg-neutral-800 font-serif font-bold p-3 hover:bg-neutral-700 rounded-md"> View all </button>
          </a>
          

        </div>
      </div>

      {/* About */}
      <div className="w-full bg-stone-300">
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-13 relative overflow-hidden">
          <h2 className="text-4xl font-serif font-bold text-black"> About Us </h2>

          <div className="grid grid-cols-3 gap-13">
            <div className="flex flex-col gap-17"> 
              <img src="/crafting.png" width={350} height={350} className="rounded-md shadow-lg"/>
            </div>

            <div className="col-span-2 flex items-center justify-between">

              <div className="flex flex-col gap-8">
                <p className="text-gray-800 text-lg font-serif col-span-2">
                  ElDi offers handmade leather products focused on quality, minimalism, and functionality. We made it our mission to  fascinate with the  craft of the artisan whose lasting creations are in harmony with the environment and inviting to a lifestyle that is aware of our impact on the planet.
                </p>
                <p className="text-gray-800 text-lg font-serif">
                  Our products are handmade in a family run atelier in the Greater Toronto Area, Canada, using traditional techniques and leathers from the best tanneries in the world.  Either ordered for yourself or for someone you care about, the product is delivered in a package that adds to the excitement of receiving a very special gift.
                </p>
              </div>
            
            </div>

          </div>
          
        </div>
      </div>

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
}
