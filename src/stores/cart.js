import { create } from "zustand";

const useCart = create((set) => {
    return {
        cartItems: [],
        invoice: {
            finalPrice: 0
        },
        actions: {
            addItem: (item) => {
                set((state) => {
                    return {
                        cartItems: [...state.cartItems, {id: item.id, quantity: item.quantity}]
                    }
                })
            },
            removeItem: (itemId) => {
                set((state) => {
                    return {
                        cartItems: state.cartItems.filter(id => id !== itemId)
                    }
                })
            }
        }
    }
});

export default useCart;