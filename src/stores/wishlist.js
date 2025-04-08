import { create } from "zustand";

const useWishList = create((set) => {
    return {
        itemIds: [],
        addItem: (itemId) => {
            set((state) => {
                return {
                    itemIds: [...state.itemIds, itemId]
                }
            })
        },
        removeItem: (itemId) => {
            set((state) => {
                return {
                    itemIds: state.itemIds.filter(item => item !== itemId)
                }
            })
        }
    }
});

export default useWishList;