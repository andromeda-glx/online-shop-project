/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../stores/cart";
import useProductModal from "../stores/product-modal";
import useWishList from "../stores/wishlist";
import formatPrice from "../utils/format-price";
import FavoriteIcon from "./FavoriteIcon";
import Rating from "./Rating";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Product({ product }) {
    const { id, title, thumbnail, price, rating, description } = product;

    const setProductId = useProductModal((state) => state.setProductId);
    const setProductModalOpen = useProductModal((state) => state.setProductModalOpen);
    const isFavorite = useWishList((state) => state.itemIds.includes(id));
    const isInCart = useCart(state => state.cartItems.some(item => item.id === id));

    return (
        <div
            className="w-[100%] h-[100%] flex flex-col gap-y-3 bg-white p-2 shadow rounded-md hover:scale-101 cursor-pointer transition-transform relative"
            onClick={() => {
                setProductId(id);
                setProductModalOpen(true);
            }}
        >
            <div className="w-[100%] relative">
                <img className="w-[100%] aspect-square" src={thumbnail} alt={title} />
                <FavoriteIcon itemId={id} isFavorite={isFavorite} />
            </div>
            <div className="flex flex-col h-[100%] items-start gap-y-3">
                <div className="flex justify-between w-[100%]">
                    <h2 className="clamp-text w-[60%] text-lg">{title}</h2>
                    <p className="text-xl">{formatPrice(price)}</p>
                </div>
                <div className="clamp-text text-sm text-gray-500">
                    {description}
                </div>
                <div className="mt-auto">
                    <Rating rating={rating} />
                </div>
            </div>
            {isInCart &&
                <span className="absolute inset-0 bg-green-700/30 rounded-md flex justify-center items-center">
                <span className="w-15 h-15 bg-gray-100 flex items-center justify-center rounded-full text-green-600">
                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                </span>
            </span>
            }
        </div>
    )
}
