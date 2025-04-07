import Button from "../components/Button";
import Products from "../components/Products";
import featuredImage from "../assets/images/offer-feature-banner.jpg"

export default function MainPage() {
    

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
            <Products />
        </>
    )
}
