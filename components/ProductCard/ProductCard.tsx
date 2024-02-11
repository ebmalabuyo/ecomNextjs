import React from 'react'
import { Button } from '..'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({id, title, price, image} : Product) => {
    return (
    <div className=" text-sm flex flex-col items-center h-full justify-between">
        <div  className="relative overflow-hidden w-32 h-40 rounded-md">
        <Image
        src={image}
        alt='product image'
        fill
        />
        </div>
        <Link href={`/products/${id}`} className=''><p className='text-xs text-center'>{title}</p></Link>
        <p>${price}</p>
    </div>
  )
}

export default ProductCard