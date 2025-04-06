import HeartIcon from "./Icons/HeartIcon";

export default function FavoriteIcon() {
    return (
        <span className="absolute top-3 right-3 bg-white w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer hover:scale-105 transition-transform">
            <HeartIcon
                stroke={"#999999"}
                fill={"transparent"}
                hover={"#F61B5A"}
            />
        </span>
    )
}
