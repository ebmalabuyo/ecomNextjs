import { Product } from "@/types"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface CartState {
    cart: Product[],
    cartTotal: number,
    addToCart: (item : Product) => void,
    removeFromCart: (item : Product) => void 
}

const remove = (arr : Product[], item : Product) => 
{
    const itemIndex = arr.indexOf(item);
    if (itemIndex > -1){
        arr.splice(itemIndex, 1)
        
    }
    return arr
}

// export const useStore = create<CartState>()((set) => ({
//     cart: [],
//     cartTotal: 0,
//     addToCart: (item) => set((state) => ({cart: [...state.cart, item]})),
//     removeFromCart: (item) => set((state) => ({cart: remove(state.cart, item)}))

// }
// ))

export const useStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            cartTotal: 0,
            addToCart: (item) => set({cart: [...get().cart, item]}),
            removeFromCart: (item) => set((state) => ({
                cart: state.cart.filter(otherItem => otherItem !== item)
            }))
        }
        ), 
        {
            name: 'cartStorage',
            storage: createJSONStorage(() => sessionStorage)
        }
),
)

