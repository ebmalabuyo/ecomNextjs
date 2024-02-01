import { getProducts } from '@/utils'
import React, { useEffect, useState } from 'react'
import { ProductGrid, SideBar } from '..'






const ProductsPage = async () => {

    const products = await getProducts()



  return (
        <div className="flex flex-col">
        <div className='md:p-4 '>
            <h1>Products</h1>
        </div>

            <ProductGrid
                products={products}
            />
        </div>

  )
}

export default ProductsPage