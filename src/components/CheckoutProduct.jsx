/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import formatPrice from "../utils/format-price";
import Rating from "./Rating";
import SpinnerControl from "./SpinnerControl";
import useCart from "../stores/cart";

export default function CheckoutProduct({ product }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const editItem = useCart((state) => state.actions.editItem);

    const { id, title, thumbnail, price, rating, description } = product;

    function handleClick(amount){
        if (amount > 0){
            setQuantity(prev => prev + amount < 999 ? prev + amount : prev);
        }
        else{
            setQuantity(prev => prev + amount > 0 ? prev + amount : prev);
        }
    }

    function handleChange(e){
        const newValue = Number(e.target.value);
        if (newValue){
            setQuantity(newValue);
        }
        else{
            setQuantity(0);
        }
    }

    useEffect(() => {
        editItem({ id, quantity })
    }, [quantity]);

    return (
        <div className="grid grid-cols-[150px_1fr] items-center mb-2 bg-gray-100 p-2">
            <div className="flex flex-col items-center">
                <img src={thumbnail} alt="" />
                <SpinnerControl quantity={quantity} handleChange={handleChange} handleClick={handleClick} />
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

