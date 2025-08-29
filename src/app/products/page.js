"use client";
import Navbar from '../../components/navbar';
import { useState, useEffect } from "react";
import { motion } from "motion/react"
import { ChevronRight } from 'lucide-react';
import { products } from '../../data/products.js';
import Link from "next/link";
import { useRecents } from "../../context/recents";

export default function Products() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowSize, setWindowSize] = useState("");

    const [typeFilter, setTypeFilter] = useState("All");

    const types = ["All", "Bracelets", "Wallets", "Watch straps"];

    const filteredProducts = typeFilter === "All" ? products : products.filter(product => product.type === typeFilter);

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

    function getPicDimensions() {
        if (windowSize == "xs") return 250;
        else if (windowSize == "sm") return 150;
        else if (windowSize == "md") return 170;
        else if (windowSize == "lg") return 200;
        else if (windowSize == "xl") return 220;
        else return 250;
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

    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">
                
                <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col items-center relative overflow-hidden
                    2xl:py-30 xl:py-23 lg:py-20 py-20
                    2xl:px-0 xl:px-11 lg:px-20 px-20
                    2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4 sm:gap-2 gap-1
                ">
                    
                    <h2 className="font-bold font-serif text-black
                        2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text:xl
                    "> Products </h2>

                    <div className="flex flex-row 
                        2xl:gap-25 xl:gap-20 lg:gap-15 md:gap-10 sm:gap-5
                    ">

                        <div className="flex flex-col gap-7">

                            <div className="flex flex-col gap-2">
                                <a href="https://www.etsy.com/ca/shop/ElDiLeatherGoods" target="_blank" className="flex flex-row items-center justify-center">
                                    <motion.button className="flex flex-row items-center justify-center bg-stone-800 rounded-full hover:bg-stone-950 cursor-pointer
                                        2xl:px-5 2xl:py-2 md:px-4 sm:px-3 sm:py-1
                                    "
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                    > 
                                        <p className="font-serif font-bold text-white
                                            text-xs sm:text-xs md:text-sm lg:text-base xl:text-base 2xl-text-base
                                        "> Shop on Etsy </p> 
                                        <ChevronRight className="text-white"/>
                                    </motion.button>
                                </a>

                                <a href="https://www.etsy.com/ca/shop/ElDiLeatherGoods?ref=shop_profile&listing_id=1125162739#reviews" target="_blank" className="flex flex-row items-center justify-center">
                                    <motion.button className="flex flex-row items-center justify-center bg-stone-800 rounded-full hover:bg-stone-950 cursor-pointer
                                        2xl:px-5 2xl:py-2 md:px-4 sm:px-3 sm:py-1
                                    "
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                    > 
                                        <p className="font-serif font-bold text-white
                                            text-xs sm:text-xs md:text-sm lg:text-base xl:text-base 2xl-text-base
                                        "> See Reviews </p> 
                                        <ChevronRight className="text-white"/>
                                    </motion.button>
                                </a>
                                
                            </div>

                            <div className="flex flex-col gap-2 justify-center bg-neutral-100 rounded-lg
                                2xl:p-4 xl:p-3 lg:p-2.5 md:p-2 sm:p-1.5 p-1
                            ">

                                <p className="text-gray-950 font-serif font-bold
                                    xl:text-lg lg:text-base md:text-sm
                                "> Product type </p>

                                <div className="flex flex-col gap-2">
                                    {types.map(productType => (
                                        <label key={productType} className="flex flex-col items-center cursor-pointer gap-2">

                                            <motion.button className={`hover:bg-gray-950 hover:text-white hover:border-gray-950 font-serif font-bold px-5 py-1 w-full rounded-full border-2 ${typeFilter === productType ? "bg-stone-800 text-white border-stone-800" : "text-gray-700"}
                                                xl:text-base md:text-sm text-xs
                                            `}
                                                onClick={() => setTypeFilter(productType)}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                {productType}
                                            </motion.button>
                                        </label>
                                    ))}
                                </div>
                                
                                
                            </div>

                            
                        </div>
                        
                        <div className="grid grid-cols-3
                            2xl:gap-5 xl:gap-4 lg:gap-2.5
                        ">
                            {filteredProducts.map(product => (
                                <Link key={product.id} href={`/products/${product.slug}`}>
                                    <button
                                        onClick={() => handleAddToRecents(product)}
                                        className="hover:cursor-pointer"
                                    >
                                    <motion.div className="flex flex-col items-center justify-center gap-2 hover:bg-white hover:rounded-xl hover:shadow-xl
                                        xl:p-3 lg:p-2.5 md:p-2 sm:p-1.5
                                    "
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <img src={product.pics[0].pic} className="shadow-xl rounded-md" width={getPicDimensions()} height={getPicDimensions()}/>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="text-gray-950 font-serif whitespace-normal break-words
                                                xl:text-base md:text-sm text-xs
                                            "> {product.name} </p>
                                            
                                            {product.price === product.originalPrice ? 
                                                <p className="text-gray-950 font-serif font-bold text-center
                                                    lg:text-sm text-xs
                                                "> CA{product.price} </p>
                                                :
                                                <p className="text-gray-950 font-serif font-bold text-center
                                                    lg:text-sm text-xs
                                                "> CA<span className="line-through text-green-700">{product.originalPrice}</span> {product.price} </p>
                                            
                                            }

                                            
                                            
                                            {/* <div className="bg-green-400 rounded-full flex flex-row items-center justify-center w-fit px-2">
                                                <p className="text-black text-sm font-serif text-center"> FREE Delivery </p>
                                            </div> */}
                                        </div>
                                    </motion.div>
                                    </button>
                                </Link>
                            ))}
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

