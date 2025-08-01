"use client"
import Navbar from '../../components/navbar';
export default function FAQ() {

    const questionTextSize = "2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-sm";
    const answerTextSize = "2xl:-text-base xl:text-base lg:text-sm md:text-sm text-xs";

    return (
        <div>
            <Navbar moved={true}/>
            <div className="w-full bg-stone-200">
                <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center relative overflow-hidden
                    2xl:py-30 xl:py-23 lg:py-20 py-20
                    2xl:px-0 xl:px-11 lg:px-20 px-20
                    2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4 sm:gap-2 gap-1
                ">
                    
                    <h1 className="font-bold font-serif text-gray-950
                        2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text:xl
                    "> Frequently Asked Questions </h1>

                    <div className="max-w-screen-xl bg-neutral-100 shadow-lg rounded-lg flex flex-col gap-8
                        2xl:p-8 xl:p-7 lg:p-6 md:p-5 sm:p-4 p-3 
                    ">
                        <div className="flex flex-col gap-4">
                            <h2 className={`${questionTextSize} font-bold text-gray-950 font-serif`}>What is your return policy?</h2>
                            <p className={`${answerTextSize} text-gray-800 font-serif`}>We offer a 30-day return policy on all items. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
                        </div>

                        <div className="flex flex-col gap-4"> 
                            <h2 className={`${questionTextSize} font-bold text-gray-950 font-serif`}>How long does shipping take?</h2>
                            <p className={`${answerTextSize} text-gray-800 font-serif`}>As we create each product by hand when ordered, shipping typically takes 10 business days. You will receive a tracking number once your order has shipped.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className={`${questionTextSize} font-bold text-gray-950 font-serif`}>Do you offer international shipping?</h2>
                            <p className={`${answerTextSize} text-gray-800 font-serif`}>Yes, we offer international shipping to select countries. Please check our shipping policy for more details.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className={`${questionTextSize} font-bold text-gray-950 font-serif`}>How can I contact customer support?</h2>
                            <p className={`${answerTextSize} text-gray-800 font-serif`}>You can contact our customer support team via email at </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className={`${questionTextSize} font-bold text-gray-950 font-serif`}>What is vegetable tanned leather?</h2>
                            <div className="flex flex-col gap-2">
                                <p className={`${answerTextSize} text-gray-800 font-serif`}>Vegetable tanned leather is obtained from raw animal skins soaked in a mixture of shredded plants, that are rich in tannins, and water. Vegetable tanning is the oldest leather tanning process known.</p>
                                <p className={`${answerTextSize} text-gray-800 font-serif`}>During this  tanning process, the tanning substances attach to the leather fibers to create the  vegetable tanned leather which can be used as such or subsequently processed with plant or animal oils to create an even more versatile leather.</p>
                                <p className={`${answerTextSize} text-gray-800 font-serif`}>Since the process only uses natural substances, the vegetable tanned leather is considered an ecological leather,  which does not harm the people or the environment.</p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className={`${questionTextSize} font-bold text-gray-950 font-serif`}>How should I care for my vegetable tanned leather product?</h2>
                            <p className={`${answerTextSize} text-gray-800 font-serif`}>In our atelier we apply a thin layer of mink oil on the finished product. Regular leather creams or mixtures of vegetable, animal, and mineral oils can be used as well to improve the resistance to water and maintain the appearance of your leather product. The oils may slightly darken the original color but, overall, they  add to the rich feel and the beauty of the leather. </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className={`${questionTextSize} font-bold text-gray-950 font-serif`}>Is the vegetable tanned leather a vegan leather?</h2>
                            <div className="flex flex-col gap-2">
                                <p className={`${answerTextSize} text-gray-800 font-serif`}>“Vegan leather” is an artificial product that imitates leather. While these products are more and more refined, they involve the use of  polluting processes and  raw materials derived from petroleum. The vegetable tanned leather is the most ecological product and, unlike the “vegan leather”, it is fully biodegradable.</p>
                                <p className={`${answerTextSize} text-gray-800 font-serif`}> We only source our leathers from North American and European tanneries that process the skins as byproducts of the food industry. </p>
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}
