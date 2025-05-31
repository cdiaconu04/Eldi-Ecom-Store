"use client"

export default function FAQ() {
    return (
        <div>
            <div className="w-full bg-stone-200">
                <div className="max-w-screen-xl mx-auto py-30 flex flex-col gap-10 items-center justify-center relative overflow-hidden">
                    <h1 className="text-4xl font-bold font-serif text-black"> Frequently Asked Questions </h1>
                    <p className="text-lg text-black font-serif"> Here are some of the most common questions we receive from our customers. </p>

                    <div className="max-w-screen-xl bg-stone-300 shadow-lg rounded-lg p-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-800 font-serif">What is your return policy?</h2>
                            <p className="text-gray-600 font-serif">We offer a 30-day return policy on all items. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
                        </div>

                        <div className="flex flex-col gap-4"> 
                            <h2 className="text-xl font-bold text-gray-800 font-serif">How long does shipping take?</h2>
                            <p className="text-gray-600 font-serif">As we create each product by hand when ordered, shipping typically takes 10 business days. You will receive a tracking number once your order has shipped.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-800 font-serif">Do you offer international shipping?</h2>
                            <p className="text-gray-600 font-serif">Yes, we offer international shipping to select countries. Please check our shipping policy for more details.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-800 font-serif">How can I contact customer support?</h2>
                            <p className="text-gray-600 font-serif">You can contact our customer support team via email at </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-800 font-serif">What is vegetable tanned leather?</h2>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-600 font-serif">Vegetable tanned leather is obtained from raw animal skins soaked in a mixture of shredded plants, that are rich in tannins, and water. Vegetable tanning is the oldest leather tanning process known.</p>
                                <p className="text-gray-600 font-serif">During this  tanning process, the tanning substances attach to the leather fibers to create the  vegetable tanned leather which can be used as such or subsequently processed with plant or animal oils to create an even more versatile leather.</p>
                                <p className="text-gray-600 font-serif">Since the process only uses natural substances, the vegetable tanned leather is considered an ecological leather,  which does not harm the people or the environment.</p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-800 font-serif">How should I care for my vegetable tanned leather product?</h2>
                            <p className="text-gray-600 font-serif">In our atelier we apply a thin layer of mink oil on the finished product. Regular leather creams or mixtures of vegetable, animal, and mineral oils can be used as well to improve the resistance to water and maintain the appearance of your leather product. The oils may slightly darken the original color but, overall, they  add to the rich feel and the beauty of the leather. </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-800 font-serif">Is the vegetable tanned leather a vegan leather?</h2>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-600 font-serif">“Vegan leather” is an artificial product that imitates leather. While these products are more and more refined, they involve the use of  polluting processes and  raw materials derived from petroleum. The vegetable tanned leather is the most ecological product and, unlike the “vegan leather”, it is fully biodegradable.</p>
                                <p className="text-gray-600 font-serif"> We only source our leathers from North American and European tanneries that process the skins as byproducts of the food industry. </p>
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}
