"use client"
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';
import { motion } from "motion/react"
import { useState, useEffect } from 'react';
import { useCart } from "../../../context/cart";
import { useRecents } from "../../../context/recents";

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

import Link from "next/link";
// import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductPage() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowSize, setWindowSize] = useState("");

    const params = useParams();
    const product = products.find(p => p.slug === params.slug);

    const [curPic, setCurPic] = useState(product.pics[0].pic);
    const [curPicId, setCurPicId] = useState(product.pics[0].id);

    const numDropdowns = product.personalizable ? product.personalizationTypes.length : 0;
    const [selectedValues, setSelectedValues] = useState(Array(numDropdowns).fill(""));

    const { addToCart, removeFromCart, items: cartItems } = useCart();
    const { addRecents, recentlyViewed } = useRecents();

    // TO EDIT LATER:
    if (!product) return <div>Product not found</div>; 

    function handleSelectChange(index, value) {
        setSelectedValues(prevValues => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
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
            else setWindowSize("xs");
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    const handleAddToCart = () => {
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            priceNum: product.priceNum,
            priceID: product.priceID,
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
        if (selectedValues.some(value => value === "")) {
            toast.error('Please select all personalization options before buying.');
            return;
        }

        const stripe = await stripePromise;

        const res = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                // Sending only 1 product
                { 
                    priceId: product.priceID,
                    personalizations: selectedValues,
                    productName: product.name,
                }
                
            ]),
        });

        const data = await res.json();

        if (data.url) {
            window.location.href = data.url;
        } else {
            toast.error("Checkout session failed");
        }
    };

    function getPicDimensions() {
        if (windowSize == "xs") return 1300;
        else if (windowSize == "sm") return 400;
        else if (windowSize == "md") return 500;
        else if (windowSize == "lg") return 700;
        else if (windowSize == "xl") return 900;
        else return 1300;
    }

    function getPicButtonDimensions() {
        if (windowSize == "xs") return 130;
        else if (windowSize == "sm") return 50;
        else if (windowSize == "md") return 60;
        else if (windowSize == "lg") return 70;
        else if (windowSize == "xl") return 100;
        else return 130;
    }

    function getRecentPicDimensions() {
        if (windowSize == "xs") return 150;
        else if (windowSize == "sm") return 170;
        else if (windowSize == "md") return 190;
        else if (windowSize == "lg") return 210;
        else if (windowSize == "xl") return 230;
        else return 250;
    }
    
    return (
        <div>
            <Navbar moved={true} />
            <Toaster
                gutter={6000000}
            />

            <div className="w-full bg-stone-200">
                <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col gap-10 items-center relative overflow-hidden
                    2xl:px-0 xl:px-11 lg:px-20 px-20
                    2xl:py-40 xl:py-30 lg:py-25 md:py-20 sm:py-20 py-20
                ">
                    <div className="flex flex-row justify-center
                        2xl:gap-30 xl:gap-25 lg:gap-5 md:gap-5 gap-3
                    ">

                        {/* Picture carrousel */}
                        <div className="flex flex-row justify-normal
                            2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2 gap-1
                        ">

                            <div className="flex flex-col gap-2 justify-start pl-1">
                                {product.pics.map((pic) => (
                                    <motion.button key={pic.id} onClick={() => {setCurPic(pic.pic); setCurPicId(pic.id)}}
                                        whileHover={{ scale: 1.05 }}>
                                        <img src={pic.pic} width={getPicButtonDimensions()} className={`md:rounded-md rounded-sm ${curPicId === pic.id ? "" : "opacity-60 hover:opacity-80"}`}/>
                                    </motion.button>
                                ))}
                            
                            </div>
                            
                            <div>
                                <img src={curPic} width={getPicDimensions()} height={getPicDimensions()} className="md:rounded-lg rounded-md"/>
                            </div>
                        </div>

                        {/* Product details */}
                        <div className="flex flex-col items-center
                            2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4 gap-2
                        ">
                            <div className="flex flex-col bg-neutral-100 rounded-lg shadow-lg relative
                                2xl:gap-3 lg:gap-2 gap-1 
                                2xl:p-5 xl:p-4 lg:p-3 md:p-2 p-2
                            ">
                                <h2 className="font-bold font-serif text-gray-950
                                    2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base
                                "> {product.name} </h2>
                                <p className="font-serif font-bold text-gray-950
                                    2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm text-xs 
                                ">CA{product.price}</p>
                                <p className="font-serif text-gray-800
                                    2xl:text-lg xl:text-base lg:text-base md:text-sm sm:text-xs text-xs 
                                "> {product.description} </p>
                            </div>
                            
                            <div className={`flex flex-col ${product.personalizable === true ? "gap-8" : ""} 
                                bg-neutral-100 rounded-lg shadow-lg relative w-full
                                    2xl:p-5 xl:p-4 lg:p-3 md:p-2 p-2
                                `}>

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

                                <div className="flex flex-col justify-center
                                    2xl:gap-3 lg:gap-2 gap-1 
                                ">
                                    <motion.button className="bg-neutral-800 rounded-full text-white font-serif px-20 hover:bg-neutral-950 cursor-pointer font-bold
                                        2xl:text-lg xl:text-base lg:text-base md:text-sm sm:text-xs text-xs
                                        xl:py-3 lg:py-2 sm:py-1 py-1
                                    "
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleBuyNow}
                                    > Buy </motion.button>
                                    <motion.button className="bg-neutral-800 rounded-full text-white font-serif px-20 hover:bg-neutral-950 cursor-pointer font-bold
                                        2xl:text-lg xl:text-base lg:text-base md:text-sm sm:text-xs text-xs
                                        xl:py-3 lg:py-2 sm:py-1 py-1
                                    "
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleAddToCart}
                                    > Add to Cart </motion.button>

                                    <motion.a href={product.etsyLink} target="_blank" className="bg-gray-800 rounded-full text-white font-serif px-20 hover:bg-gray-950 cursor-pointer font-bold text-center
                                        2xl:text-lg xl:text-base lg:text-base md:text-sm sm:text-xs text-xs
                                        xl:py-3 lg:py-2 sm:py-1 py-1
                                    "
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View on Etsy
                                    </motion.a>
                                    
                                </div>

                            </div>
                        </div>


                        
                    </div>

                    <div className="flex flex-col gap-5 bg-neutral-100 rounded-lg shadow-lg relative w-full
                        2xl:p-5 xl:p-4 lg:p-3 md:p-2 p-2
                    ">

                        <div className="flex flex-col gap-1">
                            <h2 className="font-bold font-serif text-gray-950
                                2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm text-sm
                            "> More details </h2>
                            <p className="font-serif text-gray-800
                                2xl:text-lg xl:text-base lg:text-base md:text-sm text-xs 
                            "> {product.moreDetails.description} </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="font-bold font-serif text-gray-950
                                2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm text-sm
                            "> What's in the package </h2>
                            <p className="font-serif text-gray-800
                                2xl:text-lg xl:text-base lg:text-base md:text-sm text-xs 
                            "> {product.moreDetails.inpackage} </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="font-bold font-serif text-gray-950
                                2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm text-sm
                            "> Materials </h2>
                            <p className="font-serif text-gray-800
                                2xl:text-lg xl:text-base lg:text-base md:text-sm text-xs 
                            "> {product.moreDetails.materials} </p>
                        </div>
                        
                    
                    
                    </div>
                    
                    { recentlyViewed.length === 0 ? null : 
                        <div className="flex flex-col gap-5 bg-neutral-100 rounded-lg shadow-lg relative items-center justify-center
                            2xl:p-5 xl:p-4 lg:p-3 md:p-2 p-2
                        ">
                            <h2 className="font-bold font-serif text-gray-950
                                2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base text-sm
                            "> Recently viewed </h2>

                            <div className="flex flex-row gap-5">
                                

                                {recentlyViewed.map((item, index) => (
                                    <Link key={index} href={`/products/${item.slug}`}>
                                        <button onClick={() => handleAddToRecents(item)}>
                                            <motion.div className="flex flex-col justify-center items-center gap-2 hover:bg-white hover:rounded-xl hover:shadow-xl cursor-pointer
                                                xl:p-3 lg:p-2.5 md:p-2 sm:p-1.5
                                            "
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <img src={item.pic} width={getRecentPicDimensions()} height={getRecentPicDimensions()} className="shadow-xl rounded-md"/>
                                                <p className="font-serif text-gray-950
                                                    2xl:text-md xl:text-sm lg:text-sm md:text-sm text-xs 
                                                ">{item.name}</p>
                                                <p className="text-gray-950 font-serif font-bold text-center
                                                    2xl:text-sm xl:text-sm text-xs
                                                "> CA{item.price} </p>
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

