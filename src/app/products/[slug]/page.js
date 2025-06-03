"use client"
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';
import { motion } from "motion/react"
import { useState } from 'react';
import { useCart } from "../../../context/cart";
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

    const notifySuccess = () => {

    }
    const notifyError = () => {
        
    }



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
                </div>
            </div>
        </div>
    )
}

