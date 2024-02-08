import React from 'react'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { RemoveButton } from '..'
import { FaRegTrashAlt } from "react-icons/fa";

type CartItemProps = {
    item: Product
}

const CartItem = ({item} : CartItemProps) => {
  return (
    <div className='flex gap-4 items-center justify-center'>
        <div className='h-24 w-24 md:h-36 md:w-36 relative'>
         <Image
        src={item.image}
        alt='product image'
        fill
        />
        </div>
        <div className='flex flex-col items-center'>
        <Link href={`/products/${item.id}`} className='w-48'><p className='text-xs text-center'>{item.title}</p></Link>
        <p>${item.price}</p>
        <div className='flex gap-4'>
            <p>Quantity</p>
            <RemoveButton label={<FaRegTrashAlt size={12} className='bg-red-700 text-white'/>} item={item}/>
        </div>
        </div>
    </div>
  )
}

export default CartItem