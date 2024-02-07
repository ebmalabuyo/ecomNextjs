import { Product } from '@/types'
import { getProductById } from '@/utils'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'
interface ProductPageProps {
    params : {
        id: string
    }
}




const page = async ({params} :ProductPageProps) => {
  const id = params.id
  const item : Product = await getProductById(id)

  return (
    <div className='flex flex-col items-center p-4 gap-4 md:flex-row justify-center'>
      <div className='h-36 w-36 md:h-52 md:w-52 relative'>
        <Image
        src={item.image}
        fill
        alt='product image'
        ></Image>
      </div>
      <div className='flex flex-col text-sm text-center gap-6 md:w-1/3'>
    <h1 className='font-bold'>{item.title}</h1>
    <p>{item.description}</p>

    <div className='flex items-center justify-center gap-10'>
      <p>${item.price}</p> 
      <Button
      label='Add To Cart'
      item={item}
      />
    </div>
    </div>
    </div>
  )
}

export default page