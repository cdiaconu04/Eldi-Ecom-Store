"use client";
import Navbar from '../../components/navbar';
import { useState } from "react";
import { motion } from "motion/react"
import { ChevronRight } from 'lucide-react';

export default function Products() {
    const [typeFilter, setTypeFilter] = useState("All");

    const allProducts = [
        { id: 1, name: "“Bay” Full Size Wallet", type: "Wallets", pic: "/bayfullsizewallet.png", price: "$100.00" },
        { id: 2, name: "“Bayview” Cards Wallet", type: "Wallets", pic: "/bayviewcardswallet.png", price: "$100.00" },
        { id: 3, name: "“Bayview” Watch Strap", type: "Watch straps", pic: "/bayviewwatchstrap.png", price: "$100.00" },
        { id: 4, name: "“Finch” Cards Wallet", type: "Wallets", pic: "/finchcardswallet.png", price: "$100.00" },
        { id: 5, name: "“West Queen” Goth Cuff Bracelet", type: "Bracelets", pic: "/westqueengothbracelet.png", price: "$100.00" },
    ];

    const types = ["All", "Bracelets", "Wallets", "Watch straps"];

    const filteredProducts = typeFilter === "All" ? allProducts : allProducts.filter(product => product.type === typeFilter);

    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">
                
                <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-10 items-center relative overflow-hidden">
                    
                    <h2 className="text-4xl font-bold font-serif text-black"> Products </h2>

                    <div className="flex flex-row gap-25">

                        <div className="flex flex-col gap-10">

                            <div className="flex flex-col">
                                <a href="https://www.etsy.com/ca/shop/ElDiLeatherGoods" className="flex flex-row items-center justify-center">
                                    <motion.button className="flex flex-row items-center justify-center p-5"
                                        whileHover={{ x: 10 }}
                                    > 
                                        <p className="font-serif font-bold text-gray-950 hover:underline"> Shop on Etsy </p> 
                                        <ChevronRight className="text-gray-950"/>
                                    </motion.button>
                                </a>

                                <a href="https://www.etsy.com/ca/shop/ElDiLeatherGoods?ref=shop_profile&listing_id=1125162739#reviews" className="flex flex-row items-center justify-center">
                                    <motion.button className="flex flex-row items-center justify-center p-5"
                                        whileHover={{ x: 10 }}
                                    > 
                                        <p className="font-serif font-bold text-gray-950 hover:underline"> See Reviews </p> 
                                        <ChevronRight className="text-gray-950"/>
                                    </motion.button>
                                </a>
                                
                            </div>

                            <div className="flex flex-col gap-2 justify-center">
                                {/* <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2"
                                    onClick={() => setTypeFilter("All")}
                                > All </button>
                                <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2"
                                    onClick={() => setTypeFilter("Bracelets")}
                                > Bracelets </button>
                                <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2"
                                    onClick={() => setTypeFilter("Wallets")}
                                > Wallets </button>
                                <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2 px-10"
                                    onClick={() => setTypeFilter("Watch straps")}
                                > Watch straps </button> */}

                                <p className="text-md text-gray-950 font-serif font-bold"> Product type </p>

                                <div className="flex flex-col gap-2">
                                    {types.map(productType => (
                                        <label key={productType} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                value={productType}
                                                checked={typeFilter === productType}
                                                onChange={() => setTypeFilter(productType)}
                                                // onClick={() => setTypeFilter(productType)}
                                                className="form-radio text-white bg-black border-white focus:ring-0"
                                            />
                                            <span className="text-md text-gray-800 font-serif"> {productType} </span>
                                        </label>
                                    ))}
                                </div>
                                
                                
                            </div>

                            
                        </div>
                        
                        <div className="grid grid-cols-3 gap-5">
                            {filteredProducts.map(product => (
                                <motion.div key={product.id} className="flex flex-col items-center justify-center gap-2 hover:bg-white hover:rounded-xl p-3 hover:shadow-xl transition-all duration-200"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img src={product.pic} className="shadow-xl rounded-md" width={250} height={250}/>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="text-gray-950 text-md font-serif"> {product.name} </p>
                                        <p className="text-gray-950 text-sm font-serif font-bold text-center"> CA{product.price} </p>
                                        
                                        <div className="bg-green-400 rounded-full flex flex-row items-center justify-center w-fit px-2">
                                            <p className="text-black text-sm font-serif text-center"> FREE Delivery </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

