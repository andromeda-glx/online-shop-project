import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TitleLogo from "../TitleLogo";

export default function Header() {
    return (
        <header className="px-[67px] bg-gray-100 flex justify-between items-center h-[55px] max-w-[1500px] mx-auto">
            <div className="flex items-center gap-x-6">
                <TitleLogo />
                <Navbar />
            </div>
            <div className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Account</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Cart</span>
                </div>
            </div>
        </header>
    )
}
