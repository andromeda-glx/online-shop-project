import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../../stores/cart";
import useProductModal from "../../stores/product-modal";
import useWishList from "../../stores/wishlist";
import formatPrice from "../../utils/format-price";
import FavoriteIcon from "../Common/FavoriteIcon";
import Rating from "../Common/Rating";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Product as ProductType } from "../../types/product";

// TODO: fix the type of item (currently any)

const Product = ({ id, title, thumbnail, price, rating, description }: ProductType) => {
    // State needs to be initialized in TypeScript
    const [isMouseOver, setIsMouseOver] = useState(false);

    const setProductId = useProductModal((state) => state.setProductId);
    const setProductModalOpen = useProductModal((state) => state.setProductModalOpen);
    const isFavorite = useWishList((state) => state.itemIds.includes(id));
    const isInCart = useCart(state => state.cartItems.some((item: any) => item.id === id));

    return (
        <div
            className="w-[100%] h-[100%] flex flex-col gap-y-3 bg-white p-2 shadow rounded-md hover:scale-101 cursor-pointer transition-transform relative"
            onClick={() => {
                setProductId(id);
                setProductModalOpen(true);
            }}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
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
            {(isMouseOver) &&
                <span
                    className={`absolute inset-0 ${isInCart ? "bg-red-700/15" : "bg-green-700/15"} rounded-md flex justify-center items-center transition-colors`}
                >
                    <span
                        className={`w-15 h-15 bg-gray-100 flex items-center justify-center rounded-full ${isInCart ? "text-red-600" : "text-green-600"} hover:scale-101`}
                    >
                        {isInCart ?
                            <FontAwesomeIcon
                                icon={faTrash} size="xl"
                            /> :
                            <FontAwesomeIcon
                                icon={faCartShopping} size="xl"
                            />
                        }
                    </span>
                </span>
            }
        </div>
    )
}

export default Product;