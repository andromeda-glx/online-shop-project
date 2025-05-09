import Skeleton from "./Skeleton";

type SkeletonProductsProps = {
  numberOfContainers: number;
};

const SkeletonProducts = ({ numberOfContainers }: SkeletonProductsProps) => {
  const skeletonProducts = Array.from(
    { length: numberOfContainers },
    (_, index) => index + 1
  );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10 items-stretch">
      {skeletonProducts.map((skeleton, index) => (
        <li key={index}>
          <Skeleton />
        </li>
      ))}
    </ul>
  );
};

export default SkeletonProducts;
