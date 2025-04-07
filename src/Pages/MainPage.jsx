import Button from "../components/Button";
import featuredImage from "../assets/images/offer-feature-banner.jpg"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products";
import Product from "../components/Product";

export default function MainPage() {
    const productsQuery = useQuery({
        queryKey: ['/products'],
        queryFn: () => getProducts()
    })

    const products = productsQuery.data?.flat();
    console.log(products);

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
                productsQuery.isSuccess &&
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                    {

                        products.map(product =>
                        (
                            <li key={product.id}>
                                <Product product={product} />
                            </li>
                        )
                        )
                    }
                </ul>
            }
        </>
    )
}
