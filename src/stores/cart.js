import { create } from "zustand";

const useCart = create((set, get) => {
    return {
        cartItems: [],
        invoice: {
            finalPrice: 0
        },
        actions: {
            addItem: (item) => {
                const doesExist = get().cartItems.some(cartItem => cartItem.id === item.id);
                console.log(item);
                
                console.log(doesExist);
                

                set((state) => {
                    if (doesExist){
                        return {
                            cartItems: state.cartItems.map(cartItem => {
                                if (cartItem.id === item.id){
                                    return {id: cartItem.id, quantity: cartItem.quantity + item.quantity};
                                }
                                else{
                                    return cartItem;
                                }
                            })
                        }
                    }
                    else{
                        return {
                            cartItems: [...state.cartItems, {id: item.id, quantity: item.quantity}]
                        }
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