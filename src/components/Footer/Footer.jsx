import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-main-theme text-white px-5 flex justify-between items-center py-4">
            <div className="flex gap-x-5 items-center">
                <div className="flex gap-x-2 items-center">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>5 Items added to Cart</span>
                </div>
                <div className="flex gap-x-2 items-center">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>2 Items in the Wish list</span>
                </div>
            </div>
            <div className="">
                <div className="flex gap-x-2 items-center">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>$85</span>
                </div>
            </div>
        </footer>
    )
}
