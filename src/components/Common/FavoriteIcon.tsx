import useWishList from "../../stores/wishlist";
import HeartIcon from "../Icons/HeartIcon";

type FavoriteIconProps = {
    itemId: string;
    isFavorite: boolean
}

const FavoriteIcon = ({ itemId, isFavorite }: FavoriteIconProps) => {
    const addItem = useWishList(state => state.actions.addItem);
    const removeItem = useWishList(state => state.actions.removeItem);

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
                stroke={isFavorite ? "#F61B5A" : "#999999"}
                fill={isFavorite ? "#F61B5A" : "transparent"}
            />
        </span>
    )
}

export default FavoriteIcon;