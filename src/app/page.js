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
    if (windowSize == "sm") return 220;
    else if (windowSize == "md") return 220;
    else if (windowSize == "lg") return 190;
    else if (windowSize == "xl") return 220;
    else return 220;
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
      else setWindowSize("sm");

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
            
            <h2 className="text-white font-bold z-10 font-serif py-3
              2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg"
              > Elegant, Timeless, Leather Goods. </h2>
            
            {/* sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg */}
            <Link href="/products" className="w-fit rounded-full">
              <motion.button className="w-fit bg-stone-800 font-serif font-bold px-5 py-2 hover:bg-stone-950 rounded-full mouse-point cursor-pointer
                sm:text-sm md:text-sm lg:text-md xl:text-md 2xl:text-md"
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
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-17 items-center justify-center relative overflow-hidden">
          
          <div>
            <h2 className="text-4xl font-bold font-serif text-black"> Featured Products </h2>
          </div>

          <div className="grid grid-cols-3 gap-10">
            
            {featuredProducts.map(product => (
              <Link key={product.id} href={`/products/${product.slug}`}>

                <button onClick={() => handleAddToRecents(product)}>
                  <motion.div className="flex flex-col items-center justify-center gap-5 hover:bg-white hover:rounded-xl p-5 hover:shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img src={product.pics[0].pic} className="shadow-xl rounded-md" width={320} height={320}/>

                    <div className="flex flex-col">
                      <p className="text-gray-950 text-lg font-serif"> {product.name} </p>
                      <p className="text-gray-950 text-md font-serif font-bold text-center"> {product.price} </p>
                    </div>

                  </motion.div>
                </button>
              </Link>
            ))}

          </div>

          
          <Link href="/products" className="rounded-full">
            <motion.button className="w-fit bg-stone-800 font-serif font-bold px-5 py-2 hover:bg-stone-950 rounded-full cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            > View all </motion.button>
          </Link>
          

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
