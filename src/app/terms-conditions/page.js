"use client"
import Navbar from '../../components/navbar';
export default function TermsConditionsPage() {
    return (
        <div>
            <Navbar moved={true}/>
            <div className="w-full bg-stone-200">
                <div className="max-w-screen-xl mx-auto py-30 flex flex-col gap-10 items-center justify-center relative overflow-hidden">
                    <h1 className="text-4xl font-bold font-serif text-gray-950"> Terms & Conditions </h1>

                    <div className="max-w-screen-xl bg-neutral-100 shadow-lg rounded-lg p-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold font-serif text-gray-950">Shipping</h2>
                            <p className="text-gray-800 font-serif">Each product is made to order. Please see the description of the product you are interested in for an estimation of the time to dispatch.</p>
                            <p className="text-gray-800 font-serif">Our products ship via CanadaPost with delivery confirmation. Tracking information is provided directly by the mail carrier service. We are not liable for lost or stolen packages. We are not responsible for additional shipping charges if the packages are returned due to customer absence, customer errors in address or package refusal. We will do our best to accommodate changes, however, we will not be held responsible for any address corrections sent to us AFTER the order has been placed. </p>
                            <p className="text-gray-800 font-serif">For international orders: Please contact the mail carrier service directly for tracking and customs inquiries.</p>
                            <p className="text-gray-800 font-serif">Please note that custom duties and  fees are the responsibility of the buyer.</p>
                        </div>

                        <div className="flex flex-col gap-4"> 
                            <h2 className="text-xl font-bold text-gray-950 font-serif">Returns</h2>

                            <div className="flex flex-col gap-1">
                                <p className="text-gray-800 font-bold font-serif">We gladly accept returns and exchanges.</p>
                                <p className="text-gray-800 font-serif">Please contact us within 14 days of delivery and dispatch the items back within 30 days of delivery.</p>
                            </div>
                            
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-800 font-bold font-serif">The following items cannot be returned or exchanged.</p>
                                <p className="text-gray-800 font-serif">Because of their nature, unless they arrive damaged or defective, we cannot accept returns for the following items:</p>
                                <ul className="list-disc ml-6">
                                    <li className="text-gray-800 font-serif">Custom items</li>
                                    <li className="text-gray-800 font-serif">Personalized items</li>
                                    <li className="text-gray-800 font-serif">Items on sale</li>
                                </ul>  
                            </div>
                            
                            

                            <div className="flex flex-col gap-1">
                                <p className="text-gray-800 font-bold font-serif">Conditions of Return:</p>
                                <ul className="list-disc ml-6">
                                    <li className="text-gray-800 font-serif">The item has to be returned in the original condition and original, unopened, packaging.</li>
                                    <li className="text-gray-800 font-serif">If the returned item is not received in its original condition, the buyer is responsible for any loss in value.</li>
                                    <li className="text-gray-800 font-serif">The buyer is responsible for return postage and tracking costs. </li>
                                </ul>  
                            </div>
                            
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-950 font-serif">Order Cancellations</h2>
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-800 font-bold font-serif">We don’t accept cancellations</p>
                                <p className="text-gray-800 font-serif">Nevertheless, please contact us if you have any problems with your order and we will do our best to assist in finding a solution.</p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-950 font-serif">Disclaimer of Warranties</h2>
                            <p className="text-gray-800 font-serif">Leather is a natural product which will  show natural marks. Full grain leathers, especially, whose top layer is not altered by finishing processes, while made from best available hides, may still present fat lines, insect bites, or scars, which are not considered defects but features that add personality to the final product.</p>
                        </div>

                        
                    </div>

                    
                </div>
            </div>
        </div>
    )
}