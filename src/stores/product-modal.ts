import { create } from "zustand";

interface ProductModalState {
    productModalOpen: boolean;
    productId: string | null;
    setProductModalOpen: (isOpen: boolean) => void;
    setProductId: (id: string) => void;
}

const useProductModal = create<ProductModalState>((set) => {
    return {
        productModalOpen: false,
        productId: null,
        setProductModalOpen: (isOpen) => {
            set(() => {
                return {
                    productModalOpen: isOpen,
                };
            });
        },
        setProductId: (id) => {
            set(() => {
                return {
                    productId: id,
                };
            });
        },
    };
});

export default useProductModal;
