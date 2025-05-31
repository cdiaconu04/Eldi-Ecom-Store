import Navbar from '../../components/navbar';
export default function Products() {
    return (
        <div>
            <Navbar moved={true} />

            <div className="w-full bg-stone-200">
                
                <div className="max-w-screen-xl mx-auto min-h-screen py-30 flex flex-col gap-10 items-center relative overflow-hidden">
                    
                    <h2 className="text-4xl font-bold font-serif text-black"> Products </h2>

                    <div className="grid grid-cols-3 gap-7 gap-y-15">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <img src="/bayfullsizewallet.png" className="shadow-xl rounded-md" width={250} height={250}/>

                            <div>
                                <p className="text-gray-950 text-md font-serif"> “Bay” Full Size Wallet </p>
                                <p className="text-gray-950 text-sm font-serif font-bold text-center"> CAD $100 </p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col items-center justify-center gap-5">
                            <img src="/bayviewcardswallet.png" className="shadow-xl rounded-md" width={250} height={250}/>

                            <div>
                                <p className="text-gray-950 text-md font-serif"> “Bayview” Cards Wallet </p>
                                <p className="text-gray-950 text-sm font-serif font-bold text-center"> CAD $100 </p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col items-center justify-center gap-5">
                            <img src="/bayviewwatchstrap.png" className="shadow-xl rounded-md" width={250} height={250}/>

                            <div>
                                <p className="text-gray-950 text-md font-serif"> “Bayview” Watch Strap </p>
                                <p className="text-gray-950 text-sm font-serif font-bold text-center"> CAD $100 </p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col items-center justify-center gap-5">
                            <img src="/finchcardswallet.png" className="shadow-xl rounded-md" width={250} height={250}/>

                            <div>
                                <p className="text-gray-950 text-md font-serif"> “Finch” Cards Wallet </p>
                                <p className="text-gray-950 text-sm font-serif font-bold text-center"> CAD $100 </p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col items-center justify-center gap-5">
                            <img src="/westqueengothbracelet.png" className="shadow-xl rounded-md" width={250} height={250}/>

                            <div>
                                <p className="text-gray-950 text-md font-serif"> “West Queen” Goth Cuff Bracelet </p>
                                <p className="text-gray-950 text-sm font-serif font-bold text-center"> CAD $100 </p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

