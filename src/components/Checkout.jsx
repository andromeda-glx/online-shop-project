import { getProductsById } from "../services/products";
import useCart from "../stores/cart";
import CheckoutProduct from "./CheckoutProduct";

export default function Checkout() {
    const cartItems = useCart((state) => state.cartItems);
    console.log(cartItems);
    

    getProductsById(cartItems.map(item => item.id));

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-5 min-w-[400px]">
            <div className="border border-gray-500 col-span-3 row-span-3 p-5 rounded-lg">
                <h2>Cart Details</h2>
                <div className="">
                    <ul>
                        {cartItems.map(item => <li key={item.id}>{item.id}</li>)}
                    </ul>
                </div>
            </div>
            <div className="border border-gray-500 row-start-4 col-span-3 row-span-2 p-5 rounded-lg">
                <h2>Delivery Information</h2>
            </div>
            <div className="border border-gray-500 col-span-2 row-span-5 p-5 rounded-lg">
                Order Summary
            </div>
        </div>
    )
}
