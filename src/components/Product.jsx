/* eslint-disable react/prop-types */
import useProductModal from "../stores/product-modal";
import useWishList from "../stores/wishlist";
import formatPrice from "../utils/format-price";
import FavoriteIcon from "./FavoriteIcon";
import Rating from "./Rating";

export default function Product({ product }) {
    const { id, title, thumbnail, price, rating, description } = product;

    const setProductId = useProductModal((state) => state.setProductId);
    const setProductModalOpen = useProductModal((state) => state.setProductModalOpen);
    const isFavorite = useWishList((state) => state.itemIds.includes(id));

    return (
        <div
            className="w-[100%] flex flex-col gap-y-3"
            onClick={() => {
                setProductId(id);
                setProductModalOpen(true);
            }}
        >
            <div className="w-[100%] relative hover:scale-101 cursor-pointer transition-transform">
                <img className="w-[100%]" src={thumbnail} alt="" />
                <FavoriteIcon itemId={id} isFavorite={isFavorite} />
            </div>
            <div className="flex flex-col items-start gap-y-3">
                <div className="flex justify-between w-[100%]">
                    <h2 className="clamp-text w-[60%] text-lg">{title}</h2>
                    <p className="text-xl">{formatPrice(price)}$</p>
                </div>
                <div className="clamp-text text-sm text-gray-500">
                    {description}
                </div>
                <div>
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    )
}
