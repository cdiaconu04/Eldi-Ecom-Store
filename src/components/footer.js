export default function Footer() {
    return (
        <div className="w-full bg-zinc-900">
            <div className="max-w-screen-xl mx-auto py-10 flex flex-row gap-30 relative overflow-hidden justify-center items-center">
                <img src="eldilogo.png" width={90} height={90} className="p-3"/>

                <div className="flex flex-row gap-30">
                    <div className="flex flex-col gap-1">
                        <p className="text-white text-lg font-bold font-serif"> Main </p>
                        <a className="text-white text-md font-serif hover:underline" href="/"> Landing </a>
                        <p className="text-white text-md font-serif hover:underline"> About </p>
                        <p className="text-white text-md font-serif hover:underline"> Products </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-white text-lg font-bold font-serif"> Support </p>
                        <a className="text-white text-md font-serif hover:underline" href="/faq"> FAQs </a>
                        <a className="text-white text-md font-serif hover:underline" href="/terms-conditions"> Terms and Conditions </a>
                        <p className="text-white text-md font-serif hover:underline"> Contact us </p>
                    </div>
                </div>

            </div>
        </div>
    )
}