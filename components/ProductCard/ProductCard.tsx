import React from 'react'
import { Button } from '..'
import { Product } from '@/types'
import Image from 'next/image'
import styles from "./ProductCard.module.css"
import Link from 'next/link'

const ProductCard = ({id, title, price, description, image} : Product) => {
    return (
    <div className="border text-sm flex flex-col items-center h-full justify-between w-full">
        <div  className="relative overflow-hidden w-32 h-40">
        <Image
        src={image}
        alt='product image'
        fill
        />
        </div>
        <Link href={`/products/${id}`}><p>{title}</p></Link>
        <p>${price}</p>
    </div>
  )
}

export default ProductCard