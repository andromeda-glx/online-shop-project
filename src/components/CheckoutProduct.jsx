/* eslint-disable react/prop-types */
import formatPrice from "../utils/format-price";
import Rating from "./Rating";

export default function CheckoutProduct({ product }) {
    const { id, title, thumbnail, price, rating, description, quantity } = product;
    return (
        <div className="grid grid-cols-[150px_1fr] items-center">
            <div className="relative">
                <img src={thumbnail} alt="" />
                <span className="absolute bg-secondary-theme w-9 h-9 bottom-5 right-5 rounded-full flex justify-center items-center text-white text-lg">
                    {quantity}
                </span>
            </div>
            <div className="flex justify-between gap-x-2">
                <div>
                    <h3 className="clamp-text w-[60%] text-lg">{title}</h3>
                    <p className="clamp-text text-sm text-gray-500">{description}</p>
                    <Rating rating={rating} />
                </div>
                <div>
                    <p className="font-semibold">{formatPrice(price)}</p>
                </div>
            </div>
        </div>
    )
}

