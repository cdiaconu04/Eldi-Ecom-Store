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

    const pathname = usePathname()
    const [hydrated, setHydrated] = useState(false);

    const { addToCart, removeFromCart, items: cartItems } = useCart();
    
    let productsStyle = hydrated && pathname === "/products" ? "group block px-3 py-2 text-gray-950 bg-white font-bold rounded-full border-0 transition duration-300" :
        "group block px-5 py-2 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300 hover:underline"
    
    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <nav className={finalStyle}>
            <div className="flex items-center justify-between mx-auto px-4 py-1">
                <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/"
                    // whileHover={{ scale: 1.05 }}
                >
                    {/* <p className="text-white font-bold font-serif text-5xl p-7"> eldi </p> */}
                    <img src="/eldilogo.png" width={90} height={90} className="p-3"/>
                </Link>

                <div className="flex flex-row justify-center items-center gap-6">
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="group flex flex-col hover:bg-white rounded-full transition">
                            <Link className="group block px-4 py-1 text-white text-lg font-bold rounded-sm border-0 group-hover:text-gray-950 transition duration-300" href="/"> Home </Link>
                        </li>
                        <li className="group flex flex-col hover:bg-white rounded-full transition">
                            <Link className="group block px-4 py-1 text-white text-lg font-bold rounded-sm border-0 group-hover:text-gray-950 transition duration-300" href="/products"> Products </Link>
                        </li>
                        {/* <li className="group flex flex-col hover:bg-white rounded-full">
                            <a className="group block px-5 py-2 text-white font-bold rounded-sm border-0 group-hover:text-gray-950 transition duration-300"> Contact us </a>
                        </li> */}
                    </ul>
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