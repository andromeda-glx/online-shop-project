/* eslint-disable react/prop-types */
export default function SkeletonProducts({ numberOfContainers }) {
    const skeletonProducts = Array.from({ length: numberOfContainers }, (_, index) => index + 1);

    console.log(skeletonProducts);


    return (
        <ul>
            {
                skeletonProducts.map((skeleton, index) => (
                    <li key={index}>{skeleton}</li>
                ))
            }
        </ul>
    )
}
