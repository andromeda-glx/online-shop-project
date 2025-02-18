import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopHeader from "../Header/TopHeader";

export default function MainLayout() {
    return (
        <>
            <TopHeader offer={"Get 50% Off on Selected Items"} phoneNumber={"+91 (720) 090 1896"} />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
