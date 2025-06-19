import Link from "next/link";
export default function Footer() {

    const headerTextSize = "2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm text-sm"
    const linkTextSize = "2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs text-xs"

    return (
        <div className="w-full bg-zinc-900">
            <div className="max-w-screen-xl mx-auto flex flex-row gap-30 relative overflow-hidden justify-center items-center
                2xl:py-10 xl:py-10 lg:py-7 md:py-5 sm:py-5 py-5
            ">
                <img src="/eldilogo.png" width={90} height={90} className="p-3"/>

                <div className="flex flex-row gap-30">
                    <div className="flex flex-col gap-1">
                        <p className={`text-white font-bold font-serif ${headerTextSize}`}> Main </p>
                        <Link className={`text-white font-serif hover:underline ${linkTextSize}`} href="/"> Landing </Link>
                        <Link className={`text-white font-serif hover:underline ${linkTextSize}`} href="/products"> Products </Link>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className={`text-white font-bold font-serif ${headerTextSize}`}> Support </p>
                        <Link className={`text-white font-serif hover:underline ${linkTextSize}`} href="/faq"> FAQs </Link>
                        <Link className={`text-white font-serif hover:underline ${linkTextSize}`} href="/terms-conditions"> Terms and Conditions </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
