import { useQuery } from "@tanstack/react-query";
import useProductModal from "../stores/product-modal"
import { getProduct } from "../services/products";
import Rating from "./Rating";
import formattedPrice from "../utils/format-price";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";
import SizeButtons from "./SizeButtons";
import useCart from "../stores/cart";
import formatPrice from "../utils/format-price";
import { useEffect, useState } from "react";
import SpinnerControl from "./SpinnerControl";

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(0);

    const productId = useProductModal(state => state.productId);
    const setProductModalOpen = useProductModal(state => state.setProductModalOpen);

    const addItem = useCart(state => state.actions.addItem);
    const totalPrice = useCart(state => state.invoice.totalPrice);
    const setTotalPrice = useCart(state => state.actions.setTotalPrice);
    const editItem = useCart(state => state.actions.editItem);

    const productQuery = useQuery({
        queryKey: ["/products", productId],
        queryFn: () => getProduct(productId)
    })

    const product = productQuery?.data?.data;

    function handleSubmit(e) {
        e.preventDefault();
        setQuantity(prev => prev + 1);
        addItem({ id: productId, quantity });
        setTotalPrice(totalPrice + (product.price * quantity))
    }

    function handleChange(e) {
        const newValue = Number(e.target.value);
        if (newValue) {
            setQuantity(newValue);
        }
        else {
            setQuantity(0);
        }
    }

    function handleClick(amount) {
        if (amount > 0) {
            setQuantity(prev => prev + amount < 999 ? prev + amount : prev);
        }
        else {
            setQuantity(prev => prev + amount > 0 ? prev + amount : prev);
        }
    }

    useEffect(() => {
        if (productQuery.isSuccess){
            editItem({ id: product.id, quantity })
        }
    }, [quantity]);

    return (
        <div className="flex flex-col h-[100%]">
            <div className="mb-5">
                {
                    productQuery.isLoading ? <Spinner /> :
                        <div>
                            <div className="w-[100%] flex justify-center">
                                <img src={product.thumbnail} alt="" />
                            </div>
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="w-[70%] text-xl">
                                    {product.title}
                                </h2>
                                <h3 className="text-xl">
                                    {formattedPrice(product.price)}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">
                                {product.description}
                            </p>
                            <Rating rating={product.rating} />
                        </div>
                }
            </div>
            <form onSubmit={handleSubmit} className="h-[100%] flex flex-col gap-y-10 py-2">
                {
                    (
                        productQuery.isSuccess &&
                        product?.category === "mens-shirts" ||
                        product?.category === "tops" ||
                        product?.category === "womens-dresses"
                    ) &&
                    <SizeButtons />
                }
                <div className="mt-auto flex flex-col gap-y-5 text-gray-600">
                    <div className="flex items-center gap-x-5 px-5 py-2">
                        <FontAwesomeIcon icon={faTruck} size="xl" />
                        <div>
                            <h4 className="text-black">Delivery Limit</h4>
                            <p>Free delivery within 50 km</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 px-5 py-2">
                        <FontAwesomeIcon icon={faRotateLeft} size="xl" />
                        <div>
                            <h4 className="text-black">
                                Return Policy
                            </h4>
                            <p>
                                Within 5days of product delivery
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-x-5 items-center">
                        {
                            quantity > 0 ?
                                <SpinnerControl
                                    quantity={quantity}
                                    handleChange={handleChange}
                                    handleClick={handleClick}
                                /> :
                                <button
                                    className="text-main-theme border-main-theme border rounded-2xl py-1 px-7 text-sm hover:bg-main-theme hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                                    type="submit"
                                    disabled={!productQuery.isSuccess}
                                >
                                    Add to Cart
                                </button>
                        }
                        <button
                            className="text-sm cursor-pointer"
                            onClick={() => setProductModalOpen(false)}
                            type="button"
                        >
                            Cancel
                        </button>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCartShopping} size="xl" />
                        <span>{formatPrice(totalPrice)}</span>
                    </div>
                </div>
            </form>
        </div>
    )
}
