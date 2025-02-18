import Button from "../Button";

/* eslint-disable react/prop-types */
export default function Feature({ imgURL, text, buttonText = "" }) {
    return (
        <div style={{backgroundImage: `url(${imgURL})`}} className={`w-[100%] h-[360px] bg-no-repeat flex justify-center items-center`}>
            <div className="text-center">
                <h2 className="w-[280px] text-3xl text-white m-5">{text}</h2>
                <Button text={buttonText} />
            </div>
        </div>
    )
}
