import { create } from "zustand";

const useCart = create((set) => {
    return {
        cartItemIds: [],
        addItem: (itemId) => {
            set((state) => {
                return {
                    cartItemIds: [...state.cartItemIds, itemId]
                }
            })
        },
        removeItem: (itemId) => {
            set((state) => {
                return {
                    cartItemIds: state.cartItemIds.filter(id => id !== itemId)
                }
            })
        }
    }
});

export default useCart;