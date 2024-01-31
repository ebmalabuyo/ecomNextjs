
import {create } from "zustand"
import { SortBy, getProducts } from "."
import { Product } from "@/types"

export type State = {
    products: Product[]
}

type Actions = {
    setProducts: () => void
    sortProducts: (type: string) => void
  }

export const useStore = create<State & Actions>((set) => ({
    products: [],
    setProducts: async () => { 
        const gottenProducts = await getProducts()
    set((state) => ({products: state.products.concat(gottenProducts)}))},
    sortProducts: (value: string) => 
        set((state) => ({products: SortBy(value, state.products)}))
}))