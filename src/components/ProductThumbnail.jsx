/* eslint-disable react/prop-types */
import FavoriteIcon from "./FavoriteIcon";
import Rating from "./Rating";

export default function ProductThumbnail({ imgURL, title, price, description, rating }) {
    return (
        <div className="w-[100%] flex flex-col gap-y-3">
            <div className="w-[100%] relative">
                <img className="w-[100%]" src={imgURL} alt="" />
                <FavoriteIcon />
            </div>
            <div className="flex flex-col items-start gap-y-3">
                <div className="flex justify-between w-[100%]">
                    <h2 className="w-[60%] text-lg">{title}</h2>
                    <p className="text-xl">{price}$</p>
                </div>
                <div className="text-sm text-gray-500">
                    {description}
                </div>
                <div className="text-main-theme">
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    )
}
