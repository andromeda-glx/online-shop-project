import { create } from "zustand";

const useProductModal = create((set) => {
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
