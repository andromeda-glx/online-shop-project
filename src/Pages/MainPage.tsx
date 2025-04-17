import Button from "../components/Common/Button";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products";
import ProductList from "../components/Products/ProductList";
import SkeletonProducts from "../components/Products/SkeletonProducts";

const MainPage = () => {
    const productsQuery = useQuery({
        queryKey: ["/products"],
        queryFn: () => getProducts(),
    });

    // products should be of type Product[] but if productsQuery.data is undefined, we need to assign it to an empty array so the ProductList component can handle it properly.
    const products = productsQuery.data?.flat() || [];

    return (
        <>
            <div
                style={{
                    backgroundImage: `url("/online-shop-project/images/offer-feature-banner.jpg")`,
                }}
                className={`w-[100%] h-[360px] bg-no-repeat flex justify-center items-center bg-center`}
            >
                <div className="text-center">
                    <h2 className="w-[280px] text-3xl text-white m-5">
                        Get 50% Off on Selected categories
                    </h2>
                    <Button text={"Shop Now"} />
                </div>
            </div>
            {productsQuery.isLoading ? (
                <SkeletonProducts numberOfContainers={12} />
            ) : (
                <ProductList products={products} />
            )}
        </>
    );
};

export default MainPage;
