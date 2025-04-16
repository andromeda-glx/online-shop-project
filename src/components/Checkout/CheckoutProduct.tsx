import { useEffect, useState } from "react";
import formatPrice from "../../utils/format-price";
import Rating from "../Common/Rating";
import SpinnerControl from "../Common/SpinnerControl";
import useCart from "../../stores/cart";
import { Product } from "../../types/product";

type CheckoutProductProps = {
    product: Product;
}

const CheckoutProduct = ({ product }: CheckoutProductProps) => {
    const [quantity, setQuantity] = useState(product.quantity || 0);

    const editItem = useCart((state) => state.actions.editItem);
    const setTotalPrice = useCart((state) => state.actions.setTotalPrice);

    const { id, title, thumbnail, price, rating, description } = product;

    function handleClick(amount: number) {
        if (amount > 0) {
            setQuantity((prev: number) => prev + amount < 999 ? prev + amount : prev);
        }
        else {
            setQuantity((prev: number) => prev + amount >= 0 ? prev + amount : prev);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = Number(e.target.value);
        if (newValue) {
            setQuantity(newValue);
        }
        else {
            setQuantity(0);
        }
    }

    useEffect(() => {
        if (product) {
            editItem({ id, quantity, price })
            setTotalPrice();
        }
    }, [quantity]);

    return (
        <div className="grid grid-rows-[2fr_1fr] gap-y-5 sm:grid-rows-none sm:grid-cols-[150px_1fr] items-center mb-2 bg-gray-100 p-2">
            <div className="flex flex-col items-center">
                <img src={thumbnail} alt="" />
                <SpinnerControl quantity={quantity} handleChange={handleChange} handleClick={handleClick} />
            </div>
            <div className="flex justify-between gap-x-2">
                <div>
                    <h3 className="clamp-text w-[70%] text-lg">{title}</h3>
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

export default CheckoutProduct;