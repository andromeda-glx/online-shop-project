/* eslint-disable react/prop-types */
import FavoriteIcon from "./FavoriteIcon";
import Rating from "./Rating";

export default function Product({product, handleClick}) {
    const {id, title, thumbnail, price, rating, description} = product;
    return (
        <div className="w-[100%] flex flex-col gap-y-3" onClick={() => handleClick(id)}>
            <div className="w-[100%] relative hover:scale-101 cursor-pointer transition-transform">
                <img className="w-[100%]" src={thumbnail} alt="" />
                <FavoriteIcon />
            </div>
            <div className="flex flex-col items-start gap-y-3">
                <div className="flex justify-between w-[100%]">
                    <h2 className="clamp-text w-[60%] text-lg">{title}</h2>
                    <p className="text-xl">{price}$</p>
                </div>
                <div className="clamp-text text-sm text-gray-500">
                    {description}
                </div>
                <div className="text-main-theme">
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    )
}
