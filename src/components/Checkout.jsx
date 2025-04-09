import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../services/products";
import useCart from "../stores/cart";
import CheckoutProduct from "./CheckoutProduct";
import Spinner from "./Spinner";
import formatPrice from "../utils/format-price";

export default function Checkout() {
    const cartItems = useCart((state) => state.cartItems);
    const taxAmount = useCart(state => state.invoice.taxAmount);

    const productIds = cartItems.map(item => item.id);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const productsByIdQuery = useQuery({
        queryKey: ['/products-by-id'],
        queryFn: () => getProductsById(productIds),
        staleTime: 0
    })

    const products = productsByIdQuery?.data?.map((product, index) => ({ ...product, quantity: cartItems[index].quantity }));

    const totalPrice = products?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-5 max-h-[100%]">
            <div className="border border-gray-500 col-span-3 row-span-3 p-5 rounded-lg overflow-y-auto h-[250px]">
                <h2 className="text-xl">Cart Details</h2>
                {productsByIdQuery.isLoading ? <Spinner /> :
                    <div className="h-[100%] mt-2">
                        <ul className="flex flex-col gap-y-2">
                            {products.map(product => (
                                <li key={product.id}>
                                    <CheckoutProduct product={product} />
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
            <div className="border border-gray-500 row-start-4 col-span-3 row-span-2 p-5 rounded-lg">
                <h2 className="text-xl mb-2">
                    Delivery Information
                </h2>
                <address className="text-gray-500">
                    John Smith<br />
                    New Zealand<br />
                    <br />
                    CrossRoad - Po25698<br />
                    United States
                </address>
            </div>
            <div className="border border-gray-500 col-span-2 row-span-5 p-5 rounded-lg">
                <h2 className="text-xl">
                    Order Summary
                </h2>
                <div>
                    <div>
                        <h3>Products Added</h3>
                        <p>{totalQuantity}</p>
                    </div>
                    <div>
                        <h3>Total Price</h3>
                        <p>{formatPrice(totalPrice)}</p>
                    </div>
                    <div>
                        <h3>Tax Percentage</h3>
                        <p>{taxAmount * 100}%</p>
                    </div>
                    <div>
                        <h3>Final Price</h3>
                        <p>{formatPrice(totalPrice * (1 + taxAmount))}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
