"use client"
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React, { useRef } from "react";
import { motion } from "motion/react"
import { products } from '../data/products.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from "next/link";
import { useRecents } from "../context/recents";
import { Noto_Serif } from 'next/font/google';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowSize, setWindowSize] = useState("");

  const popularRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const [featuredFilter, setFeaturedFilter] = useState(true);
  const featuredProducts = products.filter(product => product.featured === true)

  const { addRecents, recentlyViewed } = useRecents();

  const handleAddToRecents = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      pic: product.pics[0].pic,
    }
    addRecents(item)
  }

  function getLogoDimensions() {
    if (windowSize == "xs") return 100
    else if (windowSize == "sm") return 120;
    else if (windowSize == "md") return 170;
    else if (windowSize == "lg") return 180;
    else if (windowSize == "xl") return 220;
    else return 220;
  }

  function getFeaturedPicDimensions() {
    if (windowSize == "xs") return 100
    else if (windowSize == "sm") return 130;
    else if (windowSize == "md") return 220;
    else if (windowSize == "lg") return 250;
    else if (windowSize == "xl") return 280;
    else return 320;
  }

  function getAboutPicDimensions() {
    if (windowSize == "xs") return 130
    else if (windowSize == "sm") return 160;
    else if (windowSize == "md") return 250;
    else if (windowSize == "lg") return 280;
    else if (windowSize == "xl") return 310;
    else return 350;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(false);
        } else {
          setIsInView(true);
        }
      },
      
      { threshold: 0.9999 },
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

      if (windowWidth >= 1536) setWindowSize("2xl");
      else if (windowWidth >= 1280) setWindowSize("xl");
      else if (windowWidth >= 1024) setWindowSize("lg");
      else if (windowWidth >= 768) setWindowSize("md");
      else if (windowWidth >= 640) setWindowSize("sm");
      else setWindowSize("xs")
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div>
      <Navbar moved={isInView}/>

      {/* Intro section */}
      <div className="w-full bg-black" ref={popularRef}>
        
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none bg-fixed bg-cover z-0 bg-center opacity-70 bg-[url('/leather.png')]"/>

        {/* Foreground */}
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">
          <div className="flex flex-col gap-4 p-8 rounded-lg">
            
            {/* <h1 className="text-white text-9xl font-bold z-10 font-serif">eldi</h1> */}
            <img src="/eldilogocropped.png" width={getLogoDimensions()} height={getLogoDimensions()} className="py-2"/>
            
            <h2 className="text-Swhite font-bold z-10 font-serif py-3
              2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg"
              > Elegant, Timeless, Leather Goods. </h2>
            
            {/* sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg */}
            <Link href="/products" className="w-fit rounded-full">
              <motion.button className="w-fit bg-stone-800 font-serif font-bold px-5 py-2 hover:bg-stone-950 rounded-full mouse-point cursor-pointer
                text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl-text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              > View Products </motion.button>
            </Link>

            {/* <motion.button onClick={() => router.push("/products")} className="w-fit bg-stone-800 font-serif font-bold px-5 py-2 hover:bg-stone-950 rounded-full mouse-point cursor-pointer
              sm:text-7xl md:text-md lg:text-md xl:text-md 2xl:text-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Products
            </motion.button> */}
            

          </div>
        </div>
      </div>

      {/* Popular products */}
      <div className="w-full bg-stone-100">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center relative overflow-hidden
          2xl:py-20 xl:py-15 lg:py-10 py-10
          2xl:gap-17 xl:gap-11 lg:gap-6 gap-6"
        >
          
          
          <h2 className="font-bold font-serif text-black
            2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text:xl"
          > Featured Products </h2>

          <div className="grid grid-cols-3 justify
            2xl:gap-10 xl:gap-10 lg:gap-7 md:gap-5
          ">
            
            {featuredProducts.map(product => (
              <Link key={product.id} href={`/products/${product.slug}`}>

                <button onClick={() => handleAddToRecents(product)}>
                  <motion.div className="flex flex-col items-center justify-center gap-5 hover:bg-white hover:rounded-xl hover:shadow-xl cursor-pointer
                    p-2 md:p-2 lg:p-3 xl:p-4 2xl:p-5
                  "
                    whileHover={{ scale: 1.02 }}
                  >
                    <img src={product.pics[0].pic} className="shadow-xl rounded-md" width={getFeaturedPicDimensions()} height={getFeaturedPicDimensions()}/>

                    <div className="flex flex-col">
                      <p className="text-gray-950 font-serif
                        2xl:text-lg xl:text-lg lg:text-base sm:text-base text-sm 
                        2xl:max-w-[200ch] xl:max-w-[200ch] lg:max-w-[200ch] md:max-w-[20ch] sm:max-w-[20ch] max-w-[20ch] 
                      "> {product.name} </p>
                      <p className="text-gray-950 font-serif font-bold text-center
                        2xl:text-base xl:text-base lg:text-sm sm:text-sm text-xs
                      "> CA{product.price} </p>
                    </div>

                  </motion.div>
                </button>
              </Link>
            ))}

          </div>

          
          <Link href="/products" className="rounded-full">
            <motion.button className="w-fit bg-stone-800 font-serif font-bold px-5 py-2 hover:bg-stone-950 rounded-full cursor-pointer
              text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl-text-base
            "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            > View all </motion.button>
          </Link>
          

        </div>
      </div>

      {/* About */}
      <div className="w-full bg-stone-300">
        <div className="max-w-screen-xl mx-auto flex flex-col relative overflow-hidden
          2xl:py-20 xl:py-15 lg:py-10 py-10
          2xl:gap-13 xl:gap-10 lg:gap-7
          2xl:px-0 xl:px-11 lg:px-20 px-20
          xl:gap-2 lg:gap-5 md:gap-5 sm:gap-5 gap-5
        "
        >
          <h2 className="text-4xl font-serif font-bold text-black
            2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text:xl"
          > About Us </h2>

          <div className="grid grid-cols-3 gap-13">
            <div className="flex flex-col gap-17 justify-center"> 
              <img src="/crafting.png" width={getAboutPicDimensions()} height={getAboutPicDimensions()} className="rounded-md shadow-lg"/>
            </div>

            <div className="col-span-2 flex items-center justify-between">

              <div className="flex flex-col gap-8">
                <p className="text-gray-800 font-serif col-span-2
                  2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs
                ">
                  ElDi offers handmade leather products focused on quality, minimalism, and functionality. We made it our mission to  fascinate with the  craft of the artisan whose lasting creations are in harmony with the environment and inviting to a lifestyle that is aware of our impact on the planet.
                </p>
                <p className="text-gray-800 font-serif
                  2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs
                ">
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
