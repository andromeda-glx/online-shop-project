import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../../services/products";
import useCart from "../../stores/cart";
import CheckoutProduct from "./CheckoutProduct";
import Spinner from "../Common/Spinner";
import formatPrice from "../../utils/format-price";
import CheckoutInvoice from "./CheckoutInvoice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";

// TODO: fix the type of item (currently any)

const Checkout = () => {
  const cartItems = useCart((state) => state.cartItems);
  const taxAmount = useCart((state) => state.invoice.taxAmount);
  const setQuantity = useCart((state) => state.actions.setTotalQuantity);
  const totalPrice = useCart((state) => state.invoice.totalPrice);

  const productsByIdQuery = useQuery({
    queryKey: ["/products-by-id"],
    queryFn: () => getProductsById(productIds),
    staleTime: 0,
  });

  const products = productsByIdQuery?.data?.map((product) => {
    const foundProduct = cartItems.find((item: any) => product.id === item.id);

    if (foundProduct) {
      return { ...product, quantity: foundProduct.quantity };
    }
  });

  const productIds = cartItems.map((item: any) => item.id);
  const totalQuantity = cartItems.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );
  setQuantity(totalQuantity);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-5 max-h-[100%] mt-10">
      <div className="border border-gray-500 lg:col-span-3 lg:row-span-3 p-4 rounded-lg overflow-y-auto max-h-[350px]">
        <h2 className="text-xl">Cart Details</h2>
        {productsByIdQuery.isLoading ? (
          <Spinner />
        ) : (
          <div className="h-[100%] mt-2">
            <ul className="flex flex-col gap-y-2">
              {products?.map(
                (product) =>
                  product && (
                    <li key={product.id}>
                      <CheckoutProduct product={product} />
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="border border-gray-500 lg:row-start-4 lg:col-span-3 lg:row-span-2 p-4 rounded-lg">
        <h2 className="text-xl mb-2">Delivery Information</h2>
        <address className="text-gray-500">
          John Smith
          <br />
          New Zealand
          <br />
          <br />
          CrossRoad - Po25698
          <br />
          United States
        </address>
      </div>
      <div className="border border-gray-500 lg:col-span-2 lg:row-span-5 rounded-lg flex flex-col">
        <h2 className="text-xl mb-5 m-4">Order Summary</h2>
        <div className="flex flex-col gap-y-3 m-4">
          <CheckoutInvoice title={"Products Added"} value={totalQuantity} />
          <CheckoutInvoice
            title={"TotalPrice"}
            value={formatPrice(totalPrice)}
          />
          <CheckoutInvoice
            title={"Tax Percentage"}
            value={`${taxAmount * 100}%`}
          />
          <CheckoutInvoice
            title={"Final Price"}
            value={formatPrice(totalPrice * (1 + taxAmount))}
            valueStyles={"text-2xl font-bold text-secondary-theme"}
          />
        </div>
        <div className="mt-auto flex flex-col gap-y-5 bg-gray-200 text-gray-500 rounded-b-lg">
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
              <h4 className="text-black">Return Policy</h4>
              <p>Within 5days of product delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
