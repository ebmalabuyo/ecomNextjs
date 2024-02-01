import { Product } from '@/types'
import { getProductById } from '@/utils'
import React from 'react'

interface ProductPageProps {
    params : {
        id: string
    }
}




const page = async ({params} :ProductPageProps) => {
  const id = params.id
  const item : Product = await getProductById(id)

   
  return (
    <div>
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    <p>{item.price}</p>
    </div>
  )
}

export default page