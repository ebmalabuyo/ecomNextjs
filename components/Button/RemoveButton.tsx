'use client'
import { Product } from '@/types'
import { useStore } from '@/utils/store'
import React from 'react'


type RemoveButtonProps = {
  label: any,
  item: Product

}

const RemoveButton = ({label, item} : RemoveButtonProps) => {
  return (
    <button
    className=' border bg-red-700 border-red-600 p-2 rounded'
    type='submit'
    onClick={() => {
      console.log(`added ${item.title}`)
      useStore.getState().removeFromCart(item)
    }
    
    }
    >
    {label}
    </button>
  )
}

export default RemoveButton