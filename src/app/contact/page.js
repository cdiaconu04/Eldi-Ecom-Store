"use client"
import Navbar from '../../components/navbar';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "motion/react";

export default function Contact() {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Navbar moved={true}/>

            <div className="w-full bg-stone-200">

                <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center relative overflow-hidden min-h-screen
                    2xl:py-30 xl:py-23 lg:py-20 py-20
                    2xl:px-0 xl:px-11 lg:px-20 px-20
                    2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4 sm:gap-2 gap-1
                ">

                    <h1 className="font-bold font-serif text-gray-950
                        2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text:xl
                    "> Contact us </h1>

                    <div className="max-w-screen-xl bg-neutral-100 shadow-lg rounded-lg flex flex-col gap-8
                        2xl:p-8 xl:p-7 lg:p-6 md:p-5 sm:p-4 p-3 
                        lg:min-w-[60%] md:min-w-[70%] min-w-full
                    ">
                        <form onSubmit={handleSubmit} className="flex flex-col w-full
                            xl:gap-4 lg:gap-3 sm:gap-2 gap-2
                        ">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded-lg border-none focus:outline-none placeholder-gray-500
                                    text-gray-950 bg-white
                                    xl:text-base lg:text-sm text-xs 
                                    xl:p-3 md:p-2 sm:p-1.5 p-1
                                "
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-lg border-none focus:outline-none placeholder-gray-500
                                    text-gray-950 bg-white
                                    xl:text-base lg:text-sm text-xs 
                                    xl:p-3 md:p-2 sm:p-1.5 p-1
                                "
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="rounded-lg border-none focus:outline-none placeholder-gray-500
                                    text-gray-950 bg-white
                                    xl:text-base lg:text-sm text-xs 
                                    xl:p-3 md:p-2 sm:p-1.5 p-1
                                    "
                                required
                            />
                            {/* hover:bg-gradient-to-r hover:from-emerald-500 hover:via-green-500 hover:to-green-600 */}

                            <motion.button type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="rounded-full font-bold
                                text-white
                                bg-stone-800
                                xl:text-xl lg:text-lg sm:text-base text-sm
                                xl:p-3 md:p-2 p-1
                                ">
                                Send
                            </motion.button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

