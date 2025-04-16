import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

const Navbar = () => {
    const [dropboxOpen, setDropboxOpen] = useState(false);

    return (
        <>
            <nav className="hidden sm:inline-block">
                <ul className="flex gap-x-6">
                    <li>Categories</li>
                    <li>Deals</li>
                    <li>What&apos;s New</li>
                    <li>Delivery</li>
                </ul>
            </nav>
            <nav className="sm:hidden relative cursor-pointer">
                <span onClick={() => setDropboxOpen(!dropboxOpen)} className="flex gap-x-2 items-center">
                    Categories
                    <span className="text-sm">
                        {dropboxOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </span>
                </span>
                <ul className={`absolute top-10 origin-top transition-transform ${dropboxOpen ? 'scale-100' : 'scale-0'} bg-gray-200 w-[150px]`}>
                    <li className="p-3 hover:bg-gray-300">Categories</li>
                    <li className="p-3 hover:bg-gray-300">Deals</li>
                    <li className="p-3 hover:bg-gray-300">What&apos;s New</li>
                    <li className="p-3 hover:bg-gray-300">Delivery</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;