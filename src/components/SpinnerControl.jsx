import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function SpinnerControl({ quantity, setQuantity }) {
    function handleChange(e){
        const newValue = Number(e.target.value);
        if (newValue){
            setQuantity(newValue);
        }
        else{
            setQuantity(0);
        }
    }

    return (
        <div
            className="inline-flex justify-between items-center w-fit border-2 border-secondary-theme rounded-sm"
        >
            <span
                className="bg-secondary-theme w-7 h-7 flex items-center justify-center text-md text-white cursor-pointer hover:opacity-90"
                onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)}
            >
                <FontAwesomeIcon icon={faMinus} />
            </span>
            <input
                className="w-10 h-7 text-center"
                type="number"
                max={999}
                min={1}
                value={quantity}
                onChange={handleChange}
            />
            <span
                className="bg-secondary-theme w-7 h-7 flex items-center justify-center text-md text-white cursor-pointer hover:opacity-90"
                onClick={() => setQuantity(prev => prev < 999 ? prev + 1 : prev)}
            >
                <FontAwesomeIcon icon={faPlus} />
            </span>
        </div>
    )
}
