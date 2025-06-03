"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingCart } from 'lucide-react';
import { motion } from "motion/react"

export default function Navbar({moved}) {
    const topStyle = "fixed top-0 left-0 w-full z-50 bg-opacity-100"
    const movedStyle = "fixed top-0 left-0 w-full z-50 bg-stone-900 shadow-xl"

    let finalStyle = moved ? movedStyle : topStyle;

    const pathname = usePathname()
    const [hydrated, setHydrated] = useState(false);
    
    let productsStyle = hydrated && pathname === "/products" ? "group block px-3 py-2 text-gray-950 bg-white font-bold rounded-full border-0 transition duration-300" :
        "group block px-5 py-2 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300 hover:underline"

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <nav className={finalStyle}>
            <div className="flex items-center justify-between mx-auto px-4 py-2">
                <motion.a className="flex items-center space-x-3 rtl:space-x-reverse" href="/"
                    whileHover={{ scale: 1.05 }}
                >
                    {/* <p className="text-white font-bold font-serif text-5xl p-7"> eldi </p> */}
                    <img src="/eldilogo.png" width={110} height={110} className="p-3"/>
                </motion.a>

                <div className="flex flex-row justify-center items-center gap-6">
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="flex flex-col">
                            <a className="group block px-5 py-2 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300 hover:underline" href="/products"> Products </a>
                        </li>
                        <li className="flex flex-col">
                            <a className="group block px-5 py-2 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300 hover:underline"> Contact us </a>
                        </li>
                    </ul>

                    <a href="/cart">
                        <ShoppingCart className="text-white"/>
                    </a>
                </div>
            </div>
        </nav>
    )
}