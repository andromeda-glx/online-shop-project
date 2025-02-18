import Products from "../Products";
import Feature from "./Feature";
import img from "/src/assets/images/offer-feature-banner.jpg"

export default function Main() {
    return (
        <main className="px-[67px] max-w-[1500px] w-[100%] mx-auto bg-gray-100 min-h-dvh flex flex-col gap-y-10">
            <Feature imgURL={img} text={"Get 50%  Off on Selected categories"} buttonText="Shop Now" />
            <Products />
        </main>
    )
}
