"use client";
import Navbar from '../../components/navbar';
import { useState } from "react";

export default function Products() {
    const [filter, setFilter] = useState("all");

    const allProducts = [
        { id: 1, name: "“Bay” Full Size Wallet", type: "wallets", pic: "/bayfullsizewallet.png", price: "CAD $100" },
        { id: 2, name: "“Bayview” Cards Wallet", type: "wallets", pic: "/bayviewcardswallet.png", price: "CAD $100" },
        { id: 3, name: "“Bayview” Watch Strap", type: "watch-straps", pic: "/bayviewwatchstrap.png", price: "CAD $100" },
        { id: 4, name: "“Finch” Cards Wallet", type: "wallets", pic: "/finchcardswallet.png", price: "CAD $100" },
        { id: 5, name: "“West Queen” Goth Cuff Bracelet", type: "bracelets", pic: "/westqueengothbracelet.png", price: "CAD $100" },
    ];

    const filteredProducts = filter === "all" ? allProducts : allProducts.filter(product => product.type === filter);

    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">
                
                <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-10 items-center relative overflow-hidden">
                    
                    <h2 className="text-4xl font-bold font-serif text-black"> Products </h2>

                    <div className="flex flex-row gap-25">
                        <div className="flex flex-col gap-5">
                            <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2"
                                onClick={() => setFilter("all")}
                            > All </button>
                            <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2"
                                onClick={() => setFilter("bracelets")}
                            > Bracelets </button>
                            <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2"
                                onClick={() => setFilter("wallets")}
                            > Wallets </button>
                            <button className="bg-white font-serif font-bold p-3 hover:bg-neutral-200 rounded-lg text-gray-800 border-solid border-gray-700 border-2"
                                onClick={() => setFilter("watch-straps")}
                            > Watch straps </button>
                        </div>

                        <div className="grid grid-cols-3 gap-7 gap-y-15">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="flex flex-col items-center justify-center gap-5">
                                    <img src={product.pic} className="shadow-xl rounded-md" width={250} height={250}/>
                                    <div>
                                        <p className="text-gray-950 text-md font-serif"> {product.name} </p>
                                        <p className="text-gray-950 text-sm font-serif font-bold text-center"> {product.price} </p>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

