import { Product as ProductType } from "../../types/product";
import Product from "./Product";

type ProductListProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10 items-stretch">
      {products.map((product: ProductType) => (
        <li key={product.id}>
          <Product productDetails={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
