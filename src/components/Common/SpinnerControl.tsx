import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SpinnerControlProps = {
    quantity: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (amount: number) => void;
}

const SpinnerControl = ({ quantity, handleChange, handleClick }: SpinnerControlProps) => {
    return (
        <div
            className="inline-flex justify-between items-center w-fit border-2 border-secondary-theme rounded-sm"
        >
            <span
                className="bg-secondary-theme w-7 h-7 flex items-center justify-center text-md text-white cursor-pointer hover:opacity-90"
                onClick={() => handleClick(-1)}
            >
                <FontAwesomeIcon icon={faMinus} />
            </span>
            <input
                className="w-10 h-7 text-center bg-white"
                type="number"
                max={999}
                min={1}
                value={quantity}
                onChange={handleChange}
            />
            <span
                className="bg-secondary-theme w-7 h-7 flex items-center justify-center text-md text-white cursor-pointer hover:opacity-90"
                onClick={() => handleClick(1)}
            >
                <FontAwesomeIcon icon={faPlus} />
            </span>
        </div>
    )
}

export default SpinnerControl;