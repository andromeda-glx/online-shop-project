/* eslint-disable react/prop-types */
import formatPrice from "../utils/format-price";
import Rating from "./Rating";

export default function CheckoutProduct({ product }) {
    const { id, title, thumbnail, price, rating, description } = product;
    return (
        <div className="grid grid-cols-[50px_1fr_50px]">
            <div className="">
                <img src={thumbnail} alt="" />
                <span></span> {/* amount */}
            </div>
            <div className="flex justify-between">
                <div>
                    <h3 className="clamp-text w-[60%] text-lg">{title}</h3>
                    <p className="clamp-text text-sm text-gray-500">{description}</p>
                    <Rating rating={rating} />
                </div>
                <div>
                    <p>{formatPrice(price)}</p>
                </div>
            </div>
        </div>
    )
}

