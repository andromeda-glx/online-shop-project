/* eslint-disable react/no-children-prop */
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopHeader from "../components/Header/TopHeader";
import { useState } from "react";
import Modal from "../components/Modal";
import Checkout from "../components/Checkout/Checkout";
import useProductModal from "../stores/product-modal";
import ProductDetails from "../components/ProductDetails";

export default function MainLayout() {
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
    const setProductModalOpen = useProductModal((state) => state.setProductModalOpen);
    const productModalOpen = useProductModal((state) => state.productModalOpen);

    return (
        <>
            <TopHeader
                offer={"Get 50% Off on Selected Items"}
                phoneNumber={"+91 (720) 090 1896"}
            />
            <Header
                handleCartClick={() => setCheckoutModalOpen(true)}
            />
            <main className="px-[10px] md:px-[67px] max-w-[1500px] w-[100%] mx-auto bg-gray-50 min-h-dvh flex flex-col gap-y-10">
                <Outlet />
            </main>
            <Footer handleClick={() => setCheckoutModalOpen(true)} />
            <Modal
                style={"top-[50%] left-[50%] translate-[-50%] w-[80%] max-w-[1000px] max-h-[70%] overflow"}
                isOpen={checkoutModalOpen}
                onClose={() => setCheckoutModalOpen(false)}
                modalName={"checkout-modal"}
            >
                <Checkout />
            </Modal>
            <Modal
                style={"top-5 bottom-5 left-5 right-5 md:w-[60%] md:max-w-[500px] md:left-auto"}
                isOpen={productModalOpen}
                onClose={() => setProductModalOpen(false)}
                modalName={"product-modal"}
            >
                <ProductDetails />
            </Modal>
        </>
    )
}
