import img from "../assets/images/Rectangle 4.png"
import img2 from "../assets/images/Rectangle 5.png"
import img3 from "../assets/images/Rectangle 6.png"
import img4 from "../assets/images/Rectangle 7.png"
import ProductThumbnail from "./ProductThumbnail"

export default function Products() {
    return (
        <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                <li>
                    <ProductThumbnail
                        imgURL={img}
                        title={"Rounded neck - T shirt 100% Cotton"}
                        price={85}
                        description={"Organic Cotton, Fair Trade quality"}
                        rating={3.0}
                    />
                </li>
                <li>
                    <ProductThumbnail
                        imgURL={img2}
                        title={"Rounded neck - T shirt 100% Cotton"}
                        price={85}
                        description={"Organic Cotton, Fair Trade quality"}
                        rating={1.0}
                    />
                </li>
                <li>
                    <ProductThumbnail
                        imgURL={img3}
                        title={"Rounded neck - T shirt 100% Cotton"}
                        price={85}
                        description={"Organic Cotton, Fair Trade quality"}
                        rating={5.0}
                    />
                </li>
                <li>
                    <ProductThumbnail
                        imgURL={img4}
                        title={"Rounded neck - T shirt 100% Cotton"}
                        price={85}
                        description={"Organic Cotton, Fair Trade quality"}
                        rating={2.0}
                    />
                </li>
            </ul>
        </div>
    )
}
