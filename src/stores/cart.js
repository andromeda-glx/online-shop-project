import { create } from "zustand";

const useCart = create((set, get) => {
  return {
    /* cartItems stores {id, quantity, price} */
    /* price will be renewed when user opens the checkout and fetches the requested products again */
    cartItems: [],
    invoice: {
      totalQuantity: 0,
      totalPrice: 0,
      taxAmount: 0.1,
    },
    actions: {
      /* addItem adds a brand new product in the list */
      addItem: (item) => {
        set((state) => {
          return {
            cartItems: [
              ...state.cartItems,
              { ...item, quantity: 1 },
            ],
          };
        });
      },
      /* edit item is responsible for adding/removing the already existing product's quantity */
      editItem: (item) => {
        set((state) => {
            if (item.quantity === 0){
                return {
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== item.id)
                }
            }
            else{
                return {
                  cartItems: state.cartItems.map(cartItem => {
                    if (item.id === cartItem.id) {
                      return item;
                    }
                    return cartItem;
                  }),
                };
            }
        });
      },
      setTotalPrice: () => {
        set((state) => {
          return {
            invoice: {
              ...state.invoice,
              totalPrice: state.cartItems.reduce((total, item) => (total + (item.price * item.quantity)), 0),
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
