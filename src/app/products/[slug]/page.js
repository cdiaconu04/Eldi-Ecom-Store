"use client"
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';
import { motion } from "motion/react"
import { useState } from 'react';
import { useCart } from "../../../context/cart";
import { useRecents } from "../../../context/recents";

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


import Link from "next/link";
// import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductPage() {
    const params = useParams();
    const product = products.find(p => p.slug === params.slug);

    const [curPic, setCurPic] = useState(product.pics[0].pic);
    const [curPicId, setCurPicId] = useState(product.pics[0].id);

    const numDropdowns = product.personalizable ? product.personalizationTypes.length : 0;
    const [selectedValues, setSelectedValues] = useState(Array(numDropdowns).fill(""));

    const { addToCart, removeFromCart, items: cartItems } = useCart();
    const { addRecents, recentlyViewed } = useRecents();

    //   TO EDIT LATER:
    if (!product) return <div>Product not found</div>; 

    function handleSelectChange(index, value) {
        setSelectedValues(prevValues => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    }

    const handleAddToCart = () => {
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            personalizations: selectedValues,
            personalizable: product.personalizable,
            pic: product.pics[0].pic,
        }

        if (cartItems.some(cartItem => cartItem.id === item.id)) {
            toast.error('Item already in cart.');
        } else if (selectedValues.some(value => value === "")) {
            toast.error('Please select all personalization options before adding to cart.');
        } else {
            toast('Item added to cart.');
            addToCart(item);
        } 
    }

    const handleAddToRecents = (product) => {
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            slug: product.slug,
            pic: product.pic,
        }
        addRecents(item)
    }

    const handleBuyNow = async () => {
        const stripe = await stripePromise;

        const res = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ priceId: product.priceID }),
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
            <Navbar moved={true} />
            <Toaster
                gutter={6000000}
            />

            <div className="w-full bg-stone-200">
                <div className="max-w-screen-xl mx-auto min-h-screen py-40 flex flex-col gap-10 items-center relative overflow-hidden">
                    <div className="flex flex-row gap-30 justify-center">

                        {/* Picture carrousel */}
                        <div className="flex flex-row gap-5 justify-normal">

                            <div className="flex flex-col gap-2 justify-start pl-1">
                                {product.pics.map((pic) => (
                                    <motion.button key={pic.id} onClick={() => {setCurPic(pic.pic); setCurPicId(pic.id)}}
                                        whileHover={{ scale: 1.05 }}>
                                        <img src={pic.pic} width={130} className={`rounded-md ${curPicId === pic.id ? "" : "opacity-60 hover:opacity-80"}`}/>
                                    </motion.button>
                                ))}
                            
                            </div>
                            
                            <div>
                                <img src={curPic} width={1300} height={1300} className="rounded-lg"/>
                            </div>
                        </div>

                        {/* Product details */}
                        <div className="flex flex-col gap-10 items-center">
                            <div className="flex flex-col gap-3 bg-neutral-100 p-5 rounded-lg shadow-lg relative">
                                <h2 className="text-2xl font-bold font-serif text-gray-950"> {product.name} </h2>
                                <p className="text-xl font-serif font-bold text-gray-950">CA{product.price}</p>
                                <p className="text-lg font-serif text-gray-800"> {product.description} </p>
                            </div>
                            
                            <div className={`flex flex-col ${product.personalizable === true ? "gap-8" : ""} 
                                bg-neutral-100 p-5 rounded-lg shadow-lg relative w-full`}>

                                {
                                    product.personalizable === true ? 
                                        <div className="flex flex-col gap-3">

                                            {product.personalizationTypes.map((persType, index) => (
                                                <div key={persType.id} className="flex flex-col gap-1">
                                                    <label className="text-lg font-serif text-gray-950 font-bold">{persType.name}</label>

                                                    <select
                                                        value={selectedValues[index]}
                                                        onChange={(e) => handleSelectChange(index, e.target.value)}
                                                        className="text-lg font-serif text-gray-800 border-gray-400 border-1 rounded-lg p-1" 
                                                    >
                                                        <option value="" className="text-lg font-serif text-gray-800"> Select an option </option>

                                                        {
                                                            product.personalizationOptions[persType.id].map((option) => (
                                                                <option key={option.id} value={option.name} className="text-lg font-serif text-gray-800">
                                                                    {option.name}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>

                                                </div>
                                            ))}

                                        </div>

                                    : <div></div>
                                }
                                <div className="flex flex-col gap-3 justify-center">
                                    <motion.button className="bg-neutral-800 rounded-full text-white text-lg font-serif px-20 py-3 hover:bg-neutral-950 cursor-pointer font-bold"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleBuyNow}
                                    > Buy </motion.button>
                                    <motion.button className="bg-neutral-800 rounded-full text-white text-lg font-serif px-20 py-3 hover:bg-neutral-950 cursor-pointer font-bold"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleAddToCart}
                                    > Add to Cart </motion.button>


                                    <motion.button className="bg-gray-800 rounded-full text-white text-lg font-serif px-20 py-3 hover:bg-gray-950 cursor-pointer font-bold"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                    > View on Etsy </motion.button>
                                </div>

                            </div>
                        </div>


                        
                    </div>

                    <div className="flex flex-col gap-5 bg-neutral-100 p-5 rounded-lg shadow-lg relative w-full">

                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold font-serif text-gray-950"> More details </h2>
                            <p className="text-lg font-serif text-gray-800"> {product.moreDetails.description} </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold font-serif text-gray-950"> What's in the package </h2>
                            <p className="text-lg font-serif text-gray-800"> {product.moreDetails.inpackage} </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold font-serif text-gray-950"> Materials </h2>
                            <p className="text-lg font-serif text-gray-800"> {product.moreDetails.materials} </p>
                        </div>
                        
                    
                    
                    </div>
                    
                    { recentlyViewed.length === 0 ? null : 
                        <div className="flex flex-col gap-5 bg-neutral-100 p-5 rounded-lg shadow-lg relative items-center justify-center">
                            <h2 className="text-2xl font-bold font-serif text-gray-950"> Recently viewed </h2>

                            <div className="flex flex-row gap-5">
                                

                                {recentlyViewed.map((item, index) => (
                                    <Link key={index} href={`/products/${item.slug}`}>
                                        <button onClick={() => handleAddToRecents(item)}>
                                            <motion.div className="flex flex-col justify-center items-center gap-2 hover:bg-white hover:rounded-xl p-3 hover:shadow-xl"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <img src={item.pic} width={250} height={250} className="shadow-xl rounded-md"/>
                                                <p className="text-md font-serif text-gray-950">{item.name}</p>
                                                <p className="text-gray-950 text-sm font-serif font-bold text-center"> CA{item.price} </p>
                                            </motion.div>
                                        </button>
                                    </Link>
                                ))}

                            </div>
                        </div>
                    }
                    


                    

                </div>
            </div>
        </div>
    )
}

