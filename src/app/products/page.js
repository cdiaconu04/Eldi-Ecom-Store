"use client";
import Navbar from '../../components/navbar';
import { useState } from "react";
import { motion } from "motion/react"
import { ChevronRight } from 'lucide-react';
import { products } from '../../data/products.js';
import { ShoppingCart } from 'lucide-react';
import Link from "next/link";

import { useRecents } from "../../context/recents";

export default function Products() {
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

    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">
                
                <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-10 items-center relative overflow-hidden">
                    
                    <h2 className="text-4xl font-bold font-serif text-black"> Products </h2>

                    <div className="flex flex-row gap-25">

                        <div className="flex flex-col gap-7">

                            <div className="flex flex-col gap-2">
                                <a href="https://www.etsy.com/ca/shop/ElDiLeatherGoods" className="flex flex-row items-center justify-center">
                                    <motion.button className="flex flex-row items-center justify-center px-5 py-2 bg-stone-800 rounded-full hover:bg-stone-950 cursor-pointer"
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                    > 
                                        <p className="font-serif font-bold text-white"> Shop on Etsy </p> 
                                        <ChevronRight className="text-white"/>
                                    </motion.button>
                                </a>

                                <a href="https://www.etsy.com/ca/shop/ElDiLeatherGoods?ref=shop_profile&listing_id=1125162739#reviews" className="flex flex-row items-center justify-center">
                                    <motion.button className="flex flex-row items-center justify-center px-5 py-2 bg-stone-800 rounded-full hover:bg-stone-950 cursor-pointer"
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                    > 
                                        <p className="font-serif font-bold text-white"> See Reviews </p> 
                                        <ChevronRight className="text-white"/>
                                    </motion.button>
                                </a>
                                
                            </div>

                            <div className="flex flex-col gap-2 justify-center bg-neutral-100 p-4 rounded-lg">

                                <p className="text-lg text-gray-950 font-serif font-bold"> Product type </p>

                                <div className="flex flex-col gap-2">
                                    {types.map(productType => (
                                        <label key={productType} className="flex flex-col items-center cursor-pointer gap-2">

                                            <motion.button className={`hover:bg-gray-950 hover:text-white hover:border-gray-950 font-serif font-bold px-5 py-2 w-full rounded-full border-2 ${typeFilter === productType ? "bg-stone-800 text-white border-stone-800" : "text-gray-700"}`}
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
                        
                        <div className="grid grid-cols-3 gap-5">
                            {filteredProducts.map(product => (
                                <Link key={product.id} href={`/products/${product.slug}`}>
                                    <button
                                        onClick={() => handleAddToRecents(product)}
                                        className="hover:cursor-pointer"
                                    >
                                    <motion.div className="flex flex-col items-center justify-center gap-2 hover:bg-white hover:rounded-xl p-3 hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <img src={product.pics[0].pic} className="shadow-xl rounded-md" width={250} height={250}/>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="text-gray-950 text-md font-serif"> {product.name} </p>
                                            <p className="text-gray-950 text-sm font-serif font-bold text-center"> CA{product.price} </p>
                                            
                                            <div className="bg-green-400 rounded-full flex flex-row items-center justify-center w-fit px-2">
                                                <p className="text-black text-sm font-serif text-center"> FREE Delivery </p>
                                            </div>
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

