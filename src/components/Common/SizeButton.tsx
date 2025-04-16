type SizeButtonProps = {
    id: string;
    name: string;
    text: string;
    sizeChecked: string;
    setSizeChecked: (name: string) => void;
}

const SizeButton = ({ id, name, text, sizeChecked, setSizeChecked }: SizeButtonProps) => {
    return (
        <div
            className={`w-10 h-10 rounded-lg border border-main-theme flex justify-center items-center ${sizeChecked === name ? "bg-main-theme text-white" : "bg-transparent text-main-theme"} cursor-pointer`}
            onClick={() => setSizeChecked(name)}
        >
            <label htmlFor={id} className="cursor-pointer" >
                {text}
            </label>
            <input
                type="radio"
                name="size"
                id={id}
                className="hidden"
                defaultChecked={sizeChecked === name}
            />
        </div>
    )
}

export default SizeButton;