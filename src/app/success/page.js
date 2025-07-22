"use client"

import Navbar from '../../components/navbar';
import { motion } from "motion/react"
import { ChevronLeft } from 'lucide-react';
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div>
        <Navbar moved={true} />
        <div className="w-full bg-stone-200">
            <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-5 items-center justify-center relative overflow-hidden">
                <h1 className="font-bold font-serif text-gray-950
                    2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-lg
                "> Thank you for shopping at Eldi! </h1>

                <Link href="/products">
                    <motion.button className="flex flex-row items-center justify-center pr-5 pl-2 bg-stone-800 rounded-full hover:bg-stone-950 cursor-pointer
                        xl:py-2 md:py-1 py-0.5
                    "
                        whileHover={{ x: -10, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                    >   
                        <ChevronLeft/>
                        <p className="font-serif font-bold text-white
                            2xl:text-base lg:text-sm text-xs
                        "> Continue shopping </p>     
                    </motion.button>
                </Link>
            </div>
        </div>
    </div>
  );
}
