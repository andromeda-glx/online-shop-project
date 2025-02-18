import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
export default function TopHeader({ phoneNumber, offer }) {
    return (
        <header className="bg-main-theme text-white grid grid-cols-1 grid-rows-2 gap-y-2 lg:grid-cols-3 lg:grid-rows-1 items-center py-[20px] w-[100%] px-10 justify-center">
            <span className="flex items-center gap-x-2 justify-center lg:justify-start">
                <FontAwesomeIcon icon={faPhone} />
                {phoneNumber}
            </span>
            <span className="flex justify-center">
                <p>{offer} | Shop Now</p>
            </span>
        </header>
    )
}
