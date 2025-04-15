/* eslint-disable react/prop-types */
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({rating}) {
    rating = Math.round(rating);

    function generateStars(){
        const stars = new Array(5);

        for (let i = 0; i < 5; i++){
            if (i < rating){
                stars.push(<FontAwesomeIcon key={i} icon={faStarFull} />);
            }
            else{
                stars.push(<FontAwesomeIcon key={i} icon={faStarEmpty} />);
            }
        }

        return stars;
    }

    return (
        <div className="text-main-theme">
            {generateStars()}
        </div>
    )
}
