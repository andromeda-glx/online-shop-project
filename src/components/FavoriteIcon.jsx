import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavoriteIcon() {
    return (
        <span className="absolute top-3 right-3 bg-white w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer hover:scale-103 hover:text-secondary-theme">
            <FontAwesomeIcon icon={faHeart} />
        </span>
    )
}
