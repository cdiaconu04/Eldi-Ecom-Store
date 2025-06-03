"use client";
import Navbar from '../../components/navbar';
import { useCart } from "../../context/cart";
import { motion } from "motion/react"
import { ChevronRight } from 'lucide-react';

export default function CartPage() {
    const { addToCart, removeFromCart, items: cartItems } = useCart();


    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">

                <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-10 items-center relative overflow-hidden">
                    <h2 className="text-4xl font-bold font-serif text-black"> Your Cart </h2>

                    <div className="flex flex-row gap-5 items-center">

                        <div className="flex flex-col gap-3 bg-neutral-100 p-5 rounded-lg shadow-lg relative">
                            {cartItems.length === 0 ? (
                                // Empty shopping cart message
                                <div className="flex flex-col gap-3">
                                    <p className="text-lg font-serif text-gray-800"> Your shopping cart is empty.</p>

                                    <a href="/products" className="flex flex-row items-center justify-center">
                                        <motion.button className="flex flex-row items-center justify-center px-5 py-2 bg-stone-800 rounded-full hover:bg-stone-950 cursor-pointer"
                                            whileHover={{ x: 10, scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                        > 
                                            <p className="font-serif font-bold text-white"> Continue Shopping </p> 
                                            <ChevronRight className="text-white"/>
                                        </motion.button>
                                    </a>

                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    

                                </div>
                            )

                            }
                        </div>
                        
                        
                        <div className="flex flex-col gap-3 bg-neutral-100 p-5 rounded-lg shadow-lg relative w-100 divide-y-2 divide-solid divide-gray-800">
                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-serif text-gray-950 font-bold"> Order Summary </p>
                                <div className="flex flex-row justify-between">
                                    <p className="text-lg font-serif text-gray-800"> Subtotal </p>
                                    <p className="text-lg font-serif text-gray-800"> CA$0.00 </p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className="text-lg font-serif text-gray-800"> Tax </p>
                                    <p className="text-lg font-serif text-gray-800"> CA$0.00 </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-row justify-between">
                                <p className="text-lg font-serif text-gray-800 font-bold"> Total </p>
                                <p className="text-lg font-serif text-gray-800 font-bold"> CA$0.00 </p>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}
