
import { Product } from "@/types"

 export const getProducts = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products", {cache:'no-store'})
        const data = res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}




export const SortBy = (value : string, products : Product[]) => {
    if (value === "Lowest Price") {
      return products.sort((a : Product,b : Product) => a.price - b.price)
    }
    else if ( value === "Highest Price") {
       return products.sort((a : Product, b : Product) => b.price - a.price)
    }
    return products
    // else if (value === "Best Rating") {
    //     products.sort((a : Product, b : Product) => b.rating?.rate - a.rating?.rate) 
    // }
}

const sortByProperty = (prop : string, order = 1) => {
    if (order !== -1) order = 1;
    if (prop === '') return (a: Product, b : Product) => {return 0};
    
    if (prop === 'High') {
        prop = "price"
        return (a: Product, b : Product) => {
        if (a[prop] > b[prop]) return -1;
        if (a[prop] < b[prop]) return 1;
        return 0;
      };}


    return (a: Product, b : Product) => {
      if (a[prop] > b[prop]) return 1;
      if (a[prop] < b[prop]) return -1;
      return 0;
    };
  };
  
  export default sortByProperty;