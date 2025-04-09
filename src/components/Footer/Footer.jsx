import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../../stores/cart";
import useWishList from "../../stores/wishlist";
import formatPrice from "../../utils/format-price";

export default function Footer() {
    const cartItems = useCart(state => state.cartItems);
    const totalPrice = useCart(state => state.invoice.totalPrice);
    const numberOfItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const numberOfFavorites = useWishList(state => state.itemIds.length);

    return (
        <footer className="bg-main-theme text-white px-5 flex justify-between items-center py-4">
            <div className="flex sm:flex-row flex-col gap-x-5 items-center">
                <div className="flex gap-x-2 items-center">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>{numberOfItems} Items added to Cart</span>
                </div>
                <div className="flex gap-x-2 items-center">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>{numberOfFavorites} Items in the Wish list</span>
                </div>
            </div>
            <div className="">
                <div className="flex gap-x-2 items-center">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>{formatPrice(totalPrice)}</span>
                </div>
            </div>
        </footer>
    )
}
