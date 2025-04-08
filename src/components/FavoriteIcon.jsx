/* eslint-disable react/prop-types */
import useWishList from "../stores/wishlist";
import HeartIcon from "./Icons/HeartIcon";

export default function FavoriteIcon({ itemId, isFavorite }) {
    const {addItem, removeItem} = useWishList(state => state);

    return (
        <span
            className="absolute top-3 right-3 bg-white w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer hover:scale-105 transition-transform pointer-events-auto z-5"
            onClick={(e) => {
                isFavorite ? removeItem(itemId) : addItem(itemId);
                e.stopPropagation();
            }
            }
        >
            <HeartIcon
                stroke={"#999999"}
                fill={isFavorite ? "#ff0000" : "transparent"}
                hover={"#F61B5A"}
            />
        </span>
    )
}
