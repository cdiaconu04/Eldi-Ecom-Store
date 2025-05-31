export default function Navbar({moved}) {
    const topStyle = "fixed top-0 left-0 w-full z-50 bg-opacity-100"
    const movedStyle = "fixed top-0 left-0 w-full z-50 bg-stone-900"

    let finalStyle = moved ? movedStyle : topStyle;

    return (
        <nav className={finalStyle}>
            <div className="flex items-center justify-between mx-auto px-4 py-2">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <p className="text-white font-bold font-serif text-5xl p-7"> eldi </p> */}
                    <img src="eldilogo.png" width={110} height={110} className="p-3"/>
                </a>

                <div>
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="flex flex-col">
                            <a className="group block p-4 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300"> About </a>
                        </li>
                        <li className="flex flex-col">
                            <a className="group block p-4 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300"> Products </a>
                        </li>
                        <li className="flex flex-col">
                            <a className="group block p-4 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300"> Contact us </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}