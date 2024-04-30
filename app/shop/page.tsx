import React from 'react'
import { ProductsPage } from "@/components";
import { getProducts } from '@/utils';
import {ProductGrid} from '@/components';
const Shop = async () => {

  const products = await getProducts()

  return (
    <main className="flex flex-col  items-center">
            <div className="p-2 md:p-6 w-full flex justify-center max-w-6xl ">
              <div className='bg-[#c28ca5] text-white flex flex-col items-center justify-center text-xs  w-full h-32'>
                  <h1 className='bg-[#c28ca5] font-bold text-lg' >Up to 50% off Summer sales</h1>
                  <p className='bg-[#c28ca5] text-center'>Summer is right around the corner. Find the items you need to ring in the new season!</p>
                  <p className='bg-[#c28ca5] text-center'>(JK this is not a real ecom site just a practice site)</p>
              </div>
            </div>
            
            <ProductGrid
                products={products}
            />
        </main>
  )
}

export default Shop