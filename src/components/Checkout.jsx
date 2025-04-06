export default function Checkout() {
    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-5 min-w-[400px]">
            <div className="border border-gray-500 col-span-3 row-span-3">
                <h2>Cart Details</h2>
            </div>
            <div className="border border-gray-500 row-start-4 col-span-3 row-span-2">
                <h2>Delivery Information</h2>
            </div>
            <div className="border border-gray-500 col-span-2 row-span-5">
                Order Summary
            </div>
        </div>
    )
}
