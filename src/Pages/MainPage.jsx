import Button from "../components/Common/Button";
import featuredImage from "../assets/images/offer-feature-banner.jpg"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products";
import Spinner from "../components/Common/Spinner";
import ProductList from "../components/Products/ProductList";
import SkeletonProducts from "../components/Products/SkeletonProducts";

export default function MainPage() {
    const productsQuery = useQuery({
        queryKey: ['/products'],
        queryFn: () => getProducts()
    })

    const products = productsQuery.data?.flat();

    return (
        <>
            <div style={{ backgroundImage: `url(${featuredImage})` }} className={`w-[100%] h-[360px] bg-no-repeat flex justify-center items-center bg-center`}>
                <div className="text-center">
                    <h2 className="w-[280px] text-3xl text-white m-5">
                        Get 50% Off on Selected categories
                    </h2>
                    <Button text={"Shop Now"} />
                </div>
            </div>
            {
                productsQuery.isLoading ? <SkeletonProducts numberOfContainers={12} /> :
                    <ProductList products={products} />

            }
        </>
    )
}
