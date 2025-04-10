/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TitleLogo from "../TitleLogo";
import useCart from "../../stores/cart";

export default function Header({ handleCartClick }) {
    const numberOfItems = useCart(state => state.cartItems.reduce((total, item) => total + item.quantity, 0));

    return (
        <header className="px-[67px] bg-gray-100 flex justify-between items-center max-w-[1500px] mx-auto py-3">
            <div className="flex items-center gap-x-3">
                <TitleLogo />
                <Navbar />
            </div>
            <div className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                    <span className="hidden md:inline-block">Account</span>
                </div>
                <div
                    className={`flex items-center gap-x-2 border-2 ${numberOfItems ? "border-secondary-theme" : "border-transparent"} px-3 py-1 rounded-md cursor-pointer`}
                    onClick={handleCartClick}
                >
                    {
                        numberOfItems ?
                            <span className="bg-secondary-theme w-6 h-6 flex justify-center items-center rounded-sm text-white">
                                {numberOfItems}
                            </span>
                            : undefined
                    }
                    <div className="relative">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </div>
                    <span
                        className="hidden md:inline-block">
                        Cart
                    </span>
                </div>
            </div>
        </header>
    )
}
