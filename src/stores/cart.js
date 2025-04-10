import { create } from "zustand";

const useCart = create((set, get) => {
  return {
    cartItems: [],
    invoice: {
      totalQuantity: 0,
      totalPrice: 0,
      taxAmount: 0.1,
    },
    actions: {
        /* addItem adds a brand new product in the list */
      addItem: (item) => {
        const doesExist = get().cartItems.some(
          (cartItem) => cartItem.id === item.id
        );

        set((state) => {
          if (doesExist) {
            return {
              cartItems: state.cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                  return {
                    id: cartItem.id,
                    quantity: cartItem.quantity + item.quantity,
                  };
                } else {
                  return cartItem;
                }
              }),
            };
          } else {
            return {
              cartItems: [
                ...state.cartItems,
                { id: item.id, quantity: item.quantity },
              ],
            };
          }
        });
      },
      removeItem: (itemId) => {
        set((state) => {
          return {
            cartItems: state.cartItems.filter((id) => id !== itemId),
          };
        });
      },
      editItem: (item) => {
        set((state) => {
          return {
            cartItems: state.cartItems.map((cartItem) => {
              if (item.id === cartItem.id) {
                return item;
              }
              return cartItem;
            }),
          };
        });
      },
      setTotalPrice: (price) => {
        set((state) => {
          return {
            invoice: {
              ...state.invoice,
              totalPrice: price,
            },
          };
        });
      },
      setTotalQuantity: (quantity) => {
        set((state) => {
          return {
            invoice: {
              ...state.invoice,
              totalQuantity: quantity,
            },
          };
        });
      },
    },
  };
});

export default useCart;
