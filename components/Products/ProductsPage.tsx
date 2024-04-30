import { getProducts } from '@/utils'
import React, { useEffect, useState } from 'react'
import { ProductGrid, SideBar } from '..'






const ProductsPage = async () => {

    const products = await getProducts()



  return (
        <div className="flex flex-col">
       
            <div className='bg-[#c28ca5] text-white flex flex-col items-center justify-center text-xs md:ml-52 h-32'>
                <h1 className='bg-[#c28ca5] font-bold text-lg' >Up to 50% off spring sales</h1>
                <p className='bg-[#030202] text-center'>Spring is right around the corner. Find the items you need to ring in the new season!</p>
                <p className='bg-[#c28ca5] text-center'>(JK this is not a real ecom site just a practice site)</p>
            </div>
            <ProductGrid
                products={products}
            />
        </div>

  )
}

export default ProductsPage