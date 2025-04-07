/* eslint-disable react/no-children-prop */
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopHeader from "../components/Header/TopHeader";
import { useState } from "react";
import Modal from "../components/Modal";
import Checkout from "../components/Checkout";

export default function MainLayout() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <TopHeader
                offer={"Get 50% Off on Selected Items"}
                phoneNumber={"+91 (720) 090 1896"}
            />
            <Header
                handleCartClick={() => setModalOpen(true)}
            />
            <main className="px-[67px] max-w-[1500px] w-[100%] mx-auto bg-gray-100 min-h-dvh flex flex-col gap-y-10">
                <Outlet />
            </main>
            <Footer />
            <Modal
                display={"flex justify-center items-center"}
                children={<Checkout />}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    )
}
