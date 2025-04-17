import { create } from "zustand";

interface WishlistState {
    itemIds: string[];
    actions: {
        addItem: (itemId: string) => void;
        removeItem: (itemId: string) => void;
    }
}

const useWishList = create<WishlistState>((set) => {
    return {
        itemIds: [],
        actions: {
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
    }
});

export default useWishList;