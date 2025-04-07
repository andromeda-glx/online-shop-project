import { useQuery } from "@tanstack/react-query";
import useProductModal from "../stores/product-modal"
import { getProduct } from "../services/products";
import Rating from "./Rating";

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
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <Rating rating={product.rating} />
                </>
            }
        </div>
    )
}
