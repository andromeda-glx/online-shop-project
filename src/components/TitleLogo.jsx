import img from "../assets/logos/logo.png"

export default function TitleLogo() {
    return (
        <div className="flex items-center">
            <div className="w-[55px]">
                <img className="w-[100%]" src={img} alt="" />
            </div>
            <span className="text-2xl text-main-theme font-semibold hidden md:block">
                Minimal 
                <span className="text-secondary-theme">Shop</span>ping
            </span>
        </div>
    )
}
