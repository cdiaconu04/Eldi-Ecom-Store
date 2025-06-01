"use client"
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';
import { motion } from "motion/react"
import { useState } from 'react';

export default function ProductPage() {
    const params = useParams();
    const product = products.find(p => p.slug === params.slug);

    const [curPic, setCurPic] = useState(product.pics[0].pic);
    const [curPicId, setCurPicId] = useState(product.pics[0].id);


    //   TO EDIT LATER:
    if (!product) return <div>Product not found</div>; 
    
    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">
                <div className="max-w-screen-xl mx-auto min-h-screen py-40 flex flex-col gap-10 items-center relative overflow-hidden">
                    <div className="flex flex-row gap-30 justify-center">

                        {/* Picture carrousel */}
                        <div className="flex flex-row gap-5 justify-normal">

                            <div className="flex flex-col gap-2 justify-start">
                                {product.pics.map((pic) => (
                                    <button key={pic.id} onClick={() => {setCurPic(pic.pic); setCurPicId(pic.id)}}>
                                        <img src={pic.pic} width={170} className={`rounded-md ${curPicId === pic.id ? "" : "opacity-60 hover:opacity-80"}`}/>
                                    </button>
                                    
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

                            <div className="flex flex-col gap-3 w-fit">
                                <motion.button className="bg-neutral-800 rounded-full text-white text-lg font-serif px-20 py-3 hover:bg-neutral-950"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                > Buy </motion.button>
                                <motion.button className="bg-neutral-800 rounded-full text-white text-lg font-serif px-20 py-3 hover:bg-neutral-950"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                > Add to Cart </motion.button>
                                <motion.button className="bg-gray-800 rounded-full text-white text-lg font-serif px-20 py-3 hover:bg-gray-950"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                > View on Etsy </motion.button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

