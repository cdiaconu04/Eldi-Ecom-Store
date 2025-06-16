"use client";
import Navbar from '../../components/navbar';
import { useCart } from "../../context/cart";
import { motion } from "motion/react"
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import toast, { Toaster } from 'react-hot-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CartPage() {
    function getTotalPrice(theItems) {
        let sum = 0
        for (const item of theItems) {
            sum += item.priceNum
        }
        return sum
    }

    const { addToCart, removeFromCart, items: cartItems } = useCart();
    const [ totalPrice, setTotalPrice ] = useState(getTotalPrice(cartItems))

    useEffect(() => {
        setTotalPrice(getTotalPrice(cartItems))
    }, [cartItems]);

    const handleCheckout = async () => {
        if (cartItems.length == 0) {
            toast.error('Cart is empty.');
            return;
        }

        const stripe = await stripePromise;

        const res = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(

                cartItems.map((item) => ({
                    priceId: item.priceID,
                    personalizations: item.personalizations,
                    productName: item.name,
                }))
                
            ),
        });

        const data = await res.json();

        if (data.url) {
            window.location.href = data.url;
        } else {
            toast.error("Checkout session failed");
        }
    };

    return (
        <div>
            <Toaster gutter={6000000}/>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">

                <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-10 items-center relative overflow-hidden">
                    <h2 className="text-4xl font-bold font-serif text-black"> Your Cart </h2>

                    <div className="flex flex-row gap-30 items-center">

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
                                // Shopping cart items
                                <div className="flex flex-col">
                                    {cartItems.map((item) => (

                                        <div key={item.id} className="py-1">
                                            <motion.div className="flex flex-row gap-5 w-130 hover:bg-white rounded-lg p-3 justify-center items-center"
                                                whileHover={{ scale: 1.01 }}
                                            >
                                                
                                                <img src={item.pic} width={80} height={80} className="rounded-md w-[80px] h-[80px]"/>

                                                <div className="flex flex-row justify-between items-center w-full">
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-lg font-serif text-gray-950 font-bold">{item.name}</p>
                                                        <p className="text-lg font-serif text-gray-950">CA{item.price}</p>

                                                        {item.personalizable ? (
                                                            <div className="flex flex-col gap-1">
                                                                <p className="text-lg font-serif text-gray-950">
                                                                    {item.personalizations.map((pers, index) => (

                                                                        <span key={index}>
                                                                            {pers}{index < item.personalizations.length - 1 ? ", " : ""}
                                                                        </span>
                                                                        
                                                                    ))}
                                                                </p>
                                                            </div>
                                                        ) : null}
                                                    </div>

                                                    <motion.button className="group p-2 hover:bg-gray-950 rounded-full transition"
                                                        whileHover={{ scale: 1.03 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={ () => removeFromCart(item.id) }
                                                    >
                                                        <Trash2 className="text-gray-950 group-hover:text-white"/>
                                                    </motion.button>
                                                    

                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* Totals section */}
                        <div className="flex flex-col gap-3 bg-neutral-100 p-5 rounded-lg shadow-lg relative w-100 divide-y-2 divide-solid divide-gray-800">
                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-serif text-gray-950 font-bold"> Order Summary </p>

                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-row justify-between">
                                        <p className="text-lg font-serif text-gray-800 truncate w-35"> {item.name} </p>
                                        <p className="text-lg font-serif text-gray-800"> CA${item.priceNum}.00 </p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex flex-row justify-between">
                                <p className="text-lg font-serif text-gray-800 font-bold"> Total </p>
                                <p className="text-lg font-serif text-gray-800 font-bold"> CA${totalPrice}.00 </p>
                            </div>

                            <motion.button className="bg-neutral-800 hover:bg-neutral-950 text-white rounded-full font-serif font-bold py-3 cursor-pointer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCheckout}
                            > Checkout </motion.button>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}
