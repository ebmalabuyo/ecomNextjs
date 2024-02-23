import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Product } from '@/types'

const ProductItem = ({id, title, price, image} : Product ) => {

    return (
        <>
              <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200   lg:h-80">
                <Image
                  src={image}
                  fill
                  alt={"product image"}
                  className="h-full w-full object-cover  lg:h-full lg:w-full"
                    
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm ">
                    <Link href={`/products/${id}`} >
                      <span className="absolute inset-0" />
                      {title}
                      </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium">{price}</p>
                </div>
            </>
       )
  
}

export default ProductItem