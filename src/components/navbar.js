export default function Navbar() {
    return (
        <nav className="bg-stone-900 fixed top-0 left-0 w-full z-50 bg-opacity-100">
            <div className="flex items-center justify-between mx-auto px-4 py-2">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <p className="text-white font-bold font-serif text-xl"> eldi </p>
                </a>

                <div>
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="flex flex-col">
                            <a className="group block py-4 px-4 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300"> About </a>
                        </li>
                        <li className="flex flex-col">
                            <a className="group block py-4 px-4 text-white font-bold rounded-sm border-0 hover:text-white transition duration-300"> Products </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

