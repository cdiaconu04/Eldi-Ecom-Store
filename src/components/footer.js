export default function Footer() {
    return (
        <div className="w-full bg-zinc-900">
            <div className="max-w-screen-xl mx-auto py-14 flex flex-row gap-30 relative overflow-hidden justify-center items-center">
                <img src="eldilogo.png" width={90} height={90} className="p-3"/>

                <div className="flex flex-row gap-30">
                    <div className="flex flex-col gap-1">
                        <p className="text-white text-lg font-bold font-serif"> Main </p>
                        <p className="text-white text-md font-serif"> About </p>
                        <p className="text-white text-md font-serif"> Products </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-white text-lg font-bold font-serif"> Support </p>
                        <p className="text-white text-md font-serif"> FAQs </p>
                        <p className="text-white text-md font-serif"> Terms and Conditions </p>
                        <p className="text-white text-md font-serif"> Contact us </p>
                    </div>
                </div>

            </div>
        </div>
    )
}