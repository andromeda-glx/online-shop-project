import { useQuery } from "@tanstack/react-query";
import useProductModal from "../stores/product-modal"
import { getProduct } from "../services/products";
import Rating from "./Rating";
import formattedPrice from "../utils/format-price";

export default function ProductDetails() {
    const productId = useProductModal(state => state.productId);

    const productQuery = useQuery({
        queryKey: ["/products", productId],
        queryFn: () => getProduct(productId)
    })

    const product = productQuery?.data?.data;

    return (
        <div>
            {
                productQuery.isSuccess &&
                <>
                    <div>
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="w-[70%] text-xl">
                            {product.title}
                        </h2>
                        <h3>
                            {formattedPrice(product.price)}
                        </h3>
                    </div>
                    <p className="text-sm text-gray-500">
                        {product.description}
                    </p>
                    <Rating rating={product.rating} />
                </>
            }
        </div>
    )
}
