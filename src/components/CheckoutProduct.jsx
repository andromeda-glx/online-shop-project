import Rating from "./Rating";

export default function CheckoutProduct() {
    return (
        <div className="grid grid-cols-[50px_1fr_50px]">
            <div className="">
                <img src="" alt="" />
                <span></span> {/* amount */}
            </div>
            <div>
                <h3></h3>
                <p></p>
                <Rating rating={5} />
            </div>
            <div>
                <p>price</p>
            </div>
        </div>
    )
}

