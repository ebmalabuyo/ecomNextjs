import { getProducts } from '@/utils'
import React, { useEffect, useState } from 'react'
import { ProductGrid, SideBar } from '..'






const ProductsPage = async () => {

    const products = await getProducts()



  return (
        <div className="md:grid  md:grid-col-3 md:gap-2 lg:mt-8">
        {/* <div className="md:w-40 border-blue-700 md:col-start-1 md:col-span-1 md:row-span-4 border ">
            <SideBar
            />
        </div> */}


        <div className=' border border-red-700 md:col-span-2 md:col-start-2'>
            <h1>Products</h1>
        </div>


            <ProductGrid
                products={products}
            />
        </div>

  )
}

export default ProductsPage