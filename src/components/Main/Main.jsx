import Feature from "./Feature";
import img from "../../assets/images/offer-feature-banner.jpg"

export default function Main() {
    return (
        <main className="px-[67px] max-w-[1500px] w-[100%] mx-auto bg-gray-100">
            <Feature imgURL={img} />
        </main>
    )
}
