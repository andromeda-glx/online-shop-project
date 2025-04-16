import { useState } from "react";
import SizeButton from "./SizeButton";

const SizeButtons = () => {
    const [sizeChecked, setSizeChecked] = useState('s');

    return (
        <div className="flex gap-x-3 mt-5">
            <SizeButton
                id="s"
                name="s"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="S"
            />
            <SizeButton
                id="m"
                name="m"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="M"
            />
            <SizeButton
                id="l"
                name="l"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="L"
            />
            <SizeButton
                id="xl"
                name="xl"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="XL"
            />
            <SizeButton
                id="xxl"
                name="xxl"
                sizeChecked={sizeChecked}
                text="XXL"
                setSizeChecked={setSizeChecked}
            />
        </div>
    )
}

export default SizeButtons;