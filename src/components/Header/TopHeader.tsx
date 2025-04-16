import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TopHeaderProps = {
    phoneNumber: string;
    offer: string;
}

const TopHeader = ({ phoneNumber, offer }: TopHeaderProps) => {
    return (
        <header className="bg-main-theme text-white grid grid-cols-1 grid-rows-2 gap-y-2 lg:grid-cols-3 lg:grid-rows-1 items-center py-[5px] w-[100%] px-10 justify-center">
            <span className="flex items-center gap-x-2 justify-center lg:justify-start">
                <FontAwesomeIcon icon={faPhone} />
                {phoneNumber}
            </span>
            <span className="text-center">
                <p>{offer} | Shop Now</p>
            </span>
        </header>
    )
}

export default TopHeader;