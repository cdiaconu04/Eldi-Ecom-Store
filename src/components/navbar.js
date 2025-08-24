"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingCart } from 'lucide-react';
import { motion } from "motion/react"
import Link from "next/link";
import { useCart } from "../context/cart";

export default function Navbar({moved}) {
    const topStyle = "fixed top-0 left-0 w-full z-50 bg-opacity-100"
    const movedStyle = "fixed top-0 left-0 w-full z-50 bg-stone-900 shadow-xl"
    let finalStyle = moved ? movedStyle : topStyle;

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowSize, setWindowSize] = useState("");

    const { items: cartItems } = useCart();

    const linkTextSize = "2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm text-sm"

    function getLogoDimensions() {
        if (windowSize == "xs") return 55
        else if (windowSize == "sm") return 60;
        else if (windowSize == "md") return 65;
        else if (windowSize == "lg") return 75;
        else if (windowSize == "xl") return 90;
        else return 90;
    }

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
        <nav className={finalStyle}>
            <div className="flex items-center justify-between mx-auto px-4 py-1">
                <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/"
                    // whileHover={{ scale: 1.05 }}
                >
                    {/* <p className="text-white font-bold font-serif text-5xl p-7"> eldi </p> */}
                    <img src="/eldilogo.png" width={getLogoDimensions()} height={getLogoDimensions()} className="p-3"/>
                </Link>
                
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-row justify-center items-center gap-6">
                        <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                            <li className="group flex flex-col hover:bg-white rounded-full transition">
                                <Link className={`group block px-4 py-1 text-white font-bold rounded-sm border-0 group-hover:text-gray-950 transition duration-300 ${linkTextSize}`} href="/"> Home </Link>
                            </li>
                            <li className="group flex flex-col hover:bg-white rounded-full transition">
                                <Link className={`group block px-4 py-1 text-white font-bold rounded-sm border-0 group-hover:text-gray-950 transition duration-300 ${linkTextSize}`} href="/products"> Products </Link>
                            </li>
                            <li className="group flex flex-col hover:bg-white rounded-full transition">
                                <Link className={`group block px-4 py-1 text-white font-bold rounded-sm border-0 group-hover:text-gray-950 transition duration-300 ${linkTextSize}`} href="/contact"> Contact </Link>
                            </li>
                            {/* <li className="group flex flex-col hover:bg-white rounded-full">
                                <a className="group block px-5 py-2 text-white font-bold rounded-sm border-0 group-hover:text-gray-950 transition duration-300"> Contact us </a>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-6">

                    <Link href="/cart">
                        <div className="relative">
                            <motion.div className="group p-2 hover:bg-white rounded-full transition"
                                // whileHover={{ scale: 1.03 }}
                                // whileTap={{ scale: 0.95 }}
                            >
                                    
                                <ShoppingCart className="text-white group-hover:text-gray-950"/>
                                    
                            </motion.div>

                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full leading-none">
                                    {cartItems.length}
                                </span>
                            )}

                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}