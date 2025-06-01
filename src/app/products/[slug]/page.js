"use client"
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';

export default function ProductPage() {
    const params = useParams();
    const product = products.find(p => p.slug === params.slug);

    //   TO EDIT LATER:
    if (!product) return <div>Product not found</div>; 
    
    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">

                <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-10 items-center relative overflow-hidden">

                    

                </div>
            </div>

            

        </div>
    )

}

