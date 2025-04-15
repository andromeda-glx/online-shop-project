/* eslint-disable react/prop-types */
import Product from "./Product";

export default function Products({ products }) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10 items-stretch">
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
    )
}
