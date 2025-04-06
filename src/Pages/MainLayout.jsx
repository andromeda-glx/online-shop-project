import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopHeader from "../components/Header/TopHeader";

export default function MainLayout() {
    return (
        <>
            <TopHeader offer={"Get 50% Off on Selected Items"} phoneNumber={"+91 (720) 090 1896"} />
            <Header />
            <main className="px-[67px] max-w-[1500px] w-[100%] mx-auto bg-gray-100 min-h-dvh flex flex-col gap-y-10">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
