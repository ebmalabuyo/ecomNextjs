
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


export const getProductById =async (id : string) => {
    try{
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {cache:'no-store'})
      const data = res.json()
      return data
    }catch(error) {
      console.error(error)
    }
  
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